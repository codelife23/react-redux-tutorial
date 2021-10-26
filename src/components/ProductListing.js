import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import Product from "./Product";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ui grid container">
      <Product />
    </div>
  );
};

export default ProductListing;
