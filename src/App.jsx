
import Sidebar from "./components/Sidebar"
import Button from "./components/Button"
import { useState } from "react";
function App() {
  const[tog,setTog]=useState(false);
  
  const handleToggle = () => {
    setTog(!tog);
    console.log("handle");
  }

  const handleCloseBtn = () => {
    setTog(false);
  }

  return (
    <div className="App w-screen h-screen flex justify-between p-2  ">
      <Button onClick={handleToggle} />
      { tog && <Sidebar handleCloseBtn={handleCloseBtn}/>}
    </div>
  )
}

export default App
