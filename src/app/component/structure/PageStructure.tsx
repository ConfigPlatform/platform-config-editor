'use client';

import {nanoid} from "nanoid";
import ElementListRenderer from "@/app/component/structure/ElementListRenderer";
import useConfigurationStore from "@/app/store/configurationStore";

interface IProps {
    pages: object[];
}

const PageStructure = ({pages}: IProps) => {
    const { selectElement } = useConfigurationStore.getState();

    return <div>{pages.map(el => <div key={nanoid()} style={{ marginLeft: '4px' }}>
        <b className={'hover:text-blue-700 cursor-pointer'} onClick={() => selectElement(el)}>{el.path}</b>
        <ElementListRenderer ml={4} content={el.content} />
    </div>)}</div>
}

export default PageStructure