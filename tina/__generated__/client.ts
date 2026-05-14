import { createClient } from "tinacms/dist/client";
import { queries } from "./types.js";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: 'bc53bce8acfa6ec210c8d45628086b118748e81a', queries,  });
export default client;
  