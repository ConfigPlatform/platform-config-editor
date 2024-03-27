import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import PropertyEditFieldList from '@/app/component/property/PropertyEditFieldList';
import {FormEventHandler, useEffect} from 'react';
import {defineScope} from '@/app/component/schema/Schema';
import {delRequest, patchRequest} from '@/app/util/request/request';
import usePropertyEditStore from '@/app/store/propertyEditStore';

const PropertyEditForm = () => {
  const {getConfiguration} = useConfigurationStore.getState();
  const configurationMap = useConfigurationStore((state) => state.configuration);
  const elementPath = useConfigurationStore((state) => state.selectedElementPath);

  const elementConfiguration = useConfigurationStore((state) => get(state, `configuration.${elementPath}`, {}));

  // define scope
  const scope = defineScope(elementPath);

  // apply configuration
  const applyConfiguration: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    // extract form data object
    const formData = new FormData(e.target);
    const configuration = Object.fromEntries(formData.entries());

    // update configuration
    await patchRequest({
      url: '/api/configuration',
      data: {path: elementPath, configUpdates: configuration, scope},
    });

    // reset selected element
    useConfigurationStore.setState({elementPath: ''});

    // refresh configuration
    getConfiguration();
  };

  // remove element
  const removeElement = async () => {
    await delRequest({
      url: '/api/configuration',
      data: {path: elementPath, scope},
    });

    // reset selected element
    useConfigurationStore.setState({elementPath: ''});

    // refresh configuration
    getConfiguration();
  };

  useEffect(() => {
    usePropertyEditStore.setState({fields: elementConfiguration});
  }, [elementPath, configurationMap]);

  return (
    <form onSubmit={applyConfiguration}>
      <PropertyEditFieldList />
      <div className={'mt-2 flex justify-between'}>
        <div className={'flex flex-row'}>
          <button
            type={'submit'}
            className={
              'px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-0 m-1'
            }
          >
            Apply changes
          </button>
          <button
            type={'button'}
            className={
              'px-3 py-2 border focus:ring-4 border-gray-300 text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-gray-300 focus:ring-opacity-50 rounded text-xs font-medium transition-colors duration-150 m-1'
            }
            onClick={() => useConfigurationStore.setState({elementPath: ''})}
          >
            Cancel
          </button>
        </div>
        <button
          type={'button'}
          className={
            'px-3 py-2 border focus:ring-4 border-gray-300 text-gray-700 bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-red-300 focus:ring-opacity-50 rounded text-xs font-medium transition-colors duration-150 m-1 text-white'
          }
          onClick={removeElement}
        >
          Remove element
        </button>
      </div>
    </form>
  );
};

export default PropertyEditForm;
