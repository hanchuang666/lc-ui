import {defineComponent} from "vue";
import {createClassName} from "docs/src/utils";

const [name, bem] = createClassName('input')
const Input = defineComponent({
  name,
  emits: ['onInput'],
  setup(props, {emit}) {

    const change = (event) => {
      console.log(122222222);
      emit('onInput', event)
    }
    return () => {
      return (
        <div class={'input'}>
          <input type="text" onInput={change}/>
        </div>
      )
    }
  }
})

export default Input
