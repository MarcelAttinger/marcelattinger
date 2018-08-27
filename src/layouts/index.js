import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Navbar from '../components/Navbar';
import '../stylesheets/main.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Hundeglück Schönbuch" />
    <Navbar />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper
