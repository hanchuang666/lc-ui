<template>
  <l-select
      v-model="value"
      placeholder="请选择"
      @input="onInput"
  />
  <br/>
  <l-select
      type="text"
      v-model="value"
      @input="onInput"
      disabled
  ></l-select>
  <br/>
  <l-select
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
  </l-select>
  <br/>
  <l-select
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
  </l-select>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'Select',
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