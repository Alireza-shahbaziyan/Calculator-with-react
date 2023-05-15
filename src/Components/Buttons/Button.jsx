import React from 'react'

const Button = (props) => {
  return (
    <>
        <button className='bg-slate-700 w-14 h-14 border-2 border-gray-400 rounded-lg'>
                {props.value}
        </button>
    </>
  )
}

export default Button