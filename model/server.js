const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/collectionName", {
   useNewUrlParser: true,
   useUnifiedTopology: true
});
const Contact = mongoose.model("Contact", contactSchema);
app.post("/contact", function (req, res) {
    const contact = new Contact({
        email: req.body.email,
        query: req.body.query,
    });
    contact.save(function (err) {
        if (err) {
            res.redirect("/error");
        } else {
            res.redirect("/thank-you");
        }
    });
 });

const { MongoClient, ServerApiVersion } = require('mongodb');
const url = "mongodb+srv://ugc:Babai@6157201@jobcluster.xdtzwdf.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});