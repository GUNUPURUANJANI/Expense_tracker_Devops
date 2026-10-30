# Smart Expense Tracker

Full-stack learning project: HTML, CSS, JavaScript, Node.js, Express and MongoDB.

## Included
- Signup/login/logout; bcrypt password hashing and JWT-protected APIs
- Per-user expense records: add, view, edit and delete
- Monthly budget (default ₹10,000), spending and remaining balance
- Monthly category reports and rule-based spending insights

## Run on Windows
1. Extract the ZIP and open the `ExpenseTracker` folder in VS Code.
2. Open a terminal and run:
   ```powershell
   cd backend
   npm install
   ```
3. In `backend`, create a file named `.env`. Copy `.env.example` into it and set a long private JWT secret. Example:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://127.0.0.1:27017/expense_tracker
   JWT_SECRET=put_a_long_random_secret_here
   ```
   For MongoDB Atlas, use your Atlas connection string for `MONGODB_URI`.
4. Ensure your MongoDB server is running. The database and collections are created automatically when you create your first account and expense.
5. Start the app from the `backend` folder:
   ```powershell
   npm run dev
   ```
6. Open http://localhost:5000 and create an account.

Keep the terminal running while using the app. Do not share `.env`. This is a learning project; before public deployment, add rate limiting, stricter validation, HTTPS and production-grade session protections.
