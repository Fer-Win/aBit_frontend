

const Footer = () => {
  return (
    <div className='w-screen bg-[#EDEDED] h-64 flex justify-center items-center'>
       <div className="flex w-[80%] h-24 justify-between items-center">
        <div className="w-[200px]">
            <h1 className='text-3xl font-bold'>aBit</h1>
            <h2>Changing the way in which creators and fans interact.</h2>
        </div>
        <div className="w-[200px] border-l-2 h-full border-[#717171]">
            <ul className="px-4 text-xs flex flex-col justify-between h-full py-2 font-bold">
                <li>Home</li>
                <li>Are you a Creator?</li>
                <li>Support</li>
            </ul>
        </div>
       </div>
    </div>
  )
}

export default Footer