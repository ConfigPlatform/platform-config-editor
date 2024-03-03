import React from 'react';
import Column from './Column';

const FormLayoutComponent = () => {
  return (
    <div
      className="border-dashed border-2 border-sky-500 rounded-md flex flex-col p-4"
      style={{width: '400px', height: '200px'}}
    >
      {/* "Table" в левом верхнем углу */}
      <div className="self-start mb-4">
        <p>Table</p>
      </div>

      {/* Контейнер для колонок */}
      <table className="relative flex items-center">
        {/* Колонка "Data" */}
        <div className="flex items-center">
          <div
            style={{width: '100px', height: '50px'}}
            className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2"
          >
            <Column label="Date" name="date" type="text" dataType={null} />
          </div>
        </div>

        {/* Колонка "Name" */}
        <div className="flex items-center">
          <div
            style={{width: '100px', height: '50px'}}
            className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2"
          >
            <Column label="Name" name="name" type="text" dataType={null}/>
          </div>
        </div>

        {/* Колонка "Email" */}
        <div className="flex items-center">
          <div
            style={{width: '100px', height: '50px'}}
            className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center mr-2"
          >
            <Column label="Email" name="email" type="text" dataType={null}/>
          </div>
        </div>
        
      </table>
    </div>
  );
};

export default FormLayoutComponent;
