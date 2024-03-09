'use client';

import axios from 'axios';
import useConfigurationStore from '@/app/store/configurationStore';
import {omit} from 'lodash';

const AssistantForm = () => {
  const selected = useConfigurationStore((state) => state.selected);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const task = formData.get('task');

    const response = await axios.patch(`api/configuration`, {
      task,
      scope: selected.scope,
      entries: JSON.stringify(selected.entries, null, 2),
    });

    console.log(response);
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <form onSubmit={handleSubmit} className="w-full max-w-xl">
        <div>
          <textarea
            className="form-textarea mt-1 p-2 block w-full rounded-lg ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Your task here..."
            name={'task'}
          ></textarea>
        </div>
        <div className="flex items-center justify-start pt-2">
          <button
            type={'submit'}
            className="py-2 px-8 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssistantForm;
