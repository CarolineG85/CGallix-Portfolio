function AboutMe() {
  return (
    <div className="about-page">
      <div className="about-title">
        <div className="title-thumbnail">
          <h1 className="habout">About me</h1>
          <div className="thumbnail">
            <img src="/thumbnail-crop.png" alt="my animated thumbnail" />
          </div>
        </div>

        <div className="cv-button">
          <a href="/CvCarolineGallix.pdf">
            <button>
              Get my CV
              <div className="arrow-wrapper">
                <div className="arrow"></div>
              </div>
            </button>
          </a>
        </div>
      </div>
      <div className="presentation">
        <div className="experience">
          <p>
            Tech, a word that many Millennials are familiar with because we grew
            up surrounded by it. While other kids spent their time playing with
            toys and dolls, I did too, but I quickly transitioned to computers,
            immersing myself in games like The Sims. Growing up alongside the
            internet, the web, and various technologies made me realize how much
            easier our lives can be with them. Honestly, I cannot imagine life
            without them now! <br />
            <br />
            I was not initially destined for a career in web development. I
            studied Human Sciences and became my own boss as a sophrologist,
            working in a place where other therapists also practiced. The 
            COVID-19 forced me to close my business. Although I
            found another job, I always felt the desire to do something
            different, something fun, useful for both others and myself. Helping
            people is my passion, and I vividly remember collaborating with
            developers for my website and CRM when I started my business. While
            coding intrigued me, it was not my top priority at the time. <br />
            <br />
            That is why, in 2023, I decided to embark on a new career as a full
            stack developer. I will continue to offer my skills and advice to
            those looking to develop their digital projects, innovate, and
            achieve their goals at work or in their lives, thanks to the web...
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
