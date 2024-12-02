
function Hero() {
  return (
    <div className="w-full h-[85vh] px-2 bg-center bg-cover bg-[url('/hero_bg.jpg')] relative">
        <div className="bg-white bg-opacity-70 absolute inset-0"></div>
        <div className="container mx-auto relative h-full w-full">
            <div className="flex flex-col w-full h-full justify-center items-center text-black">
                <h3 className="font-semi-bold text-xl">We Develop</h3>
                <h2 className="font-bold text-4xl py-3">Beautiful and Minimal Ideas</h2>
                <h3 className="font-semi-bold text-xl py-2 px-4 bg-white">Crafted with Love and Care</h3>
            </div>
        </div> 
    </div>
  )
}

export default Hero