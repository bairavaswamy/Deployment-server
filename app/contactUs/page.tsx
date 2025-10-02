import { FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";
import Navbar from "../Navbar/Navbar";
import ContactForm from "./formValidation";
import { ImLocation2 } from "react-icons/im";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { RiTimeLine } from "react-icons/ri";
import Footer from "../Footer/Footer";
import StickyContactIcons from "../stickyicons/stickyIcons";

export default function  ContactUs() {
    return(
        <>
        <Navbar/>
        <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-white flex flex-col items-center py-16 px-6 mt-16">
      
      {/* Heading */}
      <div className="max-w-3xl text-center mb-12">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions or need help? We’re always happy to assist. 
          Reach out to us and we’ll get back to you as soon as possible.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* Left Section - Company Info */}
        <div className="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get in Touch</h2>
          <div className="space-y-4 text-gray-700">
            <p><span className="flex flex-row items-center p-2 gap-2"><ImLocation2 className="text-blue-700" size={25}/><span className="font-medium"> Address:</span> Pedateenarla, Andhra Pradesh, India</span></p>
            <p><span className="flex flex-row items-center p-2 gap-2"><FiPhoneCall className="text-green-700" size={25}/><span className="font-medium">Phone:</span> +91 7995792953</span></p>
            <p><span className="flex flex-row items-center p-2 gap-2"><AiOutlineMail className="text-red-700" size={25} /><span className="font-medium">Email:</span>servanienterprise@gmail.com</span></p>
            <p><span className="flex flex-row items-center p-2 gap-2"><RiTimeLine className="text-black-700" size={25}/><span className="font-medium">Hours:</span> Mon - Sat (9:00 AM - 7:00 PM)</span></p>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Follow Us</h3>
            <div className="flex gap-6">
              <a href="https://www.facebook.com/share/177w7231SD/" target="_blank" className="text-blue-600 hover:text-blue-800 transition"><span className="flex gap-2"><FaFacebook size={25}/>Facebook</span></a>
              <a href="#" className="text-sky-600 hover:text-sky-800 transition"><span className="flex gap-2"><FaTwitter size={25}/>Twitter</span></a>
              <a href="https://www.instagram.com/servanisafetynets?igsh=MTljMjNrdWw2dXo4aA== " target="_blank" className="text-pink-600 hover:text-pink-800 transition"><span className="flex gap-2"><FaInstagram size={25}/>Instagram</span></a>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <ContactForm/>
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">We’re Here to Help You</h2>
        <p className="text-gray-600 mb-6">
          Whether it’s safety nets, pigeon protection, or invisible grills – 
          we’re just one message away from making your space safer and cleaner.
        </p>
        <a
          href="tel:+917995792953"
          className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
        >
          📞 Call Us Now
        </a>
      </div>
    </div>
    <StickyContactIcons/>
    <Footer/>
        </>
    )
};
