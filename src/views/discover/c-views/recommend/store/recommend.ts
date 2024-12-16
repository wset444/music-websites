import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBannerList } from '../service/recommend';

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBannerList();
  console.log(res, 'banner');
  return res;
});

interface IRecommendState {
  banners: any[];
}
const initialState: IRecommendState = {
  banners: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {}
});

export default recommendSlice.reducer;
