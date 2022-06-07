import React from 'react';
import './Services.css'

const Services = () => {
  return (
    <>
      <p className="text-5xl font-bold text-center text-[#1b6639] mt-">
        Our Services
      </p>
      <br />
      <hr className="hrline" />
      <div className="grid grid-cols-3 justify-center mt-5">
        <section>
          <p className="text-3xl text-center text-sky-600 bg-slate-100 m-1 p-2">
            {" "}
            Water Boating
          </p>
          <img
            className="h-[600px] w-[445px] m-auto"
            src="https://media.istockphoto.com/photos/lady-with-kayak-picture-id516449022?k=20&m=516449022&s=612x612&w=0&h=6TCzYP9ohT2j3g602N4exOdUbbuzYqDfhqsTgErLM_M="
            alt="card-img"
          ></img>
          <p>
            A boat tour is a short trip in a relatively small boat taken for
            touristic reasons, typically starting and ending in the same place,
            and normally of a duration less than a day.
          </p>
        </section>

        <section>
          <p className="text-3xl text-center text-sky-600  bg-slate-100 m-1 p-2">
            Camping Forest{" "}
          </p>
          <img
            className="h-[600px] w-[445px] m-auto"
            src=" https://www.keepinspiring.me/wp-content/uploads/2020/01/adventure-quotes-feature-min.jpg"
            alt="card-img"
          ></img>
          <p>
            Camping is an outdoor activity involving overnight stays away from
            home, either without shelter or using basic shelter such as a tent
            or a recreational vehicle.{" "}
          </p>
        </section>

        <section>
          {" "}
          <p className="text-3xl text-center text-sky-600  bg-slate-100 m-1 p-2">
            Hill Track{" "}
          </p>
          <img
            className="h-[600px] w-[445px] m-auto"
            src="https://scth.scene7.com/is/image/scth/Adventure_Activities_Hero_Banner:crop-375x280?defaultImage=Adventure_Activities_Hero_Banner&wid=375&hei=280"
            alt="card-img"
          ></img>
          <p>
            The page "Hill track" does not exist. You can ask for it to be
            created, but consider checking the search results below to see
            whether the topic is already covered.
          </p>
        </section>
      </div>
    </>
  );
};

export default Services;
