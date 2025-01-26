

    


import Image from "next/image";
import Link from "next/link";
export default function SignUP() {
    return (
        <div className="" >
            <div>
            <div>
      <div>
<Image className="  " src={"/myacciunt.png"} alt="" width={1440} height={900} />
</div>


                {/* login work */}
<div className="w-[1220px] h-[1240px] mt-[150px] ml-[-500px] flex">
                <div className="">
                    <div className="w-[380px] h-[489px] ml-[530px] ">
                        <div className="w-[324px] h-[128px] mt-7 left-[28px] relative "><p className="font-bold text-[18px]">Log in</p>
                        
        <p className="w-[186px] mt-4 text-[18px] font-bold  ">Username or email address</p>
        <input className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4" type="text " placeholder="Email address" />

        <p className="w-[186px] mt-4 text-[18px] font-bold  ">Password</p>
        <input className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4" type="text " placeholder="Password" />
  
       
       <div className=" text-[12px] flex gap-3 mt-4">
        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  />
  <label > </label>

           <p className="m">Remember me</p>
           </div>
           <div className="flex">
           <div className="w-[215px] h-[64px]  mt-[20px] ml-[4px] border-[1px] border-black  rounded-[10px]">


<p className="w-[119px] h-[30px] text-[20px] leading-[30px] mt-[10px] ml-[40px] font-medium ">Log In</p>
         </div>
         <p className="mt-[40px]  ml-[40px] ">Lost.Your.Password?</p>
         </div>
       {/* <div className=" text-[10px] flex gap-1 mt-[16px] text-[#8D8D8D] "> <b className="underline"></b> <br /> <b className="underline"></b>
                        
                        {/* </div>
                        <div className="w-[324px] mt-4 bg-[#111111] pl-[101px] relative ">

{/* btn */}
               {/* </div> */} 
               {/* <span className="text-[#8D8D8D] text-center justify-center flex mt-4">
               
 </span> */}
              
                        </div> 


               
                        

                    </div>
                   


                </div>


{/*  */}
 
<div className="w-[380px] h-[489px] ml-[530px] ">
                        <div className="w-[324px] h-[128px] mt-7 left-[28px] relative "><p className="font-bold text-[18px]">Register</p>
                        
        <p className="w-[186px] mt-4 text-[18px] font-bold  ">Email address</p>
        <input className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4" type="text " placeholder="Email address" />

</div>
<p className="w-[440px] h-[48px]  ">A link to set a new password will be sent to your email address.</p>
<p className="w-[453px] h-[96px] mt-[40px] ">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>

<div className="w-[215px] h-[64px]  mr-[px] ml-[4px] border-[1px] border-black  rounded-[10px]">

<Link className=" " href="/Checkout">

  
  
  <p className="w-[119px] h-[30px] text-[20px] leading-[30px] mt-[10px] ml-[40px] font-medium ">Register</p>
  </Link>
</div>

</div>
<p></p>
</div>
<div className="flex mt-[-640px]">
<div className="w-[1440px] h-[300px]  flex mt-[2">
    <div className="w-[373px] h-[108px] mt-[200px] ml-[100px]">
<div className="w-[205px] h-[48px] text-[32px] leadind-[48px] font-medium ">Free Delivery</div>
<p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">For all oders over $50, consectetur adipim scing elit.</p>


    </div>
    </div>



<div className="w-[376px] h-[108px] mt-[200px] ml-[214px]">
<div className="w-[205px] h-[48px] text-[29px] leadind-[48px] font-medium ">90 Days Return</div>
<p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">If goods have problems, consectetur adipim scing elit.</p>


    </div>
    <div className="w-[376px] h-[108px] mt-[200px] ml-[214px]">
<div className="w-[205px] h-[48px] text-[25px] leadind-[48px] font-medium ">Secure Payment</div>
<p className="w-[376px] h-[60px] mp-[2607px] text-[20px] leading-[30px] ">100% secure payment, consectetur adipim scing elit.</p>


    </div>
    </div>
            </div>

        </div>

    



    </div>
  );

}