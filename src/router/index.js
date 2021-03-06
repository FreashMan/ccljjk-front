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
      name: '监控总览',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '监测一张图', icon: 'dashboard' }
    }]
  },

  {
    path: '/basedata',
    component: Layout,
    redirect: '/basedata/car',
    name: '基础数据管理',
    meta: { title: '基础数据管理', icon: 'example' },
    children: [
      {
        path: 'car',
        name: '车辆管理',
        component: () => import('@/views/basedata/car/car-table'),
        meta: { title: '车辆管理', icon: 'table' }
      },
      {
        path: 'collectsite',
        name: '收集站点管理',
        component: () => import('@/views/basedata/collectsite/index'),
        meta: { title: '收集站点管理', icon: 'tree' }
      },
      {
        path: 'processsite',
        name: '处理站点管理',
        component: () => import('@/views/basedata/processsite/index'),
        meta: { title: '处理站点管理', icon: 'table' }
      }
    ]
  },

  {
    path: '/recordmanage',
    component: Layout,
    redirect: '/recordmanage/realTimeVideo',
    name: '记录管理',
    meta: { title: '记录管理', icon: 'example' },
    children: [
      {
        path: 'realTimeVideo',
        name: '实时视频管理',
        component: () => import('@/views/recordmanage/realTimeVideo/loadingVideo'),
        meta: { title: '实时视频管理', icon: 'table' }
      },
      {
        path: 'historyVideo',
        name: '历史视频管理',
        component: () => import('@/views/recordmanage/historyVideo/historyVideo'),
        meta: { title: '历史视频管理', icon: 'table' }
      },
      {
        path: 'loadometerRecord',
        name: '地磅记录管理',
        component: () => import('@/views/recordmanage/loadometerRecord/loadometerRecord'),
        meta: { title: '地磅记录管理', icon: 'table' }
      },
      {
        path: 'merchantsCollectsiteRecord',
        name: '商家收运记录管理',
        component: () => import('@/views/recordmanage/merchantsCollectsiteRecord/collectsiteRecord'),
        meta: { title: '商家收运记录管理', icon: 'table' }
      },
      {
        path: 'carCollectsiteRecord',
        name: '收运车工作记录管理',
        component: () => import('@/views/recordmanage/carCollectsiteRecord/collectsiteRecord'),
        meta: { title: '收运车工作记录管理', icon: 'table' }
      },
      {
        path: 'attendanceRecord',
        name: '考勤记录管理',
        component: () => import('@/views/recordmanage/attendanceRecord/attendance'),
        meta: { title: '考勤记录管理', icon: 'table' }
      }
    ]
  },

  {
    path: '/report',
    component: Layout,
    redirect: '/report',
    name: '报表管理',
    meta: { title: '报表管理', icon: 'example' },
    children: [
      {
        path: 'car',
        name: '餐厨收运统计报表',
        component: () => import('@/views/basedata/car/index'),
        meta: { title: '餐厨收运统计报表', icon: 'table' }
      },
      {
        path: 'collectsite',
        name: '商家收运报表',
        component: () => import('@/views/basedata/collectsite/index'),
        meta: { title: '商家收运报表', icon: 'tree' }
      },
      {
        path: 'processsite',
        name: '收运车运行报表',
        component: () => import('@/views/basedata/processsite/index'),
        meta: { title: '收运车运行报表', icon: 'table' }
      },
      {
        path: 'processsite',
        name: '人员工作报表',
        component: () => import('@/views/basedata/processsite/index'),
        meta: { title: '人员工作报表', icon: 'table' }
      }
    ]
  },
  
  {
    path: '/system',
    component: Layout,
    redirect: '/system',
    name: '系统管理',
    meta: { title: '系统管理', icon: 'example' },
    children: [
      {
        path: 'user',
        name: '用户管理',
        component: () => import('@/views/sys/user-table'),
        meta: { title: '用户管理', icon: 'table' }
      },
      {
        path: 'role',
        name: '角色管理',
        component: () => import('@/views/basedata/collectsite/index'),
        meta: { title: '角色管理', icon: 'tree' }
      },
      {
        path: 'config',
        name: '系统配置',
        component: () => import('@/views/basedata/processsite/index'),
        meta: { title: '系统配置', icon: 'table' }
      },
      {
        path: 'about',
        name: '关于我们',
        component: () => import('@/views/basedata/processsite/index'),
        meta: { title: '关于我们', icon: 'table' }
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
