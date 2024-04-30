import React from "react"

import { addItem } from "./Redux/slice/cartSlice";

import Products from "./products.json"
import { useDispatch } from "react-redux";

console.log(Products);

export default function Card() {

    const dispatch = useDispatch()

    return (
        <>
            <div style={{display : "grid",gridTemplateColumns : "auto auto auto auto",gap : "30px 30px",textAlign :"center",fontSize : "20px",fontWeight : "bold"}}>
                {
                    Products.map((data) => {
                        return (
                            <>
                                <div className="card bg-dark text-light" style={{width: "18rem",marginLeft : "40px"}} key={data.id}>
                                        <div className="card-body" style={{position : "relative"}}>
                                        <img className="card-img-top" src={data.image} alt="Card image cap" style={{height : "200px"}}/>
                                            <h5 className="card-title mt-2">{data.productName}</h5>
                                            <p className="card-text">{data.price}/-</p>
                                            <a href="#" className="btn btn-danger" style={{bottom : "10px"}} onClick={(e)=>{dispatch(addItem({name : data.productName,price : data.price}))}}>Add to cart</a>
                                        </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}