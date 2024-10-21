import React from "react";
import "./Home2.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { setActiveBox } from "../../redux/slices/activeBoxSlice";

const Home2 = () => {
  const dispatch = useDispatch();
  const activeBox = useSelector((state) => state.activeBox.activeBox);

  // Định nghĩa các kiểu inline cho hộp "active"
  const activeStyle = {
    border: " 1px solid #9ba2e0",
  };

  return (
    <div className="home2">
      {/* Phần About Us */}
      <div className="home2_aboutus">
        <div className="home2_aboutus_l">
          <img src="imgHome2/Illustration-1.png" alt="imghome2-1" />
        </div>
        <div className="home2_aboutus_r">
          <h1>About Us</h1>
          <h2>
            We are the best beauty
            <br />
            clinic
          </h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur
            <br />
            adipiscing elit. Elit, quam suscipit purus donec
            <br />
            amet. Egestas volutpat facilisi eu libero. Nunc,
            <br /> ipsum ornare mauris sit quam quis enim. Varius
            <br />
            tellus in suspendisse placerat.
          </h3>
          <h4>Learn More</h4>
        </div>
      </div>

      {/* Phần Main Services */}
      <div className="home2_mainservices">
        <h1>Main Services</h1>
        <h2>Our focus services</h2>
        <h3>Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className="home2_bg3">
        <div className="home2_bg1">
          {/* Phần Three Boxes */}
          <div className="home2_threebox">
            <div
              className={`home2_threebox_l ${activeBox === "left" ? "active" : ""}`}
              onClick={() => dispatch(setActiveBox("left"))} // Sử dụng dispatch
              style={activeBox === "left" ? activeStyle : {}}
            >
              <img src="imgHome2/icon-2.png" alt="Beauty consultation" />
              <h1>Beauty consultation</h1>
              <h2>
                Lorem ipsum dolor sit
                <br />
                amet, consectetur <br /> adipiscing.
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>

            <div
              className={`home2_threebox_m ${activeBox === "middle" ? "active" : ""}`}
              onClick={() => dispatch(setActiveBox("middle"))} // Sử dụng dispatch
              style={activeBox === "middle" ? activeStyle : {}}
            >
              <img src="imgHome2/icon-2 (1).png" alt="Skin treatments" />
              <h1>Skin treatments</h1>
              <h2>
                Lorem ipsum dolor sit
                <br />
                amet, consectetur <br /> adipiscing.
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>

            <div
              className={`home2_threebox_r ${activeBox === "right" ? "active" : ""}`}
              onClick={() => dispatch(setActiveBox("right"))} // Sử dụng dispatch
              style={activeBox === "right" ? activeStyle : {}}
            >
              <img src="imgHome2/icon-3.png" alt="Beauty product" />
              <h1>Beauty product</h1>
              <h2 className="text_services6">
                Lorem ipsum dolor sit
                <br />
                amet, consectetur <br /> adipiscing.
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>
          </div>
          <div className="home2_whychoose">
            <div className="home2_whychoose_l">
              <h1>Why choosing us?</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit ut aliquam, purus sit amet luctus
                <br /> venenatis.
              </h2>
            </div>
            <div className="home2_whychoose_r">
              <img className="img2" src="imgHome2/Group 3.png" alt="img1" />
            </div>
          </div>
        </div>
        <div className="home2_theblog">
          <h1>The Blog</h1>
          <h2>Our latest news</h2>
          <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <div className="home2_bg2">
          <div className="home2_3mentor">
            <div class="mentor_3">
                        <img src="imgHome2/unsplash_3ewkNkfJj2k.png" alt="" />

              <h1>
                How much does a consultation <br /> cost at our clinic?
              </h1>
              <h2>
                A wonderful serenity has taken <br />
                possession of my entire soul,
                <br />
                like these sweet mornings ...
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>
            <div class=" mentor_3">
              <img src="imgHome2/unsplash_7tDGb3HrITg.png" alt="" />
              <h1>Watch out! don't choose the wrong beauty product</h1>
              <h2>
                A wonderful serenity has taken
                <br />
                possession of my entire soul,
                <br />
                like these sweet mornings ...
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>
            <div class="mentor_3">
              <img src="imgHome2/unsplash_0_McYfdyEDA.png" alt="" />
              <h1>
                About skin care you need to
                <br /> know
              </h1>
              <h2>
                A wonderful serenity has taken <br />
                possession of my entire soul,
                <br />
                like these sweet mornings ...
              </h2>
              <h3>
                Learn more
                <FontAwesomeIcon
                  icon={faAnglesRight}
                  style={{ color: "#FF64AE", marginLeft: "11px" }}
                />
              </h3>
            </div>
          </div>
          <div className="home2_request">
            <div className="home2_request_l">
              <h1>Request call services</h1>
              <h2>
                Lorem ipsum dolor sit amet, consect
                <br /> adipiscing elit
                <span className="contact-us">Contact Us.</span>
              </h2>
            </div>
            <div className="home2_request_r">
              <img src="imgHome2/Request Call Form.png" alt="image1"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home2;
