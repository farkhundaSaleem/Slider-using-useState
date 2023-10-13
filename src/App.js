//useState

// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//     const [count, setCount] = useState(0);

//     const handleCount = () => {
//       setCount(count+1);
//     }

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={handleCount}>Click</button>
//     </>
//   );
// }

// export default App;



//useEffect

// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//     const [count, setCount] = useState(0);
//     const [click, setClick] = useState(0);

//     const handleCount = () => {
//       setCount(count+1);
//     }

//     useEffect(handleCount, [click]);

//   return (
//     <>
//       <h1>Count: {count}</h1>
//       <button onClick={() => setClick(click+1)}>Click</button>
//     </>
//   );
// }

// export default App;





// import './App.css';
// import { useState, useEffect } from 'react';

// function App() {
//   const [value, setValue] = useState("")
//   const [length, setLength] = useState(0)
//   console.log(value);
//   console.log(length);
//   useEffect(()=> {
//     let strLength = value.length;
//     setLength(strLength)
//   }, [value])
 
//   return (
//     <>
//       <input type='text' value={value}  onChange={e => setValue(e.target.value)}/>
//       <p>Total String Length: {length}</p>
//     </>
//   );
// }

// export default App;



// import { useState, useEffect } from "react";


// function App() {
 
//     const [count, setCount] = useState(0);
//     const [calculation, setCalculation] = useState(0);
  
//     useEffect(() => {
//       setCalculation(() => count * 2);
//     }, [count]); // <- add the count variable here
  
//     return (
//       <>
//         <p>Count: {count}</p>
//         <button onClick={() => setCount((c) => c + 1)}>+</button>
//         <p>Calculation: {calculation}</p>
//       </>
//     );
//   }
// export default App;




import React, { useState } from "react";
import "./App.css";

const animalImages = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % animalImages.length);
  };

  const prevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? animalImages.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="App">
      <h1>Image Slider</h1>
      <div className="image-slider">
        <button onClick={prevSlide}>Previous</button>
        <img src={animalImages[currentImageIndex]} alt={`Animal ${currentImageIndex + 1}`} />
        <button onClick={nextSlide}>Next</button>
      </div>
    </div>
  );
};

export default App;
