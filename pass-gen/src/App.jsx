import { useState, useCallback } from 'react'


function App() {
  const [lenght, setLenght] = useState(8)

  const [allowNumber, setAllowNumber] = useState(false)

  const [allowSchar, setAllowSchar] = useState(false)

  const [password, setPassword] = useState()

  let passgenrator = useCallback(() => {


    let pass = ''

    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    if (allowNumber) str += '0987654321'

    if (allowSchar) str += '!@#$%^&*()_+'

    for (let i = 1; i <= length; i++) {

      let char = (Math.floor(Math.random() * str.length + 1))

      pass = str.charAt(char)

    }
    setPassword(pass)
  }, [lenght, allowNumber, allowSchar])
  useEffect(() => {}, [])
  

  return (
    <>
      <div className='w-full max-w-md h-full mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 text-center bg-slate-600'>
        <h1 className='text-center my-3 '>Password Genrater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input type="text" value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password' />
            <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={15}
            value={lenght}
            className='cursor-pointer'
            onChange={(e)=>{setLenght(e.target.value)}}
            />
            <label>lenght:{lenght}</label>
            <div className='flex items-center gap-x-1'>
              <input
               type="checkbox"
               defaultChecked={allowNumber} 
               id="numberInput"
               onChange={(e)=>{
                setAllowNumber((prev)=>!prev);
               }}               
               />
               <label htmlFor="numberInput">Numbers</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input
               type="checkbox"
               defaultChecked={allowSchar} 
               id="charInput"
               onChange={(e)=>{
                setAllowNumber((prev)=>!prev);
               }}               
               />
               <label htmlFor="charInput">Charraters</label>
            </div>
          </div>

        </div>
        </div>
    </>
  )
}

export default App
