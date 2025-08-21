import '@/components/pages/aboutus/about.css'
import logo from "@/assets/icons/bg logo.png";
import Image from 'next/image';

export const HeroAboutus = () => {
  return (
    <>
      <section className="relative bg-gradient-to-br from-[#242058] to-[#3A3785] min-h-[50vh] flex items-center justify-center overflow-hidden py-12">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#d8a16f] rounded-full mix-blend-soft-light filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>
        
    
        
        <div className="max-w-7xl mx-auto px-4 flex flex-col justify-center items-center text-center relative z-10">
          <div className="mb-6">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-white text-sm font-semibold tracking-wider">WELCOME TO OUR STORY</span>
            </div>
          </div>
          
          <h1 className="text-white text-5xl md:text-7xl font-bold mb-6 leading-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8a16f] to-[#d8a16f]">Us</span>
          </h1>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-relaxed">
            We are a passionate team dedicated to creating exceptional digital experiences that make a difference in people's lives.
          </p>

        </div>
        
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/5 w-4 h-4 bg-white rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-[#d8a16f] rounded-full opacity-20 animate-float animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-[#d8a16f] rounded-full opacity-30 animate-float animation-delay-4000">
        </div>
                <Image src={logo} alt="logo" width={100} height={100} className='absolute bottom-0 left-0 opacity-[0.3] w-[230px]'/>

      </section>

    </>
  )
}