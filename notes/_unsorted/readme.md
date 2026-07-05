https://medium.com/@eric_abell/mastering-the-basics-of-reacts-useeffect-a-beginner-s-guide-3173c399b9e1

When I first started diving into React, useEffect felt like one of the most mysterious hooks. It wasn’t long before I realized it’s one of the most powerful tools in the React ecosystem. If you’ve been working with React or are just starting out, understanding useEffect is essential for managing side effects in your applications.

In this post, I’ll break down useEffect into simple, digestible pieces to help you grasp the basics and start using it effectively.

What is useEffect?
    In simple terms, useEffect is a React Hook that lets you perform side effects in function components. Side effects can include:

    Fetching data from an API
    Subscribing to a service
    Manually updating the DOM
    Setting up timers or intervals

Before hooks, side effects were typically handled in lifecycle methods like componentDidMount and componentDidUpdate. useEffect now simplifies this process.

Basic Syntax of useEffect
    Here’s what the most basic useEffect looks like:

        import React, { useState, useEffect } from 'react';
        function ExampleComponent() {
            const [count, setCount] = useState(0);
            useEffect(() => {
                document.title = `You clicked ${count} times`;
            });
            return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={() => setCount(count + 1)}>
                    Click me
                    </button>
                </div>
            );
        }

How It Works
    The useEffect hook takes two arguments:
        A function (your side effect).
        An optional dependency array.

In the example above:
    Every time the component renders, useEffect updates the document title to reflect the number of times the button was clicked.

The Dependency Array Explained
The real power of useEffect comes from controlling when it runs using the dependency array.

Get Eric Abell’s stories in your inbox
Join Medium for free to get updates from this writer.

Enter your email
Subscribe

Remember me for faster sign in

1. Run on Every Render (No Dependency Array):

useEffect(() => {
  console.log('Runs after every render');
});
2. Run Only Once (Empty Dependency Array):

useEffect(() => {
  console.log('Runs only once (like componentDidMount)');
}, []);
3. Run When State/Props Change:

useEffect(() => {
  console.log('Runs when count changes');
}, [count]);
By passing [count] as a dependency, the effect only runs when the count state changes, making it more efficient.

Cleaning Up Effects
Sometimes, side effects need cleanup — like removing event listeners or canceling API calls. useEffect lets you return a cleanup function to handle this.

useEffect(() => {
  const timer = setInterval(() => {
    console.log('Interval running');
  }, 1000);
return () => {
    clearInterval(timer);  // Cleanup on unmount
    console.log('Interval cleared');
  };
}, []);
Real-World Example: Fetching Data
A common use case for useEffect is fetching data from an API:

useEffect(() => {
  async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  }
  
  fetchData();
}, []);
Here, the API call runs only once when the component mounts.

Common Pitfalls to Avoid
Missing Dependency Array: This can lead to infinite loops. Always add dependencies or use an empty array.
Incorrect Dependencies: Forgetting dependencies can lead to stale or incorrect data. Make sure all relevant state/props are in the array.
Too Many Effects: Break down large effects into smaller, manageable ones for readability.
Why useEffect Matters
Mastering useEffect allows you to:

Handle async data fetching seamlessly.
Manage subscriptions and event listeners cleanly.
Avoid unnecessary re-renders by fine-tuning when effects run.
Whether you’re working on personal projects or large-scale applications, getting comfortable with useEffect can greatly enhance your React skills.