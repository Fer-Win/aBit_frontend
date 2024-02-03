


interface VideoCardProps{
    title : string,
    shares : number,
    offered: number,
    raised: number,
    imgurl: string
}

const VideoCard : React.FC<VideoCardProps> = ({title,shares,offered,raised,imgUrl}) => {
  return (
    <div className="h-36 w-32 bg-blue-200">
        
    </div>
  )
}

export default VideoCard