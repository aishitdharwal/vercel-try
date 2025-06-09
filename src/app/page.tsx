'use client';

import { useState } from 'react';

export default function Home() {
  const [response, setResponse] = useState('');

  const callApi = async () => {
    try {
      // const res = await fetch('http://localhost:8000/'); //  #replace localhost with your public ip of ec2
      const res = await fetch('http://3.109.213.148:8080/');
      // const res = await fetch('https://openholidaysapi.org/PublicHolidays?countryIsoCode=CH&languageIsoCode=DE&validFrom=2022-01-01&validTo=2022-06-30');
      const data = await res.json();
      setResponse(JSON.stringify(data));
    } catch (err) {
      setResponse('Error calling API');
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl mb-4">Call FastAPI</h1>
      <button
        onClick={callApi}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Call API
      </button>
      <pre className="mt-4 bg-gray-100 p-4 rounded">{response}</pre>
    </main>
  );
}
