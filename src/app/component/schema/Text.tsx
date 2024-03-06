import {get} from 'lodash';

const Text = (props: object) => {
  const value = get(props, 'value', '');
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center p-1 m-1"
    >
      <p>Text - {value}</p>
    </div>
  );
};

export default Text;
