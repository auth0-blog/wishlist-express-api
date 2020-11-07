import low from "lowdb";
import Memory from "lowdb/adapters/Memory";
import shortid from "shortid";

export interface WishlistItem {
  id: string;
  name: string;
  description: string;
  url: string;
}

export interface WishList {
  items: WishlistItem[];
}

const adapter = new Memory<WishList>("");

export const db = low(adapter);
export const collection = "items";

db.defaults({ items: [] }).write();

db.get(collection)
  .push(
    {
      id: shortid.generate(),
      name: "Apple iPhone 12",
      description: "128GB, White",
      url: "https://www.amazon.com/dp/B08L5Q1L2Q/",
    },
    {
      id: shortid.generate(),
      name: "PlayStation 5 Console",
      description: "Ultra-high speed SSD and 3D Audio",
      url: "https://www.amazon.com/PlayStation-5-Console/dp/B08FC5L3RG",
    },
    {
      id: shortid.generate(),
      name: "Xbox Series S Console",
      description: "Smallest, sleekest Xbox console ever",
      url: "https://www.amazon.com/Xbox-S/dp/B08G9J44ZN",
    }
  )
  .write();
