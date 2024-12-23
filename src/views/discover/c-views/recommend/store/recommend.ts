import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBannerList, getHotRecommend } from '../service/recommend';

export const fetchBannerDataAction = createAsyncThunk('banners', async () => {
  const res = await getBannerList();
  // console.log(res, 'banner');
  return res.banners;
});
export const fetchHotRecommendAction = createAsyncThunk(
  'hotRecommend',
  async (arg, { dispatch }) => {
    const res = await getHotRecommend(8);
    // console.log(res, 'hot');
    dispatch(changHotRecommendAction(res.result));
    return res.banners;
  }
);

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, (state, action) => {
        // console.log('pending');
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, { payload }) => {
        state.banners = payload;
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('rejected');
      });
  }
});
export const { changHotRecommendAction } = recommendSlice.actions;
export default recommendSlice.reducer;
