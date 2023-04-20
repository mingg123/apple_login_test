import { useState } from "react";

function Home() {
  const [error, setError] = useState(false);
  return (
    <div>
      {/* {error && new Error("error")}
      <button onClick={() => setError(true)}>Home show error</button> */}
      <button
        onClick={() => {
          throw Error("Home Error");
        }}
      >
        Home show error(4.0)
      </button>
    </div>
  );
}

export default Home;
