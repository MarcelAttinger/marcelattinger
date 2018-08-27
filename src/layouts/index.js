import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import Masthead from '../components/Masthead';
import '../stylesheets/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hundeglück Schönbuch" />
    <Navbar />
	<Masthead />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
