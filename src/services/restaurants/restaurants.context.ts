import { createContext } from "react";

type ContextType = {
  restaurants: any[];
  isLoading: boolean;
  error: any;
};
const RestaurantsContext = createContext<ContextType>({
  restaurants: [],
  isLoading: false,
  error: null,
});
export default RestaurantsContext;
