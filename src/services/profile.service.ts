//Assume response from the API call
const userProfile: UserProfile = {
  firstname: "Oluwaleke",
  lastname: "Ojo",
  username: "olu_ojo",
  email: "olu.ojo@example.com",
  pic: "./img/profile.png",
  notification:8
};

export const getUserProfile =  () => {
    return userProfile
}