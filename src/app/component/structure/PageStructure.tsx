import {nanoid} from "nanoid";
import ElementListRenderer from "@/app/component/structure/ElementListRenderer";

interface IProps {
    pages: object[];
}

const PageStructure = ({pages}: IProps) => {
    return <div>{pages.map(el => <div key={nanoid()} style={{ marginLeft: '4px' }}>
        <b>{el.path}</b>
        <ElementListRenderer ml={4} content={el.content} />
    </div>)}</div>
}

export default PageStructure