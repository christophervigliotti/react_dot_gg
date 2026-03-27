//jsx list
  //it's a map!
    function List() {
      const friends = [
        { id: 893, name: "Lynn" },
        { id: 871, name: "Alex" },
        { id: 982, name: "Ben" },
        { id: 61, name: "Mikenzi" }
      ];
      return (
        <ul>
        {friends.map((friend) => (
            <li key={friend.id}>{friend.name}</li>
          ))}    
        </ul>
      );
    }
    export default function App() {
      return <List />;
    }
  //again, using name as the key 
    function List() {
      const friends = ["Ben", "Lynn", "Alex"];

      return <ul></ul>;
    }
  //but if you have two friends named ben...
    function List() {
      const friends = ["Ben", "Lynn", "Alex"];
      return (
        <ul>
          {friends.map((name, index) => (
            // It's common practice to use index as a key only if 
            // the list is static and won't be reordered or filtered.
            <li key={index}>
              {name}
            </li>
          ))}
        </ul>
      );
    }
    export default function App() {
      return <List />;
}

  export default function App() {
    return <List />;
  }

//ternary operator in return 
  //no parens!  interesting.
    export default function App() {
      const isLactoseTolerant = getIsLactoseTolerant();
      return isLactoseTolerant ? <LactoseTolerant /> : <LactoseIntolerant />;
    }

//render a fn in your jsx 
  //with {getTodaysDate()}
    import { getTodaysDate } from "./utils";
    function Today() {
      return <p>Today is {getTodaysDate()}</p>;
    }
    export default function App() {
      return <Today />;
    }