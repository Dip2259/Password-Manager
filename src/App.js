import Manager from "./Components/Manager"
import Navbar from "./Components/Navbar"

function App() {

  return (
    <>
      <Navbar/>
      <div className="main w-[60%] mx-auto my-10">
        <div className="title text-center">
          <h1 className="brand text-3xl font-bold">
            <span className="text-green-500">&lt;</span>
            Pass<span className='text-green-500'>OP/&gt;</span>
          </h1>
          <p className="font-semibold">Your Own Password Manager</p>
        </div>
        <Manager/>
      </div>
    </>
  )
}

export default App
