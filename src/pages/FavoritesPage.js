import { useSelector } from "react-redux";
import {
    Card,
    ListGroup,
    ListGroupItem,
  } from "react-bootstrap";
  import RandomBeer from "../components/RandomBeer";

function FavoritesPage() {
    const books = useSelector((state) => state.books);

    return (
        <div>
        {books.map((book, index) => {
          return (
            <Card key={book.rank} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={book.book_image} />
              <Card.Body>
                <Card.Title>NYT Rank #{book.rank}</Card.Title>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{book.title}</ListGroupItem>
                  <ListGroupItem>by {book.author}</ListGroupItem>
                  <ListGroupItem>{book.description}</ListGroupItem>
                </ListGroup>
              </Card.Body>
         {/* <Button onClick={() => handleSave(result)} variant="primary" type="submit">
          Add to Favorites +
        </Button> */}
            </Card>
          );
        })}
        <RandomBeer />
      </div>
    )
}

export default FavoritesPage;