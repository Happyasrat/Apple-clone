import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const LearnMore = () => {
  const id = useParams();

  const [product, setProduct] = useState([]);
  const [productId, setProductId] = useState(id);

  useEffect(() => {
    fetch("http://localhost:5678/iphoneData")
      .then((res) => res.json())
      .then((jsonData) => {
        //    console.log(jsonData.product);
        let Products = jsonData.product;

        let singleProduct = Products.filter(
          (products) => products.product_url == productId.id
        );
        setProduct(singleProduct);
      });
  }, []);
    
  return (
    <div>
      <section className="internal-page-wrapper top-150">
        <div className="container">
          {product.map((product, i) => {
            const {
              product_url,
              product_name,
              product_img,
              product_brief_description,
              starting_price,
              price_range,
              product_description,
            } = product;
            let productPage = "/iphone/" + product_url;

            let productDiv = (
              <div key={i} className="row justify-content-center text-center ">
                <div className="row justify-content-center text-center product-holder h-100">
                  <div className="col-sm-12 col-md-6 my-auto">
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
                  </div>

                  <div className="col-sm-12 col-md-6">
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
};

export default LearnMore;
