var bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    express     = require("express"),
    app         = express();
    
//APP CONFIG
mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine","ejs");
app.use(express.static("public"));  //in order to serve our custom style sheet
app.use( bodyParser.urlencoded( {extended:true} ) );


//MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body:  String,
    created: {type: Date, default: Date.now()}
});

var Blog = mongoose.model("Blog", blogSchema);

//RESTFUL ROUTES

app.listen(process.env.PORT, process.env.IP,function(){
    
    console.log("Server is running");
});