<template>
  <div style="padding: 20px;">
    <br/>
    <l-popup
      type="text"
      v-model="value"
      placement="top"
    >
      <button>弹出层弹出层弹出层弹出层</button>
      <template #content>
        <div>我是弹出层</div>
      </template>
    </l-popup>
    <br/>
    <l-popup
        type="text"
        v-model="value"
        @input="onInput"
        disabled
        :overlayInnerStyle="{width: '137px'}"
    >
      <button>弹出的元素要和我等宽</button>
      <template #content>
        <div>我是弹出层我是弹出层我是弹出层我是弹出层</div>
      </template>
    </l-popup>
    <br/>
    <l-popup
        type="text"
        v-model="value"
        @input="onInput"
        disabled
    >
      <button>我是组件层</button>
      <template #content>
        <div>我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层我是超长弹出层</div>
      </template>
    </l-popup>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";

export default defineComponent({
  name: 'Popup',
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