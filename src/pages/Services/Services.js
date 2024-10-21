import React, { useState } from "react";
import "./Services.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleRight,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  const [expanded, setExpanded] = useState([true, false, false, false]);
  const [margins, setMargins] = useState(["30px", "-23px", "-22px", "25px"]); // Initial margin values
  const toggleExpand = (index) => {
    // Update the expanded state: toggle the clicked item and collapse others
    const newExpanded = expanded.map((item, i) =>
      i === index ? !item : false
    );
    setExpanded(newExpanded);

    // Update margins: clicked item to 30px, all others to their original margins
    const newMargins = margins.map((margin, i) => {
      // If the item is clicked and expanded, set to 30px; otherwise, revert to original margin
      return i === index
        ? newExpanded[index]
          ? "30px"
          : getOriginalMargin(i)
        : getOriginalMargin(i);
    });
    setMargins(newMargins);
  };

  // Function to return original margin values
  const getOriginalMargin = (index) => {
    switch (index) {
      case 0:
        return "-22px";
      case 1:
        return "-23px"; // or whatever the original value is
      case 2:
        return "-22px"; // or whatever the original value is
      case 3:
        return "25px"; // or whatever the original value is
      default:
        return "0px"; // Default case if needed
    }
  };

  return (
    <div className="services">
      <>
        <div className="services_sectionoutservices">
          <h1>Our Services</h1>
          <h2>We focus on your beauty</h2>
          <h3>Lorem ipsum dolor sit amet</h3>
          <div className="services_imageservices">
            <div>
              <img src="imgServices/unsplash_5TJ0Hoy5FLY.png" alt="" />
            </div>
            <div>
              <img src="imgServices/unsplash_ZOT2Mewzmh8.png" alt="" />
            </div>
          </div>
          <div className="services_imageservices2">
            <div>
              <img src="imgServices/unsplash_gzfIO69Q6eM.png" alt="" />
            </div>
            <div>
              <img src="imgServices/unsplash_pTrhfmj2jDA (1).png" alt="" />
            </div>
          </div>
        </div>
        <div className="services_sectionvison">
          <div>
            <img src="imgServices/Animation1 (2).png" alt="" />
          </div>
          <div className="services_textvision">
            <h1>Beauty Consultation</h1>
            <h2>
              We services beauty
              <br />
              consultation
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Elit, quam suscipit purus donec
              <br />
              amet. Egestas volutpat facilisi eu libero.
            </h3>
            <h4>
              Make an Appointment{" "}
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{
                  color: "#ff64ae",
                  marginLeft: "11px",
                  fontSize: "18px",
                }}
              />
            </h4>
          </div>
        </div>
        <div className="services_sectionvison services_sectionvison2">
          <div className="services_textvision">
            <h1>Skin Treatements</h1>
            <h2>
              Skin care and
              <br /> treatment by expert
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Elit, quam suscipit purus donec
              <br />
              amet. Egestas volutpat facilisi eu libero.
            </h3>
            <h4>
              Make an Appointment{" "}
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{
                  color: "#ff64ae",
                  marginLeft: "11px",
                  fontSize: "18px",
                }}
              />
            </h4>
          </div>
          <div>
            <img src="imgServices/Animation2 (1).png" alt="" />
          </div>
        </div>
        <div className="services_sectionvison services_sectionvison3">
          <div>
            <img src="imgServices/Animation3 (1).png" alt="" />
          </div>
          <div className="services_textvision">
            <h1>Beauty Product</h1>
            <h2>
              We present quality
              <br /> beauty products
            </h2>
            <h3>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit. Elit, quam suscipit purus donec
              <br />
              amet. Egestas volutpat facilisi eu libero.
            </h3>
            <h4>
              Make an Appointment{" "}
              <FontAwesomeIcon
                icon={faAngleDoubleRight}
                style={{
                  color: "#ff64ae",
                  marginLeft: "11px",
                  fontSize: "18px",
                }}
              />
            </h4>
          </div>
        </div>
        <div className="services_sectionslogan">
          <div className="services_textlogan">
            <h1>
              Best responsibility and service
              <br />
              for our customers
            </h1>
            <h2>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit ut <br />
              aliquam, purus sit amet luctus venenatis
            </h2>
          </div>
          <div>
            <img src="imgServices/Play Button (3).png" alt="" />
          </div>
        </div>
        <div className="service_faq-section">
          <h2 className="service_faq-title">Services FAQ's</h2>

          {[
            "Is beauty consultation handled thoroughly?",
            "Can I be beautiful in an instant time?",
            "Are there any side effects to the treatment methods or treatments at this clinic?",
            "Do professionals have accreditation in their respective fields?",
          ].map((question, index) => (
            <div
              key={index}
              className="service_faq-item"
              style={{ marginBottom: margins[index] }} // Set dynamic margin-bottom
            >
              <button
                className="service_faq-question"
                aria-expanded={expanded[index]}
                onClick={() => toggleExpand(index)}
              >
                {question}
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="service_faq-icon"
                />
              </button>
              <div
                className="service_faq-answer"
                style={{
                  maxHeight: expanded[index] ? "216px" : "0px",
                  visibility: expanded[index] ? "visible" : "hidden",
                  overflow: "hidden",
                }}
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
                  aliquam, purus sit amet luctus venenatis, lectus magna
                  fringilla urna.
                </p>
                <p>
                  Porttitor rhoncus dolor purus non enim praesent elementum
                  facilisis leo, vel fringilla est ullamcorper eget nulla.
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
    </div>
  );
};

export default Services;
