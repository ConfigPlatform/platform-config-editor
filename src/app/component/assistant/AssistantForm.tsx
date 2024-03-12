'use client';

import axios from 'axios';
import useConfigurationStore from '@/app/store/configurationStore';
import {get} from 'lodash';
import {defineScope} from '@/app/component/schema/Schema';

const AssistantForm = () => {
  const {getConfiguration} = useConfigurationStore.getState();
  const elementPath = useConfigurationStore((state) => state.elementPath);
  const entries = useConfigurationStore((state) => get(state, `configuration.${elementPath}`));

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const task = formData.get('task');

    const scope = defineScope(elementPath);

    await axios.patch(`api/configuration/generate`, {
      task,
      scope: scope,
      entries: JSON.stringify(entries, null, 2),
      path: elementPath,
    });

    // refresh configuration
    getConfiguration();
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div>
          <textarea
            className="form-textarea text-sm mt-1 p-2 block w-full rounded-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Your task here..."
            name={'task'}
          ></textarea>
        </div>
        <div className="flex items-center justify-start pt-1">
          <button
            type={'submit'}
            className="px-4 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ml-0 m-1"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssistantForm;
