import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../../commonResource/css/styles.css";



function Mac() {


  const [macPage, setMac] = useState([]);

  useEffect(() => {
    fetch("..//Mac.json")
      .then((res) => res.json())
      .then((jsonData) => {
        console.log(jsonData.product);
        let Products = jsonData.product;
        setMac(Products);
      });
  });

  let order = 1;

  return (
    <div>
      <section className="internal-page-wrapper top-150">
        <div className="container">
          {macPage.map((product, i) => {
            const {
              product_url,
              product_name,
              product_img,
              product_brief_description,
              starting_price,
              price_range,
              product_description,
            } = product;
            let productPage = "/Mac/" + product_url;

             let order1 = 1;
             let order2 = 2;

             if (order !== 1) {
               order1 = 2;
               order2 = 1;
               order--;
             } else {
               order++;
             }

            let productDiv = (
              <div key={i} className="row justify-content-center text-center ">
                <div className="row justify-content-center text-center product-holder h-100">
                  <div className={`col-sm-12 col-md-6 my-auto order-${order1}`}>
                    <div className="col-sm-12  my-auto bold">
                      <div className="title-wrapper ">{product_name}</div>
                      <div className="brief-description">
                        {product_brief_description}
                      </div>
                    </div>
                    <div className="starting-price">
                      {`Starting at ${starting_price}`}
                    </div>
                    <div className="monthly-price">{price_range}</div>
                    <div className="product-details">{product_description}</div>
                    <div className="links-wrapper">
                      <ul>
                        <li>
                          <Link to={productPage}>Learn more</Link>
                        </li>
                        <li>
                          <Link to={productPage}>Buy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className={`col-sm-12 col-md-6 order-${order2}`}>
                    <div className="prodict-image">
                      <img src={product_img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </div>
  );
}

export default Mac;
