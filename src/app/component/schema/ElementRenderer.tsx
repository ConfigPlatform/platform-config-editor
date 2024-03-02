import {get} from "lodash";
import ElementListRenderer from "@/app/component/schema/ElementListRenderer";
import Text from './Text';
import Form from "@/app/component/schema/Form";

const componentMap: {[name: string]: any} = {
    text: Text,
    form: Form
}

interface IProps {
    ml: number;
    element: object;
}

const ElementRenderer = ({element, ml}: IProps) => {
    const type = get(element, 'type', '');
    const content = get(element, 'content', []);
    const Component = componentMap[type];

    return <>
        {Component && <div style={{ marginLeft: `${ml}px`, marginTop: '10px' }}><Component {...element} /></div>}
        <ElementListRenderer ml={ml+20} content={content} />
    </>
}

export default ElementRenderer