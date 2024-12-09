import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div>
        <Navbar className="bg-white text-black " />
      {/* Header Section */}
      <header
        className="relative bg-cover bg-center h-60"
        style={{ backgroundImage: "url('/banner.png')" }} // Public folder path for the image
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-black">
          <div>
            <h1 className="text-6xl font-Poppins text-center font-bold">My Account</h1>
            <p className="text-2xl mt-2 text-center">Home &gt; My account</p>
          </div>
        </div>
      </header>

      {/* Main Section */}
      <main className=" py-12 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Login Form */}
          <div className="bg-white p-6  rounded-md">
            <h2 className="text-2xl font-bold mb-6">Log In</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="login-email">
                  Username or email address
                </label>
                <input
                  type="email"
                  id="login-email"
                  className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="login-password">
                  Password
                </label>
                <input
                  type="password"
                  id="login-password"
                  className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <div className="flex items-center">
                <input type="checkbox" id="remember-me" className="mr-2 w-[30px] h-[27px]" />
                <label htmlFor="remember-me" className="text-sm">
                  Remember me
                </label>
              </div>
              <div className='flex justify-between gap-[-100px] items-center'><button
                type="submit"
                className=" w-[215px] h-[64px]  border border-black text-black  py-2 rounded-md  hover:bg-black hover:text-white transition"
              >
                Log In
              </button>
              <a
                href="#"
                className="text-sm text-black font-bold hover:underline mt-2 block text-center"
              >
                Lost Your Password?
              </a></div>
            </form>
          </div>

          {/* Register Form */}
          <div className="bg-white p-6  rounded-md">
            <h2 className="text-2xl font-bold mb-6">Register</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2" htmlFor="register-email">
                  Email address
                </label>
                <input
                  type="email"
                  id="register-email"
                  className="w-[423px] h-[75px] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <p className="text-sm text-gray-500">
                A link to set a new password will be sent to your email <br /> address. <br />Your personal
                data will be used to support your experience throughout this website, to manage
                access to your account, and for other purposes described in our{' '}
                <a href="#" className="text-black font-bold hover:underline mb-[30px]">
                  privacy policy
                </a>
                .
              </p>
             
              <br />
              <button
                type="submit"
                className="w-[215px] h-[64px] border border-black text-black py-2 rounded-md hover:bg-black hover:text-white transition"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-[#FAF4F4] h-[300px] w-full py-10 mt-10">
  <div className="max-w-6xl mx-auto flex justify-around items-center text-center h-full">
    <div>
      <h3 className="text-lg font-semibold">Free Delivery</h3>
      <p className="text-sm text-gray-600">
        For all orders over $50, consectetur adipiscing elit.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">90 Days Return</h3>
      <p className="text-sm text-gray-600">
        If goods have problems, consectetur adipiscing elit.
      </p>
    </div>
    <div>
      <h3 className="text-lg font-semibold">Secure Payment</h3>
      <p className="text-sm text-gray-600">
        100% secure payment, consectetur adipiscing elit.
      </p>
    </div>
  </div>
</footer>
<Footer />

    </div>
  );
};

export default Page;
