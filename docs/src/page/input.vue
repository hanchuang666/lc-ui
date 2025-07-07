<template>
  <l-input
      type="password"
      v-model="value"
      :autofocus="true"
      :maxlength="10"
      @input="onInput"
  />
  <br/>
  <l-input
      type="text"
      v-model="value"
      @input="onInput"
      disabled
  ></l-input>
  <br/>
  <l-input
      type="text"
      v-model="value"
      @input="onInput"
  >
    <template #prefix>
      <span>图标</span>
    </template>

    <template #prepend>
      <span>前缀</span>
    </template>
  </l-input>
  <br/>
  <l-input
      type="text"
      v-model="value"
      @input="onInput"
  >
    <template #suffix>
      <span>图标</span>
    </template>

    <template #append>
      <span>后缀</span>
    </template>
  </l-input>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'Input',
  setup: () => {
    const value = ref('c')

    const onInput = (value: any) => console.log('值变更了', value)
    return {
      value,
      onInput
    }
  }
})

</script>