
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Fresh from './assets/Fresh (1).png'
import banner from './assets/banner.png'
import cuteGirl from './assets/cute girl.png'
import jens from './assets/jens.png'
import juta from './assets/juta.png'
import model from './assets/model.png'
import sweater from './assets/sweater.png'
import pants from './assets/pants.png'
import Menu from './components/Menu'
import Button from './components/Button'
import Heading from './components/Heading'
import Star from './components/Star'

function App() {

  return (
    <>

    {/* Header Part Start  */}


    <div className="bg-hbColor pt-[40px] w-full">
      <Container>
        <Flex className={"justify-between items-center"}>
          <div className="">
            <Image src={Fresh}/>
          </div>
          <div className="">
          <Flex className={"gap-[60px] font-Crimson font-semibold text-[24px]"}>
           <Menu mText={"Men"}/>
            <Menu mText={"Woman"}/>
            <Menu mText={"Kids"}/>
            <Menu mText={"Collection"}/>
            <Menu mText={"Trends"}/>
          </Flex>
          </div>
          <div className="pt-2">
            <Flex className={"gap-3 font-Crimson font-semibold text-[24px] "}>
              <Button btnText={"Login"} className={"py-[12px] px-[30px] border border-btnColor hover:bg-btnColor rounded-[10px] shadow-2xl"}/>
              <Button btnText={"Sign Up"} className={"py-[12px] px-[30px] border border-btnColor hover:bg-btnColor rounded-[10px]"}/>
            </Flex>
          </div>
        </Flex>



      </Container>


    </div>

    {/* Header Part End  */}

    {/* Banner Part start  */}

    <div className="bg-hbColor w-full py-[100px] mb-[100px]">
    <Container>
      <Flex className={"justify-between"}>
      <div className="w-[531px]">
        <Heading text={"Find The Best Fashion Style For You"} as={"h1"} className={"font-Crimson font-semibold text-[64px] pr-[89px]"}/>
        <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} as={"p"} className={"font-Crimson font-regular text-[22px] pr-[94px] pb-[30px]"}/>
        <Button btnText={"Shope now"} className={"bg-black py-[25px] px-[92px] text-white font-Crimson font-semibold text-[24px] rounded-[10px]"}/>
      </div>
      <div className="">
        <Image src={banner}/>
      </div>
      </Flex>
      </Container>
     </div>

     {/* Banner Part End  */}

     {/* Collection Part start  */}


    <div className="pb-[100px]">
      <Container>
      <Heading text={"New Collection"} as={"p"} className={"font-Crimson font-bold text-[64px] text-center pb-[50px]"}/>

      <Flex className={"justify-between"}>
      <div className="relative">
      <Image src={cuteGirl} className={""}/>
      <Heading text={"Sweater"} as={"p"} className={" bg-white font-Crimson font-regular py-[12px] px-[120px] rounded-[20px] absolute bottom-[35px] left-1/2 -translate-x-1/2"}/>
      </div>
      <div className="relative">
      <Image src={jens} className={""}/>
      <Heading text={"Jeans"} as={"p"} className={" bg-white font-Crimson font-regular py-[12px] px-[120px] rounded-[20px] absolute bottom-[35px] left-1/2 -translate-x-1/2"}/>
      </div>
      <div className="relative">
      <Image src={juta} className={""}/>
      <Heading text={"Baskets"} as={"p"} className={" bg-white font-Crimson font-regular py-[12px] px-[120px] rounded-[20px] absolute bottom-[35px] left-1/2 -translate-x-1/2"}/>
      </div>
      </Flex>
      
      </Container>
    </div>

    {/* Collection Part End  */}

   { /* Counter Part start  */}


    <div className="relative">
      <Container>
      <Flex className={"gap-[135px]"}>
        <div className="z-[111]">
          <Image src={model}/>
        </div>
        <div className="w-[470px] mt-16">
          <Heading text={"Best Fashion Since 2010"} as={"p"} className={"font-Crimson font-bold text-[60px]"}/>
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu, odio pellentesque mattis pulvinar felis. At arcu ornare rhoncus, elementum non viverra. "} as={"p"} className={"font-Crimson font-semibold text-[24px] pr-[87px]"}/>
        </div>

      </Flex>
      <div className="absolute top-[600px] right-[90px]">
        <div className="w-[793px] ml-auto py-[71px] px-[50px] bg-bgColor rounded-[20px]">
          <Flex className={"justify-around"}>
          <div className="border-black px-[30px] border-r-2">
        <Heading text={"2010"} as={"p"} className={"font-Crimson font-bold text-[64px] "}/>
        <Heading text={"Founded"} as={"p"} className={"font-Crimson font-mediumn text-[28px]"}/>
      </div>
      <div className="border-black px-[30px] border-r-2">
        <Heading text={"5000+"} as={"p"} className={"font-Crimson font-bold text-[64px] "}/>
        <Heading text={"Product Sold"} as={"p"} className={"font-Crimson font-mediumn text-[28px]"}/>
      </div>
      <div className="">
        <Heading text={"4500+"} as={"p"} className={"font-Crimson font-bold text-[64px]"}/>
        <Heading text={"Best Reviews"} as={"p"} className={"font-Crimson font-mediumn text-[28px]"}/>
      </div>
          </Flex>
        </div>
      </div>
      </Container>
    </div>

   { /* Counter Part End  */}

   {  /* Seller Part start  */}

    <div className="bg-selColor pt-[56px] pb-[100px] mt-[280px]">
      <Container>
        <Flex className={"gap-[30px]"}>
          
          <div className="w-[437px] ml-[50px]">
          <Heading text={"Best Seller Product"} as={"p"} className={"font-Crimson font-bold text-white text-[64px] "}/>
          <Heading text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac neque, velit tortor quam at donec etiam bibendum sagittis. Libero tempor, lacus amet, scelerisque neque mauris odio risus nec. Nisl, parturient at morbi morbi sit arcu. At integer maecenas tortor non lectus."} as={"p"} className={"font-Crimson font-bold text-white text-[24px] pr-[31px] pb-[40px]"}/>
          <Button btnText={"Learn More"} className={"bg-black py-[25px] px-[92px] text-white font-Crimson font-semibold text-[24px] rounded-[10px]"}/>
          </div>

          <div className="">
          <Image src={sweater}/>
          <div className="w-[366px] h-[127px] py-[10px] pl-[14px] bg-starColor">
            <Flex>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            </Flex>
            <Heading text={"Sweater Shirt"} as={"p"} className={"font-Crimson font-semibold text-[22px] pt-2"}/>
              <Flex className={"gap-[50px]"}>
                <Heading text={"$45.99"} as={"p"} className={"font-Crimson font-regular text-[24px] text-priceColor"}/>
                <Heading text={"$35.99"} as={"p"} className={"font-Crimson font-regular text-[24px]"}/>
              </Flex>


          </div>
          </div>
          <div className="">
          <Image src={pants}/>
          <div className="w-[366px] h-[127px] py-[10px] pl-[14px] bg-starColor">
            <Flex>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            </Flex>
            <Heading text={"Pants fashion"} as={"p"} className={"font-Crimson font-semibold text-[22px] pt-2"}/>
              <Flex className={"gap-[50px]"}>
                <Heading text={"$55"} as={"p"} className={"font-Crimson font-regular text-[24px] text-priceColor"}/>
                <Heading text={"$44.99"} as={"p"} className={"font-Crimson font-regular text-[24px]"}/>
              </Flex>


          </div>
          </div>
        </Flex>
      </Container>

    </div>

    {/* Seller Part start  */}



    </>
  )
}

export default App

