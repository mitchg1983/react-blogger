import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

class Blogpost extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="blogpost-panel">
        <Row>
          <Col>
            <div> {this.props.subject} </div>
            <div> by {this.props.authorName} </div>
            <div> {this.props.timeOfPost} </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div> {this.props.content} </div>
            <div> cID {this.props.cID} </div>
          </Col>
        </Row>
      </div>
    );
  }
}

const fetchBlogs = async () => {
  //Get and return all products from API
  // const requestOptions = {
  //   method: "GET"
  // }
  // const fetchResponse = await fetch(`${fakeStoreAPIURL}/products`, requestOptions)

  const fetchResponse = await fetch(
    "https://6239ddb128bcd99f02763cfe.mockapi.io/blogs"
  );
  console.log("fetch response ", fetchResponse);
  const jsonData = await fetchResponse.json();
  console.log("fetched jsonData ", jsonData);
  return jsonData;
};

// fetchBlogs();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      fetchedBlogs: [],
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

    const authorList = await jsonData.map( (fetchedPost) => {
      return fetchedPost.author;
    }
    )


    this.setState({
      fetchedBlogs: jsonData,
      authorList: authorList,
    });
    // return jsonData;
  };

  render() {
    return (
      <div className="App">
        {/* <header className="App-header"> */}
        <div className="navbar">
          {" "}
          <Row>
            <Col>
              {" "}
              <Button onClick={this.handleLoadClick}>Click here</Button>
            </Col>
          </Row>
        </div>
        <div className="display-area">
          <div className="main-panel">
            {this.state.fetchedBlogs.map((blog, idx) => {
              return (
                <div>
                  <Blogpost
                    key={`Product-${idx}`}
                    authorName={blog.author}
                    timeOfPost={blog.createdAt}
                    cID={blog.id}
                    content={blog.text}
                    subject={blog.title}
                  />
                </div>
              );
            })}
          </div>

          <div className="options-panel">Options Panels</div>
        </div>
        {/* </header> */}
      </div>
    );
  }
}

export default App;
