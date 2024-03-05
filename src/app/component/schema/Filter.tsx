import {get} from "lodash";

const Filter = (props: object) => {
    const filterBy = get(props, 'filterBy', '');

    return <div style={{ width: '100px', height: '50px' }} className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
        <p>Filter - {filterBy}</p>

    </div>
}

export default Filter
