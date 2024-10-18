import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import UserModal from "./components/UserModal";
import AddUserModal from "./components/AddUserModal";
import AddUserModalTwo from "./components/AdduserModalTwo";

function UsersDataTable() {
  const [usersData, setUsersData] = useState();
  const [userId, setUserId] = useState();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const handleShow = (user) => {
    // console.log(user, "user");
    setUserId(user.id);
    setShow(true);
  };

  async function fetchProducts() {
    const res = await fetch("https://dummyjson.com/users", {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();

    // console.log(data);
    setUsersData(data);
  }

  useEffect(() => {
    // console.log("fetchProducts, on page load");

    fetchProducts();
  }, []);

  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-6">
          <h2>User Account Details</h2>
        </div>
        <div className="col-6">
          <div style={{ display: "inline-block", margin: "10px" }}>
            {<AddUserModal />}
          </div>
          <div style={{ display: "inline-block" }}> {<AddUserModalTwo />}</div>
        </div>
      </div>
      <table className="table table-hover shadow">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Email</th>
            <th>User Name</th>
            <th>Password</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {usersData &&
            usersData.users.length > 0 &&
            usersData.users.map((userDta, index) => {
              return (
                <tr key={index}>
                  <td>{userDta.id}</td>
                  <td>{userDta.firstName}</td>
                  <td>{userDta.lastName}</td>
                  <td>{userDta.age}</td>
                  <td>{userDta.gender}</td>
                  <td>{userDta.email}</td>
                  <td>{userDta.username}</td>
                  <td>{userDta.password}</td>
                  <td>
                    <button
                      className="btn btn-secondary ps-4 pe-4"
                      onClick={() => handleShow(userDta)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>

      {show && (
        <UserModal userId={userId} handleClose={handleClose} show={show} />
      )}
    </div>
  );
}

export default UsersDataTable;
