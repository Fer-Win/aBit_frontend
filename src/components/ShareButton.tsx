import { IoIosAdd } from "react-icons/io";

const ShareButton = () => {
  return (
    <div className=" md:hidden ">
      <button className='bg-[#764CC2]  text-white  md:hidden  text-lg font-bold px-2 py-2 rounded-full' style={{ zIndex: 999 }}>
        <IoIosAdd size={30} />
      </button> 
    </div>
  )
}

export default ShareButton;
