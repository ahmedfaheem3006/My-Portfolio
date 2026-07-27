import React from "react";
import MainTitle from "./MainTitle";
import { RiFacebookFill } from "react-icons/ri";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import done from "../../public/animation lottie/lottie.json";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mgogrywj");

  return (
    <div className="my-[150px] relative" id="contact">
      {/* circles to ui */}
      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute w-[22px] blur-md h-[22px] bg-bgGradient top-10 left-10 rounded-full"
      />
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-[5px] w-[14px] h-[14px] bg-gradient-to-r from-violet-500 to-fuchsia-500 bottom-40 right-40 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur-sm w-[16px] h-[16px] bg-green-600 bottom-[-50px] md:bottom-0 left-2 rounded-full"
      />
      <motion.div
        animate={{
          x: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute blur w-[15px] h-[15px] bg-violet-600 top-4 right-5 rounded-full"
      />
      {/* end circles */}
      <MainTitle title={"Contact"} p={"Let’s Work Together"} />
      <div className="container">
        <div className="flex-col relative sm:flex sm:flex-row gap-10 justify-center items-start">
          <div className="flex items-center sm:flex-col justify-center gap-5 sm:gap-[25px] flex-wrap">
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/ahmedfaheem3006"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.2,
                },
              }}
              className="w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#6e5494] dark:hover:bg-[#6e5494]"
              aria-label="GitHub Profile"
            >
              <FaGithub size={30} />
            </motion.a>
            <motion.a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/+201220708037"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              }}
              className="w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#25d366] dark:hover:bg-[#25d366]"
              aria-label="WhatsApp Contact"
            >
              <FaWhatsapp size={30} />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/ahmed-faheem302/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.6,
                },
              }}
              className="w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#0a66c2] dark:hover:bg-[#0a66c2]"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn size={30} />
            </motion.a>
            <motion.a
              href="https://web.facebook.com/ahmed.fahem.12764"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 0.8,
                },
              }}
              className="w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#1877f2] dark:hover:bg-[#1877f2]"
              aria-label="Facebook Profile"
            >
              <RiFacebookFill size={30} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/ahmed_faheem_66/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
                transition: {
                  delay: 1,
                },
              }}
              className="w-[60px] h-[60px] rounded-2xl text-gray-600 dark:text-white bg-[#b6b6b6] dark:bg-[#2E2E2E] grid place-items-center transition-all duration-300 cursor-pointer hover:text-white hover:bg-[#fe3e78] dark:hover:bg-[#fe3e78]"
              aria-label="Instagram Profile"
            >
              <FaInstagram size={30} />
            </motion.a>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: {
                delay: 0.2,
              },
            }}
            className="w-full sm:w-[450px] mt-10 sm:mt-0 relative"
          >
            {state.succeeded ? (
              <div
                aria-live="polite"
                className="flex flex-col items-center justify-center text-center p-8 bg-[#b6b6b6]/30 dark:bg-[#2E2E2E]/40 border border-green-500/30 rounded-2xl shadow-xl backdrop-blur-md transition-all duration-300"
              >
                <Lottie style={{ height: "90px" }} animationData={done} />
                <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mt-2">
                  Thank You!
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-lg mt-1 mb-6">
                  Your message has been sent successfully. I'll get back to you as soon as possible!
                </p>
                <button
                  onClick={reset}
                  className="bg-bgGradient text-white px-6 py-2.5 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all duration-300 cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 relative pb-6"
                aria-live="polite"
              >
                {/* Honeypot Spam Protection */}
                <input
                  type="text"
                  name="_gotcha"
                  style={{ display: "none" }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="sr-only">
                    Full Name
                  </label>
                  <motion.input
                    required
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="text"
                    whileFocus={{
                      boxShadow: "0 0 6px orangered ",
                    }}
                    placeholder="Full Name"
                    className="w-full h-[50px] placeholder:text-gray-600 dark:placeholder:text-gray-400 text-xl bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 font-semibold pl-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email Address
                  </label>
                  <motion.input
                    required
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="email"
                    whileFocus={{
                      boxShadow: "0 0 6px orangered ",
                    }}
                    placeholder="Email"
                    className="w-full h-[50px] text-xl placeholder:text-gray-600 dark:placeholder:text-gray-400 bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 font-semibold pl-1"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="sr-only">
                    Subject
                  </label>
                  <motion.input
                    required
                    autoComplete="off"
                    id="subject"
                    name="subject"
                    type="text"
                    whileFocus={{
                      boxShadow: "0 0 6px orangered ",
                    }}
                    placeholder="Subject"
                    className="w-full h-[50px] text-xl placeholder:text-gray-600 dark:placeholder:text-gray-400 bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <ValidationError
                    prefix="Subject"
                    field="subject"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 font-semibold pl-1"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <motion.textarea
                    required
                    id="message"
                    name="message"
                    minLength={10}
                    maxLength={2000}
                    whileFocus={{
                      boxShadow: "0 0 6px orangered ",
                    }}
                    placeholder="Your Message "
                    className="h-[180px] w-full placeholder:text-gray-600 dark:placeholder:text-gray-400 pt-4 text-xl resize-none bg-[#b6b6b6] dark:bg-[#2E2E2E] outline-none rounded pl-4 caret-orange-600 focus:ring-2 focus:ring-orange-500 transition-all"
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                    className="text-red-500 text-sm mt-1 font-semibold pl-1"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={state.submitting}
                  whileHover={{
                    scale: state.submitting ? 1 : 1.04,
                    transition: {
                      type: "spring",
                      stiffness: 220,
                      damping: 6,
                    },
                  }}
                  className="w-full disabled:opacity-50 bg-bgGradient text-white h-[50px] text-2xl rounded flex items-center justify-center gap-3 transition-all duration-300 font-semibold cursor-pointer disabled:cursor-not-allowed"
                >
                  {state.submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    "Send"
                  )}
                </motion.button>

                {/* Formspree General Submission Errors */}
                <ValidationError
                  errors={state.errors}
                  className="text-red-600 dark:text-red-400 text-center font-bold text-base mt-2"
                />
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
