import {get} from "lodash";
import ElementListRenderer from "@/app/component/structure/ElementListRenderer";

interface IProps {
    ml: number;
    element: object;
}

const ElementRenderer = ({element, ml}: IProps) => {
    const type = get(element, 'type', '');
    const content = get(element, 'content', []);

    return <div>
        <p style={{ marginLeft: `${ml}px` }}>{type}</p>
        <ElementListRenderer ml={ml} content={content} />
    </div>
}

export default ElementRenderer