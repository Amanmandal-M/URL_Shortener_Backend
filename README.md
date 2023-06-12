# URL Shortener Backend

## About

<br>

This is URL Shortener backend app where user can enter the long URL and this system generates a short URL for them to access.

<br>

## Clone Repository

<br>

```js
https://github.com/Amanmandal-M/URL_Shortener_Backend.git
```

## Installation

```js
npm install
```

<strong>Note : </strong> Don't need to install packages if you only use this command all the packages automatically install if you want to add more packages then you have to write this command `npm install <your package name>`.

## Start the Backend server 

```js
npm run start

npm run server

node index.js

nodemon start

nodemon index.js
```

<strong>Note : </strong> You can use any of them .

<br>

##  MVC Structure

```js
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
            <td>/api/travel</td>
            <td>This endpoint should allow users to view all the travel data.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/travel/:id</td>
            <td>This endpoint should allow users to view single travel data by their Id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/travel?filter=`data`</td>
            <td>This endpoint should allow users to filter the data according to their destination</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/travel?sort=`data`</td>
            <td>This endpoint should return the details of sorted data according price of budget.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/travel</td>
            <td>This endpoint should allow users to add travel data.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/travel/:id</td>
            <td>This endpoint should allow users to edit the data.</td>
            <td>204</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/travel/:id</td>
            <td>This endpoint should allow travel to delete a specific travel data</td>
            <td>202</td>
        </tr>
    </tbody>
</table>

<br>

## Problem Statement : 

<h3>
 <strong>
  <a href="https://near-ethernet-088.notion.site/Plan-My-Trip-9212dd3549fa495d84b1d2feaf8f66b2" >Notion File</a>
 </strong>
</h3>