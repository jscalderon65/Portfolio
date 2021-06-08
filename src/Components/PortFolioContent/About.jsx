import React, { useEffect } from "react";
import { animateScroll as scroll } from "react-scroll";
import { Tag } from "antd";
const About = () => {
  useEffect(() => {
    scroll.scrollToTop();
  }, []);
  return (
    <div className="About-container animate__animated animate__fadeIn">
      <div className="About-container-info">
        <div className="About-container-info-description">
          <div className="About-container-info-description-title">About me</div>
          <div className="About-container-info-description-text">
            Hi! my name is Jhonn Calderon and I am 22 years old, I am a computer
            and systems engineering student and I am currently studying the last
            year of my university career, I am very interested in software
            development and autonomous learning, my next goals include, finish
            my degree, increase my skills in mobile development and put in
            practice the knowledge acquired in my career and individually way in
            personal projects and job offers.
            <div className="About-container-info-description-text-language">
              <p>Language</p>
              Spanish (Native)
              <br />
              English (B1)
            </div>
            <div className="About-container-info-description-text-education">
              <p>Education</p>
              <b>Computer and systems engineering </b> - Universidad Católica de
              Colombia (2017 - 2021)
            </div>
            <div className="About-container-info-description-text-education">
              <p>Hobbies</p>
              Travel
              <br/>
              Photography
              <br/>
              Cycling
              <br/>
              Read

              
            </div>
          </div>
        </div>
        <div className="About-container-info-skills">
          <div className="About-container-info-skills-title">
            Software skills
          </div>
          <div className="About-container-info-skills-item">
            <div>Languages</div>
            <div>
              <Tag color="#EFD71E" style={{ color: "black", fontSize: "1rem" }}>
                JavaScript
              </Tag>
              <Tag color="#3773A5" style={{ color: "white", fontSize: "1rem" }}>
                Python
              </Tag>
              <Tag color="#00427E" style={{ color: "white", fontSize: "1rem" }}>
                C++
              </Tag>
            </div>
          </div>
          <div className="About-container-info-skills-item">
            <div>Web FrontEnd </div>
            <div>
              <Tag color="#5ED3F3" style={{ color: "white", fontSize: "1rem" }}>
                React Js
              </Tag>
              <Tag color="#006DB7" style={{ color: "white", fontSize: "1rem" }}>
                CSS3
              </Tag>
              <Tag color="#BF608F" style={{ color: "white", fontSize: "1rem" }}>
                SASS
              </Tag>
              <Tag color="#5A3A7B" style={{ color: "white", fontSize: "1rem" }}>
                Bootstrap
              </Tag>
            </div>
          </div>
          <div className="About-container-info-skills-item">
            <div>library's for React Js</div>
            <div>
              <Tag color="#7248B5" style={{ color: "white", fontSize: "1rem" }}>
                Redux
              </Tag>
              <Tag color="#0A67F5" style={{ color: "white", fontSize: "1rem" }}>
                Ant Design
              </Tag>
            </div>
          </div>
          <div className="About-container-info-skills-item">
            <div> Backend</div>
            <div>
              <Tag color="#78C839" style={{ color: "white", fontSize: "1rem" }}>
                Node Js
              </Tag>
              <Tag color="#3E3F35" style={{ color: "white", fontSize: "1rem" }}>
                Express Js
              </Tag>
              <Tag color="#F7C428" style={{ color: "black", fontSize: "1rem" }}>
                Firebase Authentication
              </Tag>
            </div>
          </div>
          <div className="About-container-info-skills-item">
            <div> DataBase </div>
            <div>
              <Tag color="#7DBF61" style={{ color: "white", fontSize: "1rem" }}>
                MongoDB
              </Tag>
              <Tag color="#F7C428" style={{ color: "black", fontSize: "1rem" }}>
                Firebase Cloud Firestore
              </Tag>
            </div>
          </div>
          <div className="About-container-info-skills-item">
            <div> Version Management</div>
            <div>
              <Tag color="#E84E32" style={{ color: "white", fontSize: "1rem" }}>
                Git
              </Tag>
              <Tag color="#161415" style={{ color: "white", fontSize: "1rem" }}>
                GitHub
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
