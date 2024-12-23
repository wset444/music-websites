import axiosInstance from '@/service/index';

export const getBannerList = async (): Promise<any> => {
  const response = await axiosInstance.get('/banner');
  return response.data;
};

export const getHotRecommend = async (list: any) => {
  const response = await axiosInstance.get('/personalized', {
    params: {
      limit: list || 30
    }
  });
  return response.data;
};
