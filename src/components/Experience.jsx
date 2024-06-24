// // import React, { useState } from 'react';
// // import "react-vertical-timeline-component/style.min.css";
// // import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
// // import { RxDotFilled } from 'react-icons/rx';
// // import { styles } from "../styles";
// // import { slides } from "../constants";
// // import { SectionWrapper } from "../hoc";
// // import { textVariant } from "../utils/motion";
// // import styled from "styled-components";


// // const Slid = styled.div`
  

// //   @media only screen and (max-width: 768px) {
// //     max-width: 100%; /* Ekran genişliğine göre tam genişlik */
// //     height: auto; /* Yükseklik otomatik olarak ayarlanacak */
// //     padding-top: 8px; /* Mobil cihazlarda daha az iç boşluk */
// //     padding-bottom: 8px; /* Mobil cihazlarda daha az iç boşluk */
// //     /* Diğer değişiklikleri mobil görünüme göre burada belirtebilirsiniz */
// //   }
// // `;


// // function Experience() {
// //   const [currentIndex, setCurrentIndex] = useState(0);

// //   const prevSlide = () => {
// //     const isFirstSlide = currentIndex === 0;
// //     const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const nextSlide = () => {
// //     const isLastSlide = currentIndex === slides.length - 1;
// //     const newIndex = isLastSlide ? 0 : currentIndex + 1;
// //     setCurrentIndex(newIndex);
// //   };

// //   const goToSlide = (slideIndex) => {
// //     setCurrentIndex(slideIndex);
// //   };

// //   return (
// //     <>
// //       <div variants={textVariant()}>
// //         <p className={`${styles.sectionSubText} text-center`}>
// //           Şu ana kadar ne yaptık?
// //         </p>
// //         <h2 className={`${styles.sectionHeadText} text-center`}>
// //           Çalışmalarımız
// //         </h2>
// //       </div>
       
// //       <div className='max-w-[1368px] w-full m-auto py-4 md:py-8 lg:py-16 px-0 sm:px-4 relative group h-[300px] md:h-[500px] lg:h-[758px]'>

// //         <div
// //           style={{
// //             backgroundImage: `url(${slides[currentIndex].url})`,
// //             backgroundSize: "cover",
// //             backgroundPosition: "center",
            
// //           }}
// //           className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
// //         ></div>
        
// //         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
// //           <BsChevronCompactLeft onClick={prevSlide} size={30} />
// //         </div>
        
// //         <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
// //           <BsChevronCompactRight onClick={nextSlide} size={30} />
// //         </div>
// //         <div className='flex top-4 justify-center py-2'>
// //           {slides.map((slide, slideIndex) => (
// //             <div
// //               key={slideIndex}
// //               onClick={() => goToSlide(slideIndex)}
// //               className='text-2xl cursor-pointer'
// //             >
// //               <RxDotFilled />
// //             </div>
// //           ))}
// //         </div>
// //         </div>
// //     </>
// //   );
// // }

// // export default SectionWrapper(Experience, "calismalarimiz");
// import React, { useEffect, useState } from "react";
// import { items } from "../constants/index";
// import "./style.css";

// export default function MultiFilters() {
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [filteredItems, setFilteredItems] = useState(items);

//   let filters = ["Bags", "Watches", "Sports", "Sunglasses"];

//   const handleFilterButtonClick = (selectedCategory) => {
//     if (selectedFilters.includes(selectedCategory)) {
//       let filters = selectedFilters.filter((el) => el !== selectedCategory);
//       setSelectedFilters(filters);
//     } else {
//       setSelectedFilters([...selectedFilters, selectedCategory]);
//     }
//   };

//   useEffect(() => {
//     filterItems();
//   }, [selectedFilters]);

//   const filterItems = () => {
//     if (selectedFilters.length > 0) {
//       let tempItems = selectedFilters.map((selectedCategory) => {
//         let temp = items.filter((item) => item.category === selectedCategory);
//         return temp;
//       });
//       setFilteredItems(tempItems.flat());
//     } else {
//       setFilteredItems([...items]);
//     }
//   };

//   return (
//     <div>
//       <div className="buttons-container">
//         {filters.map((category, idx) => (
//           <button
//             onClick={() => handleFilterButtonClick(category)}
//             className={`button ${
//               selectedFilters?.includes(category) ? "active" : ""
//             }`}
//             key={`filters-${idx}`}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="items-container">
//         {filteredItems.map((item, idx) => (
//           <div key={`items-${idx}`} className="item">
//             <p>{item.name}</p>
//             <p className="category">{item.category}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import React from 'react'

const Experience = () => {
  return (
    <div></div>
  )
}

export default Experience
