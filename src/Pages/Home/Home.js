import React from 'react'
import './Home.css'
import imgHomeShop from './shopimg.jpg'

export default function Home() {
    return (
        <div className="global-container">
            <h1 className="home-title">
            Bienvenue au <span>Shop</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Quaerat perspiciatis maiores repellendus quisquam! 
                Fugiat impedit a illo animi doloremque qui sint maxime 
                numquam repudiandae, porro illum consequatur, labore id iste.
            </p>
            <img src={imgHomeShop} alt="accueil-shop" />
        </div>
    )
}
