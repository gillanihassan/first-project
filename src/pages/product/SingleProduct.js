import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { productId } = useParams();

  console.log("productId", productId);

  const [singleProduct, setSingleProduct] = useState({});

  /* Fetch Product data from dummy json */
  async function fetchProduct() {
    const res = await fetch(`https://dummyjson.com/products/${productId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    // console.log(data);
    setSingleProduct(data);
  }

  useEffect(() => {
    console.log("fetchProducts, on page load");

    fetchProduct();
  }, []);

  console.log(singleProduct);
  return (
    <div className="container text-center">
      {/* <h1 style={{ textAlign: "center" }}>Product Detail</h1> */}
      <div className="row" style={{ marginTop: "60px" }}>
        <div className="col-7">
          <Card style={{ width: "30rem", border: "0px" }}>
            <img
              style={{ width: "500px", height: "370px", marginLeft: "150px" }}
              src={singleProduct.images}
            />
          </Card>
        </div>
        <div className="col-5">
          <Card
            style={{
              width: "34rem",
              padding: "2rem",
              border: "0px",
              // border: "4px solid yellow",
            }}
          >
            <h1
              style={{
                // border: "2px solid red",
                width: "400px",
                fontWeight: "700",
              }}
            >
              {singleProduct.title}
            </h1>
            <div
              style={{
                // border: "4px solid black",
                width: "400px",
              }}
            >
              {/* <a href={`/product-by-category/${singleProduct.category}`}> */}
              <a href={`/product-by-category/${singleProduct.category}`}>
                <span
                  style={{
                    padding: "10px",
                    paddingLeft: "40px",
                    paddingRight: "40px",
                    fontSize: "16px",
                  }}
                  className="badge text-bg-primary"
                >
                  {singleProduct.category}
                </span>
              </a>

              <span
                style={{
                  padding: "10px",
                  paddingLeft: "20px",
                  paddingRight: "20px",
                  fontSize: "16px",
                  marginLeft: "10px",
                }}
                class="badge text-bg-warning"
              >
                {" "}
                Price: {singleProduct.price}
              </span>
            </div>
            <div
              style={{
                // border: "4px solid red",
                padding: "10px",
                paddingTop: "30px",
                paddingBottom: "20px",
                fontSize: "14px",
                fontWeight: "600",
              }}
            >
              {" "}
              {singleProduct.description}
            </div>
            <div style={{ border: "", fontWeight: "500" }}>
              Stock Avalible: {singleProduct.stock}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
