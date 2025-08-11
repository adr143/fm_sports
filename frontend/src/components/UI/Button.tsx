import React from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  onClick,
  type = 'button',
  disabled = false
}) => {
  const baseStyles = 'font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black',
    secondary: 'bg-gray-200 text-black hover:bg-gray-300 focus:ring-gray-400',
    outline: 'bg-transparent text-black border border-black hover:bg-gray-100 focus:ring-black'
  };
  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  return <button type={type} onClick={onClick} disabled={disabled} className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
      {children}
    </button>;
};
export default Button;