import React, { PropsWithChildren, FC } from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import Headroom from 'react-headroom';

const PublicLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Headroom>
				<Navbar />
			</Headroom>
			{children}
			<Footer />
		</>
	);
};

export default PublicLayout;
