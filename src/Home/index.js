import React from 'react';
import './home.css';

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
    </>
  );
};

export default Home;
