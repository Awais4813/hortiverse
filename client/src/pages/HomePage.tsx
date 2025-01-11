import { useEffect, useState } from "react";
import "../index.css";
import "../styles/homepage.css";
import { secondaryText } from "../constants/colors";
import { FaWhatsapp } from "react-icons/fa";
import { Tooltip } from "react-tooltip";
export default function HomePage() {
  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    const navigationBar = document.getElementById("navigationBar");
    if (navigationBar) {
      const newSectionHeight =
        window.innerHeight - navigationBar.getBoundingClientRect().height;
      setSectionHeight(newSectionHeight);
    }
  }, []);
  return (
    <>
    <Tooltip anchorSelect="#whatsappBtn" place={"left"} style={{zIndex: 1}}>Whatsapp</Tooltip>
      <a
        className="whatsappBtn"
        id="whatsappBtn"
        onClick={() => {window.open('https://wa.me/+923164959334', '_blank');}}
        style={{
          position: "fixed",
          zIndex: 1,
          bottom: "20px",
          right: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#25D366",
          color: "white",
          border: "none",
          width: "3.5rem",
          height: "3.5rem",
          borderRadius: "2.5rem",
          // padding: "10px 20px",
          cursor: "pointer",
          // fontSize: "16px",
        }}
      >
        <FaWhatsapp style={{ fontSize: "2.5rem" }} />
      </a>
      <section
        className="container-fluid"
        style={{
          height: `${sectionHeight}px`,
          padding: 0,
          position: "relative",
        }}
      >
        <video
          src="/assets/vecteezy_raindrops-on-flowers_46483862 (1).mp4"
          autoPlay={true}
          loop={true}
          muted
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            margin: 0,
          }}
        ></video>
        <div
          id="homepageSection1-contentContainer"
          style={{
            position: "absolute",
            width: "100%",
            height: `${sectionHeight}px`,
            backgroundColor: "rgba(0,0,0,0.0)",
            top: 0,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            padding: "1.5rem",
          }}
        >
          <div id="homepageSection1-leftPane">
            <div
              id="homepageSection1-leftPane-heading"
              style={{
                color: secondaryText,
                fontFamily: "integralCfBold",
                fontSize: "3rem",
                width: "400px",
                marginBottom: "15px",
                lineHeight: "35px",
              }}
            >
              Nursery <span style={{ fontSize: "2.6rem" }}>and</span>
              <br /> Landscapes
            </div>
            <div
              style={{
                color: "white",
                fontFamily: "Raleway-Bold",
                textShadow: "0 7px 7px rgba(0, 0, 0, 0.5)",
                marginBottom: "2.5rem",
              }}
            >
              Browse through our diverse range of plants, garden accessories and
              landscape services.
            </div>
            <button
              id="shopNowBtn"
              className="primaryBtn"
              style={{
                width: "210px",
                height: "45px",
                border: 'none',
                outline: 'none'
              }}
            >
              Shop Now
            </button>
            <div id="homepageSection1-leftPane-reviewContainer">
              <div
                className="homepageSection1-leftPane-reviewPane"
                style={{ paddingLeft: 0 }}
              >
                <div className="homepageSection1-leftPane-reviewPaneHeading">
                  200+
                </div>
                <div className="homepageSection1-leftPane-reviewPaneSubHeading">
                  International Customers
                </div>
              </div>
              <div className="homepageSection1-leftPane-reviewPane">
                <div className="homepageSection1-leftPane-reviewPaneHeading">
                  2,000+
                </div>
                <div className="homepageSection1-leftPane-reviewPaneSubHeading">
                  High Quality Products
                </div>
              </div>
              <div
                className="homepageSection1-leftPane-reviewPane"
                style={{ borderRight: "none" }}
              >
                <div className="homepageSection1-leftPane-reviewPaneHeading">
                  30,000+
                </div>
                <div className="homepageSection1-leftPane-reviewPaneSubHeading">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
          <div id="homepageSection1-RightPane">
            <img
              src="/assets/icon with shadow.png"
              alt=""
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
