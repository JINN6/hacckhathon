import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


import { Calendar, Clock } from 'lucide-react';

const Home = () => {
  return (
    <div>
      <Navbar />

      <section className="bg-[#FBEBB5] flex justify-between items-center py-12 px-4">
 
  <div className="flex flex-col items-start justify-center space-y-4 w-full max-w-xl pr-4">
    <h1 className="text-[50px] font-bold text-gray-800 mb-4">Rocket Single Seater</h1>
    <a
      href="#shop"
      className="text-left text-2xl font-bold text-red-500 underline mt-2 relative"
    >
      Shop Now
      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-red-500"></span>
    </a>
  </div>

  <div className="flex-grow pl-4">
    <img
      src="/rocket.png" 
      alt="Rocket Single Seater Sofa"
      className="w-full h-auto max-w-[853px] mx-auto rounded-lg"
    />
  </div>
</section>



     
      <section className="py-12 px-4">

        <div className="grid grid-cols-0 sm:grid-cols-1 lg:grid-cols-2 gap-6">
         <img src="/Group 9.png" alt="" />
         <img src="/Group 8.png" alt="" />
        </div>
      </section>

     
      <section className="py-12 px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Top Picks For You</h2>
        <p className="text-gray-800 mb-6 text-center"> Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          <img src="Group 15.png" alt="" />
          <img src="Group 16.png" alt="" />
          <img src="Group 17.png" alt="" />
          <img src="Group 18.png" alt="" />
        </div>
        <br />
        <br />
        <br />
        <div className="text-center mt-6">
  <a
    href="#"
    className="text-black text-2xl font-bold underline underline-offset-[19px] decoration-2"
  >
    View More
  </a>
  <br />
  <br />
  <br />
</div>

      </section>

      
      <section className="w-full h-[639px] bg-[#FFF9E5] flex justify-between items-center px-[60px]">
  <img src="Asgaard sofa 1.png" alt="Asgaard Sofa" className="max-h-full max-w-full object-contain" />
  <div className="py-6 text-center flex flex-col items-center mr-9">
    <h3 className="text-center font-bold">New Arrivals</h3>
    <h1 className="font-extrabold text-[40px]">Asgaard Sofa</h1>
    <button className="mt-4 px-[50px] py-2 border border-black">Order Now</button>
  </div>
</section>


      
      <section className="bg-white py-10">
        <div className="container mx-auto px-4 md:px-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Blogs</h2>
          <p className="text-gray-500 text-center mb-10">Find a bright idea to suit your taste with our great selection</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg">
              <img src="/Rectangle 13.png" alt="Blog Image 1" className="w-full h-auto mb-4" />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 underline">
                <p className="text-center">Read More</p>
              </a>        <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <img src="/Rectangle 14.png" alt="Blog Image 1" className="w-full h-auto mb-4" />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 ">
                <p className="text-center text-black text-xl font-bold underline underline-offset-[19px] decoration-2 mt-2 mb-2">Read More</p>
              </a>       <br /> <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            <div className="p-6 rounded-lg">
              <img src="/Rectangle 15.png" alt="Blog Image 1" className="w-full h-auto mb-4" />
              <p className="text-lg  mb-2 text-center">Going all-in with millennial design</p>
              <a href="#" className="items-center justify-center font-bold text-black-500 underline">
                <p className="text-center">Read More</p>
              </a>        <p className="text-center text-gray-500 mt-2">
                <Calendar size={16} className="inline-block mr-2" />
                5 min
                <Clock size={16} className="inline-block mr-2" />
                12th Oct 2022
              </p>
            </div>
            

          </div>
          <div className="text-center mt-10">
          <a href="#" className="items-center justify-center text-black-500 underline">
                <p className="text-center">View All</p>
              </a>
          </div>
        </div>
      </section>

      
      <section className="py-12 px-4 text-center bg-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Instagram</h2>
        <p className="text-gray-600 mb-6">Follow our store on Instagram</p>
        <div className="grid grid-cols-3 gap-4">
          <img src="/placeholder.png" alt="Instagram Post 1" className="rounded-lg" />
          <img src="/placeholder.png" alt="Instagram Post 2" className="rounded-lg" />
          <img src="/placeholder.png" alt="Instagram Post 3" className="rounded-lg" />
        </div>
      </section>

      
      <Footer />
    </div>
  );
};

export default Home;
