import fakeStoreApi from "../../apis/fakeStoreApi";
import { ActionTypes } from "../constants/action-types";

export const fetchProducts = () => async (dispathc) => {
  const response = await fakeStoreApi.get("/products");

  dispathc({
    type: ActionTypes.FETCH_PRODUCTS,
    payload: response.data,
  });
};

export const fetchProduct = (id) => async (dispathc) => {
  const response = await fakeStoreApi.get(`/products/${id}`);

  dispathc({
    type: ActionTypes.SELECTED_PRODUCT,
    payload: response.data,
  });
};

export const selectedProduct = (product) => {
  return {
    type: ActionTypes.SELECTED_PRODUCT,
    payload: product,
  };
};

export const removeSelectedProduct = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCT,
  };
};
