import React from "react";
import "./Home.css";
import Product from "./Product";
// import { Slide } from 'react-slideshow-image';

// const properties = {
//   duration: 5000,
//   transitionDuration: 500,
//   infinite: true,
//   indicators: true,
//   arrows: true
// }

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        {/* <Slide {...properties}> */}
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Herotator/GW-Dec/FTV_PC-GW-hero_1500x600_1x._CB446558100_.jpg"
          alt=""
        />
        {/* </Slide> */}

        <div className="home_row">
          {/* {Product} */}
          <Product
            id="001"
            title="HP Pavilion Gaming DK0268TX 15.6-inch Laptop,Shadow
          Black"
            price={67490}
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="002"
            title="Samsung Galaxy S10 Plus (White, 8GB RAM, 128GB Storage)"
            price={52999}
            image="https://images-na.ssl-images-amazon.com/images/I/61dvlh%2BCsqL._SL1500_.jpg"
            rating={4}
          />

          <Product
            id="003"
            title="Jack & Jones Men's T-Shirt"
            price={849}
            image="https://images-na.ssl-images-amazon.com/images/I/81oqWtXYyIL._UL1500_.jpg"
            rating={3}
          />
          {/* {Product} */}
        </div>

        <div className="home_row">
          {/* {Product} */}
          <Product
            id="004"
            title="JBL Pulse 4 Portable Bluetooth Speaker"
            price={1500}
            image="https://images-na.ssl-images-amazon.com/images/I/61HXIajZwhL._SL1500_.jpg"
            rating={5}
          />
          {/* {Product} */}
          <Product
            id="005"
            title="Optimum Nutrition (ON) Gold Standard 100% Whey Protein Powder - 5 lbs"
            price={5388}
            image="https://images-na.ssl-images-amazon.com/images/I/713RJa%2BLENL._SL1500_.jpg"
            rating={4}
          />
        </div>

        <div className="home_row">
          <Product
            id="006"
            title="Sony Bravia 164 cm (65 inches) 4K Ultra HD Smart Android LED TV"
            price={109999}
            image="https://images-na.ssl-images-amazon.com/images/I/71vGNco7X2L._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
