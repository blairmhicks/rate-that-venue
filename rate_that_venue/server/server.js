const express = require("express");
const cors = require("cors")
const app = express();
app.use(cors({
    origin:"http://localhost:3000"
}));
const port = 8000;

    
require("./config/mongoose.config");
    
app.use(express.json(), express.urlencoded({ extended: true }));
    
require("./routes/venue.routes")(app);
// AllMyVenueRoutes(app);
    
app.listen(port, () => console.log("The server is all fired up on port 8000"));