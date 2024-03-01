import {get} from "lodash";

const Button = (props: object) => {
    const value = get(props, 'value', '');

    return <div style={{ width: '100px', height: '50px' }} className="border-dashed border-2 border-sky-500 rounded-md flex items-center justify-center">
        {/*<p>Button - {value}</p>*/}
    </div>
}

export default Button;