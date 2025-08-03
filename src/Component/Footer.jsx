// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 text-gray-700 text-sm">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Online Shopping */}
        <div>
          <h4 className="font-bold mb-3 text-gray-800">ONLINE SHOPPING</h4>
          <ul className="space-y-2">
            {['Men', 'Women', 'Kids', 'Home', 'Beauty', 'Genz', 'Gift Cards', 'Myntra Insider'].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* Customer Policies */}
        <div>
          <h4 className="font-bold mb-3 text-gray-800">CUSTOMER POLICIES</h4>
          <ul className="space-y-2">
            {['Contact Us', 'FAQ', 'T&C', 'Terms Of Use', 'Track Orders', 'Shipping', 'Cancellation', 'Returns', 'Privacy policy', 'Grievance Redressal'].map(item => (
              <li key={item}><a href="#" className="hover:underline">{item}</a></li>
            ))}
          </ul>
        </div>

        {/* App Links + Social */}
        <div>
          <h4 className="font-bold mb-3 text-gray-800">EXPERIENCE MYNTRA APP ON MOBILE</h4>
          <div className="flex space-x-4 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
            <img
              src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
              alt="App Store"
              className="h-10"
            />
          </div>
          <h4 className="font-bold mb-2 text-gray-800">KEEP IN TOUCH</h4>
          <div className="flex space-x-4 text-lg">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Guarantee */}
        <div className="col-span-1 flex flex-col gap-6">
          <div className="flex items-start gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/1828/1828640.png" alt="Original" className="h-8" />
            <div>
              <p className="font-bold">100% ORIGINAL</p>
              <p>guarantee for all products at myntra.com</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <img src="https://cdn-icons-png.flaticon.com/512/61/61449.png" alt="Returns" className="h-8" />
            <div>
              <p className="font-bold">Return within 14 days</p>
              <p>of receiving your order</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
