import React from 'react';

const Home = () => {
   const myStyle = {
     backgroundImage:
       "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80')",
     height: "100vh",
     marginTop: "-70px",
     fontSize: "50px",
     backgroundSize: "cover",
     backgroundRepeat: "no-repeat",
   };
  return (
    <>
      <div style={myStyle}>
        <p>
          An adventure is an exciting experience or undertaking that is
          typically bold, sometimes risky. Adventures may be activities with
          some potential for physical danger such as traveling, exploring,
          skydiving, mountain climbing, scuba diving, river rafting or
          participating in extreme sports.
        </p>{" "}
      </div>
    </>
  );
};

export default Home;
