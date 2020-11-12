export default function auth({ route, store, redirect }) {
  if (
    route.path !== "/login" &&
    route.path !== "/linklogin" &&
    route.path !== "/" &&
    !store.state.user.userData &&
    process.env.WITH_AUTH !== "true"
  ) {
    redirect("/login");
  }
}
