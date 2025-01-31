import { useState, FormEvent, ChangeEvent } from 'react';

const Shortner = () => {
  const [number, setNumber] = useState<string>('');
  const [result, setResult] = useState<string>('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Simulating a POST request to a fake API
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ number: number }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error status: ${response.status}`);
      }

      const data = await response.json();
      // For demonstration, we'll just display the number sent
      setResult(`Sent number: ${number}`);
    } catch (error) {
      if (error instanceof Error) {
        setResult(`Error: ${error.message}`);
      } else {
        setResult('An unknown error occurred');
      }
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumber(e.target.value);
  };

  return (
    <div>
      <h1>Send Number to Fake API</h1>
      <form onSubmit={handleSubmit}>
        <input type="number" value={number} onChange={handleChange} placeholder="Enter a number" />
        <button type="submit">Submit</button>
      </form>
      <p>{result}</p>
    </div>
  );
};

export default Shortner;
