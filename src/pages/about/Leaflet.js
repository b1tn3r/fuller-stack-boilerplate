import React from 'react';
let Map, TileLayer;

// This is a Component template for importing a project onto the Client and skipping SSR with only rendering 'Loading map' message on SSR. Use this layout for importing projects like this onto a page.

class Leaflet extends React.Component {
    constructor () {
        super();
        this.state = { showMap: false }     // state used here since it only controls the showMap switch and that's it
    }

    componentDidMount() {
        let RL = require('react-leaflet');        // must import the library in the lifecycle method so that only the client imports it since the client is the only one to mount the component on the DOM (SSR only compiles into a String)
        Map = RL.Map;
        TileLayer = RL.TileLayer;
        //this.setState({ showMap: true }) <---UNCOMMENT       // sets to true signifying the client actually mounted the component and then the leaflet map will actually be shown on the client whereas it only shows the Loading map message on the SSR rendering
    }

    render () {
        return this.state.showMap ? (       // when the client rendering is done and the componentDidMount() is called, the react-leaflet library is require imported, the Map/TileLayer components are defined and then 'showMap' property in state is set to true so the Components will then actually render, compared to SSR where the Loading message will only be showed since the Component never mounted and never called componentDidMount()
            <Map
                center={[48.85692, 2.35268]}
                zoom={13}
            >
                <TileLayer // <------FIX ME (bug with react-leaflet I think, find workaround)
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        ) : <div>Loading map</div>      // SSR will render this Loading msg right here since 'showMap' will be false upon SSR rendering and not until the component is mounted on the client
    }
}

module.exports = Leaflet;