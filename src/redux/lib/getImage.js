import { getImageUrl } from "../getBaseUrl";

export function getImage(filePath) {
  // return getImageUrl() + filePath.replace("./public", "");
  return getImageUrl() + filePath?.replace("./public", "");
}
   