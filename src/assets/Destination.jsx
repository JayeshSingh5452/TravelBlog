import React, { useState } from 'react';
import videoFile from './s2.mp4';
import './Destination.css';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import ReactStars from 'react-rating-stars-component';

const filters = [
  {
    id: 'hotelType',
    name: 'Hotel Type',
    options: [
      { value: 'luxury', label: 'Luxury', checked: false },
      { value: 'budget', label: 'Budget', checked: false },
      { value: 'family', label: 'Family', checked: false },
      { value: 'couples', label: 'Couples', checked: false },
    ],
  },
  {
    id: 'price',
    name: 'Price Range',
    options: [
      { value: 'low', label: 'Under $100', checked: false },
      { value: 'medium', label: '$100 - $200', checked: false },
      { value: 'high', label: 'Above $200', checked: false },
    ],
  },
  {
    id: 'amenities',
    name: 'Amenities',
    options: [
      { value: 'pool', label: 'Pool', checked: false },
      { value: 'gym', label: 'Gym', checked: false },
      { value: 'wifi', label: 'Free Wi-Fi', checked: false },
      { value: 'breakfast', label: 'Free Breakfast', checked: false },
    ],
  },
  {
    id: 'rating',
    name: 'Rating',
    options: [
      { value: 1, label: '1 Star', checked: false },
      { value: 2, label: '2 Stars', checked: false },
      { value: 3, label: '3 Stars', checked: false },
      { value: 4, label: '4 Stars', checked: false },
      { value: 5, label: '5 Stars', checked: false },
    ],
  },
];

const hotels = [
  {
    name: 'Luxury Hotel',
    type: 'luxury',
    price: 'high',
    amenities: ['pool', 'gym', 'wifi'],
    rating: 5,
    image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
  },
  {
    name: 'Budget Inn',
    type: 'budget',
    price: 'low',
    amenities: ['wifi', 'breakfast', 'gym'],
    rating: 3,
    image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Family Resort',
    type: 'family',
    price: 'medium',
    amenities: ['pool', 'wifi'],
    rating: 4,
    image: 'https://images.pexels.com/photos/3584283/pexels-photo-3584283.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    name: 'Romantic Getaway',
    type: 'couples',
    price: 'high',
    amenities: ['pool', 'gym', 'wifi', 'breakfast'],
    rating: 5,
    image: 'https://images.pexels.com/photos/261181/pexels-photo-261181.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Marriott Bonvoy',
    type: 'family',
    price: 'high',
    amenities: ['pool', 'gym', 'wifi'],
    rating: 3,
    image: 'https://images.pexels.com/photos/2540653/pexels-photo-2540653.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Seaside Escape',
    type: 'luxury',
    price: 'high',
    amenities: ['wifi', 'pool', 'breakfast'],
    rating: 2,
    image: 'https://images.pexels.com/photos/4785053/pexels-photo-4785053.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

function Destination() {
  const [selectedFilters, setSelectedFilters] = useState({});
  const [filteredHotels, setFilteredHotels] = useState(hotels);

  const handleFilterChange = (sectionId, optionValue) => {
    const newFilters = { ...selectedFilters };
    if (newFilters[sectionId]?.includes(optionValue)) {
      newFilters[sectionId] = newFilters[sectionId].filter((item) => item !== optionValue);
    } else {
      newFilters[sectionId] = [...(newFilters[sectionId] || []), optionValue];
    }
    setSelectedFilters(newFilters);
    applyFilters(newFilters);
  };

  const applyFilters = (filters) => {
    let filtered = hotels;

    if (filters.hotelType?.length) {
      filtered = filtered.filter((hotel) => filters.hotelType.includes(hotel.type));
    }

    if (filters.price?.length) {
      filtered = filtered.filter((hotel) => filters.price.includes(hotel.price));
    }

    if (filters.amenities?.length) {
      filtered = filtered.filter((hotel) =>
        filters.amenities.every((amenity) => hotel.amenities.includes(amenity))
      );
    }

    if (filters.rating?.length) {
      filtered = filtered.filter((hotel) => filters.rating.includes(hotel.rating));
    }

    setFilteredHotels(filtered);
  };

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
   

      {/* About Us Section */}
      <section className="about-us-container py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          <div className="about-us-image flex-shrink-0 w-full lg:w-1/2">
            <img src="http://localhost:5173/src/assets/pix.jpg" alt="About Us" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div className="about-us-text w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">About Us</h2>
            <p className="text-lg text-gray-600 mb-4">
              We are a leading travel agency offering a wide range of services, from customized tours to group travel. With years of experience, we specialize in creating memorable and personalized travel experiences for our clients.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              Our team is dedicated to providing exceptional customer service and ensuring your travel plans are seamless and stress-free. Whether you're looking for an adventurous trip or a relaxing getaway, we are here to help you create your dream vacation.
            </p>
            <a href="/about" className="explore-now-link">
              <button className="explore-now-button">Explore Now</button>
            </a>
          </div>
        </div>
      </section>
      
      {/* Parallax Section */}
      <div className="parallax">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h2>Experience the Adventure</h2>
          <p>Explore the world with us!</p>
          <p className="tagline">Your journey, our mission.</p>
          <a  href="/Book" class="cta-button">Book Your Trip</a>
        </div>
      </div>

      {/* Filters Section */}
      <div className="bg-white py-6">
        <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-8">
          <section>
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-4">
              {/* Filter Sidebar */}
              <form className="block lg:block">
                <h2 className="text-2xl font-bold mb-4">Hotel Filters</h2>
                {filters.map((section) => (
                  <Disclosure key={section.id} as="div" className="border-b py-6">
                    <DisclosureButton className="flex justify-between text-gray-900">
                      <span>{section.name}</span>
                      <span>
                        <PlusIcon className="w-5" />
                        <MinusIcon className="w-5 hidden" />
                      </span>
                    </DisclosureButton>
                    <DisclosurePanel className="pt-4">
                      {section.options.map((option) => (
                        <div key={option.value} className="flex items-center">
                          <input
                            type="checkbox"
                            checked={selectedFilters[section.id]?.includes(option.value) || false}
                            onChange={() => handleFilterChange(section.id, option.value)}
                            className="h-5 w-5 text-indigo-600 border-gray-300"
                          />
                          <label className="ml-3 text-sm">{option.label}</label>
                        </div>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                ))}
              </form>

              {/* Display Filtered Hotels */}
              <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredHotels.map((hotel) => (
                  <div key={hotel.name} className="flex flex-col bg-white border rounded-lg shadow-lg hover:shadow-xl transition ease-in-out transform hover:scale-105 w-auto">
                    <img src={hotel.image} alt={hotel.name} className="w-full h-48 object-cover rounded-t-lg" />
                    <div className="p-6 flex flex-col space-y-4">
                      <h3 className="text-xl font-semibold text-gray-800">{hotel.name}</h3>
                      <ReactStars count={5} value={hotel.rating} edit={false} size={24} activeColor="#ffd700" />
                      <p className="text-gray-600">Price: {hotel.price}</p>
                      <div className="flex space-x-2">
                        {hotel.amenities.map((amenity) => (
                          <span key={amenity} className="text-sm text-gray-600">{amenity}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <Disclosure>
              <DisclosureButton className="w-full py-3 px-5 bg-white text-left border rounded-lg shadow-md hover:bg-gray-100">
                What are the best travel destinations?
              </DisclosureButton>
              <DisclosurePanel className="pt-2 pb-4 px-5 bg-gray-50 border-l-2 border-gray-300">
                We offer a range of destinations, from tropical islands to bustling cities. Some of our top-rated destinations include Paris, Tokyo, and Bali.
              </DisclosurePanel>
            </Disclosure>

            <Disclosure>
        <DisclosureButton className="w-full py-3 px-5 bg-white text-left border rounded-lg shadow-md hover:bg-gray-100">
          How do I book a hotel through your website?
        </DisclosureButton>
        <DisclosurePanel className="pt-2 pb-4 px-5 bg-gray-50 border-l-2 border-gray-300">
          Booking a hotel is easy! Simply choose your destination, dates, and number of guests, then browse the available options. After selecting the hotel, you can proceed to booking by entering your details and payment information.
        </DisclosurePanel>
      </Disclosure>
       {/* FAQ Question 3 */}
       <Disclosure>
        <DisclosureButton className="w-full py-3 px-5 bg-white text-left border rounded-lg shadow-md hover:bg-gray-100">
          Do you offer family-friendly hotels?
        </DisclosureButton>
        <DisclosurePanel className="pt-2 pb-4 px-5 bg-gray-50 border-l-2 border-gray-300">
          Yes, we have a variety of family-friendly hotels that offer amenities such as family suites, kids' activities, and child care services. You can filter by family-friendly options when searching for hotels.
        </DisclosurePanel>
      </Disclosure>

            <Disclosure>
              <DisclosureButton className="w-full py-3 px-5 bg-white text-left border rounded-lg shadow-md hover:bg-gray-100">
                What services do you provide?
              </DisclosureButton>
              <DisclosurePanel className="pt-2 pb-4 px-5 bg-gray-50 border-l-2 border-gray-300">
                We offer customized travel itineraries, group tours, hotel bookings, flight arrangements, and more.
              </DisclosurePanel>
            </Disclosure>
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

export default Destination;
