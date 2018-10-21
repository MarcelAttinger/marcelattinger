import React from "react";

const WideTeaser = ({wideprops}) => (
	<div className="wide-teaser">
		<div className="container">
			<div className="row">
				<div className="text-area">
					<h2 className="mb-4">{wideprops.headline}</h2>
					<p>{wideprops.author}</p>
				</div>
			</div>
		</div>
	</div>
)

export default WideTeaser;