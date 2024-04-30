import React from "react"
import { useSelector } from "react-redux"

export default function Cart() {

    const items = useSelector((state)=>{return state})

    const total = items.cart.reduce((a,b) => a + b.price,0)

    console.log("cart",items);

    return (
        <>
            <div className="alert alert-success">
                <h3 className="text-center">
                    Total Items: {items.cart.length} (RS : {total})/-
                </h3>
            </div>
        </>
    )
}