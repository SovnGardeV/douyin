import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '数据管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/account-of-merchant/index'),
        meta: { title: '用户数据', icon: 'table' }
      },
      {
        path: '/example/hotVideo',
        name: 'video',
        component: () => import('@/views/video-data/index'),
        meta: { title: '热门视频', icon: 'table' }
      },
      {
        path: '/example/integrates/:userId',
        name: 'integrates_data',
        component: () => import('@/views/account-of-merchant/integratesData'),
        meta: { title: '综合数据', icon: 'table' },
        hidden: true
      },
      {
        path: '/example/fans/:userId',
        name: 'integrates_data',
        component: () => import('@/views/account-of-merchant/fans'),
        meta: { title: '粉丝相关', icon: 'table' },
        hidden: true
      },
      {
        path: '/example/focus/:userId',
        name: 'integrates_data',
        component: () => import('@/views/account-of-merchant/focus'),
        meta: { title: '关注相关', icon: 'table' },
        hidden: true
      },
      {
        path: '/example/video/:userId',
        name: 'video',
        component: () => import('@/views/account-of-merchant/video'),
        meta: { title: '视频数据', icon: 'table' },
        hidden: true
      },
      {
        path: '/example/video/:userId/data',
        name: 'video',
        component: () => import('@/views/account-of-merchant/videoData'),
        meta: { title: '视频综合数据', icon: 'table' },
        hidden: true
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/merchant',
    component: Layout,
    // redirect: '/merchant/table',
    name: 'Merchant',
    meta: { title: '商户管理', icon: 'example' },
    children: [
      {
        path: '/merchant/index',
        name: 'merchant',
        component: () => import('@/views/merchant/index'),
        meta: { title: '商户列表', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
