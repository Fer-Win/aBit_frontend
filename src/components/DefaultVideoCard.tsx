
import { IoIosAdd } from "react-icons/io";

const DefaultVideoCard:React.FC = () => {
  return (
    <div style={{boxShadow : '0px 4px 4px #5c5e5d'}} className='h-80 w-72 overflow-hidden bg-[#D8D8D8] rounded-3xl relative object-cover text-[#A0A0A0] flex flex-col justify-center items-center realtive'>
    <IoIosAdd size={55}/>
    <p className="absolute bottom-10 w-4/5">You haven’t uploaded any videos with aBit yet. Add now!</p>
    </div>
  )
}

export default DefaultVideoCard