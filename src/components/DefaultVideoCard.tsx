
import { IoIosAdd } from "react-icons/io";

const DefaultVideoCard:React.FC = () => {
  return (
    <div  className='h-80 min-w-72 overflow-hidden hover:shadow-lg cursor-pointer  transition-all duration-300 ease-in-out bg-[#EDEDED] rounded-3xl relative object-cover text-[#A0A0A0] flex flex-col justify-center items-center '>
    <IoIosAdd size={55}/>
    <p className="absolute bottom-10 w-4/5 text-center">You haven’t uploaded any videos with aBit yet. Add now!</p>
    </div>
  )
}

export default DefaultVideoCard