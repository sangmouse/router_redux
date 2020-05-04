import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom'
import Product from './Product'

class Products extends Component {

  render() {
    
    var {location} = this.props
    console.log(location)

    var products = [
        {
            id: 1,
            slug: 'iphone',
            name : 'Iphone X',
            price: 120000
        },
        {
            id: 2,
            slug: 'samsung',
            name : 'Samsung Galaxy A1',
            price: 20000
        },
        {
            id: 3,
            slug:'oppo',
            name : 'Oppo F1S',
            price: 1270000
        }
    ]
    var {match} = this.props
    

    var url = match.url
    
    var result = products.map((product, index) => {
        return (
            <NavLink to={`${url}/${product.slug}`} key={index}>
                <li className="list-group-item">
                    {product.id} - {product.name} - {product.price}
                </li>
            </NavLink>
            
        )
    })
    return (

      <div className="container">
          <h1>Danh sách sản phẩm</h1>
          <div className="row">
              <ul className="list-group">
                  {result}
              </ul>
          </div>
          <div className="row">
              <Route path="/products/:name" component={Product}/>
          </div>
      </div>
    );
  }
}

export default Products;

