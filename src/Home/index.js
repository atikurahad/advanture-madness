import React from "react";
import { Link } from "react-router-dom";
import Services from "../Services";
import "./home.css";

const Home = () => {
  const myStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80')",
    height: "100vh",
    //  marginTop: "-70px",
    fontSize: "50px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  return (
    <>
      <section className="sm:640px" style={myStyle}>
        <h1 className="font-bold text-2xl text-center mt-auto">
          We All Love <br />
          <span className="font-bold text-5xl text-center text-[#59482d]">
            {" "}
            Nature.
          </span>{" "}
        </h1>
      </section>
      <span>
        {" "}
        Look deep into nature, and you will understand everything better.
      </span>

      <Services />

      <div className=" grid grid-cols-2 m-5">
        <section className="border-4 m-3 items-center justify-center">
          <p>About us</p>
          <h1 className="text-center font-bold text-[2.5rem] m-2">
            Tell website visitors who you are and why they should choose your
            business.
          </h1>
          <p className="text-2xl text-center">
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </p>
          <Link to="/about" className="btn bg-teal-900 mx-[20rem] p-2 mb-2  text-white">
            {" "}
            Find Out More
          </Link>
        </section>

        <section className="border-4 m-3 items-center justify-center">
          <img
            className="h-[100%]"
            src="https://thumbs.dreamstime.com/b/us-person-holding-smartphone-blurred-cityscape-background-73677460.jpg"
            alt="info-img"
          ></img>
        </section>
      </div>
    </>
  );
};

export default Home;
