

const Releases = () => {
  return (
    <div className='h-[100px] w-[95%]  flex justify-between'>
        <div className='w-1/3 h-full flex flex-col gap-2 justify-center'>
            <h2 className='font-medium text-2xl'>Releases</h2>
            <p className='text-lg'>Videos that you upload in collaboration with aBit appear here.</p>
        </div>
        <div className='w-1/3  h-full flex justify-around'>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className=' px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>2</h2>
                    <p className='text-base w-2/3 text-[#696969]'>Shared Videos</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex border-l-2 border-[#7A7A7A] '>
                <div className=' px-4  flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>$9510</h2>
                    <p className='text-base w-2/3 text-[#696969]'>Funds
Raised</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className=' px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>317</h2>
                    <p className='text-base w-2/3 text-[#696969]'>Co-owner community</p>
                </div>
            </div>
            <div className='w-[25%] h-[80%] my-auto flex  border-l-2 border-[#7A7A7A] '>
                <div className=' px-4 flex flex-col justify-between'>
                    <h2 className='text-lg font-bold text-[#565656]'>$3804</h2>
                    <p className='text-base w-2/3 text-[#696969]'>Co-owner
Earnings</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Releases