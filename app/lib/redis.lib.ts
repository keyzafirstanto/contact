import { redisConfig } from "@configs";

export default class RedisLib {
  static get = async (key: string) => {
    return await redisConfig.get(key);
  };

  static getTTL = async (key: string) => {
    return await redisConfig.ttl(key);
  };

  static set = async (key: string, value: string | number) => {
    return await redisConfig.set(key, value);
  };

  static setex = async (key: string, value: string, ttl: number) => {
    if (typeof value == "number") value = String(value);
    return await redisConfig.SETEX(key, ttl, value);
  };

  static updateSetex = async (key: string, value: string) => {
    if (typeof value == "number") value = String(value);
    const ttl = await this.getTTL(key);
    return await redisConfig.SETEX(key, ttl, value);
  };

  static del = async (key: string) => {
    await redisConfig.del(key);
  };
}
