import API from '../api/Api';

export const getGeneralTable = async ({ data }) => {
  const res = await API.get(
    `/votes?status=${data?.status}&search_data=${data?.search_data}`
  );

  return res.data;
};

export const deleteTableItem = async (id) => {
  const res = await API.delete(`/vote/${id}`);
  return res.data;
};

export const postDate = async (date) => {
    const res = await API.post('/date', { date });
    return res.data;

};
