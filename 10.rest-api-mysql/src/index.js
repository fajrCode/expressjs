const express = require("express");
const app = express();
const port = 5000;
const userRoutes = require("./routes/users");

//app.method(path,handler); --> patern usualy use
// app.use("/", (req, res, next) => {
//   res.send("Hello World");
//   next();
// });

app.use("/user", userRoutes);

//exampmle of spesific method
app.get("/test", (req, res) => {
  res.send("Hello GET Method");
});

app.post("/test", (req, res) => {
  res.send("Hello POST Method");
});

app.listen(port, () => {
  console.log(`server running on http://localhost:${port}`);
});
