import { constantRoutes, adminRoutes, merchantRoutes } from '@/router'
import router from '@/router'

export default function routeControl() {
  let routes
  if (localStorage.getItem('loginType') === 'admin') {
    routes = adminRoutes
  } else {
    routes = merchantRoutes
  }
  router.options.routes = constantRoutes.concat(routes)

  router.addRoutes(routes)
}
