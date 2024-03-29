import { randomUUID } from "node:crypto";
import { Database } from "./database.js";
import { buildRoutePath } from "./utils/build-route-path.js";

const database = new Database();

export const routes = {
  GET: [
    {
      path: buildRoutePath("/users"),
      handler: (req, res) => {
        const { search } = req.query;
        const users = database.select(
          "users",
          search
            ? {
                name: search,
                email: search,
              }
            : null
        );

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
  PUT: [
    {
      path: buildRoutePath("/users/:id"),
      handler: ({ params: { id }, body }, res) => {
        database.update("users", id, body);
        return res.writeHead(204).end();
      },
    },
  ],
  DELETE: [
    {
      path: buildRoutePath("/users/:id"),
      handler: (req, res) => {
        const { id } = req.params;
        database.delete("users", id);
        return res.writeHead(204).end();
      },
    },
  ],
};
