import React, { Component } from "react";
import { ListGroup, ListGroupItem, ListGroupItemHeading,ListGroupItemText} from "reactstrap";

export default class CategoryList extends Component {
    constructor(props) {
        super(props); //Datayı aktarmak için kullanılır.
        this.state={
            categories :[
                {categoryID:1,categoryName:"Beverages"},
                {categoryID:2,categoryName:"Condiments"}
    ],
    currentCategoy:"state"
    } // State datayı komponentte tutmayı sağlar.
    }
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <ListGroup>
                    {this.state.categories.map(category => (
                        <ListGroupItem onClick={()=> this.setState({currentCategoy:category.categoryName})} key={category.categoryID}>{category.categoryName}</ListGroupItem> // Tıklanan yerin değerini çağırdık onClick fonksiyonu ile
                    ))}
                </ListGroup>
                <h4>{this.state.currentCategoy}</h4>
            </div>
        )
    }
}