import "./About.css";
import Avatar from "../Avatar/Avatar";

function About() {
  return (
    <div className="about">
      <div className="about__avatar">
        <Avatar></Avatar>
      </div>
      <div className="about__author">
        <h2 className="about__title">About the author</h2>
        <p className="about__description">
          Here is a couple paragraphs about me. Here's one. Here's another one.
        </p>
      </div>
    </div>
  );
}

export default About;
