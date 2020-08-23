export const getIsAuth = (state) => !!state.user.data.token

export const getLoading = (state) => state.user.loading

export const getError = (state) => state.user.error
