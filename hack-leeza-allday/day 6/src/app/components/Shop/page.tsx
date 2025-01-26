import Image from "next/image"
import Link from "next/link"
export default function ShopNow(){
    return(
        <div>
                            <Image className="pt-[14px] pl-[9px] " src={"/newimage.png"} alt="" width={720} height={520} />
           
        
    

      {/* white work */}
      <div className=" bg-white
w-[1170px] h-[38px] mt-10 relative left-[135px] flex">
        <div className="w-[674px] h-[24px] gap-[190px] flex ">
          {/* <p className="w-[118px] h-[24px] font-bold text-[24px] leading-[24px] flex"> */}
            
          {/* </p> */}
          <div className="w-[367px] h-[24px] flex gap-[48px] justify-between ">
          <Link className="relative left-[45px]  "  href="/">Home</Link>
            <Link className="relative left-[45px]  " href="/contact">shop</Link>
            <Link className="relative left-[45px]  " href="/about">About</Link>
            <Link className="relative left-[45px]  " href="/signup">contact</Link>
          </div>
        </div>
      </div>
      <div>
      <Image className="pt-[px] pl-[px] " src={"/background.png"} alt="" width={560} height={560} />
      </div>
      </div>
    )
}

