import express from "express";
import fetch from "node-fetch";
const app = express();
import cors from "cors"
import dotenv from "dotenv"
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, "./.env") });

app.use(cors())

const clientId =  process.env.GITHUB_CLIENTID
const clientSecret =  process.env.GITHUB_CLIENTSECRET


app.get('/getAccessToken', async function (req,res){
  
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ error: 'Code parameter is required' });
  }

  const params = "?client_id=" + clientId + "&client_secret=" + clientSecret + "&code=" + code;
  await fetch("https://github.com/login/oauth/access_token" + params, {
    method: "POST",
    headers:{
      'Content-Type': 'application/json',
      "Accept": "application/json"
    } 
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data)
    
    res.json(data);
  })
})

app.get('/getUserData', async function (req,res){
  // req.get("Authorization");
  const authorization = req.get("Authorization");
  if (!authorization) {
    return res.status(400).json({ error: "Authorization header is missing" });
  }
  await fetch("https://api.github/user", {
    method:"GET",
    headers: {
      "Authorization": authorization,
    }
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log(data);
    res.json(data);
  })
})

const port =  3002;

const server = app.listen(port, () => {
  console.log("Backend listening at at http://%s:%s", "localhost", port);
});