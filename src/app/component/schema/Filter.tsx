const Filter = (props) => {
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="border-dashed border-2 border-yellow-500 rounded-md flex items-center justify-center"
    >
      <p>
        Filter - {props.select} by {props.filterBy}
      </p>
    </div>
  );
};

export default Filter;
