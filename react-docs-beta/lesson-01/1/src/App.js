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

const products = [
  {title : "cabbage", id:1},
  {title :"apple", id:2},
  {title:"grapes", isFruit:true, id:3}, 

]

export default function Shoppinglist() {
const listitems = products.map(products=>
    <li key={products.id}
    style = {{
      color:products.isFruit ? "magenta" : "blue"
    }}
    >
 
      {products.title}
    </li>

  )


  return (
    <ul>{listitems}</ul>
  );
}