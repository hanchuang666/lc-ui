
const menus = [
  {
    id: 'docs',
    title: '文档'
  },
  {
    id: 'component',
    title: '组件',
    children: [
      {
        id: 'base',
        groupTitle: '基础组件',
        children: [
          {id: 'Input', path: '/component/input', title: 'Input [输入框]'}
        ]
      },
      {
        id: 'layout',
        groupTitle: '布局组件',
        children: [
          {id: 'Grid', path: '/component/radio', title: 'Radio [单选框]'}
        ]
      },
      {
        id: 'layout',
        groupTitle: '布局组件',
        children: [
          {id: 'Grid', path: '/component/select', title: 'Select [下拉框]'}
        ]
      },
      {
        id: 'layout',
        groupTitle: '布局组件',
        children: [
          {id: 'Grid', path: '/component/popup', title: 'Popup [弹出层]'}
        ]
      }
    ]
  }
]

export const getMenuList = (id: string): any => {
  return menus.find((menu) => (menu.id === id)) || []
}