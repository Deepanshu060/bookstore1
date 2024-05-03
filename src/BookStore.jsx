import Book from "./Book";

const BookStore = () => {
  const books = [
    {
      title: "Icebreaker",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Hannah Grace",
    },
    {
      title: "A Man Called Ove",
      imgLink:
        "https://m.media-amazon.com/images/I/81DXIOk9glL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Fredrick Backmen",
    },
    {
      title: "Who will Cry when You Die",
      imgLink:
        "https://m.media-amazon.com/images/I/71yu8CAKbgL._AC_UY327_QL65_.jpg",
      author: "Robin Sharma",
    },
    {
      title: "Theory of Everything",
      imgLink:
        "https://m.media-amazon.com/images/I/71vfo4cJCjL._AC_UY327_FMwebp_QL65_.jpg",
      author: "Stephen Hawking",
    },
    {
      title: "Power of your Subconscious Mind",
      imgLink:
        "https://m.media-amazon.com/images/I/61jBLw5Bq9L._AC_UY327_FMwebp_QL65_.jpg",
      author: "Joseph Murphy",
    },
    {
      title: "Lets Us Meet",
      imgLink:
        "https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/5/q/m/icebreaker-paperback-english-2023-by-hannah-grace-original-imagpcc7j8fafagf.jpeg?q=70",
      author: "Koi V",
    },
  ];

  return (
    <div className="booklist">
      {books.map((b,index) => (
        <Book {...b} key={index} />
      ))}

      {/* {books.map((b,index) => {
        return <Book {...b} key={index} />;
      })} */}
    </div>
  );
};
export default BookStore;
