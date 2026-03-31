import React from 'react'
import catProduct from '/src/assets/product-1.png'

const Badge = ({badgeName, className}) => {
  return (
    <div className={`bg-[#262626] text-white py-3 px-8 w-22.5 ${className}`}>
        {badgeName}
        <div className=''></div>
        </div>
  )
}

export default Badge