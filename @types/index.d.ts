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

type CartActionTypes = 'ADD_TO_CART' | 'REMOVE_FROM_CART';

interface CartAction {
	type: CartActionTypes;
	payload: ProductType;
}

type AppActions = CartAction;

type DispatchContextType = React.Dispatch<AppActions>;
