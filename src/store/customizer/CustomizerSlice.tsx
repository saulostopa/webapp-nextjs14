/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

interface StateType {
  activeDir?: string | any;
  activeMode?: string; // This can be light or dark
  SidebarWidth?: number;
  MiniSidebarWidth?: number;
  TopbarHeight?: number;
  isCollapse?: boolean;
  isLayout?: string;
  isSidebarHover?: boolean;
  isMobileSidebar?: boolean;
  isHorizontal?: boolean;
  isLanguage?: string;
  isCardShadow?: boolean;
  borderRadius?: number | any;
}

const initialState: StateType = {
  activeDir: 'ltr',
  activeMode: 'dark', // This can be light or dark
  SidebarWidth: 270,
  MiniSidebarWidth: 87,
  TopbarHeight: 70,
  isLayout: 'full', // This can be full or boxed
  isCollapse: false, // to make sidebar Mini by default
  isSidebarHover: false,
  isMobileSidebar: false,
  isHorizontal: true,
  isLanguage: 'en',
  isCardShadow: true,
  borderRadius: 18,
};

export const CustomizerSlice = createSlice({
  name: 'customizer',
  initialState,
  reducers: {
    setDarkMode: (state: StateType, action) => {
      state.activeMode = action.payload;
    },

    setDir: (state: StateType, action) => {
      state.activeDir = action.payload;
    },
    setLanguage: (state: StateType, action) => {
      state.isLanguage = action.payload;
    },
    setCardShadow: (state: StateType, action) => {
      state.isCardShadow = action.payload;
    },
    toggleSidebar: (state) => {
      state.isCollapse = !state.isCollapse;
    },
    hoverSidebar: (state: StateType, action) => {
      state.isSidebarHover = action.payload;
    },
    toggleMobileSidebar: (state) => {
      state.isMobileSidebar = !state.isMobileSidebar;
    },
    toggleLayout: (state: StateType, action) => {
      state.isLayout = action.payload;
    },
    toggleHorizontal: (state: StateType, action) => {
      state.isHorizontal = action.payload;
    },
    setBorderRadius: (state: StateType, action) => {
      state.borderRadius = action.payload;
    },
  },
});

export const {
  setDarkMode,
  setDir,
  toggleSidebar,
  hoverSidebar,
  toggleMobileSidebar,
  toggleLayout,
  setBorderRadius,
  toggleHorizontal,
  setLanguage,
  setCardShadow,
} = CustomizerSlice.actions;

export default CustomizerSlice.reducer;
