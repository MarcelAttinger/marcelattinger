import React from 'react';
import Link from 'gatsby-link';
import Header from '../components/header';

class RecipeOverview extends React.Component {
	render() {
		const {data} = this.props;
		console.log(data);
		//Overview Site Data
		const {edges: overViewdata} = data.recipeOverview;
		//Blog Posts Data
		const {edges: posts} = data.recipes;

		const childElements = posts.map(({node}) => {
			return (
				<div className="col-lg-3 col-md-6 teaser" key={node.fields.slug}>
					<Link to={node.fields.slug}>
						<span className="fa fa-angle-right">Icon</span>
						<img src="http://place-hold.it/255x150" alt="test"/>
						<div className="text">
							<h3>{node.frontmatter.title}</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
						</div>
					</Link>
				</div>
			)
		});

		return (
			<div className="recipe-overview">
				<Header />

				<section>
					<div className="container">
						<h1 className="text-center">Gesunde Ernährung beginnt mit den richtigen Rezepten</h1>
						<p className="text-center">In unserem Familienbetrieb bauen wir seit nun mehr über 20 Jahren
						                           unsere Produkte an. Lorem ipsum dolor sit amet, consectetur
						                           adipisicing elit. At, deserunt ipsum quo repellendus temporibus
						                           totam! Dignissimos doloremque enim error, laborum magnam modi
						                           perferendis sequi similique vel voluptates? Ad assumenda dolorem est
						                           nostrum vero. Recusandae, rem! Hier drunter eventuell Bilder vom Anbau. </p>
					</div>
				</section>

				<section className="grey-background">
					<div className="container recipe-teaser">
						<div className="text-align">
							<h1 className="text-center">Rezepte für unsere Bioprodukte</h1>
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

export default RecipeOverview

export const pageQuery = graphql`
query Name2 {
  recipeOverview: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "recipe-overview"}}}) {
    edges {
      node {
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          description
        }
      }
    }
  }
  recipes: allMarkdownRemark(filter: {frontmatter: {templateKey: {eq: "recipe"}}}, sort: {fields: [frontmatter___date], order: DESC}) {
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