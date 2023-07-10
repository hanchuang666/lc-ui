import {defineComponent} from "vue";
import {useRouter} from 'vue-router'
import {createClassName} from "../../utils";
import {getMenuList} from "./menu";
import './index.scss'

const [name, bem] = createClassName('menu')

export default defineComponent({
  name,
  setup() {
    const router = useRouter()
    const menus = getMenuList('component')
    console.log(menus);

    const renderGroup = (group) => {
      return group?.children?.map(menu => (
        <li class={bem('menu-item')} onclick={() => {
          console.log(111,menu.path);
          router.push(menu.path)
        }}>
          {menu.title}
        </li>
      ))
    }

    return () => (
      <ul className={name}>
        {menus?.children?.map((group) => (
          <li key={group.id} class={bem('group')}>
            <div class={bem('group-title')}>{group?.groupTitle}</div>
            <ul>
              {renderGroup(group)}
            </ul>
          </li>
        ))}
      </ul>
    )
  }
})