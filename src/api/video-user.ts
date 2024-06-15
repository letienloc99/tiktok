import { dfHttp } from "../utils/Axios";
import { IUserVideos } from "./models/video-user";

export const getUserVideos = (nickname: string | undefined) =>
  dfHttp.get<IUserVideos>("/users/@" + nickname);
