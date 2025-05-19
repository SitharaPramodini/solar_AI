import React from 'react';
import { Play } from 'lucide-react';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -100 },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.6,
};

export default function VetraLandingPage() {
  return (
    
    <div className="min-h-screen  text-white flex flex-col relative overflow-hidden">
      {/* Background texture
      {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMTIxMjEiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAyLjc5MSA0IDQgNCAxLjc5LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMi43OTEgNCA0IDQgMS43OS0xLjc5MSA0LTR6TTYgMzRjMC0yLjIwOS0xLjc5LTQtNC00cy00IDEuNzkxLTQgNCAxLjc5MSA0IDQgNCA0LTEuNzkxIDQtNHptMC0zMGMwLTIuMjA5LTEuNzktNC00LTRzLTQgMS43OTEtNCA0IDEuNzkxIDQgNCA0IDQtMS43OTEgNC00em0wIDYwYzAtMi4yMDktMS43OS00LTQtNHMtNCAxLjc5MS00IDQgMS43OTEgNCA0IDQgNC0xLjc5MSA0LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 z-0"></div>
      
   Background gradients
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-orange-600/40 to-transparent rounded-full blur-3xl z-0 transform translate-y-1/4"></div>
      <div className="absolute inset-x-0 -top-40 right-0 h-96 w-96 bg-orange-700/20 blur-3xl rounded-full z-0"></div>
      <div className="absolute -left-40 top-1/4 h-96 w-96 bg-purple-900/10 blur-3xl rounded-full z-0"></div>
      
      Large half-circle at bottom 
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[140%] aspect-[2/1] rounded-[100%_100%_0_0] bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-orange-900/30 z-0"></div>
       */}
      {/* Navigation */}
      <nav className="container max-w-6xl mx-auto px-4 py-5 flex items-center justify-between relative z-10">
        <div className="flex items-center space-x-2">
        <div className="flex items-center">
<img src='logo.png' className='w-28'/>           
          </div>
        </div>
        
        <div className="hidden md:flex space-x-6 text-gray-300">
          <div className="relative group">
            <span className="cursor-pointer hover:text-white transition-colors">Use cases</span>
            <span className="ml-1">▾</span>
          </div>
          <div className="relative group">
            <span className="cursor-pointer hover:text-white transition-colors">Features</span>
            <span className="ml-1">▾</span>
          </div>
          <span className="cursor-pointer hover:text-white transition-colors">Pricing</span>
          <span className="cursor-pointer hover:text-white transition-colors">Contact</span>
        </div>
        
        <Link to={'/chat'}>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full font-medium transition-colors">
          Get started
        </button>
        </Link>
      </nav>

      <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      // transition={pageTransition}
      transition={{ duration: 1.5, ease: "easeInOut" }}
      className="overflow-y-hidden"
    >
      
      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 flex flex-col items-center justify-center text-center pt-16 pb-32 relative z-10">
        {/* New version notification */}
        <div className="bg-black/40 glow-on-hover backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 mb-8 inline-flex items-center">
          <span className="text-gray-300 text-sm ">New AI for Solar is Released! Learn More</span>
          {/* <div className="ml-2 bg-orange-500 text-white text-xs rounded-full p-1">
            →
          </div> */}
        </div>
        
        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">
        Smarter Solar Solutions
        </h1>
        
        {/* Subheadline */}
        <p className="text-gray-400 max-w-2xl mb-10">
        AI-powered support and insights tailored for solar solutions. Guide customers smarter, respond faster, and grow your impact effortlessly.
        </p>



        <div class="buttons">
        <Link to={'/chat'}>
  <button class="blob-btn">
  Get Started
    <span class="blob-btn__inner">
      <span class="blob-btn__blobs">
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
        <span class="blob-btn__blob"></span>
      </span>
    </span>
  </button>
  </Link>
  <br/>

<svg xmlns="http://www.w3.org/2000/svg" className='contents' version="1.1">
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
      <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
      <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
    </filter>
  </defs>
</svg>
</div>

        
        {/* Trusted by */}
        <div className="absolute bottom-1 w-full text-center">
  <p className="text-gray-500 text-sm mb-6">Trusted by 200+ solar customers and businesses</p>
</div>

      </main>
      </motion.div>
      {/* Dashboard Preview */}
      {/* <div className="container mx-auto px-4 pb-8 relative z-10">
        <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-lg shadow-2xl overflow-hidden max-w-4xl mx-auto">
          <div className="bg-gray-800/80 backdrop-blur-sm p-4 flex items-center">
            <div className="text-white font-medium mr-auto flex items-center">
              <div className="w-4 h-4 bg-white/20 rounded mr-2"></div>
              Vetra
            </div>
            <div className="bg-gray-700/60 backdrop-blur-sm rounded-full w-32 h-6"></div>
          </div>
          <div className="p-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-700/60 pb-4 md:pb-0 md:pr-4">
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700/60 rounded mr-2"></div>
                  <div className="bg-gray-800/60 h-6 rounded w-full"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700/60 rounded mr-2"></div>
                  <div className="bg-gray-800/60 h-6 rounded w-full"></div>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-700/60 rounded mr-2"></div>
                  <div className="bg-gray-800/60 h-6 rounded w-full"></div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-3/4 pt-4 md:pt-0 md:pl-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="bg-gray-800/60 h-6 rounded w-32">
                    <div className="text-xs text-gray-400 pt-1 pl-2">Top Products</div>
                  </div>
                  <div className="bg-gray-800/60 h-6 rounded w-32">
                    <div className="text-xs text-gray-400 pt-1 pl-2">Visitor Insights</div>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <div className="bg-gray-800/60 rounded flex-1 p-3">
                    <div className="h-5 w-20 bg-gray-700/60 rounded mb-2"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-700/60 rounded w-full"></div>
                      <div className="h-4 bg-gray-700/60 rounded w-full"></div>
                      <div className="h-4 bg-gray-700/60 rounded w-full"></div>
                    </div>
                  </div>
                  <div className="bg-gray-800/60 rounded flex-1 p-3">
                    <div className="h-5 w-20 bg-gray-700/60 rounded mb-2"></div>
                    <div className="flex items-end h-20 space-x-1">
                      <div className="h-8 bg-orange-500/40 w-6 rounded-t"></div>
                      <div className="h-12 bg-orange-500/60 w-6 rounded-t"></div>
                      <div className="h-16 bg-orange-500/80 w-6 rounded-t"></div>
                      <div className="h-10 bg-orange-500/50 w-6 rounded-t"></div>
                      <div className="h-14 bg-orange-500/70 w-6 rounded-t"></div>
                      <div className="h-8 bg-orange-500/40 w-6 rounded-t"></div>
                      <div className="h-12 bg-orange-500/60 w-6 rounded-t"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* Adding glowing spot on half-circle */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/3 w-full h-64 bg-gradient-to-t from-orange-600/20 to-transparent rounded-full blur-3xl z-0"></div>
    </div>
  );
}