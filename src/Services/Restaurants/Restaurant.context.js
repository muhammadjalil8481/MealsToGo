import React, {
  useState,
  createContext,
  useEffect,
  useMemo,
  useContext,
} from "react";
import { restaurantsRequest, restaurantsTransform } from "./Restaurant.service";
import { LocationContext } from "../Location/location.context";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);

  const retrieveRestaurants = (loc) => {
    setIsLoading(true);
    setTimeout(() => {
      restaurantsRequest(loc)
        .then(restaurantsTransform)
        .then((result) => {
          setIsLoading(false);
          setRestaurants(result);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error);
        });
    }, 1000);
  };

  useEffect(() => {
    const locationString = location
      ? `${location.lat},${location.lng}`
      : "37.7749295,-122.4194155";
    retrieveRestaurants(locationString);
  }, []);

  return (
    <RestaurantsContext.Provider
      value={{ restaurants, isLoading, error, retrieveRestaurants, location }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
