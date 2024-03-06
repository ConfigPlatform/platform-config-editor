import Text from '@/app/component/schema/Text';
const Button = (props) => {
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="border-dashed border-2 border-green-500 rounded-md flex items-center justify-center"
    >
      {props.content.map((el, index) => (
        <div key={index}>Button:{<Text {...el} />}</div>
      ))}
    </div>
  );
};

export default Button;
