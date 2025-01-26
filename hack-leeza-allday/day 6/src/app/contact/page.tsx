import Image from "next/image";
import Link from "next/link";


export default function Checkout() {
    return (
        <div>
            <div>
                <div>
                    <Image className="  " src={"/contact.png"} alt="" width={1440} height={900} />
                </div>







                <div className="ml-[250px] ">
<div className="flex" >
                <Image className="  " src={"/ad.png"} alt="" width={20} height={10} />

                    <p className="w-[94px] h-[36px]  text-[24px] leading-[36px]  font-medium">Address</p>
                    </div>
                    <p className="w-[108px] h-[24px]  text-[16px] leading-[24px]  ">236 5th SE Avenue, New York NY10000, United States</p>
                    
                   
                 <div className="flex">  <p className="w-[108px] h-[24px] mt-[100px] text-[24px] leading-[36px]  ">Phone</p></div>
                    <p className="w-[108px] h-[24px]  text-[16px] mt-[40px] leading-[24px] ">Mobile: +(84) 546-6789
                        Hotline: +(84) 456-6789</p>

                       <div className="flex mr-[90px]"> 
                    <p className="w-[103px]  font-medium h-[24px]  text-[24px] mt-[100px] leading-[36px] ml-[02px] ">Working.Timel</p>
                    </div>
                    <p className="w-[108px] h-[24px]  text-[16px] leading-[24px]  mt-[30px] ">Monday-Friday: 9:00 - 22:00
                        Saturday-Sunday: 9:00 - 21:00</p>
                    <p className="w-[108px] h-[24px]  text-[20px] leading-[30px]  "></p>
                    <p className="w-[178px] h-[36px]  text-[24px] leading-[36px] text-[#B88E2F]  "></p>
                </div>





                {/* login work */}





                <div className=" mt[-900px] ">
                    <div className="w-[380px] mt-[-540px] h-[833px] ml-[730px] ">
                        <div className="w-[324px] h-[180px] mt-7 left-[28px] relative ">

                            <p className="w-[231px] mt-4 text-[18px] font-bold flex justify-between leading-[26px] "></p>


                            <div className="w-[324px] h-[561px] mt-4 text-[14px] border-gray-600">
                                <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="Your name" placeholder="Your name" />
                                <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="Email address" placeholder="Email address" />
                                <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="Subject " placeholder="Subject)" />
                                <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="Country / Region" placeholder="Country / Region" />
                                <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="Message" placeholder="Message" />


                                <div className="w-[215px] h-[64px]  mt-[100px] ml-[4px] border-[1px] border-black  rounded-[10px]">

                                    <Link className=" " href="/blog">



                                        <p className="w-[119px] h-[30px] text-[20px] leading-[30px] mt-[10px] ml-[40px] font-medium ">Sbumit</p>
                                    </Link>
                                </div>


                                {/* text */}













                                <div className="w-[1440px] h-[300px] mt-[0px] flex ml-[-500px] ">
                                    <div className="w-[373px] h-[108px] mt-[200px] pl-[-1027px]">
                                        <div className="w-[205px] h-[48px] text-[32px] leadind-[48px] font-medium ">Free Delivery</div>
                                        <p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">For all oders over $50, consectetur adipim scing elit.</p>


                                    </div>


                                    {/* pg */}
                                    <div className="w-[376px] h-[108px] mt-[200px] ml-[234px]">
                                        <div className="w-[205px] h-[48px] text-[29px] leadind-[48px] font-medium ">90 Days Return</div>
                                        <p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">If goods have problems, consectetur adipim scing elit.</p>


                                    </div>

                                    {/* pg3 */}

                                    <div className="w-[376px] h-[108px] mt-[200px] ml-[214px]">
                                        <div className="w-[205px] h-[48px] text-[25px] leadind-[48px] font-medium ">Secure Payment</div>
                                        <p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">100% secure payment, consectetur adipim scing elit.</p>


                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>





















                </div>
            </div>
        </div>
     


    )
}
