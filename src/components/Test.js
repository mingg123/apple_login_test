import { useState } from "react";
function Test() {
  const [error, setError] = useState(false);
  const user = {
    name: "hihi",
  };
  return (
    <>
      {user.id}
      <button
        onClick={() => {
          throw Error("test Error");
        }}
      >
        Break the world
      </button>
    </>
  );
}

export default Test;
