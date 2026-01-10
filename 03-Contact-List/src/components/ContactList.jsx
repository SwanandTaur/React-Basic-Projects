import React from 'react'

const ContactList = (props) => {
  return (
    <div className='list w-[70%] h-full flex flex-col items-center justify-start gap-3 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
       {props.allContacts.map((elem, idx)=>{
        return (
          <div key={idx} className='contact w-full flex items-center justify-between bg-gray-600 rounded-md'>
            <div className='flex gap-4 justify-center items-center'>
                <i className="ri-account-circle-fill text-6xl"></i>
            <div>
                <h1 className='text-lg font-semibold'>{elem.contactName}</h1>
                <h4 className='text-md'>{elem.contact}</h4>
            </div>
            </div>
            <i className="ri-phone-fill text-3xl cursor-pointer"></i>
        </div>
        )
       })}
    </div>
  )
}

export default ContactList;