function cartReducer(cart, action) {
  switch (action.type) {
    case actionTypes.addItem: {
      return addItemToCart(action.item, cart);
    }
    case actionTypes.removeItem: {
      return removeItemFromCart(action.item, cart);
    }
    case actionTypes.handleInput: {
      return inputUpdateItemInCart(action.item, cart);
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function initCart(initialCartValue) {
  return initialCartValue || [];
}

function useCart({ reducer = cartReducer, initFunc = initCart } = {}) {
  const [cart, dispatch] = useReducer(reducer, [], initFunc);
  const [isOpen, toggleOpen] = useState(false);

  const addItem = (item) => dispatch({ type: actionTypes.addItem, item });
  const removeItem = (item) => dispatch({ type: actionTypes.removeItem, item });
  const handleInput = (item) =>
    dispatch({ type: actionTypes.handleInput, item });

  return { cart, addItem, removeItem, handleInput, isOpen, toggleOpen };
}
