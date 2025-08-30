import FAQComponent from '../components/comp-337.jsx'
import React from 'react'

const FAQ = () => {
  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-transparent py-12 px-5">
      <div className="w-full max-w-screen-lg">
        <FAQComponent />
      </div>
    </div>
  );
}

export default FAQ