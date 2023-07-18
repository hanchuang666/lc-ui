import {defineComponent} from "vue";
import { LRadio } from 'lc-ui'

export default defineComponent({
    name: 'Radio',
    setup: () => {
        return () => {
            return <LRadio label='haha'></LRadio>
        }
    }
})