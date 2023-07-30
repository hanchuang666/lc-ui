<template>
  <div :class="wrapperClassName">
    <span :class="radioClassName" />
    <span v-if="label" :class="labelClassName">{{label}}</span>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import {createClassName} from "../utils";
import {RADIO_PROPS} from './props'

const [name, bem] = createClassName('radio')
export default defineComponent({
  name,
  props: RADIO_PROPS,
  setup() {
    const labelClassName = bem('label')
    const radioClassName = bem('icon')


    return {
      wrapperClassName: name,
      radioClassName,
      labelClassName,
    }
  }
})
</script>