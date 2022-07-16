import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const images = [
  "https://agirls.aottercdn.com/media/bfd55b99-81fd-473a-98d9-9c41734a2296.jpg",
  "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1295,h_720,f_auto/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/au85ntcczwugzzs9gwuh/HandmadeRingMakingWorkshop-Klook客路.jpg",
  "https://cdn-img.look-in.com.tw/upload/images/batch_IMG_5275.jpg",
];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
  }),
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Slide = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="flex justify-center relative py-6 bg-cover h-">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-sky-500 absolute w-10 h-10 z-50 rounded-full flex justify-center items-center text-2xl top-[calc(50%-20px)] left-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => paginate(1)}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
          clipRule="evenodd"
        />
      </svg>
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          className="h-full w-full object-cover"
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="text-sky-500 absolute w-10 h-10 z-50 rounded-full flex justify-center items-center text-2xl top-[calc(50%-20px)] right-0"
        viewBox="0 0 20 20"
        fill="currentColor"
        onClick={() => paginate(-1)}
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default Slide;
