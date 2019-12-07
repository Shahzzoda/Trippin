import React from 'react';
import ReactDOM from 'react-dom'
import './ModalCard.css';
import ModalMedia from './ModalMedia.js';
import sally from '../assets/images/sally.png';

class ModalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      medias: [],
      loading: true,
    }
  }

componentDidMount() {
    fetch("/api/medias/" + this.props.id)
      .then(res => res.json())
      .then(medias => {
        this.setState({
          loading: false,
          medias: medias.map((p,ii) => 
            <ModalMedia {...p} key={ii} src={p.photo} name={p.name} desc={p.description} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {

const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
      	<div className="position-absolute">
      		<button className="btn btn-sm btn-secondary mt-2 ml-2" onClick={this.props.handleClose}>x</button>
      	</div>
        <img src={sally} className="image-fluid w-100"></img>
        <div className="row">
        	{this.state.medias}
        	{console.log("In modalCard", this.props.id)}
        </div>
      </section>
    </div>
  	);
	};
};
export default ModalCard;