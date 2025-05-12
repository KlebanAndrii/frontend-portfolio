import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { formFields } from "@/data/practical";
import type { FormData, FormErrors } from "@/types/practical";
import { fadeInUp } from "@/utils/animation";

const EmployeeValidationForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    employeeId: "",
    joiningDate: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isFormValid, setIsFormValid] = useState<boolean>(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!/^[A-Za-z\s]{4,}$/.test(formData.name)) {
      newErrors.name =
        "Name must be at least 4 characters long and only contain letters and spaces";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email must be a valid email address";
    }

    if (!/^\d{6}$/.test(formData.employeeId)) {
      newErrors.employeeId = "Employee ID must be exactly 6 digits";
    }

    const joinDate = new Date(formData.joiningDate);
    const today = new Date();
    if (!formData.joiningDate || joinDate > today) {
      newErrors.joiningDate = "Joining Date cannot be in the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsFormValid(validate());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully");
    }
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="employee-validation-form"
      className="mx-auto w-full max-w-xl rounded-2xl border border-neutral-300 bg-white/30 p-3 shadow-xl backdrop-blur-md md:p-6 dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <motion.header {...fadeInUp(0.05)} className="text-center mb-3 md:mb-6">
        <h2
          id="employee-validation-form"
          className="text-xl md:text-2xl font-bold text-gray-700 dark:text-gray-50 mb-2"
        >
          Employee Validation Form
        </h2>
        <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
          Please fill in the details below
        </p>
      </motion.header>

      <form onSubmit={handleSubmit} className="space-y-2 md:space-y-4">
        {formFields.map((field, index) => (
          <motion.div
            key={field.name}
            {...fadeInUp(index * 0.1)}
            className="w-full"
          >
            <label
              htmlFor={field.name}
              className="block text-xs md:text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              {field.label}
            </label>
            <motion.input
              id={field.name}
              {...fadeInUp(index * 0.05)}
              type={field.type}
              name={field.name}
              value={formData[field.name]}
              placeholder={field.placeholder}
              onChange={handleChange}
              aria-invalid={!!errors[field.name]}
              required
              className="w-full text-sm md:text-base rounded-lg border border-neutral-300 dark:border-neutral-600 bg-neutral-100 text-gray-800 px-2 py-1 md:px-4 md:py-2 focus:outline-none focus:ring-2 focus:ring-sky-500 shadow-sm"
            />
            {errors[field.name] && (
              <p className="mt-2 text-sm text-red-500">{errors[field.name]}</p>
            )}
          </motion.div>
        ))}

        <motion.button
          type="submit"
          disabled={!isFormValid}
          whileHover={{ scale: isFormValid ? 1.02 : 1 }}
          whileTap={{ scale: isFormValid ? 0.98 : 1 }}
          className={`w-full px-3 py-1.5 md:px-6 md:py-3 text-white text-sm font-medium rounded-lg shadow transition 
            ${
              isFormValid
                ? "bg-sky-600 hover:bg-sky-500 dark:bg-sky-700 dark:hover:bg-sky-600"
                : "bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-neutral-700 dark:text-neutral-500"
            }`}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default EmployeeValidationForm;
