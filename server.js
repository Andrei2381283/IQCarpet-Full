const express = require("express");
const connectDB = require("./config/db");
const path = require("path");

const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Define Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));
app.use("/api/seller-card", require("./routes/api/sellerCard"));
app.use("/api/order", require("./routes/api/order"));
app.use("/api/carpets", require("./routes/api/carpet"));

// Serve static assets in production 1
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5555;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
