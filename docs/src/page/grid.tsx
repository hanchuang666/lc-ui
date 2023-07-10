import {defineComponent} from "vue";

const Buttom = defineComponent({
    name: 'Buttom',
    setup: () => {
        return () => {
            return <input type="button"/>
        }
    }
})

export default Buttom