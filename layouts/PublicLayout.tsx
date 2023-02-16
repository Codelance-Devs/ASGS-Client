import React, { PropsWithChildren } from 'react';
import { NextPage } from 'next';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';

const PublicLayout: NextPage<PropsWithChildren> = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
};

export default PublicLayout;
