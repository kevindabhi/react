//  function MyButton () {
//   return (
//     <button> this is a button </button>
//   );
// }

// export default function MyExtendedFunction () {
  
//   return (
//    <div>
//     <h1> Hello </h1>
//     <MyButton />
//    </div>
//   );
// }



//Rendering Lists

// const products = [
//   {title : "cabbage", id:1},
//   {title :"apple", id:2},
//   {title:"grapes", isFruit:true, id:3}, 

// ]

// export default function Shoppinglist() {
// const listitems = products.map(products=>
//     <li key={products.id}
//     style = {{
//       color:products.isFruit ? "magenta" : "blue"
//     }}
//     >
 
//       {products.title}
//     </li>

//   )


//   return (
//     <ul>{listitems}</ul>
//   );
// }





// rendering lists

// const list =[
//   {id:1, title : "Apple", isFruit:true},
//   {id:2, title : "Microsoft", isFruit: false},
//   {id:3, title : "Mango", isFruit:true},
// ]

// export default function Shoppinglist () {
//   const listitems = list.map(list=>
//     <li key = {list.id}
     
//     style = {{
//       color:list.isFruit ? "blue" : "red"
//     }}
   
//     >
//     {list.title}
//     </li>
//   );
//   return(
//   <ul>{listitems}</ul>);
// }

import {useState} from "react"

function MyButton({ count, onClick }) {
  return (
    <button onClick={onClick}>
      Clicked {count} times
    </button>
  );
}


export default function MyApp () {

  const [count,setCount] = useState(0)

  function handleClick () {
      setCount(count+1)
  }


  
  return (
    <>
    <MyButton count={count} onClick={handleClick} />
    <MyButton count={count} onClick={handleClick} />
    </>
  )
}