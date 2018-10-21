import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';
import LeftRightTeaser from '../components/left-right-teaser';

class ProductOverview extends React.Component {
	render() {
		const {data} = this.props;
		//Overview Site Data
		const {edges: overViewdata} = data.productOverview;
		console.log(overViewdata);
		//Blog Posts Data
		const {edges: posts} = data.products;

		const childElements = posts.map(({node}) => {
			console.log(node);
			return (
				<div className="col-lg-4 col-md-6 teaser" key={node.fields.slug}>
					<Link to={node.fields.slug}>
						<img src={node.frontmatter.previewImage} alt="test"/>
						<span className="text-overlay">
						<span>{node.frontmatter.title}</span>
					</span>
					</Link>
				</div>
			)
		});

		return (
			<div className="recipe-overview">
				<Header />

				<section>
					<div className="container">
						<h1 className="text-center">Bioanbau seit über 20 Jahren</h1>
						<p className="text-center">In unserem Familienbetrieb bauen wir seit nun mehr über 20 Jahren
						                           unsere Produkte an. Lorem ipsum dolor sit amet, consectetur
						                           adipisicing elit. At, deserunt ipsum quo repellendus temporibus
						                           totam! Dignissimos doloremque enim error, laborum magnam modi
						                           perferendis sequi similique vel voluptates? Ad assumenda dolorem est
						                           nostrum vero. Recusandae, rem! Hier drunter eventuell Bilder vom Anbau. </p>
					</div>
				</section>
				<section className="grey-background">
					<div className="container product-teaser">
						<div className="text-align">
							<h2 className="text-center mb-big">Diese Produkte bauen wir selbst an</h2>
						</div>
						<div className="row">
							{childElements}
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default ProductOverview

export const pageQuery = graphql`
query Name {
  productOverview: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "product-overview"}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
          featuredProducts {
	         image
	         headline
	         linkTarget
	         blank
	      }
	      lrteasers {
                image
				imageAlt
				headline
				paragraph
				linkTarget
				linkDesc
		  }
        }
      }
    }
  }
  products: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "product"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter { 
          date(formatString: "DD MMMM, YYYY")
          title
          previewImage
        }
      }
    }
  }
}
`