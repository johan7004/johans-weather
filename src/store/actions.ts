

export const SEARCH_LOCATION = "SEARCH_LOCATION";

export type ActionTypes = {
  type: typeof SEARCH_LOCATION;
  payload: string;
};

export const searchLocationAction = (location:string): ActionTypes => ({
  type: SEARCH_LOCATION,
  payload: location,
});
