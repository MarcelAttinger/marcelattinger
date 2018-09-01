import React from 'react';
import PropTypes from 'prop-types';

const AboutMe = ({data}) => (
	<section className="mb-0 bg-primary text-white" id="about">
		<div className="container">
			<h2 className="text-center text-uppercase text-white animate-bottom">Über mich</h2>
			<hr className="star-light mb-5"/>
			<div className="row">
				<div className="col-lg-4 ml-auto animate-left">
					<p className="lead">Hi, mein Name ist Marcel und ich bin seit 2013 als Webentwickler tätig. In
					                    dieser Zeit
					                    konnte ich bereits mit vielen Kunden und Kollegen spannende Projekte
					                    umsetzen.
					                    Unkomplizierte Kommunikation, schnelle Reaktionszeiten und der Einsatz der
					                    neuesten
					                    Technologien zählen zu meinen Stärken.</p>
				</div>
				<div className="col-lg-4 mr-auto animate-right">
					<p className="lead">Mir ist im Umgang mit Kunden wichtig direkt im Vorgespräch die bestmögliche
					                    Lösung zu
					                    identifizieren. So könnnen wir gezielt eine Strategie entwickeln um ihren
					                    Webauftritt
					                    perfekt auf Ihre Bedürfnisse abzustimmen. Reminder Studium</p>
				</div>
			</div>
		</div>
	</section>
)

AboutMe.propTypes = {
	data: PropTypes.arrayOf(
		PropTypes.shape({
			plan: PropTypes.string,
			price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
			description: PropTypes.string,
			items: PropTypes.array,
		})
	),
}

export default AboutMe
