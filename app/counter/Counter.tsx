"use client";
import { useEffect, useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [startCounter, setStartCounter] = useState(false);
  const [stopCounter, setStopCounter] = useState(false);

  useEffect(() => {
    let interval: any;

    if (startCounter === true && stopCounter === false) {
      interval = setInterval(() => {
        setCount((count) => count + 1);
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [startCounter, stopCounter]);

  return (
    <>
      <section className="text-center">
        <p className="bg-gray-600 text-white font-semibold py-2 px-4 mx-2 my-4">
          Count is: {count}
        </p>
        <button
          onClick={() => {
            setStartCounter(true);
            setStopCounter(false);
            setCount(0);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-2"
        >
          Start Counter
        </button>
        <button
          onClick={() => {
            setStopCounter(true);
          }}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-2"
        >
          Stop Counter
        </button>
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 mx-2"
          onClick={() => setStopCounter(false)}
        >
          Resume Counter
        </button>
      </section>
    </>
  );
}
