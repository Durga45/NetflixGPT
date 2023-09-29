

const VideoTitle = ({title,overview}) => {
   
 return(
    <div className="w-screen aspect-video pt-[20%] px-24 pb-20  bg-opacity-10 absolute text-white bg-gradient-to-r from-black">
        <h1 className="text-6xl font-bold">{title}</h1>
        <p className="py-6 text-lg w-1/4">{overview}</p>
        <div className="flex gap-10">
         <button className=" bg-gray-200 text-black hover:bg-opacity-80 hover:bg-white border-full px-10 py-2 w-22 border  border-black rounded-md font-bold ">▶ Play</button>
         <button className=" bg-gray-400 text-black border-full px-10 py-2 w-22 border border-black rounded-md font-bold">More info</button>
        </div>
    </div>
 )
}

export default VideoTitle