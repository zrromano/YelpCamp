const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");

let campgrounds = [
  {
    name: "Sara's Crack",
    image: "https://www.golakehavasu.com/media/media-10132.jpg",
  },
  {
    name: "Craggle Rock",
    image:
      "https://static.rootsrated.com/image/upload/s--_i1nqUT1--/t_rr_large_traditional/oy9xsbijv8wehnrzv0zt.jpg",
  },
  {
    name: "Mountain Goat's Rest",
    image:
      "https://www.nj.com/resizer/nbaHtN1S4rT_9uwuBs0A3C0EQuA=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/4PULA3GKURCCFKZP27KRXXVUXQ.jpg",
  },
];

app.get("/", (req, res) => {
  res.render("landing");
});

app.get("/campgrounds", (req, res) => {
  res.render("campgrounds", { campgrounds });
});

app.post("/campgrounds", (req, res) => {
  let name = req.body.name;
  let image = req.body.image;
  campgrounds.push({ name, image });
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", (req, res) => {
  res.render("new");
});

const port = process.env.PORT ? process.env.PORT : 3000;
app.listen(port, process.env.IP, function () {
  console.log("YelpCamp server listening on port " + port);
});
