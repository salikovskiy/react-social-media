export const createHike = hike => {
  return (dispath, getState, { getFirebase, getFirestore }) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("hikes")
      .add({
        ...hike,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispath({ type: "CREATE_HIKE", hike });
      })
      .catch(error => {
        dispatchEvent({ type: "CREATE_HIKE_ERROR", error });
      });
  };
};
