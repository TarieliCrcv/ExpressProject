import http, { type Server, type IncomingMessage, type ServerResponse } from 'node:http'
import fs from 'node:fs'

const PORT = 1234

const server: Server = http.createServer((req:IncomingMessage, res:ServerResponse) => {
    if (req.method === "POST" && req.url === "/echo") {
    const chunks:any = [];
 
    req.on("data", (chunk:any) => {
      chunks.push(chunk);
    });
 
    req.on("end", () => {
      const rawBody = Buffer.concat(chunks).toString("utf8");
 
      let data;
      try {
        data = JSON.parse(rawBody);
      } catch (err) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON" }));
        return;
      }
 
      console.log("Parsed body:", data);
 
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ data }));
    });
 
    req.on("error", (err) => {
      console.error("Stream error:", err);
      res.writeHead(500);
      res.end("Server error while reading request");
    });
  } else {
    res.writeHead(404);
    res.end("Not found");
  }

});

server.listen(PORT,()=>[
    console.log(`http://localhost:${PORT}/`)
])
