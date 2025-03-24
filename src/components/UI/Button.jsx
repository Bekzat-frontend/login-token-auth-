
function Button({ Children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{Children}</button>
    </>
  );
}


export default Button;
