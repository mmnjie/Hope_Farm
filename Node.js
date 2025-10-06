app.use(express.json()); // allows JSON parsing

app.post("/volunteer", (req, res) => {
  const { name, email, phone, interest, message } = req.body;
  if (!name || !email) return res.status(400).json({ error: "Missing fields" });
  console.log("Volunteer Data:", req.body);
  res.json({ success: true });
});
