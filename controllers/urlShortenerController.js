// Import packages to Generate a random URL.
const shortid = require('shortid');

// Models Location
const { urlModel } = require("../models/urlShortenerModel");


// This controller should allow users to view shorted URL.
const urlGetController = async (req,res) => {
    const paramsData = req.params.data;
    try {
        const findUrl = await urlModel.findOne({shortUrl:paramsData});

        if(findUrl) return res.status(200).redirect(findUrl.originalUrl);
        else  return res.status(404).json("URL Not Found !");

    } catch (error) {
        res.status(500).json("Internal Server Error")
    }
};


// This controller should allow users to add the original URL in database and generates a short URL.
const urlPostController = async (req,res) => {
    const {originalUrl , shortUrl , createdAt , location , ipAddress} = req.body;

    // Generate a random URL
    const randomUrl = shortid.generate();

    try {
        const checkUrl = await urlModel.findOne({originalUrl:originalUrl})
        if(checkUrl) return res.status(201).send({
            "Message": "URL Already Exists",
            "data" : checkUrl
        });

        const data = new urlModel({
            originalUrl,
            shortUrl:randomUrl,
            createdAt:TimeData(),
            location: req.ip,
            ipAddress:req.ip
        });
        await data.save();
        res.status(201).send({
            "Message":"Url Shorted",
            "data": data
        });
    
        function TimeData () {
            const currentDate =  new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0');
            const day = String(currentDate.getDate()).padStart(2, '0');
            const hours = String(currentDate.getHours()).padStart(2, '0');
            const minutes = String(currentDate.getMinutes()).padStart(2, '0');
            const seconds = String(currentDate.getSeconds()).padStart(2, '0');
    
            const formattedDateTime = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
            return formattedDateTime;
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json("Internal Server Error")
    }
};


module.exports = { urlGetController , urlPostController }