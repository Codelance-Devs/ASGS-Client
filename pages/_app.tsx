import AppContext from '@/context/AppContext';
import DispatchContext from '@/context/DispatchContext';
import reducer from '@/reducer/reducer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useReducer } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(reducer, { cart: [] });
	return (
		<AppContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<Component {...pageProps} />
			</DispatchContext.Provider>
		</AppContext.Provider>
	);
}
