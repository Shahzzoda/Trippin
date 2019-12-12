import React from 'react';
import Loading from '../components/Loading';
import sally from '../assets/images/sally.png';
import ImageCard from '../components/ImageCard';
import Confetti from 'react-confetti';

function User(props) {
  return(
    <div className="user-card card">
    <div className="card-body">
    <div className="row">
      <div className="col-4">
        <img className="img-thumbnail img-responsive" src={sally} alt="sally's icon"/>
      </div>
      <div className="col-8">
        <h2>{ props.username }</h2>
        <p>{ props.bio}</p></div>
      </div>
    </div>
  </div>
  )
}

class PostsListPage extends React.Component {
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
          posts: posts.map((p,ii) => <ImageCard {...p} key={ii} src={p.coverphoto} tripname={p.name}/>),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if(this.state.loading) {
      return <Loading />;
    }

    return (
      <div className="container text-center">
        { this.props.location.state && this.props.location.state.confetti ? <Confetti recycle={false} gravity={0.5} numberOfPiece={400} /> : console.log("no confetti") }
        <User username={this.state.user.username} bio={this.state.user.bio}/>
        { this.state.modals }
        <div className="row">
        { this.state.posts }
        </div>
      </div>
    );
  }
}


export default PostsListPage;