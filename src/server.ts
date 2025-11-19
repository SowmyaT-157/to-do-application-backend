import express from 'express';
import {router} from './routes/router'
import cors from "cors"

const app = express();
app.use(express.json());
app.use(cors())

app.use("/",router)
app.listen(3007, () => {
  console.log("Server running on http://localhost:3007");
});
export default app;
