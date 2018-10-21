import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Footer from '../components/footer';
import '../stylesheets/main.scss';

const Layout = ({children, data, location}) => (
	<div>
		<Helmet>
			<meta name="robots" content="index, follow"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1"/>
			<meta name="description" content="Glückskorn Schmide - Biobauern aus Poltringen. Beste Qualität."/>
			<meta name="author" content="Marcel Attinger"/>
			<title>Glückskorn Schmide</title>
			<html lang="de" />
		</Helmet>
		{children()}
		<Footer />
	</div>
);

Layout.propTypes = {
	children: PropTypes.func,
};

export default Layout

export const query = graphql`
  query SiteTitleQuery2 {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
