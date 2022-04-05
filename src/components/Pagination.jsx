import React, { Component } from "react";
// import BootstrapTable from "react-bootstrap-table-next";
import Table from "react-bootstrap/Table";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  handleTableClick = (e) => {
    //this will grab the row clicked
    console.log(e.target.parentNode);

  };

  render() {
    const allBlogPosts = this.props.allBlogPosts;
    // const columns = [
    //   { dataField: "id", text: "Id", sort: true },
    //   { dataField: "author", text: "Author", sort: true },
    //   { dataField: "text", text: "Text", sort: true },
    //   { dataField: "title", text: "Title", sort: true },
    // ];

    return (






          <tbody>
            {allBlogPosts.map((post) => {
              return (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.author}</td>
                  <td>{post.text}</td>
                  <td>{post.title}</td>
                </tr>
              );
            })}
          </tbody>






    );
  }
}
