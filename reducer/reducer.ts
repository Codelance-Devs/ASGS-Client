/**
 * Reducer Function
 */

// Dependencies

const reducer = (state: AppState, action: AppActions) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const exists = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (exists === -1) {
				const cartItem = { ...action.payload, quantity: 1 };
				state.cart.push(cartItem);
			}
			localStorage.setItem('ASGS_CART', JSON.stringify(state.cart));
			break;
		}
		case 'INCREMENT_ITEM_QUANTITY': {
			const exists = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (exists > -1) {
				console.log(state.cart[exists].quantity!);
				++state.cart[exists].quantity!;
				console.log(state.cart[exists].quantity!);
			}
			localStorage.setItem('ASGS_CART', JSON.stringify(state.cart));
			break;
		}
		case 'DECREMENT_ITEM_QUANTITY': {
			const exists = state.cart.findIndex(
				(item) => item.id === action.payload.id
			);
			if (exists > -1) {
				if (state.cart[exists].quantity == 1) {
					state.cart = state.cart.filter(
						(item) => item.id !== action.payload.id
					);
				} else {
					state.cart[exists].quantity! -= 1;
				}
			}
			localStorage.setItem('ASGS_CART', JSON.stringify(state.cart));
			break;
		}
		case 'CLEAR_CART': {
			state.cart = [];
			localStorage.removeItem('ASGS_CART');
			break;
		}
		default: {
			break;
		}
	}
};

export default reducer;
