module.exports = (req, res) =>
  res.status(200).json({
    id: 1,
    username: "Noah",
    role: "Admin",
    matchesLogged: 9999999999999,
    pass: "1816",
    // username: req.params.username,
    age: 17,
  });
