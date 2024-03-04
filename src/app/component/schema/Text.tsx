import {get} from "lodash";

const Text = (props: object) => {
    const value = get(props, 'value', '');

    return <div style={{ width: '100px', height: '50px' }} className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
        <p>Text - {value}</p>
    </div>
}

export default Text