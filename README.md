# Trippin
Somewhere between an online travel scrapbook and social media. Store your best moments. 

## Profile
Store all of your memories on convenient and aesthetic location.
![Profile page with pictures of the user and their post](https://github.com/Shahzzoda/Trippin/blob/master/pictures/profile.png)

## Map
Interactive visual of the places you've been. Map using google maps API.
![Map with images overlayed on them as well as a collection of their posts below it](https://github.com/Shahzzoda/Trippin/blob/master/pictures/map.png)

## Posting Feature
Post your photos with all the neccessary metadata. Upload functionality uses Cloudinary API.
1. Crop your photos
![Crop functionality](https://github.com/Shahzzoda/Trippin/blob/master/pictures/crop.png)
2. When did you go on this adventure?
![Datetime picker modal](https://github.com/Shahzzoda/Trippin/blob/master/pictures/timestamp.png)
3. Tag a location so it can be captured on the map!
![Location picker](https://github.com/Shahzzoda/Trippin/blob/master/pictures/location.png)
You can also add a description for each of your photo and your trip overall! Here's what the final peice would look together on the profile and map page when the post is clicked on!
![Trip module. Displays the trip description, each photo, and their corresponding description](https://github.com/Shahzzoda/Trippin/blob/master/pictures/photometa.png)

Everytime you post a trip, confetti displays!

## Stack
*Backend*
- Express
- Sequelize
- PostgreSQL

*Frontend*
- React 
- Bootstrap 4.x 


### Running the app

For local development you will need two terminals open, one for the api-backend and another for the react-client.


```bash
# terminal 1 for the api-backend 
cp .env.example .env
npm install
npm run dev
```

```bash
# terminal 2 for react-client 
cd client
npm install
npm start
```

- api-backend will launch at: http://localhost:8080
- react-client will launch at: http://localhost:3000

