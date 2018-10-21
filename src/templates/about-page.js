import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/header';

export const AboutPageTemplate = (props) => {

	return (
		<div className="about">
			<Header />
			<div className="container text-center mb-4 mt-4">
				<div className="col-lg-8 ml-auto mr-auto">
					<p>{props.description}</p>
				</div>
			</div>
		</div>
	)
};

AboutPageTemplate.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string
};

const AboutPage = ({data}) => {
	const {markdownRemark: post} = data;

	return (
		<AboutPageTemplate
			title={post.frontmatter.title}
		    description={post.frontmatter.description}
		/>
	)
};

AboutPage.propTypes = {
	data: PropTypes.object
};

export default AboutPage;

export const pageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
         title
         templateKey
         description
      }
    }
  }
`
