import React, {ReactNode} from 'react';

interface ButtonProps {
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({children}) => {
  return (
    <div
      style={{width: '100px', height: '85px'}}
      className="border-dashed border-2 border-sky-500 rounded-md flex flex-col"
    >
      <p className="font-bold ml-1"> Button</p>
      <div className="self-center">{children}</div>
    </div>
  );
};

export default Button;
