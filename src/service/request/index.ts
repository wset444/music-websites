// src/api/userApi.ts
import axiosInstance from '../index';

interface User {
  id: number;
  name: string;
  email: string;
}

// export const getUser = async (id: number): Promise<User> => {
//   const response = await axiosInstance.get<User>(`/top/mv`);
//   return response.data;
// };

export const getMVlists = async (): Promise<any> => {
  const response = await axiosInstance.get('/top/mv');
  return response.data;
};

// 可以根据需要添加更多 API 请求方法
