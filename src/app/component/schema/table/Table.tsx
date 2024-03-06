import React from 'react';
import Column from './Column';
import {get} from 'lodash';

const FormLayoutComponent = (props: any) => {

  console.log(props.columns, '333333333')
  
  const tableId = get(props, 'id', '')
  const columns = get(props, 'columns', [])
  // columns.map(el => {
  //   if(el.cell.content[0].value) {
  //     console.log(el.cell.content[0].value, '111111')
  //   } else if (el.cell.content[0].content) {
  //     console.log(el.cell.content[0].content, '222222')
  //   } else {
  //     console.log('else')
  //   }
  // })

  function mapper(columns) {
    columns.map(el => {
      console.log(el, 'oleg')
      if(el.cell?.content[0].value) {
        console.log(el.cell.content[0].value)
      } else if (el.cell?.content[0].content){
        mapper(el.cell.content[0].content)
      } else if(el.value) {
        console.log(el.value, 'VALUE!!!!!')
      }
       else {
        console.log('Error')
      }
    })
  }

  mapper(columns);
  
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
        
      </table>
    </div>
  );
};

export default FormLayoutComponent;
