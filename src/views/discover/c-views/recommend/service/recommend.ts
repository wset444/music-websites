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

export const getNewAlbum = async (list: 10) => {
  const response = await axiosInstance.get('/album/newest', {
    params: {
      limit: list
    }
  });
  return response.data;
};

export const getPlayListDetail = async (id: number) => {
  const response = await axiosInstance.get('/playlist/detail', {
    params: {
      id
    }
  });
  return response.data;
};
