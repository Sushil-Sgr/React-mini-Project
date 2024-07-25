import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  let [lenght, setLenght] = useState(8)

  const [allowNumber, setAllowNumber] = useState(false);
  const [allowChar, setAllowChar] = useState(false)
  const [password, setPassword] = useState('')
  const passwordRef = useRef(null)

  const passGenrator = useCallback(() => {
    let pass = ''
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (allowNumber) str += '0987654321'
    if (allowChar) str += '!@#$%^&*()_+'
    for (let i = 1; i <= lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)
  }, [lenght, allowNumber, allowChar, setPassword])
  useEffect(() => {
    passwordRef.current.select()
  }, [password]);

  useEffect(() => {
    passGenrator();
  }, [lenght, allowNumber, allowChar, setPassword,]);

  // useEffect(() => {
  //   passGenrator();
  //   passwordRef.current.select();
  // }, [lenght, allowNumber, allowChar, setPassword, password]);

  // useEffect(() => {
  //   passGenrator();
  // }, [lenght, allowNumber, allowChar, setPassword,])



  return (
    <>
      <div className='w-full max-w-md h-full mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-400 text-center bg-slate-600'>
        <h1 className='text-center my-3 '>Password Genrater</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4' >
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={25}
              value={lenght}
              className='cursor-pointer'
              onChange={(e) => { setLenght(e.target.value) }} />

            <label>lenght:{lenght}</label>
          </div>

          <div className='flex items-center gap-x-1'>

            <input
              type="checkbox"
              checked={allowNumber}
              id="numberInput"
              onChange={() => {
                setAllowNumber((prev) => !prev)
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              checked={allowChar}
              id="charInput"
              onChange={() => {
                setAllowChar((prev) => !prev)
              }}
            />
            <label htmlFor="charInput">Charraters</label>
          </div>


        </div>
      </div>
    </>
  )
}

export default App
