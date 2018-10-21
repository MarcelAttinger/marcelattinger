import React from 'react';
import Link from "gatsby-link";
import Header from '../components/header';

const RecipeTemplate = ({
	                        content,
	                        subheadline,
	                        title,
	                        blogImage
                        }) => {
	return (
		<div className="recipe-detail">
			<Header />

			<section className="grey-background">
				<div className="container">
					<div className="row justify-content-center">
						<div id="breadcrumb">
							<Link to="/">
								Home
							</Link>
							<span> > </span>
							<Link to="/recipe-overview/">Alle Rezepte</Link>
							<span> > </span>
							<span>{title}</span>
						</div>
					</div>
					<div className="row justify-content-center">
						<h1>{title}</h1>
					</div>
					<div className="row">
						<div className="col-lg-8">
							<img className="recipe-pic" src="http://place-hold.it/200x150" alt="test"/>
							<h2>Zubereitung</h2>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem dolor, ducimus
							   expedita maxime molestiae mollitia odit praesentium quibusdam quo repudiandae sunt ut
							   voluptas voluptate.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse est laudantium
							   porro sequi velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
							   culpa cumque error illum maiores minima modi neque quo, reiciendis repellat repellendus
							   reprehenderit sed ullam. Aliquid doloremque et fuga illum incidunt magni, minima
							   necessitatibus nulla obcaecati odio quos tempore unde voluptates! Deserunt ipsa nobis
							   repellat tempore.</p>
							<button className="btn btn-primary">Rezept drucken</button>
						</div>

						<div className="col-lg-4">
							<h2>Zutaten</h2>
							<ul>
								<li>250ml Milch</li>
								<li>2 mittelgroße Kürbisse</li>
								<li>500 Gramm Roggen</li>
								<li>350ml Wasser</li>
							</ul>

							<h2>Infos</h2>
							<ul className="checklist">
								<li><span className="fa fa-check">clock</span>Zubereitung ca. 15 Minuten</li>
								<li><span className="fa fa-check">lemon</span>Vegetarisch</li>
								<li><span className="fa fa-check">utensils</span>Viel Protein</li>
								<li><span className="fa fa-check">utensils</span>Wenig Fett</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

const Recipe = ({data}) => {
	const {markdownRemark: post} = data;

	return (
		<RecipeTemplate
			content={post.html}
			subheadline={post.frontmatter.subheadline}
			title={post.frontmatter.title}
			blogImage={post.frontmatter.blogImage}
			previewImage={post.frontmatter.previewImage}
		/>
	)
};

export default Recipe;

export const pageQuery = graphql`
  query RecipeByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        subheadline
        blogImage
        previewImage
      }
    }
  }
`;