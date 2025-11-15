import { useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/utils/animation";
import { SubmittedData } from "@/types/practical";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(
    null
  );
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setError("All fields are required.");
      return;
    }

    setSubmittedData({ name, email, message } as SubmittedData);
    setError("");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <motion.section
      {...fadeInUp()}
      aria-labelledby="contact-form"
      className="mx-auto w-full rounded-2xl border border-neutral-300 bg-white/30 p-3 lg:p-6 shadow-xl backdrop-blur-md dark:border-neutral-600 dark:bg-neutral-800/30"
    >
      <h2
        id="contact-form"
        className="mb-3 lg:mb-6 text-center text-xl lg:text-2xl font-bold text-gray-700 dark:text-gray-50"
      >
        ✉️ Contact Form
      </h2>

      <form
        aria-labelledby="contact-form"
        onSubmit={handleSubmit}
        className="flex flex-col gap-4"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <motion.input
          {...fadeInUp(0.05)}
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="rounded-lg border border-neutral-300 bg-white/70 px-2 py-1 lg:px-4 lg:py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-700/70 dark:text-gray-100"
        />
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <motion.input
          {...fadeInUp(0.1)}
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded-lg border border-neutral-300 bg-white/70 px-2 py-1 lg:px-4 lg:py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-700/70 dark:text-gray-100"
        />
        <label htmlFor="message" className="sr-only">
          Message
        </label>
        <motion.textarea
          {...fadeInUp(0.2)}
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Message"
          className="h-32 resize-none rounded-lg border border-neutral-300 bg-white/70 px-2 py-1 lg:px-4 lg:py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-sky-500 dark:border-neutral-600 dark:bg-neutral-700/70 dark:text-gray-100"
        />

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-2 rounded-lg bg-gradient-to-r from-sky-500 to-sky-700 px-2 py-1 lg:px-4 lg:py-2 font-semibold text-white shadow-md transition-all hover:from-sky-400 hover:to-sky-600"
        >
          Submit
        </motion.button>
      </form>

      {error && (
        <p
          aria-live="polite"
          className="mt-4 rounded-md bg-red-100 px-4 py-2 text-sm text-red-600 dark:bg-red-200"
        >
          {error}
        </p>
      )}

      {submittedData && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-6 rounded-md bg-green-100 px-4 py-4 text-sm text-gray-800 dark:bg-green-200"
        >
          <h3 className="mb-2 text-lg font-bold">Submitted Information</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </motion.div>
      )}
    </motion.section>
  );
};

export default ContactForm;
