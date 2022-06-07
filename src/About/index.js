import React from 'react'

function About() {
  return (
    <>
      <div>About Us</div>
      <div className=" grid grid-cols-2">

        <section>
          <p>About us</p>
          <h1>
            Tell website visitors who you are and why they should choose your
            business.
          </h1>
          <p>
            Because when a visitor first lands on your website, you’re a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you’re selling.
          </p>
          <button className='btn bg-teal-900 mx-auto p-3 text-white'> Find Out More</button>
        </section>


        <section>
          <img
            src="https://thumbs.dreamstime.com/b/us-person-holding-smartphone-blurred-cityscape-background-73677460.jpg"
            alt="info-img"
          ></img>
        </section>
      </div>
    </>
  );
}

export default About
