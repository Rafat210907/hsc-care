import 'boxicons/css/boxicons.min.css'
import { BorderBeam } from "@/components/magicui/BorderBeam" // Adjust import path if needed
import { AuroraText } from "@/components/magicui/AuroraText" // Import AuroraText
import React from "react"
import { Link } from "react-router-dom"

const Header = () => {
  // Simple function to handle the navigation
  const toggleMobileMenu = () => {
    const mobileMenu = document.getElementById('mobileMenu')
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden')
    } else {
      mobileMenu.classList.add('hidden')
    }
  }

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20 ">
      <Link to="/">
        <AuroraText className="text-4xl md:text-4xl lg:text-5xl font-light m-0 2xl:ml-44" >HSC CARE</AuroraText>
      </Link>

      {/* Desktop Navigation */}
      <div className="relative inline-block rounded-lg overflow-hidden">
        {/* Beam border behind */}
        <BorderBeam
          duration={8}
          size={700}
          className="absolute inset-0 pointer-events-none from-transparent via-[#3737e7] to-transparent rounded-lg"
        />
        <BorderBeam
          duration={8}
          delay={4}
          size={800}
          className="absolute inset-0 pointer-events-none from-transparent via-[#4D4DFF] to-transparent rounded-lg"
        />

        {/* Your original nav */}
        <nav className="hidden md:flex items-center gap-12 2xl:mr-3 relative z-10 px-6 py-3">
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF] z-50" to="/">Home</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/carousel">Carousel</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/aboutus">About Us</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/ourteachers">Our Teachers</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/whyus">Why Us</Link>
          {/* <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/Faq">FAQ</Link> */}
        </nav>
      </div>

      {/* Sign In button styled like Documentation button with AuroraText */}
      <Link
        to="/contact"
        className="hidden md:inline-flex relative items-center justify-center bg-black text-black py-3 px-8 rounded-full border-none font-medium tracking-wide text-sm sm:text-lg transition-colors duration-300 hover:bg-slate-700 cursor-pointer z-50 2xl:mr-48 overflow-hidden "
      >
        {/* Beam container */}
        <BorderBeam
          duration={5}
          size={80}
          className="absolute inset-0 pointer-events-none from-transparent via-[#eee4e4] to-transparent"
          style={{ borderRadius: '9999px' }}
        />
        <span className="relative z-10">
          <AuroraText>Contact Us</AuroraText>
          <i className="bx bx-log-in text-white p-1"></i>
        </span>
      </Link>

      {/* Mobile Menu Toggle Button */}
      <button onClick={toggleMobileMenu} className="md:hidden text-3xl p-2 z-50">
        <i className='bx bx-menu'></i>
      </button>

      {/* Mobile Menu */}
      <div
        id="mobileMenu"
        className="hidden fixed top-0 bottom-0 right-0 left-0 pt-20 md:hidden z-40 bg-black bg-opacity-30 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/">Home</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/carousel">Carousel</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/aboutus">About Us</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/ourteachers">Our Teachers</Link>
          <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/whyus">Why Us</Link>
          {/* <Link className="text-base tracking-wider transition-colors hover:text-[#4D4DFF]" to="/Faq">FAQ</Link> */}

          <Link
            to="/contact"
            className="relative w-[95%] sm:w-48 h-10 rounded-full overflow-hidden cursor-pointer z-50 2xl:mr-48 border-none bg-transparent p-0 flex items-center justify-center"
          >
            {/* Border Beams */}
            <BorderBeam
              duration={6}
              size={100}
              className="absolute inset-0 from-transparent via-[#eee4e4] to-transparent"
            />
            <BorderBeam
              beamHeight={300}
              duration={6}
              delay={3}
              size={100}
              className="absolute inset-0 from-transparent via-purple-500 to-transparent"
            />
            {/* Inner text container */}
            <div className="absolute inset-[3px] bg-[#161515] rounded-full flex items-center justify-center gap-2 text-white z-10 select-none">
              <i className="bx bx-log-in"></i>
              <AuroraText>Contact Us</AuroraText>
            </div>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
