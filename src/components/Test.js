function Test() {
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
