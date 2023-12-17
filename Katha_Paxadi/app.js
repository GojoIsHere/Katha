const express = require("express");
const app = express();
const cors = require("cors");
// const { DB_URL } = require("./utils/config");
// const mongoose = require("mongoose");
// const { info } = require("./utils/logger");
// const loginController = require("./controllers/login");
// const userController = require("./controllers/user");
// const productController = require("./controllers/product");
// const cartController = require("./controllers/cart");
// const orderController = require("./controllers/order");
const { requestLogger, unknownEndpoint } = require("./utils/middleware");
app.use(cors());
app.use(express.json());

// const {API_KEY} = require("./utils/config");
const API_KEY = "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";



// mongoose.set("strictQuery", false);
// mongoose
//   .connect(DB_URL)
//   .then(() => {
//     info("DB connected Successfully");
//   })
//   .catch((err) => info(err));

// app.use("/api/user", userController);
// app.use("/api/products", productController);
// app.use("/api/order", orderController);
// app.use("/api/cart", cartController);
// app.use("/api/login", loginController);


// const random = async () => {
//   const response = await API_KEY.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [
//       {
//         role: "system",
//         content:
//           "You will be provided with statements, and your task is to convert them to standard English.",
//       },
//       {
//         role: "user",
//         content: "She no went to the market.",
//       },
//     ],
//     temperature: 0,
//     max_tokens: 256,
//     top_p: 1,
//     frequency_penalty: 0,
//     presence_penalty: 0,
//   });
//   return response;
  
// };
// random();
app.get("/", (req, res) => {
  res.send("Katha sunaunu hos");
 
});

app.post("/completions",async(req, res)=>{
  const options = {
    method :"POST",
    headers:{
      "Authorization":`Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model:"gpt-3.5-turbo",
      messages:[{role:"user", content: req.body.message}],
      max_tokens:100,
    })
  };
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", options);
    const data = await response.json();
    res.send(data);
  } catch (error) {
    console.error(error);
  }
});


// app.get('/completions',async(req, res)=>{
//   res.send("hello")
// });


app.use(unknownEndpoint);

app.use(requestLogger);
module.exports = app;
