import React from 'react';
import { Modal } from 'react-bootstrap';
import ModalMedia from './ModalMedia'

class ImageCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lgShow: false,
      medias: null,
    }
  }

  componentDidMount() {
    console.log("comp mounted")
    fetch("/api/media/" + this.props.id)
      .then(res => res.json())
      .then(medias => {
        this.setState({
          medias: medias.map((p,ii) => <ModalMedia {...p} key={ii} src={p.photo} name={p.name} desc={p.description} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    return (
      <div className="col-4">
          <img className="img-thumbnail img-responsive" src={this.props.src} alt="sally's icon" onClick={() => this.setState({ lgShow: true })} />
          <Modal
            size="lg"
            show={this.state.lgShow}
            onHide={() => this.setState({ lgShow: false })}
            aria-labelledby="example-modal-sizes-title-lg"
          >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
              Large Modal
            {this.props.id}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='row'>
            {this.state.medias}
          </div>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default ImageCard;