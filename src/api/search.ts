import { dfHttp } from "../utils/Axios";

export const search = (debounce: string) =>
  dfHttp.get("users/search", {
    params: {
      q: debounce,
      type: " less",
    },
  });
