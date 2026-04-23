// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollSmoother, ScrollTrigger } from "gsap/all";
// import React, { useRef } from "react";

// const Agence = () => {
//   gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
//   const imageDivRef = useRef(null);
//   const imageRef = useRef(null);
//   const imageArray = [
//     "/images/image1.jpg",
//     "/images/image2.jpg",
//     "/images/image3.jpg",
//     "/images/image4.jpg",
//     "/images/image5.jpg",
//     "/images/image6.jpg",
//     "/images/image7.jpg",
//     "/images/image8.jpg",
//   ];
//   useGSAP(() => {
//     gsap.to(imageDivRef.current, {
//       scrollTrigger: {
//         trigger: imageDivRef.current,
//         start: "top 25%",
//         end: "top -88%",
//         pin: true,
//         markers: true,
//         scrub: true,
//         onUpdate: (elem) => {
//           let imageIndex;
//           if (elem.progress < 1) {
//             imageIndex = Math.floor(elem.progress * imageArray.length);
//           } else {
//             imageIndex = imageArray.length - 1;
//           }
//           imageRef.current.src = imageArray[imageIndex];
//         },
//       },
//     });
//   });
//   return (
//     <div>
//       <div className="section1">
//         <div
//           ref={imageDivRef}
//           className="h-[20vw] overflow-hidden rounded-4xl w-[15vw] absolute top-60 left-[30vw]"
//         >
//           <img
//             ref={imageRef}
//             className="h-full object-cover w-full"
//             src="/images/image1.jpg"
//             alt=""
//           />
//         </div>
//         <div className="relative font-[font2]">
//           <div className="mt-[57vh]">
//             <h1 className="text-[20vw] text-center uppercase leading-[17vw] text-black">
//               Soixan7e <br />
//               Douze
//             </h1>
//           </div>
//           <div className="pl-[41%] mt-4">
//             <p className="text-5xl indent-[5em] selection:bg-[#D3FD50] text-black leading-14">
//               Notre curiosité nourrit notre créativité. On reste humbles et on
//               dit non aux gros egos, même le vôtre. Une marque est vivante. Elle
//               a des valeurs, une personnalité, une histoire. Si on oublie ça, on
//               peut faire de bons chiffres à court terme, mais on la tue à long
//               terme. C’est pour ça qu’on s’engage à donner de la perspective,
//               pour bâtir des marques influentes.
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="section2 h-screen"></div>
//     </div>
//   );
// };

// export default Agence;

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    "/images/image1.jpg",
    "/images/image2.jpg",
    "/images/image3.jpg",
    "/images/image4.jpg",
    "/images/image5.jpg",
    "/images/image6.jpg",
    "/images/image7.jpg",
    "/images/image8.jpg",
  ];

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden lg:h-[20vw] h-[30vw] lg:rounded-4xl rounded-xl lg:w-[15vw] w-[25vw] lg:top-96 -top-80 lg:left-[30vw] left-[30vw]'>
          <img ref={imageRef} className='h-full object-cover w-full' src="/images/image1.jpg" alt="" />
        </div>
        <div className='relative font-[font2]'>
          <div className='lg:mt-[57vh] mt-[30vh]'>
            <h1 className='text-[20vw] text-center uppercase leading-[17vw] text-black'>Soixan7e <br />
              Douze</h1>
          </div>
          <div className='lg:pl-[41%] lg:mt-4 mt-4'>
            <p className='lg:text-5xl text-xl selection:bg-[#D3FD50] leading-14 text-black indent-[5.5em]'>Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence
