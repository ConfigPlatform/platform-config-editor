const Form = (props) => {
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="m-1 p-1 border-dashed border-2 border-blue-500 rounded-md flex items-center justify-center"
    >
      <p>
        <span className="font-bold d-block">Form</span> - {props.id}
      </p>
    </div>
  );
};

export default Form;
