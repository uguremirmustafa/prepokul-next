// import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
// import { useApp } from '../context/AppContext';

const Container = ({ children }) => {
  // const { active } = useApp();

  return (
    <div className={`container`}>
      {/* <AnimatePresence>
        {active !== -1 && (
          <motion.div
            animate={{ opacity: 0.5, transition: { ease: 'linear' } }}
            className="appFilter"
          ></motion.div>
        )}
      </AnimatePresence> */}
      {children}
    </div>
  );
};

export default Container;
