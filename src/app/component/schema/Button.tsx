import React, {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <div style={{width: '190px', height: '70px'}} className="border-dashed border-2 border-sky-500 rounded-md flex">
      <p className="ml-2 self-center font-bold"> Button</p>
      <div className="self-center mb-3">{children}</div>
    </div>
  );
};

export default Button;
