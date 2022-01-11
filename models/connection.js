const mongoose = require('mongoose');
require('dotenv').config();

const options = {
    connectTimeoutMS: 5000,
    useUnifiedTopology: true,
    useNewUrlParser: true,
}

mongoose.connect(process.env.MONGO_URI,
    options,
    function (err) {
        console.log(err);
    }
)
