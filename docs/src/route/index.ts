import {createRouter, createWebHashHistory} from "vue-router";



const getRouters = () => {
  const files = import.meta.glob('../page/*.tsx')
  const routers = []
  for(const [key, component] of Object.entries(files)) {
    console.log(component);
    const {path} = /(?<path>\/[a-z\d-]+)\.tsx$/i.exec(key)?.groups ?? {};
    console.log(path);
    routers.push({
      path: `/component${path}`,
      component
    })
  }
  console.log(routers);
  return routers
}


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...getRouters()
  ]
})
console.log(33 ,router);
export default router