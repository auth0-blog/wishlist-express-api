import express, { Router } from "express";
import { checkJwt } from "../authz/check-jwt";
import shortid from "shortid";

import { db, collection, WishlistItem } from "../data/db";

export const wishlistRouter: Router = express.Router();

wishlistRouter.get("/items", async (request, response) => {
  const rows = db.get(collection);

  response.json({ items: rows });
});

wishlistRouter.get("/item", async (request, response) => {
  const id: string = request.body.id;

  const item = db.get(collection).filter({ id });

  response.json({ item });
});

wishlistRouter.use(checkJwt);

wishlistRouter.post("/item", async (request, response) => {
  console.log(`Add to WishList  ${request.body.item}`);

  const item: WishlistItem = request.body.item;

  db.get(collection)
    .push({
      id: shortid.generate(),
      name: item.name,
      description: item.description,
      url: item.url,
    })
    .write();

  response.status(200).send("added item to wish list");
});

wishlistRouter.put("/item", async (request, response) => {
  const item: WishlistItem = request.body;
  const { id, ...itemProperties } = item;

  db.get(collection).find({ id }).assign(itemProperties).write();

  response.status(200).send("updated item in the wish list");
});

wishlistRouter.delete("/item", async (request, response) => {
  const id: string = request.body.id;

  db.get(collection).remove({ id }).write();

  response.status(200).send(`cleared item`);
});

wishlistRouter.delete("/items", async (request, response) => {
  db.get(collection).remove().write();

  response.status(200).send(`cleared items`);
});
