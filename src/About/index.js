import React from 'react'

function About() {
  return (
    <>
      <div className="text-6xl text-center font-serif from-neutral-500">
        About Us
      </div>
      <div className=" grid grid-cols-2 m-5">
        <section className="border-4 m-3 items-center justify-center">
          <p>About us</p>
          <h1 className="text-center font-bold text-[2.5rem] m-2">
            Tell website visitors who you are and why they should choose your
            business.
          </h1>
          <p className='text-2xl text-center'>
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </p>
          <button className="btn bg-teal-900 mx-[20rem] p-2 mb-2  text-white">
            {" "}
            Find Out More
          </button>
        </section>

        <section className="border-4 m-3 items-center justify-center">
          <img
            className="h-[100%]"
            src="https://thumbs.dreamstime.com/b/us-person-holding-smartphone-blurred-cityscape-background-73677460.jpg"
            alt="info-img"
          ></img>
        </section>
      </div>
      <p className='text-center text-[#fa210e] font-semibold text-5xl'>Adventure Can Make Your Mind Extra Feel</p>
    </>
  );
}

export default About
