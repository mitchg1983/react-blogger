import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "bootstrap/dist/css/bootstrap.min.css";

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allBlogPosts = this.props.allBlogPosts;
    const columns = [
        { dataField: 'id', text: 'Id'},
        { dataField: 'author', text: 'Author'},
        { dataField: 'text', text: 'Text'},
        { dataField: 'title', text: 'Title'},
    ];

    return (
      <div>
        <h3>Blogpost Results</h3>

        <BootstrapTable keyField="id" data={allBlogPosts} columns={columns} />
      </div>
    );
  }
}
