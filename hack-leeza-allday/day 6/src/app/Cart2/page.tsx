import Image from "next/image";
import Link from "next/link";

 
export default function Checkout() {
    return (
        <div>
        <div>
        <div>
<Image className="  " src={"/checkout.png"} alt="" width={1440} height={900} />
</div>



<div className="w-[608px] h-[789px] mt-[px] ml-[190px]  "><p className= "text-[42px] flex leadind-[48px] mr-[500px] ml-[900px] ">Cart.Totals</p>
<div className="w-[533px] h-[616px]  mt-[px]  ml-[772px]  ">
<p className="w-[94px] h-[36px]  text-[24px] leading-[36px]  font-medium"></p>
<p className="w-[108px] h-[24px]  text-[16px] leading-[24px]  "></p>
<p className="w-[108px] h-[24px]  text-[24px] leading-[36px]  ">Subtotal</p>
<p className="w-[108px] h-[24px]  text-[24px] leading-[36px] ">Total</p>

 <div className=" ml-[250px] mt-[-110px] gap-[-600px] ">
  <p className="w-[103px]  font-medium h-[24px]  text-[24px] leading-[36px] ml-[02px] "></p>
<p className="w-[108px] h-[24px]  text-[20px] leading-[30px]  "></p>
<p className="w-[108px] h-[24px]  text-[20px] leading-[30px]  ">Rs.250,000.00</p>
<p className="w-[178px] h-[36px]  text-[24px] leading-[36px] text-[#B88E2F]  ">Rs. 250,000.00</p>
</div> 




<div className="w-[215px] h-[64px]  mt-[55px] ml-[4px] border-[1px] border-black  rounded-[10px]">

<Link className=" " href="/contact">

  
  
  <p className="w-[119px] h-[30px] text-[20px] leading-[30px] mt-[10px] ml-[40px] font-medium ">Place order</p>
  </Link>
</div>

<Image className="  mr-[1400px] mt-[-260px] ml-[-670px] [40px] " src={"/price.png"} alt="" width={1440} height={900} />

<div className="w-[440px] h-[300px] mt-[-0px] flex ml-[-950px] ">
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
    )
}



