const initState = {};

const hikeReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_HIKE":
      console.log("created project", action.hike);
      return state;
    case "CREATE_HIKE_ERROR":
      console.log("create hike error", action.error);
      return state;
    default:
      return state;
  }
};

export default hikeReducer;
