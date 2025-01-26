// import Image from "next/image"
// export default function Footer(){
//     return(
//         <div>
//             <footer className="w-[1240px] h-[440px] top-[1191px] text-black bg-white mt-[40px] flex ">
           

//                     <div className="w-[1170px] h-[236px] top-[80px] left-[135px] gap-[87px] flex">
//                         <p>400 University Drive Suite 200 Coral Gables,
//                         FL 33134 USA</p>
//                         <div className="w-[217px] h-[188px] gap-[16px] ">
//                             <div className="w-[206px] h-[124px] gap-[24px] ">
//                                 <div className="w-[118px] h-[76px] mt-[15px] gap-[24px]">
//                                     <p className="w-[118px] h-[24px] font-inter font-bold text-[24px] mt-[15px] leading-[24px] tracking-[3%]"></p>
//                                     <p className="w-[101px] mt-[30px] h-[28px] leading-[28px] text-[20px] font-medium"></p>

//                                 </div>
//                                 <p className="w-[206px] h-[24px] text-[16px] mt-[25px] leading-[24px]"></p>
//                             </div>
//                             <div className="w-[217px] h-[48px] mt-[25px] border-[1.5] rounded-[4px] pt-[12px] pb-[12px] pl-[16px] gap-[32px]">

//                                 <p className="w-[130px] h-[24px] text-[16px] mt-[10px] leading-[24px]"></p>
//                             </div>
//                         </div>
//                         <div className="w-[175px] h-[180px] gap-[24px]">
//                             <b><p className="w-[81px] h-[28px] size-[20px] leading-[28px] font-medium justify-between gap-[23px] ">Links</p></b>
//                             <div className="w-[175px] h-[128px] mt-[30px] gap-[16px]">
//                                 <p className="h-[48px] w-[175px]size-[16px] mt-[30px]leading-[24px]">Home</p>
//                                 <p className=" w-[175px]h-[24px] mt-[30px] size-[16px] leading-[24px]">Shop</p>
//                                 <p className=" w-[165px]h-[24px] size-[16px] mt-[30px] flex leading-[24px]">About</p>
//                                 <p className=" w-[165px]h-[24px] size-[16px] mt-[30px] flex leading-[24px]">Contact</p>
                           
//                             </div>
//                         </div>
//                         <div className="w-[123px] h-[236px] gap-[24px]">
//                             <p className="w-[85px] h-[28px] size-[20px] leading-[28px] font-medium">Help</p>
//                             <div className="w-[123px] h-[184px] gap-[16px] mt-[30px]">
//                                 <p className="w-[94px] h-[24px] text-[16px] mt-[30px] leading-[24px] font-medium">Payment Options</p>
//                                 <p className="w-[123px] h-[24px] text-[16px] mt-[15px] leading-[24px] font-medium">Returns</p>
//                                 <p className="w-[35px] h-[24px] text-[16px] mt-[15px] leading-[24px] font-medium">Privacy Policies</p>
//                                 <p className="w-[61px] h-[24px] text-[16px] mt-[15px] leading-[24px] font-medium"></p>
//                                 <p className="w-[41px] h-[24px] text-[16px] mt-[15px] leading-[24px] font-medium"></p>
//                             </div>
//                         </div>
                        
//                         <div className="w-[286px] h-[101px] border-[1px] mt-[4597px] ml-[947.01px]">
//                             <p className="w-[86px] h-[24px] text-gray-600">Newsletter</p>
                            
//                             <input type="text" placeholder="engter your bNE" />

//                             <input className="text-black" type="text" placeholder="Email or Phone Number" /> <br />



//                         </div>
//                     </div>
// <div>
//     <div className="text-black relative right-[px]">
// <input className="text-black relative right-[220px] " type="text" placeholder="Email or Phone Number" />
// </div>
// </div>
// <div className="w-[123px] h-[236px] gap-[24px]">
//                             <p className="w-[85px] h-[28px] size-[20px] leading-[28px] font-medium">Help</p></div>



//                 </footer>
//         </div>
//     )
// }









import React from "react";
const Footer: React.FC = () => {
    return (
        <footer className="bg-white mt-[00px]  py-8 border-t border-gray-200">
            <div className="container mx-auto px-4 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Address */}
                    <div className="text-gray-600 text-sm">
                        <p>400 University Drive Suite 200 Coral Gables,</p>
                        <p>FL 33134 USA</p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Shop</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">About</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Help */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Help</h3>
                        <ul>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Payment Options</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Return</a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-800 hover:text-gray-900 transition">Privacy Policies</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-gray-500 text-sm font-medium mb-3">Newsletter</h3>
                        <div className="flex items-center">
                            <input type="email" placeholder="Enter Your Email Address" className="flex-1 px-4 py-2 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-gray-400" />
                            <button className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800 transition">Subscribe</button>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-8 text-center text-gray-600 text-sm">
                    <hr />
                    <p className="pt-4">2022 Meubel House. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
