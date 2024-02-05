import { useState } from "react";



const ProfileCard = () => {
  const [isCreator, setIsCreator] = useState(true);

  const handleSwitch=()=>{
    document.getElementsByClassName('switchButton')[0].classList.toggle('justify-end');
    setIsCreator(!isCreator);
  }
  return (
    <div
    style={{ boxShadow : '0px 3px 10px #5c5e5d'}} 
    className='h-60 w-[550px] bg-[#EDEDED] rounded-3xl  flex overflow-hidden '>
        <div className=" h-full w-[40%] border-r-2 border-black bg-cover flex justify-center items-center overflow-hidden ">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="object-cover scale-110" />
        </div>
        <div className="  w-[60%] h-full flex flex-col justify-around items-center px-6">
          <div className="w-full">
            <div className="flex items-center justify-start text-left">
              <h1 className="text-3xl font-bold mr-6">DAN MACE</h1>
              <h2 className=" text-[#696969]">/Johny_Films/</h2>
            </div>
          </div>
          <div className=" text-[#696969]">
            <h1 className="font-bold">Bio</h1>
            <p>
              Simply a film fan creating original content for YouTube. Let’s Collaborate.
            </p>
          </div>
          <div className="switchButton w-full bg-[#000000A6] border-[1px] border-black rounded-md flex  h-10 overflow-hidden transition-all duration-300 ease-in-out" >
              <div className="w-1/2 bg-white rounded h-full flex justify-center items-center  border-2 border-inherit cursor-pointer " onClick={handleSwitch}>
                {isCreator ? <h1 className="font-medium">Creator</h1> : <h1 className="font-medium">Co-Owner</h1>}
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProfileCard