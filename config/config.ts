import dotenv from "dotenv";

dotenv.config();

export default {
  development: {
    username: process.env.USER_NAME as string,
    pass: process.env.PASS as string,
    happo_enabled: process.env.HAPPO_ENABLED,
    happoAPISecret: process.env.HAPPO_API_SECRET as string,
    happoAPIKey: process.env.HAPPO_API_KEY as string,
  },
};
