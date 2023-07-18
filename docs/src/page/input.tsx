import {defineComponent, ref} from "vue";
import { LInput } from 'lc-ui'

export default defineComponent({
  name: 'Buttom',
  setup: () => {
    return () => {
      const value = ref('')
      console.log(value);
      return (
        <LInput
          type="text"
          value={value.value}
          onInput={(value) => console.log('值变更了', value)}
        />
      )
    }
  }
})

