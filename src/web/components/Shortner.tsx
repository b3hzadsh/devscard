import { useState, FormEvent, ChangeEvent } from 'react';

const Shortner = () => {
  const [url, setUrl] = useState<string>('');
  const [result, setResult] = useState<string>('');
  const base_url = 'https://b3hzad-sh.ir';

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const payload = { body: url };
      const pyload_str = JSON.stringify(payload);
      console.log(pyload_str);
      const response = await fetch(`${base_url}/shortner`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: pyload_str,
      });
      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }
      const data = await response.json();
      setResult(`${base_url}/${data.body}`);
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Error: ${error.message}`);
      } else {
        setResult('An unknown error occurred');
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-100 p-2">
      <div className="w-full max-w-md rounded-lg bg-white p-2 shadow-lg">
        <h1 className="mb-3 mt-6 text-center text-2xl font-bold text-gray-800">کوتاه کننده لینک</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={url}
            onChange={handleChange}
            placeholder="لطفا یک لینک وارد کنید"
            className="focus:ring-blue-500 w-full rounded-lg border border-gray-300 px-4 py-2 placeholder:text-right focus:outline-none focus:ring-2"
          />
          <button
            type="submit"
            className="hover:bg-blue-800 text-black w-full rounded-md bg-gray-200 px-4 py-2 transition duration-200"
          >
            تایید
          </button>
        </form>
        {result && (
          <div className="text-blue-500 my-5 flex items-center justify-center ">
            <a href={result} className="items-center rounded-lg text-center">
              {result}{' '}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shortner;
