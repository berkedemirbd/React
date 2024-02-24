import React, { Component } from "react";
import { Table } from "reactstrap";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class ProductList extends Component {
  render() {
    return (
      <div>
        <h3>ProductList</h3>
        <ListGroup>
          <ListGroupItem
            disabled
            href="#"
            tag="a"
          >
            Cras justo odio
          </ListGroupItem>
          <ListGroupItem
            href="#"
            tag="a"
          >
            Dapibus ac facilisis in
          </ListGroupItem>
          <ListGroupItem
            href="#"
            tag="a"
          >
            Morbi leo risus
          </ListGroupItem>
          <ListGroupItem
            href="#"
            tag="a"
          >
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem
            href="#"
            tag="a"
          >
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </div>
    )
  }
}