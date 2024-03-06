const Form = (props) => {
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="border-dashed border-2 border-blue-500 rounded-md flex items-center justify-center"
    >
      <p>Form - {props.id}</p>
    </div>
  );
};

export default Form;
