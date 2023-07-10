
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
          {id: 'Grid', path: '/component/grid', title: 'Grid [栅格]'}
        ]
      }
    ]
  }
]

export const getMenuList = (id: string): any => {
  return menus.find((menu) => (menu.id === id)) || []
}
