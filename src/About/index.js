import React from 'react'

function About() {
  return (
    <>
      <div className="text-6xl text-center font-serif from-neutral-500 border-2 bg-black text-white mx-auto">
        About Us
      </div>

      <h1 className="text-4xl text-center font-mono text-zinc-600 m-4  mt-2 p-3 shadow-sm">
        We’re a highly collaborative and supportive team,
        <br /> coming together on every project to ensure our <br /> clients get
        the very best result.
      </h1>

      <section>
        <img
          className="mx-auto m-5"
          src="https://cdn.pixabay.com/photo/2016/04/01/18/33/nature-1301305_1280.jpg"
          alt="jungle-img"
        ></img>
      </section>

      <div className=" grid grid-cols-2">
        <section>
          <h1 className="text-3xl text-center font-semibold font-mono m-3">
            Our Mission
          </h1>
          <p className="text-3xl text-center font-thin text-[#2d3833]">
            Build the best product that creates the most value for our
            customers,
            <br /> use business to inspire and implement environmentally
            friendly solutions.
          </p>
        </section>
        <section>
          <h1 className="text-3xl text-center font-semibold font-mono m-3">
            Our Values
          </h1>
          <p className="text-3xl text-center font-thin text-[#2d3833]">
            We strive to go above and beyond for our clients no matter the
            challenge. <br />
            We aim to deliver our very best work every single day across our
            services.
          </p>
        </section>
      </div>

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
}

export default About
