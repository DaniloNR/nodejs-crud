import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = {
  GET: [
    {
      path: buildRoutePath("/users"),
      handler: (req, res) => {
        const users = database.select("users");

        return res.end(JSON.stringify(users));
      },
    },
  ],
  POST: [
    {
      path: buildRoutePath("/users"),
      handler: (req, res) => {
        const { name, email } = req.body;

        const user = {
          id: randomUUID(),
          name,
          email,
        };

        database.insert("users", user);

        return res.writeHead(201).end();
      },
    },
  ],
  DELETE: [
    {
      path: buildRoutePath("/users/:id"),
      handler: (req, res) => {
        return res.end();
      },
    },
  ],
};
