import React from 'react';
import { AnimatePresence } from 'framer-motion';
import { Route, Switch, useLocation } from 'react-router-dom';

import Home from './Screens/Home';
import Services from './Screens/Services';
import Vehicles from './Screens/Vehicles';
import OurBenefits from './Screens/OurBenefits';
import Testimonials from './Screens/Testimonials';
import Stations from './Screens/Stations';
import ContactUS from './Screens/ContactUs';

// 1. root layout - with header
// 2. main pages layout - with right and left navigation
import { RootLayout, RLNavigationLayout } from 'Layouts';

import Loader from './Screens/Loader';
import { useLooder } from './Hooks';

import './index.scss';


/**
 * Routes Component
 * @returns {React.Node} - routes
 */
const Routes = () => {
	const loading = useLooder();
	const location = useLocation();

	// if (loading) return <Loader />

	return (
		<RootLayout>
			<RLNavigationLayout>
				<AnimatePresence exitBeforeEnter>
					<Switch location={location} key={location.pathname}>
						<Route path="/" component={Home} exact />
						<Route path="/services" component={Services} exact />
						<Route path="/vehicles" component={Vehicles} exact />
						<Route path="/our-benefits" component={OurBenefits} exact />
						<Route path="/testimonials" component={Testimonials} exact />
						<Route path="/stations" component={Stations} exact />
						<Route path="/contact-us" component={ContactUS} exact />
					</Switch>
				</AnimatePresence>
			</RLNavigationLayout>
			{/* other routes */}
		</RootLayout>
	);
};

export default Routes;
