import { log } from "console";
import http, { IncomingMessage, Server, ServerResponse } from "http"
import path from "path";

const server: Server = http.createServer((req: IncomingMessage, res: ServerResponse ) => {
  console.log("running")

  if(req.url ==="/" && req.method === "GET"){
    res.writeHead(200, {"content-typr": "application/json"});
    res.end(JSON.stringify(
        {
            message: "Hello node js with ts..",
            path: req.url,
        }
    )

    );
  }
});


server.listen(3000, () => {
    log(`Server is running on port ${3000}`);
})