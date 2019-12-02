import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: '电子商务',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: '物联网仪表板',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: '产品特点',
    group: true,
  },
  {
    title: '布局',
    icon: 'layout-outline',
    children: [
      {
        title: '步骤框',
        link: '/pages/layout/stepper',
      },
      {
        title: '列表',
        link: '/pages/layout/list',
      },
      {
        title: '无限的列表',
        link: '/pages/layout/infinite-list',
      },
      {
        title: '可折叠列表',
        link: '/pages/layout/accordion',
      },
      {
        title: '选项框',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: '表格',
    icon: 'edit-2-outline',
    children: [
      {
        title: '表格输入',
        link: '/pages/forms/inputs',
      },
      {
        title: '表格布局',
        link: '/pages/forms/layouts',
      },
      {
        title: '按钮',
        link: '/pages/forms/buttons',
      },
      {
        title: '日期控件',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI特征',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid表格',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'icon图标',
        link: '/pages/ui-features/icons',
      },
      {
        title: '排版设计',
        link: '/pages/ui-features/typography',
      },
      {
        title: '带动画的搜索',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: '旋转器(类似loading...)',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: '日历工具包',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: '地图',
    icon: 'map-outline',
    children: [
      {
        title: '谷歌地图',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: '泡沫地图',
        link: '/pages/maps/bubble',
      },
      {
        title: '地图搜索',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: '图表',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: '编辑器',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: '登录',
        link: '/auth/login',
      },
      {
        title: '注册',
        link: '/auth/register',
      },
      {
        title: '找回密码',
        link: '/auth/request-password',
      },
      {
        title: '重置密码',
        link: '/auth/reset-password',
      },
    ],
  },
];
