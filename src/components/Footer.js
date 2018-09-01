import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ data }) => (
	<footer className="footer text-center">
		<div className="container">
			<div className="row">
				<div className="col-md-4 mb-5 mb-lg-0">
					<a className="lead underline-link" href="imprint.html">Impressum</a>
					<br/>
						<a className="lead underline-link" href="data-protection.html">Datenschutzerklärung</a>
				</div>
				<div className="col-md-4 mb-5 mb-lg-0">
					<ul className="list-inline mb-0">
						<li className="list-inline-item">
							<a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank" href="#">
								<i className="fa fa-fw fa-facebook"></i>
							</a>
						</li>
						<li className="list-inline-item">
							<a className="btn btn-outline-light btn-social text-center rounded-circle" target="_blank"
							   href="https://www.xing.com/profile/Marcel_Attinger/cv">
								<i className="fa fa-fw fa-xing"></i>
							</a>
						</li>
					</ul>
				</div>
				<div className="col-md-4">
					<p className="lead mb-0">Adalbert-Stifter-Weg 10
						<br/>71116 Gärtringen</p>
					<a className="lead underline-link" href="mailto:hi@marcelattinger.de?subject=Anfrage">hi@marcelattinger.de</a>
				</div>
			</div>
		</div>
		<div className="copyright py-4 text-center text-white">
			<div className="container">
				<small>Copyright &copy; Marcel Attinger</small>
			</div>
		</div>
	</footer>
)

Footer.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		})
	),
}

export default Footer
