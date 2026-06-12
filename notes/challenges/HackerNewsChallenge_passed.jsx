import * as React from "react";
import { RotatingLines } from "react-loader-spinner";

const fetchData = async ({ query = "", page = 0, tag = "" }) => {
  return fetch(
    `https://hn.algolia.com/api/v1/search?query=${query}&tags=${encodeURIComponent(
      tag
    )}&page=${page}`
  )
    .then((response) => response.json())
    .then((json) => ({
      results: json.hits || [],
      pages: json.nbPages || 0,
      resultsPerPage: json.hitsPerPage || 5
    }));
};

export default function HackerNewsSearch() {
  const [query, setQuery] = React.useState("");
  const [results, setResults] = React.useState([]);
  const [tag, setTag] = React.useState("story");
  const [page, setPage] = React.useState(0);
  const [resultsPerPage, setResultsPerPage] = React.useState(0);
  const [totalPages, setTotalPages] = React.useState(50);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    fetchData({query,tag,page}).then(({ results, pages, resultsPerPage }) => {
      setResults(results);
      setTotalPages(pages);
      setResultsPerPage(resultsPerPage);
      setLoading(false);
    });
  },[query,tag,page]);

  const handleSearch = (e) => {
    console.log('handleSearch ' + e.target.value);
    setQuery(e.target.value);
    setPage(0);
  };

  const handleTag = (e) => {
    setTag(e.target.value);
    setPage(0);
  };

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    setPage(page - 1);
  };

  return (
    <main>
      <h1>Hacker News Search</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="query">Search</label>
          <input
            type="text"
            id="query"
            name="query"
            value={query}
            onChange={handleSearch}
            placeholder="Search Hacker News..."
          />
        </div>
        <div>
          <label htmlFor="tag">Tag</label>
          <select id="tag" name="tag" onChange={handleTag} value={tag}>
            <option value="story">Story</option>
            <option value="ask_hn">Ask HN</option>
            <option value="show_hn">Show HN</option>
            <option value="poll">Poll</option>
          </select>
        </div>
      </form>
      <section>
        <header>
          <h2>
            <span>
              {results.length === 0 ? "No Results" : `Page ${page + 1} of ${totalPages}`}
            </span>
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="20"
              visible={loading}
            />
          </h2>
          <div>
            <button className="link" onClick={handlePrevPage} disabled={page === 0}>
              Previous
            </button>
            <button className="link" onClick={handleNextPage} disabled={page === totalPages - 1}>
              Next
            </button>
          </div>
        </header>
        <ul>
          {results.map(({ url, objectID, title }, index) => {
            const href =
              url || `https://news.ycombinator.com/item?id=${objectID}`;

            return (
              <li key={objectID}>
                <span>{index+1+(page*resultsPerPage)}.</span>
                <a href={href} target="_blank" rel="noreferrer">
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </main>
  );
}

/*
In this challenge, we'll be fetching data from the Hacker News API. However, unlike the other effects challenges, the state and event handlers for this one don't need updating. Instead, given the fetchData function, you'll need to synchronize your component with the Hacker News API and then update the JSX appropriately.

This one is tricky so take your time and think it through. Anywhere in the JSX you see null or TODO you'll need to update it.

Tasks
1. Fetch data based on the search query
2. Display the loading state while fetching
3. Fetch new results when the tag filter changes
4. Allow the user to navigate to the next and previous pages
5. Disable the Next and Previous buttons based on the number of pages
6. Display the results in a numbered list, with each page showing the correct position of each post
*/
