import React, { useState, useEffect } from 'react';

export default function Example() {
  const [selected, setSelected] = useState('dogs');
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // STEP 1 — define the async function INSIDE the effect.
    // useEffect's callback can't itself be async, so we wrap the work
    // in an inner async function and call it immediately below.
    // In App.jsx your inner function is called fetchData too — same idea.
    const fetchData = async () => {    // NOTE: "async", not "acync" — check App.jsx for a typo here!
      setIsLoading(true);  // tell the UI a request is in flight
      setError(null);      // clear any previous error before each new request

      try {
        // STEP 2 — await the fetch.
        // In App.jsx swap this URL for:
        //   const url = `https://restcountries.com/v2/alpha/${countryCode}`;
        //   const res = await fetch(url);
        const res = await fetch(`https://dog.ceo/api/breed/${selected}/images/random`);

        // STEP 3 — guard against non-2xx HTTP responses.
        // fetch() only rejects on network failure; a 404/500 still "succeeds".
        // Throwing here sends control to the catch block below.
        if (!res.ok) throw new Error('Fetch failed');

        // STEP 4 — parse the JSON body and store it in state.
        // This is what populates `data` so the JSX can render it.
        const json = await res.json();
        setData(json);
      } catch (e) {
        // STEP 5 — store the error message so the UI can display it.
        // In App.jsx the JSX reads `error.message`, so store the full
        // Error object: setError(e)  (not just e.message).
        setError(e.message);
      }

      // STEP 6 — always clear the loading flag, success OR failure.
      // Putting this after try/catch (not inside it) ensures it always runs.
      setIsLoading(false);
    };

    fetchData(); // call the inner async function immediately
  }, [selected]); // DEPENDENCY ARRAY — list every state/prop the effect reads.
  // Using [] here would only fetch once on mount and never again.
  // In App.jsx you want [countryCode] so a new fetch fires every time
  // the user picks a different country from the <select>.

  // HANDLE CHANGE — the <select> in App.jsx calls `handleChange` but that
  // function is never defined. You need to add it above the return:
  //   const handleChange = (e) => setCountryCode(e.target.value);
  // Here it's written inline on the element instead — both approaches work.
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
