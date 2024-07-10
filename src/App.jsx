import { useState } from "react"


function App() {
  const [Color, setColor]= useState("olive")

  return (
    <>
     <div className="w-full h-screen duration-200"
     style={{backgroundColor: Color,}}>
      <div className="fixed flex text-center flex-wrap justify-center items-center bottom-12 inset-x-0 px-2"><div className="flex flex-wrap justify-senter gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl  " style={{border:"1px solid black",
      display:"flex",
        alignItems:"center"
      }}>
        <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full  text-white  shadow-lg " style={{backgroundColor: "red", border:"1px solid black"}}>Red</button>
        <button onClick={()=>setColor("Green")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg " style={{backgroundColor: "Green",
          border:"1px solid black"
        }}>Green</button>
        <button onClick={()=>setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg " style={{backgroundColor: "yellow",
          border:"1px solid black"
        }}>Yellow</button>
        <button onClick={()=>setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg " style={{backgroundColor: "Blue",
          border:"1px solid black"
        }}>Blue</button>
        <button onClick={()=>setColor("Black")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg " style={{backgroundColor: "Black",
          border:"1px solid black"
        }}>Black</button>
        <button onClick={()=>setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white  shadow-lg " style={{backgroundColor: "purple",
          border:"1px solid black"
        }}>Purple</button>
        </div></div> </div>

    </>
  )
}

export default App
