import React from 'react'

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: string;
  className?: string;
  id?: string;
  children?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({type = "button", variant, className, id, onClick, children}) => {
  return (
    <button 
      type={type} 
      className={`btn-component ${className ?? ''}`} 
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
