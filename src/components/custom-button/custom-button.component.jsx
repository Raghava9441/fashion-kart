import React from 'react'
import './custom-button.style.scss'
const CustomButton = ({chilldren, isGoogleSignIn,...otherprops}) => {
  return <button className={`${isGoogleSignIn?'google-sign-in':''} custom-button`} {...otherprops}></button>;
}

export default CustomButton