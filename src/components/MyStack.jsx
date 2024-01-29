function MyStack() {
  return (
    <div className="stack-page">
      <div className="stack-title">
        <h1>My stack</h1>
        <h2>Here are some of my skills</h2>
      </div>
      <div className="skills-container">
        <div className="front-container">
          <div className="front">
            <h1>Frontend</h1>
            </div>
            <div className="front-image-container">
              <div className="front-image">
                <img src="/react-grey.png" alt="logo react" title="React.js" />
              </div>
              <div className="front-image">
                <img src="/css-grey.png" alt="logo css" title="CSS"/>
              </div>
            </div>
          
        </div>
        <div className="back-container">
          <div className="back">
            <h1>Backend</h1>
            </div>
            <div className="back-image-container">
              <div className="back-image">
                <img src="/express-grey.png" alt="logo react" title="Express.js"/>
              </div>
              <div className="back-image">
                <img src="/node-grey.png" alt="logo node" title="Node.js"/>
              </div>
              <div className="back-image">
                <img src="/mysql-grey.png" alt="logo mysql" title="MySQL" />
              </div>
            </div>
          
        </div>
        <div className="others-container">
          <div className="others">
            <h1>Others</h1>
            </div>
            <div className="others-image-container">
              <div className="others-image">
                <img src="/postman-grey.png" alt="logo postman" title="Postman"/>
              </div>
              <div className="others-image">
                <img src="/vercel-grey.png" alt="logo vercel" title="Vercel" />
              </div>
              <div className="others-image">
                <img
                  className="trello"
                  src="/trello-grey 1.png"
                  alt="logo trello" title="Trello"
                />
              </div>
            </div>
          
        </div>
      </div>
    </div>
  );
}

export default MyStack;
