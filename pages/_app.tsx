import AppContext from '@/context/AppContext';
import DispatchContext from '@/context/DispatchContext';
import reducer from '@/reducer/reducer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useMemo } from 'react';
import PublicLayout from '@/layouts/PublicLayout';
import { useImmerReducer } from 'use-immer';

export default function App({ Component, pageProps }: AppProps) {
	const cart: ProductType[] = useMemo(() => {
		if (typeof window !== 'undefined')
			return JSON.parse(localStorage.getItem('ASGS_CART')!) ?? [];
		else return [];
	}, []);
	const [state, dispatch] = useImmerReducer(reducer, { cart });
	console.log(state);
	return (
		<AppContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
				<PublicLayout>
					<Component {...pageProps} />
				</PublicLayout>
			</DispatchContext.Provider>
		</AppContext.Provider>
	);
}
