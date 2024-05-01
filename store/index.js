export const state = () => ({
  headerHeight: 0,
  subNavIndex: 0,
  oauth: {},
});

export const mutations = {
  setHeaderHeight(state, height) {
    state.headerHeight = height;
  },
  setSubNavIndex(state, index) {
    state.subNavIndex = index;
  },
  setOauth(state, oauth) {
    state.oauth = oauth;
  },
};

export const getters = {
  oauth: (state) => {
    return state.oauth;
  },
};
