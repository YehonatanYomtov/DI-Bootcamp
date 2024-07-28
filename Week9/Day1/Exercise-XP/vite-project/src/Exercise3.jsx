import "./Exercise.css";

function Exercise() {
  const containerStyle = {
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    gap: "2rem",
    alignItems: "center",
  };

  const h1HeaderStyle = {
    color: "red",
    backgroundColor: "lightblue",
  };

  const imgStyle = {
    width: "30rem",
  };

  const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  return (
    <div style={containerStyle}>
      <h1 style={style_header}>I am a colored JSX Element</h1>
      <p className="para">This is a Paragraph</p>
      <a href="">This is a Link</a>

      <form>
        <h1>This is a Form:</h1>

        <label>Enter your name:</label>
        <input type="text" />
        <button>Submit</button>
      </form>

      <h1>Here is an Image:</h1>
      <img
        style={imgStyle}
        src="https://cdn.prod.website-files.com/61b9e37d1106b57eaa076efd/629df2647290ef3b75d74f2c_a2bc81309136b0c1864f582b1af95307_546c60cadefd5c0f5e78014543c554cb.png"
        alt="React logo"
      />

      <h1>This is an List:</h1>

      <ul>
        <li>Coffee</li>
        <li>Tea</li>
        <li>Milk</li>
      </ul>
    </div>
  );
}

export default Exercise;
