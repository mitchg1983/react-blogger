import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import "bootstrap/dist/css/bootstrap.min.css";

export class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const allBlogPosts = this.props.allBlogPosts;
    const columns = [
        { dataField: 'id', text: 'Id', sort: true },
        { dataField: 'author', text: 'Author', sort: true },
        { dataField: 'text', text: 'Text', sort: true },
        { dataField: 'title', text: 'Title', sort: true },
    ];
    const defaultSorted = [{
        datafield: 'author',
        order: 'desc'
    }];

    return (
      <div>
        <h3>Blogpost Results</h3>

        <BootstrapTable bootstrap4 keyField="id" data={allBlogPosts} columns={columns} defaultSorted={defaultSorted} />
      </div>
    );
  }
}
