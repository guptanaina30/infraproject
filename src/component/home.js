
import React from "react";
import front from "../assets/front.jpg"
const Home = () => {
  return (
    <>
      
        <div style={{width: "100%", height: "100vh",
    backgroundImage: `url(${front})` ,
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    // overflow: "hidden",
  position: "fixed",
 }}>
          <h1 style={{ color: "red" }}>InfraBlok Portal</h1>
          <p style={{ color: "white", fontSize: "20px" }}>
            Infrablok is a long established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters, as opposed to using 'Content here, content here', making
            it look like readable English. Many desktop publishing packages and
            web page editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites still in
            their infancy. Various versions have evolved over the years,
            sometimes by accident, sometimes on purpose Various versions have
            evolved over the years, sometimes by accident, sometimes on purpose
          </p>
         
        
        </div>
      </>
  );
};
export default Home;
