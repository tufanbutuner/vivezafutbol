import imageUrlBuilder from "@sanity/image-url";
import myConfiguredSanityClient from "./client-config";

const builder = imageUrlBuilder(myConfiguredSanityClient);

export default function urlForImage(source: any) {
  return builder.image(source);
}
