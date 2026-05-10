/*
In this challenge, you're given an app that uses useEffect as a way to react to changes in the search term. That's not ideal – useEffect should be used for synchronizing, not for reacting to changes in a value. Refactor the app to get rid of useEffect but keep the same functionality.

Tasks
Render the list of items
Filter the list of items based on search term
Don't use useEffect
*/

/*
BEGINNING STATE OF CHALLENGE

import * as React from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon"
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  React.useEffect(() => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(result);
  }, [searchTerm]);

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
*/

/*
FINISHED WORKING SOLUTION
import * as React from "react";

const items = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Fig",
  "Grape",
  "Honeydew",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Raspberry",
  "Strawberry",
  "Watermelon"
];

export default function SearchFilter() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filteredItems, setFilteredItems] = React.useState(items);

  /*
  React.useEffect(() => {
    const result = items.filter((item) =>
      item.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(result);
  }, [searchTerm]);
  */

  const handleChange = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
    setFilteredItems(
      items.filter((item) => 
      item.toLowerCase().includes(event.target.value.toLowerCase()      
    )));
  };

  return (
    <div>
      <h1>Search Filter</h1>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {filteredItems.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

/*
In this challenge, you're given an app that uses useEffect as a way to react to changes in the search term. That's not ideal – useEffect should be used for synchronizing, not for reacting to changes in a value. Refactor the app to get rid of useEffect but keep the same functionality.
  Tasks
    Render the list of items
    Filter the list of items based on search term
    Don't use useEffect
*/

*/