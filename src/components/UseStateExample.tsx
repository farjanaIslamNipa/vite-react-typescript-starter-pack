import { useEffect, useState } from "react";

const UseStateExample = () => {
const [hidden, setHidden] = useState(false)

  return (
    <div>
      <button onClick={() => setHidden((prev) => !prev)} className="bg-green-500 text-white px-4 py-2">{!hidden ? 'Show' : 'Hidden'}</button> <br />
    {!hidden && <Counter />}
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count,'render')
    const intervalId = setInterval(()=> {
      setCount((prev) => prev + 1)
    }, 1000);

    return () => {
      clearInterval(intervalId)
    }
  },[])
 return  <h1 className="border border-red-500 p-4 text-3xl inline-block mt-3">{count}</h1>
}

export default UseStateExample;