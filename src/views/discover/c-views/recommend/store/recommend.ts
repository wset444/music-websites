import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getBannerList,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail
} from '../service/recommend';
import Item from 'antd/es/list/Item';

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
    // console.log(res.albums, 'hot');
    dispatch(changNewAlbumsAction(res.albums));
    return res.albums;
  }
);
const rankingIds = [19723756, 3779629, 2884035];
export const fetchRankingData = createAsyncThunk(
  'RankingDataRecommend',
  async (_, { dispatch }) => {
    //获取榜单数据
    // for (const id of rankingIds) {
    //   const res = await getPlayListDetail(id);
    //   console.log(id, '123');
    //   switch (id) {
    //     case 19723756:
    //       console.log(res);
    //       break;
    //     case 3779629:
    //       console.log(res);
    //       break;
    //     case 2884035:
    //       console.log(res);
    //       break;
    //     // dispatch(chresangNewAlbumsAction(res.albums));
    //     // return res.albums;
    //   }
    // }
    // let index = 0;
    const promises: Promise<any>[] = [];
    for (const id of rankingIds) {
      promises.push(getPlayListDetail(id));
    }
    Promise.all(promises).then((res) => {
      const palylist = res.map((item) => item.playlist);
      dispatch(changRankings(palylist));
      console.log(res, '123');
    });
  }
);

interface IRecommendState {
  banners: any[];
  hotRecommends: any[];
  newAlbum: any[];
  rankings: any[];
  // upRanking: any;
  // newRanking: any;
  // originRanking: any;
}
const initialState: IRecommendState = {
  banners: [],
  hotRecommends: [],
  newAlbum: [],
  rankings: []
  // upRanking: {},
  // newRanking: {},
  // originRanking: {}
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
    },
    changRankings(state, { payload }) {
      state.rankings = payload;
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
export const { changHotRecommendAction, changNewAlbumsAction, changRankings } =
  recommendSlice.actions;
export default recommendSlice.reducer;
