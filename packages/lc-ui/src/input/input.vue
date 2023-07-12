<template>
  <div class='input'>
    <input
        :value="value"
        :type="type"
        :name="name"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :autofocus="autofocus"
        :class="classNames"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
    />
  </div>
</template>


<script lang="ts">
import {defineComponent} from "vue";
import {createClassName} from "../utils";
import {INPUT_PROPS} from "./props";
const [name, bem] = createClassName('input')

export default defineComponent({
  name,
  emits: ['onInput'],
  props: INPUT_PROPS,
  setup(props, {emit}) {
    const classNames = bem({
      disabled: props.disabled,
      readonly: props.readonly
    })

    /**
     * input事件
     * @param event 事件对象
     */
    function handleInput(event: Event) {
      props.value = (event.target  as HTMLInputElement).value
      emit('input', props.value, event)
    }

    /**
     * 聚焦事件
     * @param event 事件对象
     */
    function handleFocus(event: Event) {
      emit('focus', (event.target  as HTMLInputElement).value, event)
    }

    /**
     * 失焦事件
     * @param event 事件对象
     */
    function handleBlur(event: Event) {
      props.value = (event.target  as HTMLInputElement).value
      emit('blur', props.value, event)
    }

    return {
      classNames,
      handleInput,
      handleFocus,
      handleBlur,
    }
  }
})


</script>
