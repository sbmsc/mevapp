const express = require("express");
const mongodb = require("mongodb");

const router = express.Router();

//GET
router.get("/", async (req, res) => {
  const posts = await loadPostCollection();
  res.send(await posts.find({}).toArray());
});
//ADD
router.post("/", async (req, res) => {
  const posts = await loadPostCollection();
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send(req.body.text);
});

//DELETE
router.delete("/:id", async (req, res) => {
  const posts = await loadPostCollection();
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

async function loadPostCollection() {
  const client = await mongodb.MongoClient.connect(
    "mongodb+srv://abc123:H3lloworld@cluster0-mlqcn.mongodb.net/test?retryWrites=true",
    {
      useNewUrlParser: true
    }
  );
  return client.db("mev").collection("posts");
}

module.exports = router;
