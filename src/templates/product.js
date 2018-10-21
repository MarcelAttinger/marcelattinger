import React from 'react';
import Link from "gatsby-link";
import Header from '../components/header';

const ProductTemplate = ({
	                         content,
	                         subheadline,
	                         title,
	                         blogImage
                         }) => {
	return (
		<div className="recipe-detail">
			<Header />

			<section>
				<div className="container">
					<div className="row justify-content-center">
						<div id="breadcrumb">
							<Link to="/">
								Home
							</Link>
							<span> > </span>
							<Link to="/recipe-overview/">Alle Produkte</Link>
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
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid autem dolor, ducimus
							   expedita maxime molestiae mollitia odit praesentium quibusdam quo repudiandae sunt ut
							   voluptas voluptate.</p>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt esse est laudantium
							   porro sequi velit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
							   culpa cumque error illum maiores minima modi neque quo, reiciendis repellat repellendus
							   reprehenderit sed ullam. Aliquid doloremque et fuga illum incidunt magni, minima
							   necessitatibus nulla obcaecati odio quos tempore unde voluptates! Deserunt ipsa nobis
							   repellat tempore.</p>
						</div>
						<div className="col-lg-4">
							<h2>Rezepte mit diesem Produkt</h2>
							<ul>
								<li>
									<Link to="/recipe/bauernfrühstück/">Bauernfrühstück</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section className="grey-background recipe-overview">
				<div className="container recipe-teaser">
					<div className="text-align">
						<h1 className="text-center">Rezepte für dieses Produkt</h1>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-6 teaser" >
							<Link to="/test/">
								<span className="fa fa-angle-right">Icon</span>
								<img src="http://place-hold.it/255x150" alt="test"/>
								<div className="text">
									<h3>Bauernfrühstück</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-6 teaser" >
							<Link to="/test/">
								<span className="fa fa-angle-right">Icon</span>
								<img src="http://place-hold.it/255x150" alt="test"/>
								<div className="text">
									<h3>Kürbissuppe</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</Link>
						</div>
						<div className="col-lg-3 col-md-6 teaser" >
							<Link to="/test/">
								<span className="fa fa-angle-right">Icon</span>
								<img src="http://place-hold.it/255x150" alt="test"/>
								<div className="text">
									<h3>Kartoffelauflauf</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
};

const Product = ({data}) => {
	const {markdownRemark: post} = data;

	return (
		<ProductTemplate
			content={post.html}
			subheadline={post.frontmatter.subheadline}
			title={post.frontmatter.title}
			blogImage={post.frontmatter.blogImage}
			previewImage={post.frontmatter.previewImage}
		/>
	)
};

export default Product;

export const pageQuery = graphql`
  query ProductByID($id: String!) {
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