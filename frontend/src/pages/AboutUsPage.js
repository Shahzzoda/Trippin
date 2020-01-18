import React from 'react';
import "./carousel.css";

function AboutUsPage() {
  return (
    <div>
    <div class="position-relative overflow-hidden mt-md-3 mb-md-3 text-center">
      <div class="col-md-5 p-lg-5 mx-auto my-5">
        <h1 class="display-4 font-weight-normal">We are Trippin!</h1>
        <p class="lead font-weight-normal">Take photos on your vacation. Share your trip with the world! </p>
        <a class="btn btn-outline-secondary" href="#">Try us out!</a>
      </div>
      <div class="product-device box-shadow d-none d-md-block"></div>
      <div class="product-device product-device-2 box-shadow d-none d-md-block"></div>
    </div>

      <div class="container marketing">
        <div class="row">
          <div class="col-lg-3">
            <img class="rounded-circle fit-image" src="https://cunytechprep.nyc/c5/Shahzoda%20Davlatova.JPG" alt="The Shah" width="140" height="140"/>
            <h2>Shahzoda Davlatova</h2>
            <p>Shahzoda is a computational math major at brooklyn college. She loves competing at hackathons, eating ramen, and skating.</p>
          </div>
          <div class="col-lg-3">
            <img class="rounded-circle fit-image" src="https://cunytechprep.nyc/c5/Jacky%20Lau.JPG" alt="The Destroyer" width="140" height="140"/>
            <h2>Jacky Lau</h2>
            <p>Jacky is a student studying computer science at Queens College. He leads the club Asian Students in Action and focuses on activism in minority groups.</p>
          </div>
          <div class="col-lg-3">
            <img class="rounded-circle fit-image" src="https://cunytechprep.nyc/c5/Narvisha%20Sajjad.JPG" alt="The Navigator" width="140" height="140"/>
            <h2>Narvisha Sajjad</h2>
            <p>Narvisha is a junior at Hunter college, majoring in computer science. She enjoys art and reading.</p>
          </div>
          <div class="col-lg-3">
            <img class="rounded-circle fit-image" src="https://cunytechprep.nyc/c5/Noor%20Salim.JPG" alt="The Light" width="140" height="140"/>
            <h2>Noor Salim</h2>
            <p>Currently a student of Queens College studying Commputer Science and Mathematics; he aspires to be a software engineer. On the side, he enjoys reading, gaming, traveling, and eating at all the hidden spots of Queens.</p>
          </div>
        </div>

		<hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Join our network <span class="text-muted">Connect with others.</span></h2>
            <p class="lead">Take a look at what trips others have gone on. Fulfill that sense of wanderlust, and plan your own!</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://st2.depositphotos.com/1062624/11781/i/450/depositphotos_117812604-stock-photo-best-internet-concept-of-global.jpg" alt="Generic placeholder image"/>
          </div>
        </div>

        <hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Share your vacation <span class="text-muted">Show your friends.</span></h2>
            <p class="lead">Upload your trip, show off where you've gone, what you've done. You never know, it might help others plan their own adventure.</p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" src="https://ak8.picdn.net/shutterstock/videos/20436328/thumb/1.jpg" alt="Generic placeholder image"/>
          </div>
        </div>

		<hr class="featurette-divider"/>

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">A scrapbook of memories <span class="text-muted">Relive them forever.</span></h2>
            <p class="lead">Keep a log of your photos, down to the very path taken. The pictures you save, on top of the location and time, lead to a more intimate collage of your memories.</p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/happy-loving-family-with-small-kid-on-sea-vacation-royalty-free-image-615626436-1547037963.jpg?resize=480:*" alt="Generic placeholder image"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsPage;