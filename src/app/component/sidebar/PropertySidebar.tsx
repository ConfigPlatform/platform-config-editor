import Property from '@/app/component/property/Property';
import Assistant from '@/app/component/assistant/Assistant';
import useConfigurationStore from '@/app/store/configurationStore';

const StructureSidebar = () => {
  const elementPath = useConfigurationStore((state) => state.elementPath);

  return (
    <aside className={'h-screen w-3/12 border-gray-200 bg-gray-100 p-2'}>
      {elementPath && (
        <>
          <Property />
          <hr className={'h-px my-8 bg-gray-400 border-0'} />
        </>
      )}
      <Assistant />
    </aside>
  );
};

export default StructureSidebar;
