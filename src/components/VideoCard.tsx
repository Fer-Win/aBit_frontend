import VideoCardTag from "./VideoCardTag"



interface VideoCardProps{
    title : string,
    shares : number,
    offered: number,
    raised: number,
    imgUrl: string
}

const VideoCard : React.FC<VideoCardProps> = ({title,shares,offered,raised,imgUrl}) => {
  return (
    <div 
    style={{ backgroundImage: `url(${imgUrl})`, boxShadow : '0px 0px 15px #5c5e5d'}} 
    className='h-80 w-72 overflow-hidden bg-cover rounded-3xl relative object-cover text-white flex flex-col justify-between '>
    
    <div>
    <div className="font-bold text-[22px] text-left py-5 px-5" >{title}</div>
    </div>
    <div className="mb-4">
    <VideoCardTag shares={shares} offered={offered} raised={raised} ></VideoCardTag>
    </div>
    <div className="w-full h-full absolute bg-black bg-opacity-10 top-0"></div>
    </div>
  )
}

export default VideoCard