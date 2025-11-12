function Button(props) {
  return (
    <>
      <button
        className={`bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white px-3 py-1 rounded-lg ${props.className}`}
        onClick={props.callback}
      >
        {props.icon} {props.text}
      </button>
    </>
  );
}

export { Button };
