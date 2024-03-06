'use client';

import {useState} from 'react';
import axios from "axios";

const configScopes: string[] = ['Page', 'Handler', 'Entity', 'Menu', 'Modal', 'Sidepanel', 'Footer'];

const UpdateConfigurationForm = () => {
  const [comment, setComment] = useState<string>('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const formValues = Object.fromEntries(formData.entries());

    const response = await axios.patch(`${process.env.NEXT_PUBLIC_CLIENT_ORIGIN}/chat/api`, formValues)

    console.log(response)
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h3 className={'mb-4'}>{comment}</h3>

      <form onSubmit={handleSubmit} className="w-full max-w-xl p-8 bg-white rounded-lg shadow-[0_4px_6px_2px_rgba(0,0,0,0.2)]">
        <div>
          <textarea
            className="form-textarea mt-1 p-2 block w-full rounded-lg ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows={4}
            placeholder="Your message here..."
            name={'task'}>
          </textarea>
        </div>
        <div className="relative mt-2">
          <select name={'scope'} className="appearance-none row-start-1 col-start-1  dark:bg-slate-800 relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6" required>
            {configScopes.map(el => (
              <option key={el} className="flex items-center" value={el.toLowerCase()}>
                {el}
              </option>)
            )}
          </select>
          <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z" clipRule="evenodd" />
            </svg>
          </span>
        </div>
        <div className="flex items-center justify-start pt-6 pb-2">
          <button type={'submit'} className="py-2 px-8 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-400 focus:ring-opacity-75">Send</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateConfigurationForm;
