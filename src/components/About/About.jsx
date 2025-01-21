import "./About.css";
import Avatar from "../Avatar/Avatar";
import { useState } from "react";

function About() {
  const [isReduced, setIsReduced] = useState(true);
  const handleExpand = () => {
    const aboutSectionLength = !isReduced;
    setIsReduced(aboutSectionLength);
  };
  return (
    <div className="about">
      <div className="about__avatar">
        <Avatar></Avatar>
      </div>
      <div className="about__author">
        <h2 className="about__title">About the author</h2>
        <div className="about__description">
          <p>
            Joseph Wickoren is a content creator and computer science student
            from Kansas City, specializing in web development. His early
            exposure to tools like Photoshop, InDesign, and Premiere shaped his
            creative foundation, which he applied in school and for his father’s
            website.{isReduced && <span className="about__ellipsis">..</span>}
          </p>
          {isReduced ? (
            <button className="about__show-more-button" onClick={handleExpand}>
              Show More
            </button>
          ) : (
            <>
              <p>
                Initially pursuing pre-med studies at the University of Kansas,
                Joseph was inspired by the digital content produced by
                individual health consultants. This sparked a shift in his focus
                toward web development and content creation. His curiosity led
                him to explore topics like Boolean algebra, machine learning,
                Alan Turing, the history of the web, software architecture, data
                science, and databases. Along the way, his growing passion for
                computers and programming began to surpass his interest in
                medicine.
              </p>
              <p>
                After being exposed to Python and some of his colleagues'
                embedded systems projects, Joseph decided to change his major to
                computer science. He gained a basic understanding of python and
                later applied some of these skills to JavaScript and web
                development, particularly declarative programming with React.
                Joseph honed his skills through TripleTen’s rigorous 10-month
                training program, mastering HTML, CSS, JavaScript, React, and
                backend technologies like Node.js and MongoDB.
              </p>
              <p>
                With extensive experience in the MERN stack, he is now actively
                seeking a role as a full-stack web developer. Beyond securing a
                full-time developer position this year, Joseph plans to use his
                expertise to create side projects, including health-focused
                websites and digital content that emphasizes integrative and
                holistic approaches to well-being.
              </p>
              <button
                className="about__show-more-button"
                onClick={handleExpand}
              >
                Show Less
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default About;
