<template>
    <div :class="wrapperClassName">
      <template v-if="options">
        <l-radio
            v-for="(option, index) in options"
            :key="option.value || index"
            :label="option.label"
            :value="option.value"
        />
      </template>
      <slot v-else />
    </div>
</template>

<script lang="ts">
import {defineComponent, provide, ref, watch, computed} from 'vue';
import {createClassName} from "../utils";
import {RADIO_GROUP_PROPS} from "./props";
import {RADIO_GROUP_CONTEXT} from "../context/radio-group-context.ts";
// import useModelValue from "../hooks/use-model-value.ts";

const [name, bem] = createClassName('radio-group')
export default defineComponent({
  name: name as string,
  props: RADIO_GROUP_PROPS,
  emits: ['update:modelValue', 'change'],
  setup(props, { emit }) {
    const wrapperClassName = bem({
      horizontal: props.direction === 'horizontal',
      vertical: props.direction === 'vertical',
    })

    // const internalValue = useModelValue(props, emit)
    // const internalValue = ref(props.modelValue)
    //
    // watch(() => props.modelValue, (newVal) => {
    //   if (newVal !== internalValue.value) {
    //     internalValue.value = newVal;
    //   }
    // });
    provide(RADIO_GROUP_CONTEXT, {
      value: computed(() => props.modelValue),
      disabled: props.disabled,
      readonly: props.readonly,
      onChangeEvent: (value: string | number) => {
        // internalValue.value = value;
        emit('update:modelValue', value);
        emit('change', value);
      }
    })

    return {
      wrapperClassName,
    }
  }
})

</script>