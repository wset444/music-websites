import { configureStore } from '@reduxjs/toolkit';
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import createReducer from './module/counter';
import allre from './module/all';
import { shallowEqual } from 'react-redux';
const store = configureStore({
  reducer: {
    counter: createReducer,
    allres: allre
  }
});

type GetFnType = typeof store.getState;
type FnReturnType = ReturnType<GetFnType>;
type DispathType = typeof store.dispatch;
export const useApp: TypedUseSelectorHook<FnReturnType> = useSelector;
export const useAppDispath: () => DispathType = useDispatch;
export const shallowEqualApp = shallowEqual;
export default store;
