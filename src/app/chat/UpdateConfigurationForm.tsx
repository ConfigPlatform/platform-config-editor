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
    <div className="flex justify-center flex-col items-center w-1/2">
      <h3 className={'mb-4'}>{comment}</h3>

      <form onSubmit={handleSubmit} className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
        <div>
          <textarea
            className="form-textarea mt-1 block w-full border rounded-lg border-gray-300 focus:border-gray-500 focus:ring-0"
            rows={4}
            placeholder="Your message here..."
            name={'task'}
          ></textarea>
        </div>
        <select name={'scope'} className={'mt-1'} required>
          {configScopes.map(el => <option key={el} value={el.toLowerCase()}>{el}</option>)}
        </select>
        <div className="flex items-center justify-between px-3 py-4">
          <button type={'submit'}>Send</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateConfigurationForm;
