import { useState } from "react";
function HoveringChris() {
  return (
    <div className="christmas">
      <h1 className="christmas-title">Christmas in one click</h1>
      <p className="christmas-paragraph">
        In a group of 5, during a hackathon of 24h, we had to create an app
        inspired by Christmas and we won the hackathon. Here you have an app (
        <strong>
          <em>not a responsive one</em>
        </strong>
        ) where you can find a wishlist to send to Santa, an Advent Calendar of
        Christmas movies and some Christmas recipes, to get well prepared to
        Christmas night!
        <br /> <span className="christmas-span">React Sass Node</span>
      </p>

      <button className="button-christmas">
        <a href="https://noelenunclic.vercel.app/">Click here</a>
      </button>
    </div>
  );
}

function HoveringWild() {
  return (
    <div className="wild-eats">
      <h1 className="wild-title">Wild eats</h1>
      <p className="wild-paragraph">
        In a group of 5, we had to create a website in which users can find the
        best restaurants around our development school. They are categorized by
        type of food, meal prices, location and popularity.
        <br /> <span className="wild-span">Html CSS Javascript</span>
      </p>

      <button className="button-wild">
        <a href="https://ange230700.github.io/wild-eats/">Click here</a>
      </button>
    </div>
  );
}

function HoveringDrunkard() {
  return (
    <div className="drunkard">
      <h1 className="drunkard-title">Drunkard</h1>
      <p className="drunkard-paragraph">
        In a group of 4, we had to find an API and to create an app with it. We
        chose cocktails and developed a cocktail bar where users can discover
        their favorite recipes, find inspiration from their own ingredients or
        have fun with a quizz!
        <br /> <span className="drunkard-span">React Sass Node</span>
      </p>

      <button className="button-drunk">
        <a href="https://drunk.vercel.app/">Click here</a>
      </button>
    </div>
  );
}
function MyProjects() {
  const [isHoveringChristmas, setIsHoveringChristmas] = useState(false);
  const [isHoveringDrunkard, setIsHoveringDrunkard] = useState(false);
  const [isHoveringWild, setIsHoveringWild] = useState(false);

  const mouseOverWild = () => {
    setIsHoveringWild(true);
  };
  const mouseOutWild = () => {
    setIsHoveringWild(false);
  };

  const mouseOverDrunkard = () => {
    setIsHoveringDrunkard(true);
  };
  const mouseOutDrunkard = () => {
    setIsHoveringDrunkard(false);
  };
  const mouseOverChris = () => {
    setIsHoveringChristmas(true);
  };
  const mouseOutChris = () => {
    setIsHoveringChristmas(false);
  };
  return (
    <>
      <div className="projects-page">
        <div className="projects-title">
          <h1>My projects</h1>
          <h2>
            Here are three of my projects, some of which were created by groups
            during my training
          </h2>
        </div>
        <div className="projects-presentation-desktop">
          <div
            className="wild-container"
            onMouseOver={mouseOverWild}
            onMouseOut={mouseOutWild}
            onFocus={mouseOverWild}
            onBlur={mouseOutWild}
          >
            {isHoveringWild && <HoveringWild />}
          </div>
          <div
            className="drunkard-container"
            onMouseOver={mouseOverDrunkard}
            onMouseOut={mouseOutDrunkard}
            onFocus={mouseOverDrunkard}
            onBlur={mouseOutDrunkard}
          >
            {isHoveringDrunkard && <HoveringDrunkard />}
          </div>

          <div
            className="christmas-container"
            onMouseOver={mouseOverChris}
            onMouseOut={mouseOutChris}
            onFocus={mouseOverChris}
            onBlur={mouseOutChris}
          >
            {isHoveringChristmas && <HoveringChris />}
          </div>
        </div>
      </div>
      <div className="projects-presentation-mobile">
        <div className="wild-eats">
          <h1 className="wild-title">Wild eats</h1>
          <p className="wild-paragraph">
            In a group of 5, we had to create a website in which users can find
            the best restaurants around our development school. They are
            categorized by type of food, meal prices, location and popularity.
            <br /> <span className="wild-span">Html CSS Javascript</span>
          </p>
          <br />
          <button className="button-wild">
            <a href="https://ange230700.github.io/wild-eats/">Click here</a>
          </button>
        </div>

        <div className="drunkard-container">
          <div className="drunkard">
            <h1 className="drunkard-title">Drunkard</h1>
            <p className="drunkard-paragraph">
              In a group of 4, we had to find an API and to create an app with
              it. We chose cocktails and developed a cocktail bar where users
              can discover their favorite recipes, find inspiration from their
              own ingredients or have fun with a quizz!
              <br /> <span className="drunkard-span">React Sass Node</span>
            </p>
            <br />
            <button className="button-drunk">
              <a href="https://drunk.vercel.app/">Click here</a>
            </button>
          </div>
        </div>
        <div className="christmas">
          <h1 className="christmas-title">Christmas in one click</h1>
          <p className="christmas-paragraph">
            In a group of 5, during a hackathon of 24h, we had to create an app
            inspired by Christmas. Here you have an app (
            <strong>
              <em>not a responsive one</em>
            </strong>
            ) where you can find a wishlist to send to Santa, an Advent Calendar
            of Christmas movies and some Christmas recipes, to get well prepared
            to Christmas night!
            <br /> <span className="christmas-span">React Sass Node</span>
          </p>
          <br />
          <button className="button-christmas">
            <a href="https://noelenunclic.vercel.app/">Click here</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default MyProjects;
