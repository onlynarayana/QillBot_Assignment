import React from 'react';
import FreeOffer from './FreeOffer';
import Premium from './Premium';

const CardContainer = () => {
  return (
    <div className='mainDiv'>
      <div className='div1'>
        <h2>Experience the full power of QuillBot</h2>
      </div>
      <div className='pre-details'>
        <div className='pre_details'>
          <FreeOffer />
        </div>
        <div className='pre_details'>
          <Premium />
        </div>
      </div>
      <p className='para-2'>*Scan up to 20 pages a month</p>
    </div>
  );
};

export default CardContainer;