import React from 'react';

import { Link } from "react-router-dom";

export default class Home extends React.Component {

state={
    Data:[]
}

componentDidMount(){
this.fetchData()
}

fetchData=async()=>{
    let response= await fetch("http://localhost:3001/product")
    let data= await response.json()
    console.log(data)
    this.setState({
        Data:data
    })

}

    render() {
      const topProducts =this.state.Data && this.state.Data.sort((a, b) => b.price - a.price).slice(0,4);
      console.log(topProducts)
        return(
         
            <div>
            <h1>Welcome visitor</h1>
            
            <span>
            <Link to="/products">
            Products
            </Link>
            </span>

           
                <div className="outer-div">
                {topProducts && topProducts.map((topProduct, index) => {
              return (
                <Link to={{
                  pathname: `/products/${topProduct.slug}`,
                  state: {itemIndex: index,
                  backHome: true}}}>
                  <div className="inner-div">
              <h3>{topProduct.name}</h3>
              <span>{topProduct.price}</span>
                  </div>
                  </Link>
                  )
                })}
                </div>
              
            <div>
             
            </div>
              </div>
            
     
        )
    }
}