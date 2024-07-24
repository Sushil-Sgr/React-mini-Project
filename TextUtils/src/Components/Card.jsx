import React, { useState , useEffect } from 'react'
import Button from './Button'

function Card(props) {
  const [backgroundColor, setBackgroundColor] = useState('rgb(102, 187, 106)');
  useEffect(() => {
  alert(`The background color is ${backgroundColor}` )
  }, [backgroundColor])
  

  return (
    <div style={{backgroundColor}} className='flex h-screen w-screen relativ justify-center '>
      <div  className='p-4 h-14 rounded-full  text-black bg-white border-black border-1 absolute bottom-8 justify-center flex items-center  '>
        <Button color='Red'    onChange={setBackgroundColor} />
        <Button color='Green'  onChange={setBackgroundColor} />
        <Button color='Blue'   onChange={setBackgroundColor} />
        <Button color='Olive'  onChange={setBackgroundColor} />
        <Button color='Yellow' onChange={setBackgroundColor} />
        <Button color='Grey'   onChange={setBackgroundColor} />
        <Button color='Pink'   onChange={setBackgroundColor} />
        <Button color='White'  onChange={setBackgroundColor} />
        <Button color='Orange' onChange={setBackgroundColor} />
        <Button color='Aqua'   onChange={setBackgroundColor} />
        <Button color='purple' onChange={setBackgroundColor} />
      </div>

    </div>
  )
}

export default Card
