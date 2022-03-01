import { instance as axios } from "../axios";

export const getRooms = async (
  keyword: string,
  numOfBeds: string | number,
  roomType: string,
  currentPage: number
) => {
  const { data } = await axios.get(
    `/api/rooms/?keyword=${keyword}&numOfBeds=${numOfBeds}&roomType=${roomType}&pageNumber=${currentPage}`
  );
  return data;
};
