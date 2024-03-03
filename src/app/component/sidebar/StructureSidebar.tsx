'use client';

import useConfigurationStore from "@/app/store/configurationStore";
import {get} from "lodash";
import PageStructure from "@/app/component/structure/PageStructure";

const StructureSidebar = () => {
    const pages = useConfigurationStore((state) => get(state, 'configuration.pages', []));

    return (
        <aside className={'h-screen w-64 border-gray-200 bg-gray-100 overflow-scroll pl-5'}>
        <b>Pages:</b>
        <PageStructure pages={pages} />
        </aside>
);
}

export default StructureSidebar