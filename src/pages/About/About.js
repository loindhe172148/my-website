import React, { useState } from "react";
import "./About.scss";
const mentors = [
  {
    imgSrc: "imgHome1/unsplash_pTrhfmj2jDA.png",
    title: "Surgeon",
    name: "Briyan Nevalli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "imgHome1/unsplash_FVh_yqLR9eA.png",
    title: "Dermatologist",
    name: "Bella sebastian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "imgHome1/unsplash_mEZ3PoFGs_k.png",
    title: "Stylist expert",
    name: "Lilly Adams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
const About = () => {
  const [activeMentor, setActiveMentor] = useState(1); // Mặc định là mentor thứ hai

  const handleClick = (index) => {
    setActiveMentor(index); // Cập nhật mentor đang active khi click
  };
  return (
    <div className="about">
      <>
        <div>
          <div className="about_sectionabout">
            <h1>About</h1>
            <h2>
              We are a leading beauty clinic that has
              <br />
              been around since 2002
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam,
              <br />
              purus sit amet luctus venenatis
            </h3>
          </div>
          <div className="about_bg1">
            <div className="about_imagesabout">
              <img src="imgAbout/unsplash_DE6rYp1nAho (1).png" alt="" />
              <button className="about_play-button">
                <img src="imgAbout/Play Button (2).png" alt="" />
              </button>
            </div>
            <div className="textProfess">
              <h1>Professional Teams</h1>
              <h2>The Professional expert</h2>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                aliquam.
              </h3>
            </div>
            <div className="threeMentor">
              {mentors.map((mentor, index) => (
                <div
                  className={`mentor ${activeMentor === index ? "active" : ""}`}
                  onClick={() => handleClick(index)}
                  key={index}
                >
                  <img
                    className="img1"
                    src={mentor.imgSrc}
                    alt={mentor.title}
                  />
                  <h1 className="mentor-title">{mentor.title}</h1>
                  <h2 className="mentor-name">{mentor.name}</h2>
                  <p className="mentor-description">{mentor.description}</p>
                  <img
                    className="img2"
                    src="imgHome1/Social Media (1).png"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="about_sectionslogan">
          <h1>Business Slogan</h1>
          <h2>
            Best responsibility and service
            <br />
            for our customers
          </h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            <br />
            purus sit amet luctus venenatis
          </h3>
        </div>
        <div className="about_bg2">
        <div className="about_sectionvison">
          <div>
            <img src="imgAbout/Illustration-1 (1).png" alt="" />
          </div>
          <div className="about_textvision">
            <h1>Our Vision</h1>
            <h2>
              Be the best and go <br />
              international
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Elit, quam suscipit purus donec
              <br />
              amet. Egestas volutpat facilisi eu libero.
              <br />
              <span style={{ display: "block", marginBottom: 25 }} />
              Nunc, ipsum ornare mauris sit quam quis enim.
              <br />
              Varius tellus in suspendisse placerat.
            </h3>
          </div>
        </div>
        <div className="about_sectionmisison">
          <div className="about_textvision">
            <h1>Our Mission</h1>
            <h2>
              Special & premium service
              <br /> to any clients
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Elit, quam suscipit purus donec
              <br />
              amet. Egestas volutpat facilisi eu libero.
              <br />
              <span style={{ display: "block", marginBottom: 22 }} />
              Nunc, ipsum ornare mauris sit quam quis enim.
              <br />
              Varius tellus in suspendisse placerat.
            </h3>
          </div>
          <div>
            <img src="imgAbout/Illustration-2.png" alt="" />
          </div>
        </div>
        <div className="about_sectionclients">
          <h1>Our Clients</h1>
          <h2>Well-known agencies</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h3>
        </div>
        <div className="about_logo">
          <div>
            <img src="imgAbout/LOGO1.png" alt="" />
          </div>
          <div>
            <img src="imgAbout/LOGO2.png" alt="" />
          </div>
          <div>
            <img src="imgAbout/LOGO3.png" alt="" />
          </div>
          <div>
            <img src="imgAbout/LOGO4.png" alt="" />
          </div>
          <div>
            <img src="imgAbout/LOGO5.png" alt="" />
          </div>
        </div>
        </div>
      </>
    </div>
  );
};

export default About;
