import React from 'react'
import { Button } from "antd";

function GradButton({ variant = "default", children = "Buy Now" }) {
  const baseClass = " rounded-full";
  
  const styles = {
    primary: `text-white border-0 bg-gradient-to-r from-[#52483E] py-5 px-10 to-[#8B8782] font-poppins ${baseClass}`,
    outlined: `bg-gray-50 border-y border-gray-400 font-semibold py-5 px-7  ${baseClass} font-poppins`,
    text: `font-semibold ${baseClass} font-poppins py-5 px-10`
  };

  const type = variant === "primary" ? "primary" : "text";

  return (
    <Button type={type} className={styles[variant]}>
      {children}
    </Button>
  );
}

export default GradButton;