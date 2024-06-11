import { useEffect, useState } from 'react'; // import useState from react

// Create a function component called App and exporting the state for use.
export default function App() {

  // useState is a Hook that lets you add React state to function components.
  const [advice, setAdvice] = useState(" "); // initialize useState to an empty string.
  const [count, setCount] = useState(0); // initialize useState to 0.

  // async function getAdvice()
  async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice'); // fetch the advice from the API endpoint and return it as a promise object.
    const data = await response.json(); // parse the JSON data from the response object and return it as a promise object.
    console.log(data.slip.advice); // log the advice to the console.
    setAdvice(data.slip.advice); // set the advice to the state.
    setCount((c) => c + 1); // set the count to the state.
  }

  useEffect(function () {
    getAdvice(); // call the getAdvice function.
  }, []); // call

  // return the advice to the screen.
  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={count} />
    </div>
  );
}

function Message(props) {
  return (
    <p>
        You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  )
}



{
  /*
  export default function App() {
  async function getAdvice() {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const data = await res.json();  // Use json() instead of Json()
      console.log(data.slip.advice);
    } catch (error) {
      console.error("Error fetching advice:", error);
    }
  }

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={getAdvice}>Get advice</button>
    </div>
  );
}
*/
}
