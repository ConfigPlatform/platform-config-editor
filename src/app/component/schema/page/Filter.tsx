const Filter = (props) => {
  return (
    <div
      style={{width: 'auto', height: 'auto'}}
      className="m-1 p-1 border-dashed border-2 border-yellow-500 rounded-md flex items-center justify-center"
    >
      <p>
        <span className="font-bold d-block">Filter</span> - {props.select} by {props.filterBy}
      </p>
    </div>
  );
};

export default Filter;
