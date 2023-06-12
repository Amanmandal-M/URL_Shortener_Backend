# URL Shortener Backend

## About

<br>

This is URL Shortener backend app where user can enter the long URL and this system generates a short URL for them to access.

<br>

## Clone Repository

<br>

```
https://github.com/Amanmandal-M/URL_Shortener_Backend.git
```

## Installation

```
npm install
```

<strong>Note : </strong> Don't need to install packages if you only use this command all the packages automatically install if you want to add more packages then you have to write this command `npm install <your package name>`.

## Start the Backend server 

```
npm run start

npm run server

node index.js

nodemon start

nodemon index.js
```

<strong>Note : </strong> You can use any of them .

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── urlShortenerModel.js
├── routes
|    └── urlShortenerRoute.js
├──controllers
|    └── urlShortenerController.js
```

<strong>Note : </strong> 

- Before doing anything first create `.env` file and put `PORT` , `MONGO_URL`.
- `PORT` is for listening the server.
- `MONGO_URL` is for running database and store your data in database so put your mongo link.

<br>

## Schema Design

<br>

<h3><strong>URL Schema</strong><h3>

```js
{
    _id:ObjectId,
    originalUrl : String,
    shortUrl : String,
    createdAt : String,
    location: String,
    ipAddress: String
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>GET</td>
            <td>/:data</td>
            <td>This endpoint should allow users to view shorted URL.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/</td>
            <td>This endpoint should allow users to add the original URL in database and generates a short URL</td>
            <td>201</td>
        </tr>
    </tbody>
</table>