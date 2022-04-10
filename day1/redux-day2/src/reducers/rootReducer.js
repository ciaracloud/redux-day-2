import storage from "redux-persist/lib/storage";

const initialState = {
  products: [
    {
      name: "Pink and Purple Yarn Pack",
      img: "https://images.unsplash.com/photo-1521192251819-0549ec47e304?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2108&q=80",
    },
    {
      name: "Red Yarn",
      img: "https://images.unsplash.com/photo-1610383120881-32c3b9db9408?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
      name: "Black Swirl Yarn",
      img: "https://images.unsplash.com/photo-1625852123934-a1ca32e77d4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1546&q=80",
    },
    {
      name: "White Yarn",
      img: "https://images.unsplash.com/photo-1514991001314-f695088ca9a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1450&q=80",
    },
    {
      name: "Green Yarn",
      img: "https://images.unsplash.com/photo-1605588818931-cd8f98b65d78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      name: "Purple Yarn",
      img: "https://images.unsplash.com/photo-1607497839442-91c7a44b19e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    },
  ],
  wallet: {},
  cart: [],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case "RESET":
      storage.removeItem("persist:root");
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
export default rootReducer;
