'use client';

import StructureSidebar from "@/app/component/sidebar/StructureSidebar";
import BuilderLayout from "@/app/component/layout/BuilderLayout";
import PropertySidebar from "@/app/component/sidebar/PropertySidebar";
import useConfigurationStore from "@/app/store/configurationStore";
import {useEffect} from "react";

export default function Page() {
    const { getConfiguration, reset } = useConfigurationStore.getState();

    useEffect(() => {
        getConfiguration();
        return () => reset()
    }, []);

  return (
      <BuilderLayout>
        <StructureSidebar />
        <div className={'w-8/12'}></div>
        <PropertySidebar />
      </BuilderLayout>
  );
}
