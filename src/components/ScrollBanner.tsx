import Marquee from "react-fast-marquee";

const ScrollBanner = () => {
  return (
    <Marquee className="bg-[#292828] h-16 text-white text-lg" autoFill speed={80} pauseOnHover>
John Bill / Creator / Moved to NYC / 27.11.22 / Live now/
</Marquee>
  )
}

export default ScrollBanner