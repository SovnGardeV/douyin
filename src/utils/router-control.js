import { constantRoutes, adminRoutes, merchantRoutes, proxyRoutes } from '@/router'
import router from '@/router'

export default function routeControl() {
  let routes
  const loginType = localStorage.getItem('loginType')
  if (loginType === 'admin') {
    routes = adminRoutes
  } else if (loginType === 'merchant') {
    routes = merchantRoutes
  } else if (loginType === 'proxy') {
    routes = proxyRoutes
  }
  router.options.routes = constantRoutes.concat(routes)

  router.addRoutes(routes)
}
