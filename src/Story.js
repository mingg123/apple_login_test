function Story() {
  return (
    <div>
      <button
        onClick={() => {
          throw Error("Story Error");
        }}
      >
        Story show error(7.0)
      </button>
    </div>
  );
}

export default Story;
