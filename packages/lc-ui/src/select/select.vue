<template>
  <div :class="name">
    <div :class="wrapperClassName">
      <l-popup>
        <l-input
            :placeholder="placeholder"
            :readonly="true"
        >
          <template #suffix>
            <!--        <l-icon name="arrow-down"></l-icon>-->
            <span style="color: #ccc">↓</span>
          </template>
        </l-input>
        <template #content>
          <div>aaaa</div>
          <div>bbb</div>
          <div>ccccc</div>
          <div>dddddd</div>
          <div>eeeee</div>
        </template>
      </l-popup>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
import { createClassName } from "../utils";
import { SELECT_PROPS } from "./props";

const [name, bem] = createClassName("select");

export default defineComponent({
  name: name,
  emits: ["update:modelValue", "change"],
  props: SELECT_PROPS,
  setup(props, {emit}) {
    console.log(props, emit)

    const wrapperClassName = computed(() => bem("wrap", {
      // focused: focused.value,
      disabled: props.disabled,
      // "has-append": hasAppendSlot.value,
    }));
    return {
      name,
      wrapperClassName,
    };
  }
})
</script>