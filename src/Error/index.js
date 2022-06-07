import React from 'react'
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="bg-[#ea2654]">
      <section>
        <p className="text-5xl text-center m-5 font-extrabold">
          404 page not found
        </p>
        <img
          className="h-[500px] w-100 mx-auto"
          src="https://i0.wp.com/learn.onemonth.com/wp-content/uploads/2017/08/1-10.png?fit=845%2C503&ssl=1"
          alt="error-img"
        ></img>
        <Link to="/" className=" bg-[purple] p-3 text-white">
          Back to home
        </Link>
      </section>
    </div>
  );
}

export default Error
