<template>
  <div :class="wrapperClassName" @click="handleChange">
    <span :class="radioClassName" />
    <span v-if="label" :class="labelClassName">{{label}}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent, inject, computed} from 'vue'
import {createClassName} from "../utils";
import {RADIO_PROPS} from './props'
import {RADIO_GROUP_CONTEXT} from "../context/radio-group-context.ts";

const [name, bem] = createClassName('radio')
export default defineComponent({
  name,
  props: RADIO_PROPS,
  setup(props) {
    const {disabled ,value, onChangeEvent} = inject(RADIO_GROUP_CONTEXT)!

    console.log(value)

    const isChecked = computed(() => {
      console.log('value', value.value)
      return value.value === props.value
    })
    // const _readonly = computed(() => readonly ?? props.readonly)
    const _disabled = computed(() => disabled ?? props.disabled)
    const labelClassName = computed(() => bem('label'))
    const radioClassName = computed(() => bem('icon', {
      'checked': isChecked.value,
      'disabled': _disabled.value,
    }))

    function handleChange () {
      if (_disabled.value) return
      onChangeEvent(props.value)
    }
    return {
      wrapperClassName: name,
      radioClassName,
      labelClassName,
      handleChange
    }
  }
})
</script>