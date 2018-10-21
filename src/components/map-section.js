import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({text}) => (
	<div className="map-marker">
		<div className="fa fa-map-marker">{ text }</div>
	</div>
);


/** CSS is in Global.SCSS **/
export default class Map extends React.Component {

	closeLayer(){
		document.querySelector('.map-layer.open').classList.remove('open');
	}

	showLayer(key){
		var selection = document.querySelector('.map-layer.open') !== null;

		if(selection){
			document.querySelector('.map-layer.open').classList.remove('open');
		}

		document.querySelectorAll('.map-layer')[key].classList.toggle('open');
	}

	static defaultProps = {
		center: {lat: 48.52266, lng: 9.05222},
		zoom: 10
	}

	render() {
		return (
			<div className='google-map'>
				<GoogleMapReact
					bootstrapURLKeys={{key: 'AIzaSyAii57AthWshkQxfng2tiSQt1jR2to1Zy8'}}
					defaultCenter={ this.props.center }
					defaultZoom={ this.props.zoom }
					onChildClick={ this.showLayer}>
					<AnyReactComponent
						lat={ 48.52266 }
						lng={ 9.05222 }
						text={ ' ' }
					    element={this}
					/>
					<AnyReactComponent
						lat={ 48.49144 }
						lng={ 9.20427 }
						text={ ' ' }
						element={this}
					/>
					<AnyReactComponent
						lat={ 48.46144 }
						lng={ 9.40427 }
						text={ ' ' }
						element={this}
					/>
				</GoogleMapReact>
				<div className="map-layer">
					<h3>Bioladen Tübingen</h3>
					<span><a target="_blank" href="https://goo.gl/maps/PMkXrdhxH7L2"><span className="fa fa-map-marker">lorem</span>Wasserschloß 6, <br /> 72119 Ammerbuch</a></span>
					<span><a target="_blank" href="#"><span className="fa fa-phone">phone</span>07032 / 31950</a></span>
					<span><a target="_blank" href="http://www.muehle-poltringen.de/hochzeitsplanung.html"><span className="fa fa-globe">lorem</span> Zur Website</a></span>
					<span onClick={this.closeLayer} className="fa fa-times">Close</span>
				</div>
				<div className="map-layer">
					<h3>Mühle Poltringen</h3>
					<span><a target="_blank" href="https://goo.gl/maps/PMkXrdhxH7L2"><span className="fa fa-map-marker">lorem</span>Wasserschloß 6, <br /> 72119 Ammerbuch</a></span>
					<span><a target="_blank" href="#"><span className="fa fa-phone">phone</span>07032 / 31950</a></span>
					<span><a target="_blank" href="http://www.muehle-poltringen.de/hochzeitsplanung.html"><span className="fa fa-globe">lorem</span> Zur Website</a></span>
					<span onClick={this.closeLayer} className="fa fa-times">Close</span>
				</div>
				<div className="map-layer">
					<h3>Bioladen Gärtringen</h3>
					<span><a target="_blank" href="https://goo.gl/maps/PMkXrdhxH7L2"><span className="fa fa-map-marker">lorem</span>Wasserschloß 6, <br /> 72119 Ammerbuch</a></span>
					<span><a target="_blank" href="#"><span className="fa fa-phone">phone</span>07032 / 31950</a></span>
					<span><a target="_blank" href="http://www.muehle-poltringen.de/hochzeitsplanung.html"><span className="fa fa-globe">lorem</span> Zur Website</a></span>
					<span onClick={this.closeLayer} className="fa fa-times">Close</span>
				</div>
			</div>
		)
	}
}
