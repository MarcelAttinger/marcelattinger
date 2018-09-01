import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import Services from '../components/Services';
import AboutMe from '../components/AboutMe';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
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
		<Masthead />
		<Services />
		<AboutMe />

		<Contact />
		<div>{children()}</div>
		<Footer />
	</div>
);

TemplateWrapper.propTypes = {
	children: PropTypes.func,
};

export default TemplateWrapper
