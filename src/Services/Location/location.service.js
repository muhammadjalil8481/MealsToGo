import { locations } from "./location.mock";
import camelize from "camelize";

export const locationRequest = (searchedLocation) => {
  return new Promise((resolve, reject) => {
    const locationData = locations[searchedLocation];
    if (!locationData) reject("Location Not found");
    resolve(locationData);
  });
};

export const locationTransform = (data) => {
  const camelizedResult = camelize(data);
  const { geometry = {} } = camelizedResult.results[0];
  const { viewport } = geometry;
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport };
};
