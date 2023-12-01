import { createClient } from "redis";
const REDIS_HOST = process.env.REDIS_HOST;

const client = createClient({
  url: REDIS_HOST,
});

client.connect();
client.on("ready", () => console.info("🟢 Redis Client Ready"));
client.on("error", (err) => console.info("🔴 Redis Client Error", err));
client.on("connect", () => console.info("🔵 Redis Client Connected"));

export default client;
