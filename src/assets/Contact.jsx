import React from 'react';
import videoFile from './ss3.mp4'; // Make sure the path is correct
import './Home.css'; // Make sure your styles are properly imported
import './Contact.css';

// Contact component
function Contact() {
  return (
    <div>
      {/* Video Background */}
      <div className="relative w-full h-screen">
        <video
          src={videoFile}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          autoPlay
          loop
        />
        <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center">
          <div className="text-center text-white">
            {/* Title and Description */}
            <h1 className="text-5xl font-bold">Marriott Bonvoy™ Benefits</h1>
            <p className="text-lg mt-4 mb-8">
              Earn and redeem points that take you everywhere you want to go.
            </p>

            <div className="flex justify-center items-center mt-8 space-x-6">
              {/* Join Now Button */}
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none">
                Join Now
              </button>

              {/* Sign In Button */}
              <button className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105 hover:shadow-lg focus:outline-none">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Info Section */}
      <main className="py-6 px-4 sm:p-6 md:py-10 md:px-8">
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 lg:grid-cols-2">
          {/* Content Section */}
          <div className="relative p-3 col-start-1 row-start-1 flex flex-col-reverse rounded-lg bg-gradient-to-t from-black/75 via-black/0 sm:bg-none sm:row-start-2 sm:p-0 lg:row-start-1">
            {/* Updated Titles with Responsive Styling */}
            <h1 className="text-lg font-semibold text-black sm:text-slate-900 md:text-2xl lg:text-3xl dark:sm:text-white">
              Beach House in Collingwood
            </h1>
            <p className="text-sm leading-4 font-medium text-black sm:text-slate-500 md:text-base lg:text-lg dark:sm:text-slate-400">
              Entire house
            </p>
          </div>

          {/* Image Gallery */}
          <div className="grid gap-4 col-start-1 col-end-3 row-start-1 sm:mb-6 sm:grid-cols-4 lg:gap-6 lg:col-start-2 lg:row-end-6 lg:row-span-6 lg:mb-0">
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house.9b9ee168.jpg"
              alt="Beach House"
              className="w-full h-60 object-cover rounded-lg sm:h-52 sm:col-span-2 lg:col-span-full"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-1.f151eb56.jpg"
              alt="Interior 1"
              className="hidden w-full h-52 object-cover rounded-lg sm:block sm:col-span-2 md:col-span-1 lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
            <img
              src="https://tailwindcss.com/_next/static/media/beach-house-interior-2.3672af98.jpg"
              alt="Interior 2"
              className="hidden w-full h-52 object-cover rounded-lg md:block lg:row-start-2 lg:col-span-2 lg:h-32"
              loading="lazy"
            />
          </div>

          {/* Ratings and Location */}
          <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
            <dt className="sr-only">Reviews</dt>
            <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
              <svg
                width="24"
                height="24"
                fill="none"
                aria-hidden="true"
                className="mr-1 stroke-current dark:stroke-indigo-500"
              >
                <path
                  d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span>
                4.89 <span className="text-slate-400 font-normal">(128)</span>
              </span>
            </dd>
            <dt className="sr-only">Location</dt>
            <dd className="flex items-center">
              <svg
                width="2"
                height="2"
                aria-hidden="true"
                fill="currentColor"
                className="mx-3 text-slate-300"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1 text-slate-400 dark:text-slate-500"
                aria-hidden="true"
              >
                <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
              </svg>
              Collingwood, Ontario
            </dd>
          </dl>

          {/* Call to Action */}
          <div className="mt-4 col-start-1 row-start-3 self-center sm:mt-0 sm:col-start-2 sm:row-start-2 sm:row-span-2 lg:mt-6 lg:col-start-1 lg:row-start-3 lg:row-end-4">
            <button
              type="button"
              className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 rounded-lg"
            >
              Check availability
            </button>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm leading-6 col-start-1 sm:col-span-2 lg:mt-6 lg:row-start-4 lg:col-span-1 dark:text-slate-400">
            This sunny and spacious room is for those traveling light and
            looking for a comfy and cozy place to lay their head for a night or
            two. This beach house sits in a vibrant neighborhood filled with
            cafes, pubs, restaurants, and supermarkets and is close to all the
            major attractions such as Edinburgh Castle and Arthur's Seat.
          </p>
        </div>
      </main>

      {/* Contact Section */}
      <div className="landing_page">
  <div className="flex flex-wrap justify-start min-h-[75px] w-full bg-black px-12 relative">
    {/* Background Image */}
    <img
      className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none" // Add pointer-events-none to prevent the background from intercepting clicks
      src="https://images.pexels.com/photos/1226302/pexels-photo-1226302.jpeg?auto=compress&cs=tinysrgb&w=600"
      alt="Background"
    />
    <div className="max-w-[1320px] mx-auto flex flex-wrap py-16 relative z-10"> {/* Ensure form is above background */}
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex justify-start items-center text-white">
        <div>
          <p className="text-4xl font-bold leading-[55px] mb-4">
            Lorem ipsum amet dolor
          </p>
          <p className="text-lg text-gray-400 max-w-[420px] mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis volupta.
          </p>
          <div className="flex space-x-4">
  <a className="share-icon" href="https://twitter.com" target="_blank" rel="noopener noreferrer">
    <img
      className="w-8 h-8"
      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-twitter.png"
      alt="Twitter"
    />
  </a>
  <a className="share-icon" href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
    <img
      className="w-8 h-8"
      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-instagram.png"
      alt="Instagram"
    />
  </a>
  <a className="share-icon" href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
    <img
      className="w-8 h-8"
      src="https://workik-widget-assets.s3.amazonaws.com/Footer1-83/v1/images/Icon-facebook.png"
      alt="Facebook"
    />
  </a>
  <a className="share-icon" href="https://wa.me" target="_blank" rel="noopener noreferrer">
  <a className="share-icon" href="https://wa.me" target="_blank" rel="noopener noreferrer">
  <a className="share-icon" href="https://wa.me" target="_blank" rel="noopener noreferrer">
 
</a>

</a>

  </a>
</div>

        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <form className="bg-gray-900 text-white p-8 max-w-[506px] w-full rounded-md">
          <p className="text-2xl font-bold mb-4">Get a quote</p>
          <p className="text-gray-400 mb-8">We will get back to you in 24 hours</p>
          <div className="space-y-4">
            <input
              className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700"
              type="text"
              placeholder="First Name"
              name="FirstName"
            />
            <input
              className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700"
              type="text"
              placeholder="Last Name"
              name="LastName"
            />
            <input
              className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700"
              type="email"
              placeholder="Email"
              name="Email"
            />
            <input
              className="w-full h-12 bg-gray-800 text-white rounded-md px-4 placeholder-gray-400 border border-gray-700"
              type="text"
              placeholder="Phone Number"
              name="PhoneNumber"
            />
            <textarea
              className="w-full h-36 bg-gray-800 text-white rounded-md px-4 py-2 placeholder-gray-400 border border-gray-700"
              placeholder="Type message here"
              name="Message"
            ></textarea>
            <button
              className="w-full h-14 bg-green-700 text-white rounded-md text-lg font-semibold"
              type="submit"
            >
              Get quote
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>


      {/* Example Section */}
      <section className="relative isolate overflow-hidden bg-white px-6 py-10 sm:py-8 lg:px-8">
  <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100),white)] opacity-10" />
  <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white ring-1 shadow-xl shadow-indigo-600/10 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            alt=""
            src="https://tailwindui.com/plus/img/logos/workcation-logo-indigo-600.svg"
            className="mx-auto h-12"
          />
          <figure className="mt-9">
            <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias
                molestiae. Numquam corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-gray-900">Judith Black</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-gray-600">CEO of Workcation</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by the world's most innovative teams
        </h2>
        <div className="mx-auto mt-10 overflow-hidden relative">
  <div className="marquee-container flex gap-8 animate-marquee">
    <img
      alt="Transistor"
      src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Reform"
      src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Tuple"
      src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="SavvyCal"
      src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Statamic"
      src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    {/* Duplicate the images for continuous loop */}
    <img
      alt="Transistor"
      src="https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Reform"
      src="https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Tuple"
      src="https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="SavvyCal"
      src="https://tailwindui.com/plus/img/logos/158x48/savvycal-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
    <img
      alt="Statamic"
      src="https://tailwindui.com/plus/img/logos/158x48/statamic-logo-gray-900.svg"
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
  </div>
</div>

      </div>
    </div>

    <div className="modern-parallax">
  <div className="modern-overlay">
    <div className="newsletter-section">
      <h2>Subscribe to Our Newsletter</h2>
      <p>Stay updated with the latest news and offers!</p>
      <form className="newsletter-form" action="your-server-endpoint" method="POST">
        <input 
          type="email" 
          className="newsletter-input" 
          placeholder="Enter your email" 
          required 
          name="email" 
        />
        <button type="submit" className="newsletter-button">Subscribe</button>
      </form>
    </div>
  </div>
</div>

      
    </div>
    
  );
}

export default Contact;