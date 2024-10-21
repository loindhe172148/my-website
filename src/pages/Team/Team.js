import React, { useEffect } from "react";
import "./Team.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import {
  setActiveMentor,
  nextImage,
  prevImage,
  setImages,
} from "../../redux/slices/teamSlice";
const mentors = [
  {
    imgSrc: "/imgHome1/unsplash_pTrhfmj2jDA.png",
    title: "Surgeon",
    name: "Briyan Nevalli",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "/imgHome1/unsplash_FVh_yqLR9eA.png",
    title: "Dermatologist",
    name: "Bella sebastian",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "/imgHome1/unsplash_mEZ3PoFGs_k.png",
    title: "Stylist expert",
    name: "Lilly Adams",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];

const Team = () => {
  const dispatch = useDispatch();
  const { activeMentor, currentIndex, images } = useSelector((state) => state.team);
  useEffect(() => {
    const initialImages = [
      "/imgTeam/unsplash_y2T5hT7pWx4.png",
      "/imgTeam/unsplash_W7b3eDUb_2I.png",
      "/imgTeam/unsplash_y2T5hT7pWx41.png",
    ];
    dispatch(setImages(initialImages)); 
  }, [dispatch]);

  const handleClick = (index) => {
    dispatch(setActiveMentor(index)); 
  };

  const nextImageHandler = () => {
    dispatch(nextImage());
  };

  const prevImageHandler = () => {
    dispatch(prevImage());
  };

  return (
    <div className="team">
      <>
        <div className="team_bg1">
          <div className="team_textProfess">
            <h1>Our Team</h1>
            <h2>We are Professional</h2>
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
          <div className="team_assistance">
            <h1>Assistance Team</h1>
            <h2>Meet the pro assistance</h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
              aliquam.
            </h3>
          </div>
          <div className="team_assistanceproflie">
            <div>
              <img src="/imgTeam/unsplash_byGTytEGjBo.png" alt="" />
            </div>
            <div>
              <h1>
                <span className="team_name">Lina Gustav /</span>
                <span className="team_title">Pharmacist</span>
              </h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Nam id magnis at placerat
                <br />
                pulvinar euismod neque.
              </h2>
            </div>
          </div>
          <div className="team_assistanceproflie">
            <div>
              <img src="/imgTeam/unsplash_8YG31Xn4dSw.png" alt="" />
            </div>
            <div>
              <h1>
                <span className="team_name">Adam White /</span>
                <span className="team_title">Finance</span>
              </h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Nam id magnis at placerat
                <br />
                pulvinar euismod neque.
              </h2>
            </div>
          </div>
          <div className="team_assistanceproflie">
            <div>
              <img src="/imgTeam/unsplash_Fsgzm8N0hIY.png" alt="" />
            </div>
            <div>
              <h1>
                <span className="team_name">Jane Doe /</span>
                <span className="team_title">Marketer</span>
              </h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur
                <br />
                adipiscing elit. Nam id magnis at placerat
                <br />
                pulvinar euismod neque.
              </h2>
            </div>
          </div>
        </div>
        <div className="team_sectionslogan">
          <h1>
            Customer satisfaction is <br />
            our main goal
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            <br />
            purus sit amet luctus venenatis
          </h2>
        </div>
        <div className="team_lastbg">
        <div className="team_ourterti">
          <h3 className="section-subtitle">Our Testimonials</h3>
          <h2 className="section-title">What our customer says</h2>
          <p className="section-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </p>
        </div>
        <div className="testimonial-card">
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="prev-arrow"
            onClick={prevImageHandler}
          />
          <div className="testimonial-content">
            <img
              id="customer-photo"
              src={images[currentIndex]}
              alt="Customer-photo"
              className="customer-photo"
            />
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              <br />
              metus tincidunt laoreet ultricies condimentum ac integer
              <br /> aliquam. Lorem diam dignissim amet fermentum elementum dui
              <br /> dui. Aliquam sem elementum morbi imperdiet suscipit erat
              ut.
              <br /> Purus volutpat in turpis gravida blandit.
            </p>
            <div className="stars">
              <img className="img2" src="/imgTeam/Star.png" alt="" />
            </div>
          </div>
          <FontAwesomeIcon
            icon={faArrowRight}
            className="next-arrow"
            onClick={nextImageHandler}
          />
        </div>
      </div>
      </>
    </div>
  );
};

export default Team;
