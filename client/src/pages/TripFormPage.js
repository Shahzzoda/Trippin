import React from 'react';
import Datetime from 'react-datetime';
import { Redirect } from 'react-router-dom';

const cloudinary = window.cloudinary;

function PhotoEdit(props){
  return(
    <div className='row'>
    <hr className='col-12'/>
    <div className='col-4'>
      <img alt='posted' 
        className='img-thumbnail img-responsive' 
        src={props.src} 
      />
    </div>
    <div className='col-4'>
      <Datetime inputProps={{ placeholder: 'Select a date'}} onChange={props.onTimeChange}/>
    </div>
    <div className='col-4'>
      <input type='text' placeholder='desc' className='form-control mr-3 rounded' onChange={props.onDescChange} />
    </div>
    </div>
  )
}


class TripFormPage extends React.Component {
  state = {
    error: false,
    success: false,
    name: '',
    desc: '',
    photoPath: '',
    pics: [],
    picUrls:[],
    medias: [],
    counter: 0
  }

  descChanged = (event) => {
    this.setState({
      desc: event.target.value
    });
  }
  nameChanged = (event) => {
    this.setState({
      name: event.target.value
    });
  }
  picsAdded = (event) => {
    this.state.pics.forEach(function(i){
      console.log(i)
    })
  }
  timeChanged = (event, counter) => {
    let utcTime = event.utc().format();
    let media = this.state.medias;
    media[parseInt(counter)].timedate=utcTime;
    this.setState({medias: media});
  }

  photoCaptionChange = (event, counter) => {
    let desc = event.target.value;
    let media = this.state.medias;
    media[parseInt(counter)].desc=desc;
    this.setState({medias: media});
  }


  savePost = (event) => {
    console.log('medias', this.state.medias)
    fetch('/api/trips/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({content: {
        name: this.state.name,
        description: this.state.desc,
        coverPhoto: this.state.picUrls[0],
        pics: this.state.picUrls,
        medias: this.state.medias
      }
    }),
    })
      .then(res => {
        if(res.ok) {
          return res.json()
        }

        throw new Error('Error Saving this post.');
      })
      .then(post => {
        this.setState({
          success: true,
        });
      })
      .catch(err => {
        this.setState({
          error: true,
        });
      });
  }

  render() {
    let myWidget = cloudinary.createUploadWidget({
      cloudName: 'ctptrippin', 
      uploadPreset: 'hdhhww5k', 
      tags:['1'],
      cropping: true,
      showSkipCropButton: false,
      croppingAspectRatio: 1.0,
      }, (error, result) => { 
        if (!error && result && result.event === 'success') { 
          console.log('Done! Here is the image info: ', result); 
          let url = result.info.secure_url;
          let counter = this.state.counter;
          this.setState({pics: this.state.pics.concat(<PhotoEdit src={url} onTimeChange={(e) => this.timeChanged(e, counter)} onDescChange={(e) => this.photoCaptionChange(e, counter)}/>), 
            picUrls: this.state.picUrls.concat(url),
            medias: this.state.medias.concat({url:url, desc:"", timedate:""}),
            counter: this.state.counter + 1
          })
        }
      }
    )
    
    if(this.state.success) return <Redirect to='/' />;

    let errorMessage = null;
    if(this.state.error) {
      errorMessage = (
        <div className='alert alert-danger'>
          'There was an error saving this post.'
        </div>
      )};
    return (
      <div className='col-10 col-md-8 col-lg-7'>
        { errorMessage }
        <div className='input-group'>
          <input 
            type='text' 
            placeholder='Description here' 
            value={this.state.desc}
            className='form-control mr-3 rounded'
            onChange={this.descChanged}
          />
          <input 
            type='text' 
            placeholder='Name of the trip' 
            value={this.state.name}
            className='form-control mr-3 rounded'
            onChange={this.nameChanged}
          />
          <button className='btn cloudinary-button' onClick={() => myWidget.open()}>Upload</button>
          <button className='btn btn-primary' onClick={this.savePost}>Post</button>
          <div className='form-list col-12' >
            {this.state.pics}
            {/* <PhotoEdit src="https://res.cloudinary.com/ctptrippin/image/upload/v1574558507/tbmleanfctsozvpvj1ze.png"  onChange={(e) => this.timeChanged(e) }/>
            <PhotoEdit src="https://res.cloudinary.com/ctptrippin/image/upload/v1574558094/snh6i4erlpgwoayvdwdi.png" onChange={(e) => this.timeChanged(e) }/> */}
          </div>
        </div>
      </div>
    );
  }
}

export default TripFormPage;