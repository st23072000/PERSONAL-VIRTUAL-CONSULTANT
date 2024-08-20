import React from 'react'

const Introduction = () => {
  return (
    <div className='bg-white'>
      <div className="flex items-center">
        
        <div className="text-gray-700 pr-4 w-1/2 p-4">
          <p>Hi!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Pellentesque cursus laoreet purus a accumsan. Curabitur semper volutpat tellus, 
            a varius tellus efficitur a.</p>
            
          <p>Cras egestas at tortor in viverra. Pellentesque vitae
            quam lacus. Nulla elit augue, porta sed imperdiet eu, auctor ac justo. Fusce eget
            est placerat, convallis lorem et, tempor urna. Vivamus aliquet lacus id vehicula 
            fringilla.</p>
          <p>HAPPY PRIORITIZING!</p>
        </div>

        <div className="w-1/2 flex items-center border border-black-600">
          <img src="../images/Virtual.png" alt="Image" className="w-full h-auto max-w-full object-cover border border-gray-300" />
        </div>
      </div>
    </div>
  )
}

export default Introduction
