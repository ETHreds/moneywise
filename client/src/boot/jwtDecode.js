import { boot } from 'quasar/wrappers'
import { jwtDecode } from "jwt-decode";

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app, ro }) => {
  app.config.globalProperties.$jwt_decode = { jwtDecode };
  // something to do
})
// export default boot(({ app }) => {
//   app.use(jwtDecode);
// });
