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


// import {useState} from "react";

// function MyButton ({count, onClick}) {


//   return (
//     <button onClick={onClick}>
//       clicked {count} times
//     </button>
//   )
// }

// export default function MyApp() {

//   const [count,stateCount]=useState(0);

//   function HandleClick() {
//     stateCount(count+1)
//   }

//   return(
//     <>
//     <h1>Click this button</h1>
//     <MyButton count={count} onClick={HandleClick}/> <br/>
//     <MyButton count={count} onClick={HandleClick}/> <br/>
//     </>
//   )
// }


//Thinking in react

const groceryItems = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


