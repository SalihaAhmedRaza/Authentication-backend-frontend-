// import express from "express"
// import connectDB from "./src/db/index.js"
// import cookieParser from "cookie-parser"
// import dotenv from 'dotenv'
// import userRoutes from "./src/routes/user.routes.js"


// dotenv.config()
// const app = express()
// const port = 4000

// app.use(cookieParser())
// app.use(express.json())


// app.use('/api/v1' , userRoutes)

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT, () => {
//       console.log(`⚙️  Server is running at port : ${process.env.PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log("MONGO DB connection failed !!! ", err);
//   });
import express from "express";
import connectDB from "./src/db/index.js";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import cors from 'cors'; // Import the cors package
import userRoutes from "./src/routes/user.routes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

// Enable CORS for all routes
app.use(cors({
  origin: "http://localhost:5173",  // Replace with the actual origin of your frontend
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,  // Allow cookies to be sent with requests
}));

app.use(cookieParser());
app.use(express.json());

app.use('/api/v1', userRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`⚙️  Server is running at port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("MONGO DB connection failed !!! ", err);
  });
