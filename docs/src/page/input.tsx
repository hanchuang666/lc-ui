import {defineComponent, ref} from "vue";
import { Input } from 'lc-ui'


const Buttom = defineComponent({
  name: 'Buttom',
  setup: () => {
    return () => {
      const value = ref('')
      console.log(value);
      return (
        <Input
          type="text"
          value={value.value}
          onInput={(value) => console.log('值变更了', value)}
        />
      )
    }
  }
})

export default Buttom
