import AssistantForm from '@/app/component/AssistantForm';

const StructureSidebar = () => {
  return (
    <aside className={'h-screen w-3/12 border-gray-200 bg-gray-100 p-2'}>
      <p className={'text-lg'}>Assistant</p>
      <AssistantForm />
    </aside>
  );
};

export default StructureSidebar;
