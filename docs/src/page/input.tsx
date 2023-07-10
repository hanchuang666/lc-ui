import {defineComponent} from "vue";
import { Input } from 'lc-ui'


const Buttom = defineComponent({
  name: 'Buttom',
  setup: () => {
    return () => {
      return <Input type="text" onInput={() => {console.log(3333)}} />
    }
  }
})

export default Buttom
