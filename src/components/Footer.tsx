import React from 'react';

const X: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-7 border-t border-gray-300">
      <div className="container mx-auto px-3 md:px-11">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7">
          
          <div className="text-gray-500 text-xs">
            <p>Karchi</p>
            <p>Country</p>
          </div>
          
          <div>
            <h3 className="text-gray-400 text-xs font-semibold mb-2">Links</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Start
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Market
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Reach
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs font-semibold mb-2">Support</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Payments
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-gray-900 transition">
                  Privacy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-gray-400 text-xs font-semibold mb-2">Updates</h3>
            <div className="flex items-center">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 text-sm px-3 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-900"
              />
              <button className="bg-gray-900 text-white px-2 py-1 text-sm rounded-r-md hover:bg-gray-700 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        <div className="mt-7 text-center text-gray-500 text-xs">
          <p>2024 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default X;
