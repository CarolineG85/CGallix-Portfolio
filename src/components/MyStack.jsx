function MyStack() {
  return (
    <div className="stack-page">
      <div className="stack-title">
        <h1>My stack</h1>
        <h2>Here are some of my skills</h2>
      </div>
      <div className="skills-container">
        <div className="stack-container">
          <h1>Frontend</h1>
          <div className="stack">
            <button className="button">React.js</button>
          </div>
          <div className="stack">
            <button className="button">SASS</button>
          </div>
        </div>
        <div className="stack-container">
          <h1>Backend</h1>
          <div className="stack">
            <button className="button">Express</button>
          </div>
          <div className="stack">
            <button className="button">Node.js</button>
          </div>
          <div className="stack">
            <button className="button">MySQL</button>
          </div>
        </div>
        <div className="stack-container">
          <h1>Others</h1>
          <div className="stack">
            <button className="button">Figma</button>
          </div>
          <div className="stack">
            <button className="button">Trello</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyStack;
