import { dfHttp } from "../utils/Axios";
import { IUserVideos } from "./models/video-user";

export const getUserVideos = (nickname: string | undefined) =>
  dfHttp.get<IUserVideos>("/users/@" + nickname);
export const getListVideos = (page: number) =>
  dfHttp.get("/videos?type=for-you&page=" + page);
