import { useState, useEffect } from "react";
import MainTitle from "./MainTitle";
import dataOfCertifications from "./dataOfCertifications";
import { motion, AnimatePresence } from "framer-motion";
import { FaAward, FaExpand, FaTimes } from "react-icons/fa";

const Certification = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  // Duplicate items to ensure smooth seamless infinite scrolling loop
  const duplicatedCertifications = [
    ...dataOfCertifications,
    ...dataOfCertifications,
  ];

  return (
    <div className="py-[100px] relative overflow-hidden" id="Certification">
      {/* Background Decorative Ambient Blur Elements */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-orange-500/10 dark:bg-orange-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-10" />
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-red-500/10 dark:bg-red-600/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 -z-10" />

      <MainTitle
        title={"Certification"}
        p={"Verified credentials, diplomas & professional achievements"}
      />

      {/* Infinite Continuous Auto-Scrolling Slider Wrapper */}
      <div className="cert-marquee-wrapper w-full overflow-hidden py-6 relative">
        {/* Left & Right Subtle Fade Overlays for Smooth Vignette Effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#e5e5e5] dark:from-[#1d1d1d] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#e5e5e5] dark:from-[#1d1d1d] to-transparent z-10 pointer-events-none" />

        {/* Hardware Accelerated Continuous CSS Marquee Track */}
        <div className="cert-marquee-container flex gap-6">
          {duplicatedCertifications.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              onClick={() => setSelectedCert(item)}
              className="group relative w-[300px] sm:w-[340px] bg-white dark:bg-[#161616] rounded-2xl p-4 border border-gray-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 transform hover:-translate-y-1.5 flex-shrink-0 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative overflow-hidden rounded-xl bg-gray-100 dark:bg-neutral-800 h-[185px] w-full border border-gray-200/60 dark:border-white/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-full text-xs sm:text-sm flex items-center gap-2 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <FaExpand className="text-xs" /> Click to Inspect
                    </span>
                  </div>
                  <span className="absolute top-2.5 right-2.5 bg-orange-600/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-md backdrop-blur-sm flex items-center gap-1 max-w-[80%] truncate">
                    <FaAward className="flex-shrink-0" /> <span className="truncate">{item.issuer}</span>
                  </span>
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-col gap-1.5">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-orange-500 transition-colors duration-300 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-4 pt-3 border-t border-gray-200/60 dark:border-white/5 flex items-center justify-between text-xs text-orange-600 dark:text-orange-400 font-semibold">
                <span>Verified Credential</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  View →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Certificate Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9999] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5, bounce: 0.15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-[#151515] border border-gray-300 dark:border-white/10 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative my-8 max-h-[90vh] flex flex-col"
            >
              {/* Header Close button */}
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 bg-black/40 hover:bg-orange-600 text-white transition-all rounded-full p-2.5 text-lg z-30 flex items-center justify-center cursor-pointer shadow-lg backdrop-blur-sm"
              >
                <FaTimes />
              </button>

              {/* Scrollable Modal Content */}
              <div className="overflow-y-auto p-6 sm:p-8 flex flex-col gap-6">
                <div className="relative rounded-2xl overflow-hidden bg-black/5 dark:bg-black/40 border border-gray-200 dark:border-white/10 flex items-center justify-center min-h-[300px] max-h-[60vh]">
                  <img
                    src={selectedCert.image}
                    alt={selectedCert.title}
                    className="max-w-full max-h-[55vh] object-contain rounded-lg shadow-xl"
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
                      {selectedCert.title}
                    </h2>
                    <span className="bg-orange-500/10 text-orange-600 dark:bg-orange-500/10 dark:text-orange-400 font-bold px-3.5 py-1.5 rounded-full text-sm border border-orange-500/20 flex items-center gap-1.5">
                      <FaAward /> {selectedCert.issuer}
                    </span>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed mt-2 border-t border-gray-200 dark:border-white/10 pt-4">
                    {selectedCert.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certification;
