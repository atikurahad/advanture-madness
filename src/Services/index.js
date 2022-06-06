import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <>
      <p className="text-5xl font-bold text-center text-[#1b6639] mt-5">
        Our Services
      </p>
      <br />
      <hr className="hrline" />
      <div className="grid grid-cols-3 justify-center mt-5">
        <section>
          <p>lorem ipsum 1</p>
          <img
            className="h-[300px] w-[345px]"
            src="https://media.istockphoto.com/photos/lady-with-kayak-picture-id516449022?k=20&m=516449022&s=612x612&w=0&h=6TCzYP9ohT2j3g602N4exOdUbbuzYqDfhqsTgErLM_M="
            alt="card-img"
          ></img>
        </section>

        <section>
          <p>lorem ipsum 2 </p>
          <img
            className="h-[300px] w-[345px]"
            src=" https://www.keepinspiring.me/wp-content/uploads/2020/01/adventure-quotes-feature-min.jpg"
            alt="card-img"
          ></img>
        </section>

        <section>
          {" "}
          <p>lorem ipsum 3 </p>
          <img
            className="h-[300px] w-345px]"
            src="https://scth.scene7.com/is/image/scth/Adventure_Activities_Hero_Banner:crop-375x280?defaultImage=Adventure_Activities_Hero_Banner&wid=375&hei=280"
            alt="card-img"
          ></img>
        </section>
      </div>
    </>
  );
};

export default Services;
