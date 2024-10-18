import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Product from "../pages/product/Product";
import DataTypes from "../pages/data/DataTypes";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import SingleProduct from "../pages/product/SingleProduct";
import UsersDataTable from "../pages/users/UsersDataTable";
import Navbar from "../components/Navbar";
import Post from "../pages/post/Post";
import SinglePostData from "../pages/post/SinglePostData";
import PrivateRoutes from "../utils/PrivateRoutes";

export default function Routing() {
  return (
    <Router>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/products/:productId" element={<SingleProduct />} />
          <Route path="/datatypes" element={<DataTypes />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/Usersdatatable" element={<UsersDataTable />} />
          {/* Private routes */}
          <Route element={<PrivateRoutes />}>
            <Route path="/posts" element={<Post />} />
            <Route path="/posts/:postId" element={<SinglePostData />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
