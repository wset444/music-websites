import axiosInstance from '@/service/index';
// export function getBannerList() {
//   return axiosInstance.get();
// }

export const getBannerList = async (): Promise<any> => {
  const response = await axiosInstance.get('/banner');
  return response.data;
};
