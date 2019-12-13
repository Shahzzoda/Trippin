import React from 'react';
import GoogleMapReact from 'google-map-react';
import ImageCard from '../components/ImageCard.js';

class Map extends React.Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 1
  };

  render() {
    let markers = this.props.posts.map((obj) =>  <ImageCard 
        lat={obj.props.coverlat}
        lng={obj.props.coverlng}
        src={obj.props.coverphoto}
        style={{ width: '5em', height: '5em' }}
        id={obj.props.id}
        tripname={obj.props.name}
      />)
    return (
      // Important! Always set the container height explicitly
      <div className='map-card' style={{ height: '50vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'API_KEY_HERE' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

class MapPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      user: undefined,
    }
    this.callUser()
  }

  callUser(){
    fetch("/api/users/")
    .then(res => res.json())
    .then(user => {
      this.setState({user: user});
    })
    .catch(err => console.log("API ERROR: ", err));
  }
  componentDidMount() {
    const id = 1;
    fetch("/api/trips/" + id)
      .then(res => res.json())
      .then(posts => {
        this.setState({
          loading: false,
          posts: posts.map((p,ii) => <ImageCard {...p} key={ii} src={p.coverphoto}/>),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return(
      <div className='col-12'>
        <h1>You've been around.</h1>
        <Map posts = { this.state.posts }/>
        <div className='container'>
          <div className="row">
            { this.state.posts }
          </div>
        </div>
      </div>
    )
  }
}


export default MapPage;