interface AppState {
	cart: ProductType[];
}

interface ProductType {
	id: string;
	name: string;
	price: number;
	imageSrc: string;
	quantity?: number;
}

type CartActionTypes =
	| 'ADD_TO_CART'
	| 'CLEAR_CART'
	| 'INCREMENT_ITEM_QUANTITY'
	| 'DECREMENT_ITEM_QUANTITY';

interface CartAction {
	type: CartActionTypes;
	payload: ProductType;
}

type AppActions = CartAction;

type DispatchContextType = React.Dispatch<AppActions>;
