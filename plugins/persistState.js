import createPersistedState from "vuex-persistedstate";
export default ({ store }) => {
  createPersistedState({
    key: "key",
    paths: ["user"],
  })(store);
};
