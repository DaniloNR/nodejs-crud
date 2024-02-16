import { randomUUID } from "node:crypto";
import { Database } from "./database.js";

const database = new Database();

export const routes = {
  GET: {
    "/users": (req, res) => {
      const users = database.select("users");

      return res.end(JSON.stringify(users));
    },
  },
  POST: {
    "/users": (req, res) => {
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
  DELETE: {
    "/users/:id": (req, res) => {},
  },
};
