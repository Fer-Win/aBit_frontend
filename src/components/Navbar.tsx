import { IoWallet } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  return (
    <div className='w-screen h-28 bg-[#DDDEE0] border-b-2 border-black flex justify-between items-center pl-10 pr-4'>
      <div className="text-xl font-bold ">aBit</div>
      <div className="flex w-1/3 justify-around items-center">
        <button className="text-[#764CC2] bg-transparent text-sm font-bold  flex px-6 py-3 border-[3px] rounded-full border-[#764CC2]">Share new video</button>
        <div className="text-[#918c8c] flex justify-around items-center   w-1/2">
        <FaBell size={30}  className="hover:text-black transition-all duration-300 ease-out cursor-pointer"/>
        <IoWallet size={30} className="hover:text-black transition-all duration-300 ease-out cursor-pointer"/>
        <div className="h-10 w-10 rounded-full border-2 border-black bg-slate-500 overflow-hidden">
          <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <IoIosArrowDown size={30} className="hover:text-black transition-all duration-300 ease-out cursor-pointer"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar