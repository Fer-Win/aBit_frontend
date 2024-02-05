import { IoIosAdd } from "react-icons/io";

const ShareButton = () => {
  return (
    <div className="sticky " >
        <button className='bg-[#764CC2]  text-white absolute md:hidden right-4 bottom-4 text-lg font-bold px-2 py-2 rounded-full mt-10 mx-auto block'><IoIosAdd size={50} /></button> 
    </div>
  )
}

export default ShareButton