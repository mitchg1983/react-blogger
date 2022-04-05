import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import BootstrapTable from "react-bootstrap-table-next";
import { Blogpost, Pagination } from "./components";

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

  render() {
    return (
      <div className="App">
        <Button variant="primary" onClick={this.handleLoadClick}>
          Click here
        </Button>
        <div className="main-panel">
          <Pagination allBlogPosts={this.state.fetchedBlogs} />
        </div>
      </div>
    );
  }
}

export default App;
