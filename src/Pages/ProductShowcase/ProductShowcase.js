import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./ProductShowcase.css";
import inventory from "../../data/inventory";

export default function ProductShowcase() {
  
  const [quantityMug, setQuantityMug] = useState(1)

  const {id} = useParams()
  
  const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, '').trim() === id)
  // console.log(productClicked)
  const updateMug = e => {
    setQuantityMug(Number(e.target.value))
  }

  const addingInfo = useRef()

  let timerInfo;
  let display = true

  const dispatch = useDispatch()

  const addToCart = e => {
    e.preventDefault()

    const itemAdded = {
      ...inventory[productClicked],
      quantity : Number(quantityMug)
    }
    dispatch({
      type: "ADDITEM",
      payload: itemAdded

    })
    addingInfo.current.innerText = "Ajouté au panier"
    if(display) {
      display = false
      timerInfo = setTimeout(() => {
        addingInfo.current.innerText = ""
        display = true;
      },500)
    }
  }

  useEffect(() => {
    return () => {
      clearTimeout(timerInfo)
    }
  }, [])


  return (
    <div className="showcase">
      <div className="container-img-showcase">
        <img 
          // className="img-showcase"
          src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`}
          alt="" 
        />
      </div>
      <div className="product-infos">
        <h2>{inventory[productClicked].title} </h2>
        <p>Prix : {inventory[productClicked].price}€ </p>
        <form onSubmit={addToCart}>
          <label htmlFor="quantity"> Quantité</label>
          <input 
            type="number" 
            id="quantity"
            value={quantityMug}
            onChange={updateMug}
          />
          <button>Ajouter au panier</button>
          <span 
            ref={addingInfo}
            className="adding-info"
          > </span>
        </form>
      </div>
    </div>
  );
}
