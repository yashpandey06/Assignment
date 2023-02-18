import React from 'react'

const Button = (props) => {
  return (
   <div onClick={props.onClick} className='w-full p-4  bg-white rounded-md  '>
    <button className='shadow-xl p-2 text-center hover:shadow-md'>toggle</button>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia tempore, quaerat vitae sequi quis autem magni voluptatem voluptatibus placeat nostrum sint iste similique ipsa. Tenetur minima dolores inventore alias.</p> */}
   </div>
    
  )
}

export default Button