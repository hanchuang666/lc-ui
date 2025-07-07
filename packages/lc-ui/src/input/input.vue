<template>
  <div :class="name">
    <div v-if="hasPrependSlot" :class="prependClass">
      <div :class="prependWarpClass">
        <slot name="prepend" />
      </div>
    </div>
    <div :class="wrapperClassName">
      <!-- 渲染 prefix 插槽 -->
      <div v-if="hasPrefixSlot" :class="prefixClass">
        <slot name="prefix" />
      </div>
      <input
          :value="modelValue"
          :type="type"
          :name="name"
          :maxlength="maxlength"
          :placeholder="placeholder"
          :disabled="disabled"
          :readonly="readonly"
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :class="inputClassInner"
          @input="handleInput"
          @focus="handleFocus"
          @blur="handleBlur"
      />
      <div v-if="hasSuffixSlot" :class="suffixClass">
        <slot name="suffix" />
      </div>
    </div>
    <div v-if="hasAppendSlot" :class="appendClass">
      <div :class="appendWrapClass">
        <slot name="append" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, useSlots, watch } from "vue";
import { createClassName } from "../utils";
import { INPUT_PROPS } from "./props";

const [name, bem] = createClassName('input')

export default defineComponent({
  name,
  emits: ['input', 'focus', 'blur', 'update:modelValue'],
  props: INPUT_PROPS,
  setup(props, { emit }) {
    const focused = ref(false)
    const slots = useSlots();
    // 判断 prefix和suffix 插槽是否有内容
    const hasPrefixSlot = computed(() => !!slots.prefix);
    const hasSuffixSlot = computed(() => !!slots.suffix);
    // prefix和suffix 插槽类名
    const prefixClass = computed(() => bem('prefix'))
    const suffixClass = computed(() => bem('suffix'))
    // 判断 prepend和append 插槽是否有内容
    const hasPrependSlot = computed(() => !!slots.prepend);
    const hasAppendSlot = computed(() => !!slots.append);
    // prepend和append 插槽类名
    const prependClass = computed(() => bem('prepend'))
    const prependWarpClass = computed(() => bem('prepend--wrap'))
    const appendClass = computed(() => bem('append'))
    const appendWrapClass = computed(() => bem('append--wrap'))
    const inputClassInner = computed(() => bem('inner'))

    const wrapperClassName = computed(() => bem('wrap', {
      focused: focused.value,
      disabled: props.disabled,
      'has-append': hasAppendSlot.value
    }))
    /**
     * input事件
     * @param event 事件对象
     */
    function handleInput(event: Event) {
      const newValue = (event.target as HTMLInputElement).value
      emit('input', newValue, event)
      emit('update:modelValue', newValue);
    }

    /**
     * 聚焦事件
     * @param event 事件对象
     */
    function handleFocus(event: Event) {
      emit('focus', (event.target as HTMLInputElement).value, event)
    }

    /**
     * 失焦事件
     * @param event 事件对象
     */
    function handleBlur(event: Event) {
      focused.value = false
      emit('blur', (event.target as HTMLInputElement).value, event)
    }

    // watch(() => props.modelValue, (newVal) => {
    //   if(newVal !== props.modelValue) {
    //     internalValue.value = newVal
    //   }
    // })

    return {
      name,
      wrapperClassName,
      inputClassInner,
      handleInput,
      handleFocus,
      handleBlur,
      hasPrefixSlot,
      hasSuffixSlot,
      prefixClass,
      suffixClass,
      hasPrependSlot,
      hasAppendSlot,
      prependClass,
      appendClass,
      prependWarpClass,
      appendWrapClass
    }
  }
})
</script>