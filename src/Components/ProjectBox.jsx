import { FaLink, FaCode } from "react-icons/fa";
import { IoIosList } from "react-icons/io";
import { MdFavorite } from "react-icons/md";

const ProjectBox = ({ item, onSelect }) => {
  const handleCardClick = (e) => {
    // If the click is on the GitHub link, prevent opening the details
    if (e.target.closest('.github-link')) {
      return;
    }
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div 
      onClick={handleCardClick}
      className="rounded-2xl relative overflow-hidden flex flex-col h-full hover:-translate-y-2 projectParent group transition-all duration-500 cursor-pointer bg-white/40 dark:bg-[#1E1E1E]/60 border border-gray-300/30 dark:border-white/5 hover:border-orange-500/30 dark:hover:border-orange-500/30 shadow-md hover:shadow-2xl shadow-gray-200/50 dark:shadow-black/30"
    >
      {item.status === "favourite" ? (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-orange-600 to-red-500 text-white rounded-full p-1.5 shadow-lg shadow-red-500/20 flex items-center justify-center">
          <MdFavorite size={18} />
        </div>
      ) : (
        ""
      )}

      {/* Image Container with smooth zoom */}
      <div className="relative overflow-hidden aspect-[16/10] before:transition-all before:duration-500 before:absolute before:inset-0 before:bg-gradient-to-t before:from-black/60 before:to-transparent before:opacity-0 group-hover:before:opacity-100 before:z-10">
        <img
          loading="lazy"
          src={item.projectImage}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
          alt={item.name}
        />
        
        {/* Hover action overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex gap-4 items-center justify-center">
          <div className="bg-gradient-to-r from-orange-600 to-red-500 scale-90 group-hover:scale-100 transition-transform duration-300 delay-75 w-[50px] h-[50px] text-lg grid place-items-center text-white rounded-full shadow-lg shadow-orange-500/25">
            <FaLink />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="github-link bg-slate-800 hover:bg-slate-900 border border-white/10 scale-90 group-hover:scale-100 transition-transform duration-300 delay-150 w-[50px] h-[50px] text-lg grid place-items-center text-white rounded-full shadow-lg shadow-black/25"
            href={item.linkProjectGH}
          >
            <FaCode />
          </a>
        </div>
      </div>

      {/* Info Content */}
      <div className="p-5 flex flex-col flex-grow bg-white/5 dark:bg-black/5 backdrop-blur-sm">
        <div className="flex items-start justify-between gap-4 mb-4">
          <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-100 transition-colors duration-300 group-hover:text-orange-500 ProName">
            {item.name}
          </h2>
          <div className="flex items-center gap-1.5 flex-shrink-0 mt-1">
            {item.techImage && item.techImage.map((tech, index) => (
              <div 
                key={index}
                className="w-[28px] h-[28px] bg-gray-100 dark:bg-neutral-800 border border-gray-200/50 dark:border-white/5 rounded-full p-1 flex items-center justify-center shadow-sm"
              >
                <img
                  loading="lazy"
                  className="w-full h-full object-contain"
                  src={tech}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* Tech Badge */}
        <div className="mt-auto pt-4 border-t border-gray-200/40 dark:border-white/5 flex justify-center">
          <span className="flex items-center gap-1 px-3.5 py-1 text-sm font-semibold rounded-full capitalize text-orange-600 bg-orange-500/10 dark:text-orange-400 dark:bg-orange-500/5 border border-orange-500/10 dark:border-orange-500/5">
            <IoIosList size={16} />
            {item.tech === "JS" ? "Javascript" : item.tech}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
