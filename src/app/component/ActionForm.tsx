'use client';

import {useState} from 'react';
import {Button} from 'flowbite-react';

const ActionForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputValue); // Handle the submit event and the input value
    // Implement what should happen on submit, e.g., send data to an API
    setInputValue('');
  };

  return (
    <div className="flex justify-center items-center w-1/2">
      <form onSubmit={handleSubmit} className="w-full max-w-xl p-8 bg-white rounded-lg shadow-md">
        <div>
          <textarea
            className="form-textarea mt-1 block w-full border rounded-lg border-gray-300   focus:border-gray-500 focus:ring-0"
            id="message"
            rows={4}
            placeholder="Your message here..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-4">
          <Button type={'submit'}>Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ActionForm;
