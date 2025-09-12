import FAQComponent from '../components/comp-337.jsx'
import React from 'react'

const FAQ = () => {
  return (
    <div id="faqs" className="parallax-section min-h-screen min-w-screen flex flex-col items-center justify-center bg-transparent py-12 px-5">
        <h2 className="section-title" style={{ color: "#ff00a6" }}>FAQ</h2>
      <div className="w-full max-w-screen-lg">
        <FAQComponent />
      </div>
    </div>
  );
}

export default FAQ