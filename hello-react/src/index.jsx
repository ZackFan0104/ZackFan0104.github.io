import React from 'react';
import ReactDOM from 'react-dom';

class ProductCategoryRow extends React.Component {
  render() {
    const category = this.props.category;
    return (
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    );
  }
}

class ProductRow extends React.Component {
  render() {
    const product = this.props.product;
    const name = product.stocked ?
      product.name :
      <span style={{color: 'red'}}>
        {product.name}
      </span>;

    return (
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

class ProductTable extends React.Component {
  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name} />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  }
}

class FilterableProductTable extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}


const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('container')
);

// import Main from 'components/Main.jsx';
//
// window.onload = function() {
  // setInterval(tick, 1000);
  // <Component name='Zack'/>
  // <Component name='Cindy'/>
  // <Counter />
//   const b = 10;
//   let a = {
//     id : [1,2,3,4,5]
//
//   };
//   ReactDOM.render(
//     <div>
//     <h1>Unread a:</h1>
//     <ul> {
//       a.map((m => <li key={a.id}>u</li>))
//       }
//     </ul>
//     </div>,
//     document.getElementById('root')
//   );
// };

// class Counter extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       count:5
//     };
//   }
//   render(){
//     return <h2>Countdown : {this.state.count}</h2>;
//   }
//   componentDidMount(){
//     this.countdownId = setInterval(()=>{
//       this.setState({
//         count: this.state.count-1
//       });
//     },1000)
//   }
//   componentWillUnmount(){
//     clearInterval(this.countdownId);
//   }
// }

// function Component(props) {
//     return <h2>This is {props.name}</h2>;
// }
//
// class Component extends React.Component {
//
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>This is {this.props.name}</h2>;
//   }
// }
//
//
// function tick() {
//   const date = new Date().toLocaleTimeString();
//   ReactDOM.render(
//       <div>
//         <h1>Hello</h1>
//         <h2>It is {date}</h2>
//       </div>,
//       document.getElementById('root2')
//   );
// }
