/**
 * Reducer Function
 */

// Dependencies
import React from 'react';

const reducer = (state: AppState, action: AppActions) => {
	switch (action.type) {
		case 'ADD_TO_CART': {
			const exists = state.cart.find(
				(item) => item.id === action.payload.id
			);
			let cartItem: ProductType;
			if (exists) {
				exists.quantity = exists.quantity!++;
				cartItem = exists;
			} else {
				cartItem = { ...action.payload, quantity: 1 };
			}
			const cart = [...state.cart, cartItem];
			return { ...state, cart };
		}
		// When snackbar is close
		//  - set open to false
		case 'REMOVE_FROM_CART': {
			const exists = state.cart.find(
				(item) => item.id === action.payload.id
			);
			let cartItem: ProductType;
			let cart = [...state.cart];
			if (exists) {
				if (action.payload.quantity! <= 0) {
					cart = cart.filter((item) => item.id !== action.payload.id);
				} else {
					cartItem = { ...exists, quantity: exists.quantity!-- };
					cart = [...cart, cartItem];
				}
			} else {
				cart = cart.filter((item) => item.id !== action.payload.id);
			}
			return { ...state, cart };
		}
		default: {
			return { ...state };
		}
	}
};

export default reducer;
