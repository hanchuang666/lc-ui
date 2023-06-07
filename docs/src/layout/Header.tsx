import {defineComponent} from "vue";
import {classNames} from "../utils";
export default defineComponent({
  name: 'Header',
  setup() {
    const headerClass = classNames('header')
    const headerLeftClass = classNames('header-left')
    const headerCenterClass = classNames('header-center')
    const headerRightClass = classNames('header-right')
    return () => (
      <div class={headerClass}>
        <div class={headerLeftClass}>logo</div>
        <div class={headerCenterClass}>list</div>
        <div class={headerRightClass}>button</div>
      </div>
    )
  }
})