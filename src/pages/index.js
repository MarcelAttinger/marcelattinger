import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import Masthead from '../components/Masthead';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import PortfolioItem from '../components/PortfolioItem';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import AboutMe from '../components/AboutMe';

export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		console.log({data});
		const {edges: posts} = data.allMarkdownRemark;

		return (
			<div>
				<Masthead {...posts[0].node.frontmatter.masthead} />
				<Services services = {posts[0].node.frontmatter.services}/>
				<AboutMe {...posts[0].node.frontmatter.aboutMe} />
				<Portfolio portfolio = {posts[0].node.frontmatter.portfolio} />
				<PortfolioItem portfolioItems = {posts[0].node.frontmatter.portfolio} />
				<Testimonials testimonials = {posts[0].node.frontmatter.testimonials} />
				<Contact />

				<section className="section">
					<div className="container">
						<div className="content">
							<h1 className="has-text-weight-bold is-size-2">Latest Stories2</h1>
						</div>
						{posts.map(({node: post}) => (
							<div
								className="content"
								style={{border: '1px solid #eaecee', padding: '2em 4em'}}
								key={post.id}
							>
								<p>
									<Link className="has-text-primary" to={post.fields.slug}>
										{post.frontmatter.title}
									</Link>
									<span> &bull; </span>
									<small>{post.frontmatter.date}</small>
								</p>
								<p>
									{post.excerpt}
									<br />
									<br />
									<Link className="button is-small" to={post.fields.slug}>
										Keep Reading →
									</Link>
								</p>
							</div>
						))}
					</div>
				</section>
			</div>
		)
	}
}

IndexPage.propTypes = {
	data: PropTypes.shape({
		allMarkdownRemark: PropTypes.shape({
			edges: PropTypes.array
		})
	})
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "index-page" } }}
    ) {
      edges { 
        node {
          id
          fields {
            slug 
          } 
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            masthead {
                image
                name
                claim
            } 
            services { 
                headline
                description
            }
            portfolio {
                image
                imageAlt
                item {
                    linkTarget
                    image
                    imageAlt
                    headline
                    description
                    testimonialHeadline
                    testimonialList {
                        listItem
                    }
                    technicalHeadline
                    technicalDescription 
                }
            } 
            aboutMe {
                headline
                leftText
                rightText
            }
            testimonials {
                author
                quote
                image
                imageAlt
                linkTarget
            } 
          }
        }
      }
    }
  }
`
