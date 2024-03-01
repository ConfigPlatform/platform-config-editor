import {get} from "lodash";
//import ButtonText from "@/app/component/schema/button/ButtonText";

const Button = (props: object) => {
    const value = get(props, 'value', '');

    return <div style={{ width: '200px', height: '100px' }} className="border-dashed border-2 border-pink-500 rounded-md flex items-center justify-center">
        {/*<ButtonText/>*/}
    </div>
}

export default Button;
