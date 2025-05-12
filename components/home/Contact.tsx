"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import SectionTitle from "../common/SectionTitle";
import AnimatedDivider from "../common/AnimatedDivider";
import { FormState, ChangeEvent } from "@/types/contact";
import SocialLinks from "../common/SocialIconLink";
import { fadeInLeft, fadeInRight } from "@/utils/animation";

const Contact = () => {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const handleChange = (e: ChangeEvent) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "There was an error when sending a form");
      }

      setSubmitStatus({
        type: "success",
        message: "Thank you!Your message has been successfully sent.",
      });

      setFormState({ name: "", email: "", message: "" });
    } catch (error) {

      console.error("Shipment error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was an error when sending a form",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-10 md:py-20"
    >
      <div className="container mx-auto px-2 md:px-6">
        <SectionTitle
          title="📬 Contact"
          description="Have a question or want to work together? Feel free to reach out
            using the form below or connect with me directly through social
            media."
        />

        <AnimatedDivider />

        <div className="py-10 md:py-20">
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              {...fadeInLeft()}
              aria-labelledby="contact-form-heading"
            >
              <div className="overflow-hidden rounded-2xl border border-neutral-300 bg-white/30 p-4 shadow-xl backdrop-blur-md md:p-8 dark:border-neutral-700 dark:bg-neutral-800/30">
                <h3
                  id="contact-form-heading"
                  className="mb-3 md:mb-6 text-xl md:text-2xl font-semibold text-gray-700 dark:text-gray-50"
                >
                  Send Me a Message
                </h3>

                {submitStatus.type === "success" ? (
                  <div className="rounded-lg bg-green-100 p-4 mb-4 dark:bg-green-900/30">
                    <p className="text-green-700 dark:text-green-300">
                      {submitStatus.message}
                    </p>
                  </div>
                ) : null}

                {submitStatus.type === "error" ? (
                  <div className="rounded-lg bg-red-100 p-4 mb-4 dark:bg-red-900/30">
                    <p className="text-red-700 dark:text-red-300">
                      {submitStatus.message}
                    </p>
                  </div>
                ) : null}

                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-2 md:gap-4"
                >
                  <div className="flex flex-col">
                    <label
                      htmlFor="name"
                      className="mb-1 ml-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="rounded-xl border border-neutral-200 px-2 py-1.5 text-gray-700 shadow-inner focus:ring-2 focus:ring-sky-400 focus:outline-none md:px-4 md:py-3 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-gray-200"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="email"
                      className="mb-1 ml-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="rounded-xl border border-neutral-200 px-2 py-1.5 text-gray-700 shadow-inner focus:ring-2 focus:ring-sky-400 focus:outline-none md:px-4 md:py-3 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-gray-200"
                      required
                    />
                  </div>

                  <div className="flex flex-col">
                    <label
                      htmlFor="message"
                      className="mb-1 ml-2 text-sm text-gray-600 dark:text-gray-300"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="h-24 md:h-36 resize-none rounded-xl border border-neutral-200 px-2 py-1.5 text-gray-700 shadow-inner focus:ring-2 focus:ring-sky-400 focus:outline-none md:px-4 md:py-3 dark:border-neutral-700 dark:bg-neutral-900/50 dark:text-gray-200"
                      required
                    ></textarea>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`mt-2 rounded-full bg-gradient-to-r from-sky-500 to-sky-700 px-3 py-1.5 font-semibold text-white shadow-md transition-all hover:from-sky-300 hover:to-sky-500 md:px-6 md:py-3 ${
                      isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            <motion.div
              {...fadeInRight()}
              aria-labelledby="contact-info-heading"
            >
              <div className="flex h-full flex-col overflow-hidden p-4 md:p-8 shadow-xl rounded-2xl border border-neutral-300 backdrop-blur-md bg-white/30  dark:border-neutral-700 dark:bg-neutral-800/30">
                <h3
                  id="contact-info-heading"
                  className="mb-3 md:mb-6 text-xl font-semibold text-gray-700 md:text-2xl dark:text-gray-50"
                >
                  Connect With Me
                </h3>

                <ul className="mb-4 flex flex-col gap-6 md:mb-8">
                  <li className="flex items-center gap-4">
                    <div className="rounded-full bg-sky-100 p-3 dark:bg-sky-900/30">
                      <FaEnvelope className="text-xl text-sky-700 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Email
                      </p>
                      <Link
                        href="mailto:klebanandrii83@gmail.com"
                        className="text-gray-700 transition-colors hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
                      >
                        klebanandrii83@gmail.com
                      </Link>
                    </div>
                  </li>

                  <li className="flex items-center gap-4">
                    <div className="rounded-full bg-sky-100 p-3 dark:bg-sky-900/30">
                      <FaGithub className="text-xl text-sky-700 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        GitHub
                      </p>
                      <Link
                        href="https://github.com/KlebanAndrii"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 transition-colors hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
                      >
                        github.com/KlebanAndrii
                      </Link>
                    </div>
                  </li>

                  <li className="flex items-center gap-4">
                    <div className="rounded-full bg-sky-100 p-3 dark:bg-sky-900/30">
                      <FaLinkedin className="text-xl text-sky-700 dark:text-sky-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        LinkedIn
                      </p>
                      <Link
                        href="https://www.linkedin.com/in/andrii-kleban-975233235/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 transition-colors hover:text-sky-600 dark:text-gray-200 dark:hover:text-sky-400"
                      >
                        linkedin.com/in/andrii-kleban
                      </Link>
                    </div>
                  </li>
                </ul>

                <div className="mt-auto">
                  <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm md:text-base">
                    I&apos;m currently available for freelance work and open to
                    new opportunities. Let&apos;s build something amazing
                    together!
                  </p>
                  <SocialLinks
                    iconSize="text-2xl"
                    containerSize="p-3"
                    gap="gap-4"
                    position="justify-center"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <AnimatedDivider />
      </div>
    </section>
  );
};

export default Contact;
