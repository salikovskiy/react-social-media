const initState = {
  hikes: [
    { id: "1", title: "Goverla hike, 6 days", details: "bla bla bla bla" },
    { id: "2", title: "Tatri hike, 2 days", details: "bla bla bla bla" },
    { id: "3", title: "Everest hike, 23 days", details: "bla bla bla bla" }
  ]
};

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
