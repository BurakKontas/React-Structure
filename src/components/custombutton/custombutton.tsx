// Path: components/custombutton/custombutton.cmp.tsx

import React from 'react';
import { CustomButtonProps } from './custombutton.types';

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, disabled = false, className = '', style = {}, children }) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={className}
      style={style}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default CustomButton;
