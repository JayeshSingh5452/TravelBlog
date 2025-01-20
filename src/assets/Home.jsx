import React from 'react';
import videoFile from './Header.mp4';
import './Home.css';
import aboutImage from './pix.jpg'; // Correct path to your image
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
     
    {/* Video Background */}
<div className="relative w-full h-screen">
  <video src={videoFile} className="absolute inset-0 w-full h-full object-cover" muted autoPlay loop />
  <div className="absolute inset-0 bg-black bg-opacity-10 flex justify-center items-center">
    <div className="text-center text-white">
      {/* Title and Description */}
      <h1 className="text-5xl font-bold">Marriott Bonvoy™ Benefits</h1>
      <p className="text-lg mt-4 mb-8">Earn and redeem points that take you everywhere you want to go.</p>
      
      <div className="flex justify-center items-center mt-8 space-x-6">
       
       {/* Join Now Button */}
<a href="#" className="block">
  <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 hover:shadow-lg focus:outline-none">
    Join Now
  </button>
</a>

{/* Sign In Button */}
<a href="#" className="block">
  <button className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-md transition duration-300 ease-in-out transform hover:bg-gray-700 hover:scale-105 hover:shadow-lg focus:outline-none">
    Sign In
  </button>
</a>

      </div>
    </div>
  </div>
</div>


      {/* About Us Section */}
      <section className="about-us-container">
        <div className="about-us-content">
          <div className="about-us-image">
            <img src={aboutImage} alt="About Us" />
          </div>
          <div className="about-us-text">
            <h2>About Us</h2>
            <p>
              We are a leading travel agency offering a wide range of services,
              from customized tours to group travel. With years of experience, we
              specialize in creating memorable and personalized travel experiences
              for our clients.
            </p>
            <p>
              Our team is dedicated to providing exceptional customer service and
              ensuring your travel plans are seamless and stress-free. Whether you're
              looking for an adventurous trip or a relaxing getaway, we are here to
              help you create your dream vacation.
            </p>
            <a href="/about" className="explore-now-link">
              <button className="explore-now-button" >Explore Now</button>
            </a>
          </div>
        </div>
      </section>
      
    <div class="parallax">
  <div class="parallax-overlay">  </div>
  <div class="parallax-content">
    <h2>Experience the Adventure</h2>
    <p>Explore the world with us!</p>
    <p class="tagline">Your journey, our mission.</p>
    <a href="/Book" class="cta-button" onClick={()=>{
      console.log("Clicked");
      
    }}>Book Your Trip</a>

  </div>
</div>




      {/* Services Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[ 
              {
                icon: 'fas fa-globe',
                title: 'Global Tours',
                description: 'Discover the world with our curated global travel packages.',
              },
              {
                icon: 'fas fa-umbrella-beach',
                title: 'Beach Getaways',
                description: 'Relax and unwind with our exclusive beach vacation deals.',
              },
              {
                icon: 'fas fa-hiking',
                title: 'Adventure Trips',
                description: 'Thrilling adventures await with our guided hiking and trekking tours.',
              },
              {
                icon: 'fas fa-hotel',
                title: 'Luxury Stays',
                description: 'Enjoy the finest accommodations with our luxury hotel bookings.',
              },
              {
                icon: 'fas fa-calendar-alt',
                title: 'Event Planning',
                description: 'We handle all the details to make your events unforgettable.',
              },
              {
                icon: 'fas fa-bus-alt',
                title: 'Group Travel',
                description: 'Seamlessly plan and execute trips for large groups with us.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transform hover:scale-105 transition duration-300"
              >
                <div className="flex items-center justify-center text-orange-500 text-6xl mb-6">
                  <i className={service.icon}></i>
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section py-12 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl lg:text-4xl font-bold mb-8">Our Travel Packages</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          image: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/1b/2b/67/luxe-city-center-hotel.jpg?w=700&h=-1&s=1',
          title: 'Downtown Los Angeles',
          description: 'A block from a metro station, this trendy hotel in an elegant building in Downtown Los Angeles.',
          price: '$780',
          originalPrice: '$1000',
          link: 'https://en.wikipedia.org/wiki/Downtown_Los_Angeles',
        },
        {
          image: 'https://www.privateupgrades.com/blog/wp-content/uploads/2022/02/burj-al-arab-3.jpg',
          title: 'Burj Al Arab - Dubai',
          description: 'The Burj Al Arab in Dubai is an excellent luxury hotel for the whole family. From airplane rides to chauffeured Rolls Royce around town.',
          price: '$1200',
          originalPrice: '$1500',
          link: 'https://www.jumeirah.com/en/stay/dubai/burj-al-arab-jumeirah',
        },
        {
          image: 'https://imageio.forbes.com/specials-images/imageserve/6627bf2ffa73c1fdb46d1532/externa-02/960x0.jpg?format=jpg&width=1440',
          title: 'Hotel Colline de France',
          description: 'With its sophistication worthy of royalty, you will feel like you are in the French Empire.',
          price: '$2000',
          originalPrice: '$2500',
          link: 'https://www.tripadvisor.in/Hotel_Review-g303536-d13871137-Reviews-Hotel_Colline_de_France-Gramado_State_of_Rio_Grande_do_Sul.html',
        },
        {
          image: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'Kowloon, Hong Kong',
          description: 'Enjoy luxury experiences in Kowloon, Hong Kong.',
          price: '$2000',
          originalPrice: '$2500',
          link: 'https://www.expedia.com.hk/?clickref=1101lAcIyMBS&affcid=HK.DIRECT.PHG.1100l12153.0&ref_id=1101lAcIyMBS&my_ad=AFF.HK.DIRECT.PHG.1100l12153.0&afflid=1101lAcIyMBS&affdtl=PHG.1101lAcIyMBS.69956&gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK-k9BTwvHM5OeRQzEgD5M_WfaOy-UGdgUOO9g_jc62W-FD2LrAkpOoaAq0JEALw_wcB',
        },
        {
          image: 'https://images.pexels.com/photos/3584283/pexels-photo-3584283.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Houston, TX, United States',
          description: 'Luxury stay and entertainment in Houston, Texas.',
          price: '$2000',
          originalPrice: '$2500',
          link: 'https://www.houstontx.gov/',
        },
        {
          image: 'https://images.pexels.com/photos/16635699/pexels-photo-16635699/free-photo-of-illuminated-advertising-on-skyscrapers-in-city-downtown.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
          title: 'EtATS-Unis, Las Vegas',
          description: 'Explore the nightlife and luxury in Las Vegas.',
          price: '$1000',
          originalPrice: '$1250',
          link: 'https://speedvegas.com/?gad_source=1&gclid=Cj0KCQiAv628BhC2ARIsAIJIiK-1srl78URcFP9VAg3VbVsLuDjCV4Qi768IcEUW2Zk-O7eQHtF5-nMaAvkaEALw_wcB',
        },
      ].map((packageItem, index) => (
        <div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
          style={{ height: '500px' }}
        >
          {/* Image */}
          <img
            src={packageItem.image}
            alt={packageItem.title}
            className="w-full h-50 object-cover"
          />

          {/* Content */}
          <div className="p-4 flex flex-col h-full">
            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">{packageItem.title}</h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-2">{packageItem.description}</p>

            {/* Stars */}
            <div className="flex justify-center text-yellow-500 mb-2">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star-half-alt"></i>
              <i className="fas fa-star"></i>
            </div>

            {/* Pricing */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="discount text-green-500 font-semibold">
                <i className="fas fa-tag"></i> {packageItem.price}
              </span>
              <span className="price line-through text-gray-500">
                <i className="fas fa-money-bill-wave"></i> {packageItem.originalPrice}
              </span>
            </div>

            {/* Read More Button */}
            <a href={packageItem.link} target="_blank" rel="noopener noreferrer">
              <button className="px-4 py-2.5 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition self-center">
                Read More
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


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

export default Home;
