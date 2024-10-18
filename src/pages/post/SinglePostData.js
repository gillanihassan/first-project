import React, { useEffect, useState } from "react";
import { Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

function SingleProduct() {
  const { postId } = useParams();

  console.log("productId", postId);

  const [singlePost, setSinglePost] = useState({});

  /* Fetch Product data from dummy json */
  async function fetchProduct() {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    // console.log(data);
    setSinglePost(data);
  }

  useEffect(() => {
    console.log("fetchProducts, on page load");

    fetchProduct();
  }, []);

  console.log(singlePost);
  return (
    <div className="container text-center">
      <h1 style={{ textAlign: "center" }}>Product Detail</h1>
      <div style={{ marginTop: "30px" }}>
        <div className="col-5">
          <Card
            style={{
              width: "54rem",
              padding: "2rem",
              border: "0px",
              // border: "4px solid yellow",
            }}
          >
            <h1
              style={{
                // border: "2px solid red",
                width: "700px",
                fontWeight: "600",
              }}
            >
              {singlePost.title}
            </h1>

            <div>{singlePost.body}</div>

            {singlePost.likes}
          </Card>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
