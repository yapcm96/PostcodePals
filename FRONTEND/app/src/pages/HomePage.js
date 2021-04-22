import style from "../styles/pagesStyles/homepage.module.scss";
import Image1 from "../assets/images/image1.jpg";
import Image2 from "../assets/images/image2.jpg";
import Image3 from "../assets/images/image3.jpg";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";

const flickityOptions = {
  initialIndex: 1,
  autoPlay: 4000,
  pauseAutoPlayOnHover: true,
  wrapAround: true,
  fullscreen: true,
  adaptiveHeight: true,
};

const images = [Image1, Image2, Image3];

const HomePage = () => {
  return (
    <div className={style.home}>
      <h1>About us</h1>
      <p>
        Postcode Pals started to help connect people to need a helping hand, to
        those wanting to help others in and around their community.{" "}
      </p>
      <p>
        Postcode Pals was originally called Neighborhood Heroes, and was founded
        by Beth, Mahbub and Asel. After producing a cutting edge back end for
        the site, they handed over to the front end team: Issy, Issy, Harriette
        and Johnny.
      </p>{" "}
      <p>
        {" "}
        We want hope to eventually build a nation-wide support platform, so that
        everyone gets the help they need.
      </p>
      <div>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {images.map((image, index) => (
            <div style={{ width: "70%", height: "", display: "flex" }}>
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  margin: "0 0.5em",
                  overflow: "hidden",
                  display: "flex",
                }}
                key={index}
              >
                <img
                  style={{ width: "1200px", height: "100%", overflow: "auto" }}
                  src={image}
                  alt=""
                />
              </div>
            </div>
          ))}
        </Flickity>
      </div>
    </div>
  );
};

export default HomePage;
