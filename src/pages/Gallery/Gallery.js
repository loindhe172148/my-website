import React from "react";
import "./Gallery.scss";

const Gallery = () => {
  return (
    <div className="gallery">
      <>
        <div className="gallery_sectiongallery">
          <div className="gallery_textgalleryl">
            <h1>Our Gallery</h1>
            <h2>
              Check out the collection pictures
              <br />
              from our clinic
            </h2>
          </div>
          <div className="gallery_textgalleryr">
            <h1>
              Lorem ipsum dolor sit amet, consectetur
              <br />
              adipiscing elit ut aliquam, purus sit amet
              <br />
              luctus venenatis
            </h1>
          </div>
        </div>
        <div className="gallery_image99">
          <div>
            <img src="imgGallery/unsplash_FVh_yqLR9eA (1).png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_3ewkNkfJj2k (1).png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_xayCTz6N2nM.png" alt="" />
          </div>
        </div>
        <div className="gallery_image99">
          <div>
            <img src="imgGallery/unsplash_Pe9IXUuC6QU.png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_fvInY-Gh7sc.png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_HEde-a_T4E8.png" alt="" />
          </div>
        </div>
        <div className="gallery_image99">
          <div>
            <img src="imgGallery/unsplash_9Wa1HgE1XlA.png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_PqyzuzFiQfY.png" alt="" />
          </div>
          <div>
            <img src="imgGallery/unsplash_4SUyx4KQ5Ik.png" alt="" />
          </div>
        </div>
        <div className="gallery_textgallerye">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
            <br />
            purus sit amet luctus venenatis, lectus magna fringilla urna,
            porttitor
            <br />
            rhoncus dolor purus non enim,
            <strong style={{ color: "#091156", marginLeft: "6px" }}>
              our teams
            </strong>
          </h1>
        </div>
        <div className="gallery_videotour">
          <h1>Watch the video tour</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
            <br />
            aliquam, purus sit amet luctus venenatis
          </h2>
          <img src="imgGallery/Play Button (4).png" alt="" />
        </div>
        <div className="gallery_getquota">
          <div className="gallery_getquotal">
            <h1>Get The Quota</h1>
            <h2>
              Want to be handled by our
              <br />
              professional team immediately?
            </h2>
            <h3>
              Id dui erat sed quam tellus in purus. Pellentesque congue
              <br />
              fringilla cras tellus enim.
            </h3>
          </div>
          <div className="gallery_getquotar">
            <h1>Make an Appointment</h1>
          </div>
        </div>
      </>
    </div>
  );
};

export default Gallery;
