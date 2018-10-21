import React from 'react';
import PropTypes from 'prop-types';
import {v4} from 'uuid';
import Link from 'gatsby-link';


export default class LeftRightTeaser extends React.Component {
	constructor(props) {
		super(props);
	}

	renderLink(teaser) {
		if (teaser.linkTarget !== '') {
			return (<Link to={teaser.linkTarget}><span
				className="fa fa-angle-right">Arrow</span><span>{teaser.linkDesc}</span></Link>)
		}
	}

	render() {
		return (
			<section>
				<div className="container">
					{this.props.leftRightTeasers.map(teaser => (
						<div key={v4()} className="row left-right-teaser">
							<div className="col-lg-6 image">
								<img src={teaser.image} alt={teaser.imageAlt}/>
							</div>
							<div className="col-lg-6 text">
								<h2>{teaser.headline}</h2>
								<p>{teaser.paragraph}</p>
								{this.renderLink(teaser)}
							</div>
						</div>
					))}
				</div>
			</section>
		)
	}
}