import React from 'react';
import './Home.css';
import './Book.css'; // Add your custom styles if needed
import videoFile from './5.mp4';
import './bbk.webp'


function Book() {
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

   {/* Book Now Section */}
<div className="flex flex-wrap bg-gray-100 py-16 px-8">
  {/* Left Side: Image */}
  <div className="w-full md:w-1/2">
  <img
    src="https://files.oaiusercontent.com/file-QvfzCjfzSfF5Si6sDsFN9H?se=2025-01-18T09%3A35%3A04Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dbc6ec6bb-19bc-4af8-88bf-cd1ed62611f9.webp&sig=xynCx4ValsbX4Nq17V4YHTq8eoFLUYXLPvTs/j%2BwlWA%3D" 
    alt="Travel Destination"
    className="w-full max-h-[600px] object-cover rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
  />
</div>

  {/* Right Side: Form */}
  <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center items-center">
    <div className="form-section">
      <h2>Book Your Dream Trip</h2>
      <form>
        {/* Destination */}
        <div>
          <label>Destination</label>
          <select>
            <option>Select Destination</option>
            <option>Paris</option>
            <option>Maldives</option>
            <option>New York</option>
          </select>
        </div>

        {/* Check-in Date */}
        <div>
          <label>Check-in Date</label>
          <input type="date" />
        </div>

        {/* Check-out Date */}
        <div>
          <label>Check-out Date</label>
          <input type="date" />
        </div>

        {/* Guests */}
        <div>
          <label>Guests</label>
          <div className="guest-inputs">
            <input type="number" placeholder="Adults" />
            <input type="number" placeholder="Children" />
            <input type="number" placeholder="Rooms" />
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Book Now</button>
      </form>
    </div>
  </div>
</div>

<div className="testimonials-section bg-gray-100 py-16 px-8">
  <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">What Our Travelers Say</h2>
  <div className="testimonials-container grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    {/* Testimonial 1 */}
    <div className="testimonial bg-white rounded-lg shadow-lg p-6">
      <p className="text-gray-600 italic mb-4">
        "Our trip was perfectly organized! From the beautiful hotels to the exciting activities, it was a seamless experience."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="data:image/jpeg;base64,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" // Replace with an actual image
          alt="Customer 1"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Emily R.</h3>
          <p className="text-sm text-gray-500">London, UK</p>
        </div>
      </div>
    </div>

    {/* Testimonial 2 */}
    <div className="testimonial bg-white rounded-lg shadow-lg p-6">
      <p className="text-gray-600 italic mb-4">
        "This was the best vacation of my life! The staff was so helpful, and the destinations were breathtaking."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR09av0tCeRlJvGQhLPtaibbAy0qHLnO01p__0oUzwL40OfYd462VDqQLibHf8bUvwkVUs&usqp=CAU" // Replace with an actual image
          alt="Customer 2"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">James D.</h3>
          <p className="text-sm text-gray-500">New York, USA</p>
        </div>
      </div>
    </div>

    {/* Testimonial 3 */}
    <div className="testimonial bg-white rounded-lg shadow-lg p-6">
      <p className="text-gray-600 italic mb-4">
        "From start to finish, everything was perfect. We loved the personalized service and attention to detail."
      </p>
      <div className="flex items-center space-x-4">
        <img
          src="data:image/jpeg;base64,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" // Replace with an actual image
          alt="Customer 3"
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold text-gray-800">Sophia W.</h3>
          <p className="text-sm text-gray-500">Sydney, Australia</p>
        </div>
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

export default Book;
