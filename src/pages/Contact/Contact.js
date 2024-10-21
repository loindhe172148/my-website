import React, { useState } from "react";
import "./Contact.scss";
const infos = [
  {
    imgSrc: "imgContact/map-marker-alt.png",
    title: "Address",
    name: "101 Baker Street, NY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "imgContact/phone-alt.png",
    title: "Phone",
    name: "+896 120 5889",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
  {
    imgSrc: "imgContact/mail-bulk.png",
    title: "Mail",
    name: "mail@company.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit",
  },
];
const Contact = () => {
  const [activeinfo, setActiveinfo] = useState(1);

  const handleClick = (index) => {
    setActiveinfo(index);
  };
  return (
    <div className="contact">
      <>
        <div className="contact2">
          <div className="contact2Left">
            <div className="textContactLeft">
              <h1>Contact Us</h1>
              <h2>
                Contact service for our
                <br /> customers
              </h2>
            </div>
            <img
              src="imgHome1/Contact Animations.png"
              alt=""
              className="img-fluid"
            />
          </div>
          <div className="contact2Right">
            <div className="textContactRight">
              <h3>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                ut aliquam, purus sit amet <br /> luctus venenatis
              </h3>
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
                  className="form-input12 form-input-contact"
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
        <div className="contact_img1">
          <img src="imgContact/map.png" alt="imga" />
        </div>
        <div className="contact_contacttext">
          <h1>Get in Touch</h1>
          <h2>Get direct handling by us</h2>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam.
          </h3>
        </div>
        <div className="contact_threeinfo">
          {infos.map((info, index) => (
            <div
              className={`contact_info ${activeinfo === index ? "active" : ""}`} // Optional active class for styling
              key={index}
              onClick={() => handleClick(index)} // Handle click to set active
            >
              <div className="contact_info1">
                <img src={info.imgSrc} alt={info.title} />
              </div>
              <div className="contact_info2">{info.title}</div>
              <div className="contact_info3">{info.name}</div>
              <div className="contact_info4">{info.description}</div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Contact;
