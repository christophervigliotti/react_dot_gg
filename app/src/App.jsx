/*
In this challenge, you'll be synchronizing the result of fetching country data from an external API (the url below) with your component's state.

The JSX is finished, so all you need to do is fetch the data from the following URL and update the component's state with the result.

const url = `https://restcountries.com/v2/alpha/${countryCode}`;
You'll update data with the exact JSON response returned from the given url.

Tasks
  1. Display a loading state when fetching data
  2. Fetch new data based on the user's input
  3. Render an error message if fetch fails

TODO: 
  refer to the pokemon example to grok (again) how to get data from remote
*/

// was: import * as React from "react";...is: 
import React, { useState, useEffect } from 'react';

export default function CountryInfo() {

  // replace const countryCode = "AU"; with...
  const [countryCode, setCountryCode] = React.useState('AU');

  const data = null;
  const isLoading = true;
  const error = null;

  const handleChange = (e) => {};

  // added this bc I know that it's needed
  useEffect(() => {
  }, []); // empty array = run once on mount, never again      

  return (
    <section>
      <header>
        <h1>Country Info:</h1>

        <label htmlFor="country">Select a country:</label>
        <div>
          <select id="country" value={countryCode} onChange={handleChange}>
            <option value="AU">Australia</option>
            <option value="CA">Canada</option>
            <option value="CN">China</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
            <option value="IN">India</option>
            <option value="JP">Japan</option>
            <option value="MX">Mexico</option>
            <option value="GB">United Kingdom</option>
            <option value="US">United States of America</option>
          </select>
          {isLoading && <span>Loading...</span>}
          {error && <span>{error.message}</span>}
        </div>
      </header>

      {data && (
        <article>
          <h2>{data.name}</h2>
          <table>
            <tbody>
              <tr>
                <td>Capital:</td>
                <td>{data.capital}</td>
              </tr>
              <tr>
                <td>Region:</td>
                <td>{data.region}</td>
              </tr>
              <tr>
                <td>Population:</td>
                <td>{data.population}</td>
              </tr>
              <tr>
                <td>Area:</td>
                <td>{data.area}</td>
              </tr>
            </tbody>
          </table>
        </article>
      )}
    </section>
  );
}