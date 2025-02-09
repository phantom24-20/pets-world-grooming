// // src/components/CategoryMenu.js
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

// const CategoryMenuWrapper = styled.div`
//   display: flex;
//   justify-content: space-around;
//   background-color: #2e3144;
//   padding: 10px;
//   border-radius: 1rem;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   position: relative; /* So subcategories can be positioned relative to this container */
// `;

// const CategoryButton = styled.button`
//   background: none;
//   border: none;
//   color: white;
//   font-size: 16px;
//   padding: 10px;
//   cursor: pointer;
//   position: relative;

//   &:hover {
//     color: #007bff;
//   }
// `;

// const SubCategoryMenu = styled.div`
//   position: absolute;
//   top: 100%;
//   left: 0;
//   background-color: #fff;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   border-radius: 0.5rem;
//   display: ${({ show }) => (show ? 'block' : 'none')};
//   z-index: 10;
//   padding: 10px;
//   margin-top: 5px;
//   width: 200px; /* Fixed width to prevent resizing */
//   max-height: 300px; /* Set a maximum height for the dropdown */
//   overflow-y: auto; /* Enable scroll if the list overflows */
//   transition: opacity 0.2s ease-in-out;
// `;

// const SubCategoryItem = styled.div`
//   padding: 10px;
//   color: #333;
//   cursor: pointer;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const CategoryMenu = ({
//   categories,
//   setSelectedCategory,
//   subCategories,
//   setSelectedSubCategory,
//   selectedCategory,
// }) => {
//   const [showSubCategories, setShowSubCategories] = useState(null); // Track which category is hovered
//   const menuRef = useRef(null); // Reference to the CategoryMenu

//   // Handle subcategory click
//   const handleSubCategoryClick = (category, subCategory) => {
//     setSelectedCategory(category);      // Set selected category
//     setSelectedSubCategory(subCategory); // Set selected subcategory
//     setShowSubCategories(null); // Close the subcategory menu after selection
//   };

//   // Handle category click
//   const handleCategoryClick = (category) => {
//     if (showSubCategories === category) {
//       setShowSubCategories(null); // If the category is already open, close it
//     } else {
//       setShowSubCategories(category); // Open subcategories for the selected category
//     }
//   };

//   // Close subcategory menu when clicking outside of it
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setShowSubCategories(null); // Close the menu if clicked outside
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   return (
//     <CategoryMenuWrapper ref={menuRef}>
//       {categories.map((category) => (
//         <div key={category} style={{ position: 'relative' }}>
//           <CategoryButton
//             onClick={() => handleCategoryClick(category)} // Toggle the subcategory visibility
//           >
//             {category}
//           </CategoryButton>

//           {/* Show subcategories when hovered or selected */}
//           <SubCategoryMenu show={showSubCategories === category}>
//             {subCategories[category]?.map((subCategory) => (
//               <SubCategoryItem
//                 key={subCategory}
//                 onClick={() => handleSubCategoryClick(category, subCategory)} // Close the subcategory menu after selecting
//               >
//                 {subCategory}
//               </SubCategoryItem>
//             ))}
//           </SubCategoryMenu>
//         </div>
//       ))}
//     </CategoryMenuWrapper>
//   );
// };

// export default CategoryMenu;

const CategoryMenu = ({ categories, setSelectedCategory }) => {
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="category-menu">
      {categories.map((category) => (
        <button key={category} onClick={() => handleCategoryClick(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryMenu