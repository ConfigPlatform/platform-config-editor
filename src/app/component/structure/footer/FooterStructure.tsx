'use client';

import useConfigurationStore from '@/app/store/configurationStore';

const FooterStructure = () => {
  // @ts-ignore
  const {setAssistantInput} = useConfigurationStore.getState();
  const handleClick = () => {
    // Reset textarea value
    setAssistantInput('');
    // Update structure path
    useConfigurationStore.setState({structurePath: 'footer'});
  };

  return (
    <div>
      <p className={'text-xs font-bold hover:text-blue-700 cursor-pointer'} onClick={handleClick}>
        FOOTER
      </p>
    </div>
  );
};

export default FooterStructure;
