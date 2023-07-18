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
        <div class={headerLeftClass}>
          <img src="https://img.3dmgame.com/uploads/images/news/20201007/1602077049_814329.jpg" alt="" style="width: 60px; height: 50px; vertical-align: middle;" />
          &nbsp;&nbsp;&nbsp;&nbsp;
          <span style='vertical-align: middle; font-size: 32px; font-weight: 700; color: #999;'>lc</span>
        </div>
        <div class={headerCenterClass}>list</div>
        <div class={headerRightClass}>button</div>
      </div>
    )
  }
})