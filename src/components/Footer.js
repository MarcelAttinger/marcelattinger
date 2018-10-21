import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Link from 'gatsby-link';

const Footer = () => (
	<footer>
		<div className="container">
			<div className="row">
				<div className="col-md-4 col-lg-8">
					<h3>Trete in Kontakt mit uns!</h3>
					<div className="footer-links">
						<a className="with-icon" href="https://goo.gl/maps/NnCQyyKZsRu"><span className="fa fa-map-marker">location</span> Entringerstraße 110, <br /> 72119 Ammerbuch</a>
						<div className="ml-4">
							<a className="with-icon" href="#"><span className="fa fa-phone">phone</span> 07073 / 302647</a>
							<a className="with-icon" href="mailto:info@glueckskorn-schmide.de?subject=Anfrage"><span className="fa fa-envelope">mail</span>info@glückskorn-schmide.de</a>
						</div>
					</div>
				</div>
				<div className="col-md-4 justify-content-end">
					<h3>Wichtige Links!</h3>
					<div className="footer-links">
						<div>
							<Link to="/imprint/">Impressum</Link>
							<Link to="/data-protection/">Datenschutzerklärung</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
);

export default Footer;