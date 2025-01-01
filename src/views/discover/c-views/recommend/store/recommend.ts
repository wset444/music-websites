import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getBannerList,
  getHotRecommend,
  getNewAlbum
} from '../service/recommend';

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
export const fetchNewAlbumAction = createAsyncThunk(
  'newAlbumRecommend',
  async (arg, { dispatch }) => {
    const res = await getNewAlbum(10);
    console.log(res.albums, 'hot');
    dispatch(changNewAlbumsAction(res.albums));
    return res.albums;
  }
);

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbum: any[];
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: []
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {
    changNewAlbumsAction(state, { payload }) {
      state.newAlbum = payload;
    },
    changHotRecommendAction(state, { payload }) {
      state.hotRecommends = payload;
    },
    changNewAlbumRecommendAction(state, { payload }) {
      state.newAlbum = payload;
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
export const { changHotRecommendAction, changNewAlbumsAction } =
  recommendSlice.actions;
export default recommendSlice.reducer;
