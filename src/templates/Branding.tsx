import React from 'react';
import Card from '../components/Card';

const Branding = () => {
  return (
    <Card>
      <svg
        stroke='currentColor'
        fill='currentColor'
        stroke-width='0'
        version='1'
        viewBox='0 0 48 48'
        enable-background='new 0 0 48 48'
        height='1em'
        width='1em'
        xmlns='http://www.w3.org/2000/svg'
        style={{ width: '20px', height: '20px' }}
      >
        <path
          fill='#00BCD4'
          d='M24,6C14.1,6,6,14.1,6,24s8.1,18,18,18c5.2,0,9.9-2.2,13.1-5.7L24,24V6z'
        ></path>
        <path
          fill='#448AFF'
          d='M42,24c0-9.9-8.1-18-18-18v18H42z'
        ></path>
        <path
          fill='#3F51B5'
          d='M24,24l13.1,12.3c3-3.2,4.9-7.5,4.9-12.3H24z'
        ></path>
      </svg>
      <h6 style={{ flex: '1 1 0%', fontSize: '1.3rem', fontWeight: 600 }}>
        Branding
      </h6>
    </Card>
  );
};

export default Branding;
