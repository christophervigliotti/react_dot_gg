import React, { useState, useEffect } from 'react';

export default function Example() {
  const [selected, setSelected] = useState('dogs');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const res = await fetch(`https://dog.ceo/api/breed/${selected}/images/random`);
        if (!res.ok) throw new Error('Fetch failed');
        const json = await res.json();
        setData(json);
      } catch (e) {
        setError(e.message);
      }

      setIsLoading(false);
    };

    fetchData();
  }, [selected]); // re-runs whenever selected changes

  return (
    <div>
      <select onChange={(e) => setSelected(e.target.value)} value={selected}>
        <option value="dogs">Dogs</option>
        <option value="hound">Hound</option>
      </select>

      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && <p>{JSON.stringify(data)}</p>}
    </div>
  );
}
