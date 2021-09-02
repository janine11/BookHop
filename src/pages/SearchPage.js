import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionSaveBook } from "../redux/actions/favorites"
import { Link } from "react-router-dom";

function SearchPage() {

  const [results, setResults] = useState([]);
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=qj3E39cBt3710mzWYO5GnwnYLce9DgvZ"
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setResults(data.results.books);
      });
  };

  function handleSave(book) {
    dispatch(actionSaveBook(book))
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Button variant="primary" type="submit">
          Show NYT Books Best Sellers List
        </Button>
      </Form>

      <span>
        <Link to="/favorites">Favorites</Link>
    </span>

      <div>
        {results.map((result, index) => {
          return (
            <Card key={result.rank} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={result.book_image} />
              <Card.Body>
                <Card.Title>NYT Rank #{result.rank}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{result.title}</ListGroupItem>
                  <ListGroupItem>by {result.author}</ListGroupItem>
                  <ListGroupItem>{result.description}</ListGroupItem>
                </ListGroup>
              </Card.Body>
         <Button onClick={() => handleSave(result)} variant="primary" type="submit">
          Add to Favorites +
        </Button>
            </Card>
          );
        })}
      </div>
    </Container>
  );
}

export default SearchPage;
