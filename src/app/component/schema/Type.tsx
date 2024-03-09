import React from 'react';

interface TypeProps {
  label: string;
}

const Type: React.FC<TypeProps> = ({label}) => {
  return (
    <div className="mb-4">
      <label htmlFor={label} className="block text-sm font-medium text-gray-700 mr-2">
        {label}
      </label>
    </div>
  );
};

export default Type;
