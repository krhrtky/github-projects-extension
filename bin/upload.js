#!/usr/bin/env node
import fs from "fs";

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const ITEM_ID = process.env.ITEM_ID;

const execute = async () => {
  const response = await fetch(
    "https://oauth2.googleapis.com/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        refresh_token: REFRESH_TOKEN,
        grant_type: "refresh_token",
      }),
    },
  );

  const authToken = await response.json();
  const file = fs.createReadStream("/tmp/dist.zip", "utf-8");

  const result = await fetch(
    `https://www.googleapis.com/upload/chromewebstore/v1.1/items/${ITEM_ID}`,
    {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${authToken.access_token}`,
        "x-goog-api-version": "2",
      },
      body: file,
    },
  );

  console.log(await result.json());
}

execute().then(() => {});
