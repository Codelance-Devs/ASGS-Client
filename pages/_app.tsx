import AppContext from '@/context/AppContext';
import DispatchContext from '@/context/DispatchContext';
import reducer from '@/reducer/reducer';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { useReducer } from 'react';
import PublicLayout from '@/layouts/PublicLayout';

export default function App({ Component, pageProps }: AppProps) {
	const [state, dispatch] = useReducer(reducer, { cart: [] });
	return (
		<AppContext.Provider value={state}>
			<DispatchContext.Provider value={dispatch}>
      <PublicLayout>
				<Component {...pageProps} />
        </PublicLayout>
			</DispatchContext.Provider>
		</AppContext.Provider>
	);