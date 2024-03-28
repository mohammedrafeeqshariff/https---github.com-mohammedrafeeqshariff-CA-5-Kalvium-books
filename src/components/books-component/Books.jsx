import { useEffect, useState } from "react";
import "./books.css";
import axios from "axios";

function Books({ search, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [booksData, SetBooksData] = useState([]);
  const [username, setUsername] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://reactnd-books-api.udacity.com/books",
          { headers: { Authorization: "whatever-you-want" } }
        );
        console.log(response.data.books);
        SetBooksData(response.data.books);
      } catch (errors) {
        console.log(errors);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filterVariable = booksData.filter((book) => {
      const title = book.title.toLowerCase();
      const authors = book.authors
        ? book.authors.map((author) => author.toLowerCase())
        : [];               // Convert author names to lowercase
      const searchText = search ? search.toLowerCase() : "";
      return (
        title.includes(searchText) ||
        authors.some((author) => author.includes(searchText))
      );                    // Check if any author matches the search term
    });
    setFilteredData(filterVariable);
  }, [search, booksData]);

  useEffect(() => {
   
    if (data && data.firstname) {
      setUsername(data.firstname);
    }
  }, [data]); 

  return (
    <>
      <div className="user_welcome">
        {username != null ? <p>welcome {username} !</p> : <p>welcome user !</p>}
      </div>

      <div className="container">
        {filteredData.map((books, index) => (      // mapping the array that contains searched books to display all books when not searched for anything and searched books when the user searches for a book
          <div key={index} className="main_container">
            <div>
              <img src={books.imageLinks.thumbnail} alt="" />
            </div>
            <div className="details">
              <p>{books.title}</p>
              <p>{books.authors.join(", ")}</p>        {/* using "join()" inbuild function to join the authors names which are inside an array*/}
              <a
                style={{ textDecoration: "none", color: "black" }}
                href={books.previewLink}
              >
                <button>READ</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Books;
