import React, { Component } from "react";
import axios from "axios";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";
import { FadeIn } from "animate-components";
import "./Books.css";
import API from "../../API";

const booksBody = {
  padding: "2%",
  paddingBottom: "2%",
  backgroundColor: "#FFFFFF",
  fontFamily: "Open Sans, Calibri, Arial, sans-serif",
  borderRadius: "5px",
  webkitBorderradius: "5px"
};
let user = {};
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
  }

  componentDidMount() {
    user = JSON.parse(localStorage.getItem("user"));
    var thisVar = this;
    var data = {
      department: user.department
    };

    API.post("books/details", data).then(function(response) {
      thisVar.setState({
        books: response.data
      });
    });
  }

  render() {
    return (
      <FadeIn duration="0.3s" timingFunction="ease-in" as="div">
        <div className="header">
          <p className="heading">BOOKS</p>
        </div>
        <div className="container-books">
          <Card className="text-center">
            {user ? (
              <Card.Title className="Department">
                Department : {user.department}
              </Card.Title>
            ) : null}
            <Card.Body style={booksBody}>
              <ListGroup>
                {this.state.books.map(function(book, id) {
                  return (
                    <ListGroup.Item
                      action
                      href={book.link}
                      target="_blank"
                      key={id}
                    >
                      {book.name}
                    </ListGroup.Item>
                  );
                })}
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </FadeIn>
    );
  }
}

export default Books;
