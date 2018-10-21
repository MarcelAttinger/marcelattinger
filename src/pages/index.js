import React from 'react';
import Link from 'gatsby-link';
import WideTeaser from '../components/wide-teaser';
import LeftRightTeaser from '../components/left-right-teaser';
import Events from '../components/events';
import Header from '../components/header';


export default class IndexPage extends React.Component {
	render() {
		const {data} = this.props;
		const {edges: posts} = data.allMarkdownRemark;

		return (
			<div>
				<Header />

				<LeftRightTeaser leftRightTeasers = {posts[0].node.frontmatter.lrteasers} />

				<WideTeaser wideprops={posts[0].node.frontmatter.wideTeaser} />
			</div>
		)
	}
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
            templateKey
            date(formatString: "MMMM DD, YYYY")
			lrteasers {
                image
				imageAlt
				headline
				paragraph
				linkTarget
				linkDesc
			}
	        wideTeaser { 
	            headline
	            author 
	        }
	        events {
	            startDate
	            endDate
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
  }
`
