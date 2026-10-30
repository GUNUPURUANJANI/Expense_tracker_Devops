
require("dotenv").config();

const express = require("express");
const path = require("path");

const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "..", "frontend")));

app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
});

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "index.html"));
});

// Export app for automated testing
module.exports = app;

// Start server only when executed directly
if (require.main === module) {
    const PORT = process.env.PORT || 5000;

    connectDB()
        .then(() => {
            app.listen(PORT, () => {
                console.log(`Running at http://localhost:${PORT}`);
            });
        })
        .catch(error => {
            console.error("Startup error:", error.message);
            process.exit(1);
        });
}
