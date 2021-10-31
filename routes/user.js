const router = require("express").Router();

router.get("/usertest", (req, res) => {
  res.json({ success: 200 });
});

router.post("/add", (req, res) => {
  res.send(req.body.username);
});

module.exports = router;
