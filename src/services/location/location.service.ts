import camelize from "camelize-ts";

import { locations } from "./location.mock";

export const locationRequest = (searchTerm: string) => {
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("not found");
    }
    resolve(locationMock);
  });
};

export const locationTransform = (result: any) => {
  const formattedResult = camelize(result);
  const { geometry = {} } = formattedResult.results[0];
  const { lat, lng } = geometry.location;
  const viewport = geometry.viewport;

  return { lat, lng, viewport };
};
