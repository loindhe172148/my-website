import React from "react";
import "./Home1.scss";
import { useSelector, useDispatch } from "react-redux";
import { setActiveMentor } from "../../redux/slices/mentorSlice";

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

const Home1 = () => {
  const activeMentor = useSelector((state) => state.mentor.activeMentor); 
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(setActiveMentor(index));
  };
  return (
    <div className="home1">
      <div className="textHome">
        <h1>Main Services</h1>
        <h2>
          Learn services to focus
          <br /> on your beauty
        </h2>
        <h3>
          Porta rhoncus orci condimentum vitae lobortis eu dignissim non massa.
          Non parturient
          <br /> amet, feugiat tellus sagittis, scelerisque eget nulla turpis.
        </h3>
      </div>
      <div className="p1">
        <div className="threeBox">
          <div className="box">
            <img src="imgHome1/Animation1 (1).png" alt="Beauty consultation" />
            <h2>Beauty consultation</h2>
            <p>
              Non parturient amet, feugiat <br />
              tellus sagittis, scelerisque eget
              <br /> nulla turpis.
            </p>
          </div>
          <div className="box">
            <img src="imgHome1/Animation2.png" alt="Beauty consultation" />
            <h2>Skin treatments</h2>
            <p>
              Non parturient amet, feugiat <br />
              tellus sagittis, scelerisque eget
              <br /> nulla turpis.
            </p>
          </div>
          <div className="box">
            <img src="imgHome1/Animation3.png" alt="Beauty consultation" />
            <h2>Beauty product</h2>
            <p>
              Non parturient amet, feugiat <br />
              tellus sagittis, scelerisque eget
              <br /> nulla turpis.
            </p>
          </div>
        </div>
        <div className="leftright">
          <div className="left">
            <div>
              <h1>About Us</h1>
            </div>
            <div>
              <h2>We are the best beauty clinic</h2>
            </div>
            <div>
              <h3>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Elit, quam suscipit purus donec <br />
                amet. Egestas volutpat facilisi eu libero. Nunc,
                <br /> ipsum ornare mauris sit quam quis enim. Varius
                <br /> tellus in suspendisse placerat.
                <span style={{ display: "block", marginBottom: "22px" }}></span>
                Id dui erat sed quam tellus in purus. Pellentesque
                <br /> congue fringilla cras tellus enim.
              </h3>
            </div>
            <div className="button">
              <h1 className="img1">Learn More</h1>
              <img
                className="img2"
                src="imgHome1/Play Button (6).png"
                alt="Beauty consultation"
              />
            </div>
          </div>
          <div className="right">
            <img id="anhnha" src="imgHome1/unsplash_LRXYS0tSyGc.png" alt="" />
          </div>
        </div>
        <div className="textProfess">
          <h1>Professional Teams</h1>
          <h2>The Professional expert</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </h3>
        </div>
      </div>
      <div className="p2">
        <div className="threeMentor">
          {mentors.map((mentor, index) => (
            <div
              className={`mentor ${activeMentor === index ? "active" : ""}`}
              onClick={() => handleClick(index)}
              key={index}
            >
              <img className="img1" src={mentor.imgSrc} alt={mentor.title} />
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
        <div className="contact1">
          <div className="contactLeft">
            <img
              src="imgHome1/Contact Animations.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="contactRight">
            <div className="textContact">
              <h1>Contact Us</h1>
              <h2>
                Send your inquiry to
                <br /> our expert team
              </h2>
              <h3>Lorem ipsum dolor sit amet nulla turapis tellus.</h3>
            </div>
            <div className="contact-form">
              <div className="form-row">
                <input
                  type="text"
                  placeholder="First name"
                  className="form-input11"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="form-input12"
                />
              </div>
              <div className="form-row">
                <input
                  type="email"
                  placeholder="Email address"
                  className="form-input2 "
                />
              </div>
              <div className="form-row">
                <input
                  type="text"
                  placeholder="Subject message"
                  className="form-input2 "
                />
              </div>
              <div className="form-row2">
                <textarea
                  style={{ resize: "none" }}
                  placeholder="Your inquiry here"
                  className="form-input3  "
                />
              </div>
              <input id="submit" type="submit" value="Send Message"></input>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home1;
