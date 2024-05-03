
import BookStore from "./BookStore";
const App=()=>(
    <>
        <h1 style={{textAlign:"center"}}>Best Selling Books of 2023</h1>
        <BookStore />;
</>
)


// const BookStore=()=>{
//   return (
//     <div>
//       <Book />
//       <Book />
//     </div>
//   );
// };
//old fashion
// function Book(){
//   return (
//    <div>
//     <h1>Book Name</h1>
//     <h2>Book title</h2>
//     <p>Book Imge</p>
//   </div>);
// }
//to avoid return statement this is only applicable only if you have only one line code;
// const Book2=()=> 
// { return (<div>
// <h1>Book details</h1>
// <h2>Book Title</h2>
// <p>Book Image</p>
// </div>);
// };
export default App;