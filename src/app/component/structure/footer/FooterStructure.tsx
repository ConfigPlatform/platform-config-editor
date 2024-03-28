'use client';

import useConfigurationStore from '@/app/store/configurationStore';

const FooterStructure = () => {
  return (
    <div>
      <p
        className={'text-xs font-bold hover:text-blue-700 cursor-pointer'}
        onClick={() => useConfigurationStore.setState({structurePath: 'footer'})}
      >
        FOOTER
      </p>
    </div>
  );
};

export default FooterStructure;