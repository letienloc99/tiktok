import { dfHttp } from "../utils/Axios";
import { ISuggest } from "./models/suggest";

export const suggestUser = (perPage?: number | any) =>
  dfHttp.get<ISuggest>("users/suggested", {
    params: {
      page: 2,
      per_page: perPage ? perPage : 5,
    },
  });
