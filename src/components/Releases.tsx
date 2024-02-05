

const Releases = () => {
  return (
    <div className='h-[100px] w-[95%] flex-col   md:flex md:flex-row  justify-between'>
        <div className='w-full  md:w-1/3 h-full flex flex-col gap-2 justify-center items-center md:items-start '>
            <h2 className='font-medium text-2xl'>Releases</h2>
            <p className='text-center text-lg'>Videos that you upload in collaboration with <span className="italic font-bold">aBit</span> appear here.</p>
        </div>
        <div className='w-full  md:w-1/3 mt-5 h-[100px] flex    md:flex justify-around'>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className='px-2 md:px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>2</h2>
                    <p className='text-base w-full md:w-2/3 text-[#696969]'>Shared Videos</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex border-l-2 border-[#7A7A7A] '>
                <div className='px-2 md:px-4  flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>$9510</h2>
                    <p className='text-base w-full md:w-2/3 text-[#696969]'>Funds
Raised</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className='px-2 md:px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>317</h2>
                    <p className='text-base w-full md:w-2/3 text-[#696969]'>Co-owner community</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className='px-2 md:px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>$3804</h2>
                    <p className='text-base w-full md:w-2/3 text-[#696969]'>Co-owner
Earnings</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Releases