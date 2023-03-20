import axiosInstance from "../../utils/axios";

export const gettags = async () => {
  const response = await axiosInstance.get("/tags");

  return response.data;
};
