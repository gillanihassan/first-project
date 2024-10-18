import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";

function Post() {
  const [productsData, setProductsData] = useState();

  //Fetch Post Data
  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/posts", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    console.log(data);
    setProductsData(data);
  }

  useEffect(() => {
    console.log("fetchProducts, on page load");

    fetchProducts();
  }, []);

  return (
    <div>
      <div
        class="p-3 mb-2 bg-black text-white"
        style={{
          // border: "3px solid black",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h1 style={{ color: "white" }}>Posts Data</h1>

        <div class="container text-center">
          <div class="row">
            {productsData &&
              productsData.posts.length > 0 &&
              productsData.posts.map((set) => {
                return (
                  // <tr>
                  //   <td>{set.id}</td>
                  // </tr>

                  <Card
                    style={{
                      width: "22rem",
                      // border: "2px solid red",
                      borderRadius: "18px",
                      margin: "10px",
                      padding: "14px",
                      paddingBottom: "60px",
                    }}
                  >
                    <div class="col-12">
                      <Card.Img
                        style={{ width: "270px" }}
                        variant="top"
                        src={set.images}
                      />
                      <Card.Title>{set.title}</Card.Title>
                      <Card.Text>{set.body}</Card.Text>
                      <a href={`/posts/${set.id}`}>See Mores</a>
                    </div>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
