import React from 'react';
import Styles from './styles.module.css';
import { AnimatePresence, motion } from 'framer-motion';
import useTimeout from '../../hooks/useTimeout';

const TrelloCard = () => {
  const { isVisible } = useTimeout({ duration: 5000 });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          exit={{ opacity: [1, 0.5, 0.25, 0], x: [0, 4, 8, 12] }}
          animate={{ y: [400, 0, 8, 0] }}
          transition={{
            y: {
              delay: 1,
              duration: 0.5,
              ease: 'easeOut',
            },
            x: {
              duration: 0.5,
              ease: 'linear',
            },
            opacity: {
              duration: 0.5,
              ease: 'linear',
            },
          }}
          className={Styles.card}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            viewBox='0 0 80 80'
            className='size-full'
          >
            <defs>
              <linearGradient
                id='linear-gradient'
                x1='40'
                y1='70.47'
                x2='40'
                y2='9.53'
                gradientUnits='userSpaceOnUse'
              >
                <stop
                  offset='0'
                  stopColor='#0052cc'
                />
                <stop
                  offset='1'
                  stopColor='#2684ff'
                />
              </linearGradient>
            </defs>
            <g id='Logos'>
              <path
                className='cls-1'
                d='M63.22,9.53H16.78a7.26,7.26,0,0,0-7.25,7.25V63.22a7.26,7.26,0,0,0,7.25,7.25H63.22a7.26,7.26,0,0,0,7.25-7.25V16.78A7.26,7.26,0,0,0,63.22,9.53ZM35.78,53.42a2.41,2.41,0,0,1-2.41,2.41H23.19a2.41,2.41,0,0,1-2.41-2.41V23.19a2.41,2.41,0,0,1,2.41-2.41H33.37a2.41,2.41,0,0,1,2.41,2.41ZM59.22,39.54A2.41,2.41,0,0,1,56.81,42H46.63a2.41,2.41,0,0,1-2.41-2.41V23.19a2.41,2.41,0,0,1,2.41-2.41H56.81a2.41,2.41,0,0,1,2.41,2.41Z'
                fillRule='evenodd'
                fill='url(#linear-gradient)'
              />
            </g>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TrelloCard;