import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import '../../node_modules/font-awesome/css/font-awesome.min.css';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../stylesheets/main.scss';

const TemplateWrapper = ({children}) => (
	<div>
		<Helmet>
			<meta name="robots" content="index, follow"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
			<meta name="description" content="Freelance Web Developer Marcel Attinger"/>
			<meta name="author" content="Marcel Attinger"/>
			<title>Marcel Attinger - Webentwicklung </title>
		</Helmet>
		<Navbar />
		<div>{children()}</div>
		<Footer />
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper
