export const cartInitialState = JSON.parse(localStorage.getItem("cartItems")) || []
export const cartReducer = (state, action) => {

  const { type: actionType, payload: actionPayload } = action;

  switch (actionType) {
    case "ADD_TO_CART": {
      const { _id, price } = actionPayload;
      const existingItem = state.find((item) => item._id === _id);

      if (existingItem) {
        return state.map((item) => {
          if (item._id === _id) {
            return {
              ...item,
              quantity: item.quantity + 1,
              total: (item.quantity + 1) * item.price,
            };
          }
          return item;
        });
      } else {
        return [...state, { ...actionPayload, quantity: 1, total: price }];
    }
  }

    case "REMOVE_FROM_CART": {
      const { _id } = actionPayload;
      const existingItemToRemove = state.find(
        (item) => item._id === _id
      );

      if (existingItemToRemove) {
        if (existingItemToRemove.quantity === 1) {
          return state.filter((item) => item._id !== _id);
        } else {
          return state.map((item) => {
            if (item._id === _id) {
              return {
                ...item,
                quantity: item.quantity - 1,
                total: (item.quantity - 1) * item.price,
              };
            }
            return item;
          });
        }
      }
      return state;
    }

    default:
      return state;
  }
};