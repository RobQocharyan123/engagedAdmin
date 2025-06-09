import API from "../api/Api";

export const getGeneralTable = async () => {
  const res = await API.get("/votes",);
  console.log(res);
  
  return res.data;
};