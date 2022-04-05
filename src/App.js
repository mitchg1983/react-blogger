import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import BootstrapTable from "react-bootstrap-table-next";
import { Blogpost, Pagination, DisplayBlogText } from "./components";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      fetchedBlogs: [
        {
          author: "",
          createdAt: "",
          id: "",
          text: "",
          title: "",
        },
      ],
      authorList: [],
      selectedText: "",
    };
  }

  handleLoadClick = async () => {
    const fetchResponse = await fetch(
      "https://6239ddb128bcd99f02763cfe.mockapi.io/blogs"
    );
    console.log("fetch response ", fetchResponse);
    const jsonData = await fetchResponse.json();
    console.log("fetched jsonData ", jsonData);
    const authorList = await jsonData.map((fetchedPost) => {
      return fetchedPost.author;
    });
    this.setState({
      fetchedBlogs: jsonData,
      authorList: authorList,
    });
    // return jsonData;
  };

  handleTableClick = (e) => {
    //this will grab the row clicked
    console.log(e.target.parentNode);

  };

  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.handleLoadClick}>
          Click here
        </Button>
        <div className="read-panel">
          {/* <DisplayBlogText /> */}

        </div>
        <div className="main-panel">

        <div>
        <h3>Blogpost Results</h3>
        <Table striped bordered hover onClick={this.handleTableClick}>
          <thead>
            <tr>
              <th>id#</th>
              <th>Author</th>
              <th>Text</th>
              <th>Title</th>
            </tr>
          </thead>

          <Pagination allBlogPosts={this.state.fetchedBlogs} />

          </Table>
      </div>


        </div>
      </div>
    );
  }
}

export default App;
