import React from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ 
  image, 
  title, 
  description, 
  state, 
  link,
  characterLimit = 100
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  
  const shouldShowSeeMore = description && description.length > characterLimit;
  const displayText = isExpanded ? description : description?.slice(0, characterLimit);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      className="w-[28rem] p-4 rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-lg"
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      animate={{ height: "auto" }}
    >
      {/* Image Container */}
      <div className="relative  mb-6">
        <div className="w-full h-48 bg-gray-800 rounded-2xl overflow-hidden border-2 border-gray-700">
          <img
            src={image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop'}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=300&fit=crop';
            }}
          />
        </div>
      </div>

      {/* Title and State */}
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-white flex-1 mr-4">
          {title}
        </h3>
        <span className="text-gray-300 hover:text-orange-400 uppercase text-sm font-medium whitespace-nowrap">
          {state}
        </span>
      </div>

      {/* Description */}
      <div className="mb-6">
        <motion.p 
          className="text-gray-300 text-sm leading-relaxed mb-4"
          animate={{ height: "auto" }}
          transition={{ duration: 0.3 }}
        >
          {displayText}
          {!isExpanded && shouldShowSeeMore && "..."}
        </motion.p>
        
        {/* Description lines for visual effect */}
       
      </div>

      {/* See more/See less button */}
      <div className="text-right">
        {shouldShowSeeMore ? (
          <motion.button
            onClick={handleToggle}
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 cursor-pointer"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            {isExpanded ? "See less" : "See more"}
          </motion.button>
        ) : (
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200"
            whileHover={{ x: 5 }}
            transition={{ duration: 0.2 }}
          >
            Visit event
          </motion.a>
        )}
      </div>
    </motion.div>
  );
};
export default EventCard