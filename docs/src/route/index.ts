import {createRouter, createWebHashHistory} from "vue-router";



const getRouters = () => {
  const files = import.meta.glob('../page/*.(tsx|vue)')
  console.log(333333, files);
  const routers = []
  for(const [key, component] of Object.entries(files)) {
    const {path} = /(?<path>\/[a-z\d-]+)\.(tsx|vue)$/i.exec(key)?.groups ?? {};
    routers.push({
      path: `/component${path}`,
      component
    })
  }
  return routers
}


const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    ...getRouters()
  ]
})
export default router