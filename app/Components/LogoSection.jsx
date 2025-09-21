import React from 'react'
import logo1 from "../assets/logo1.jpg"
import logo2 from "../assets/logo2.jpg"
import logo3 from "../assets/logo3.jpg"
import logo4 from "../assets/logo4.jpg"
import logo5 from "../assets/logo5.jpg"
import logo6 from "../assets/logo6.jpg"
import MoE from "../assets/MoE.jpg"
import logo8 from "../assets/logo8.jpg"
import Image from 'next/image'

const LogoSection = () => {
  return (
    <>
    {/* Partners Section */}
      <section id="partners" className="py-12 bg-black border-y">
        <div className="container mx-auto px-4">
          
          <div className="grid grid-cols-2 sm:grid-cols-6 gap-4 items-center">
            {[logo2, logo3, logo4, logo5, logo6, MoE].map((logo, index) => (
              <div 
                key={index} 
                className="flex justify-center p-4 bg-gray-500 rounded-lg hover:bg-white hover:shadow-md transition-all"
              >
                <Image 
                  src={logo}
                  alt={`Partner ${index + 1}`}
                  width={160}
                  height={90}
                  className="h-16 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default LogoSection