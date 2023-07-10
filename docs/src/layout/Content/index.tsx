import {defineComponent} from "vue";
import {classNames} from "../../utils";

export default defineComponent({
  name: 'Content',
  setup() {
    const contentClassName = classNames('content')
    return () => (
      <div class={contentClassName}>
        <router-view />
      </div>
    )
  }
})