import { useEffect, useState } from "react";

export default function HomePage() {
  const [sectionHeight, setSectionHeight] = useState(0);
  useEffect(() => {
    const navigationBar = document.getElementById("navigationBar");
    // const homePageSection1 = document.getElementById("homePageSection1");
    if (navigationBar) {
      const newSectionHeight =
        window.innerHeight - navigationBar.getBoundingClientRect().height;
      setSectionHeight(newSectionHeight);
    }
}, []);
  return (
    <>
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
          style={{
            position: "absolute",
            width: "100%",
            height: `${sectionHeight}px`,
            backgroundColor: "rgba(0,0,0,0.0)",
            top: 0,
          }}
        >
            <h1 style={{color:"white",fontSize:"15rem"}}>Hello<br/>World</h1>
        </div>
      </section>
    </>
  );
}
