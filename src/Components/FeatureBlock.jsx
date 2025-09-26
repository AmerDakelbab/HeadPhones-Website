import React from 'react';

const FeatureBlock = ({ title, description }) => {
  return (
    <div className="bg-gray-100 border border-t-gray-200 flex flex-col md:flex-row p-8 md:p-32">
      <p className="text-3xl mb-5 md:mb-0 pr-0 md:pr-64 text-primary font-semibold leading-normal md:leading-snug md:w-[450px]">{title}</p>
      <p className="text-base tracking-wider text-secondary  leading-[3rem] md:leading-[2.5rem] flex-1">{description}</p>
    </div>
  );
};

export default FeatureBlock;