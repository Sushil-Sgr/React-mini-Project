import React, { useState } from 'react'

function Button(props) {
    return (
        <>
            <button onClick={() => props.onChange(props.color)}style={{ backgroundColor: props.color }} className='m-1.5 border-black w-16  border-1 rounded-3xl p-2'>{props.color}</button>
        </>
    )
}

export default Button
