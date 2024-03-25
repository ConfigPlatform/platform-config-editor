'use client';

import useConfigurationStore from '@/app/store/configurationStore';

const FooterStructure = () => {

  const {setAssistantInput} = useConfigurationStore.getState();
  const handleClick = () => {

    setAssistantInput('');

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