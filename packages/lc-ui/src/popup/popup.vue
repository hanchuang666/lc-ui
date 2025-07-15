<template>
  <div ref="containerRef" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot />
  </div>

  <div ref="contentRef" :class="{[name]: true, [bem('active')]: visible}">
    <div
        v-show="visible"
        :class="wrapperClassName"
        :style="innerStyle"
        :data-popup-placement="placement"
    >
      <slot name="content" />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed, ref, watch, onMounted, onUnmounted, nextTick } from "vue";
import { createClassName } from "../utils";
import { POPUP_PROPS } from "./props";

const [name, bem] = createClassName("popup");

export default defineComponent({
  name: name,
  emits: ["update:modelValue", "change"],
  props: POPUP_PROPS,
  setup(props, {emit}) {
    const wrapperClassName = computed(() => bem("wrap", {
      // focused: focused.value,
      // "has-append": hasAppendSlot.value,
    }));

    const visible = ref(props.visible)

    const contentRef = ref<HTMLElement | null>(null);
    const containerRef = ref<HTMLElement | null>(null);
    const container = document.createElement("div");


    const innerStyle = ref({});

    const updatePosition = () => {
      let targetElement = null;

      if (containerRef.value && containerRef.value.children.length > 0) {
        // 获取第一个子元素作为目标元素
        targetElement = containerRef.value.children[0] as HTMLElement;
      }
      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        const contentRectWidth = contentRef.value?.children[0]?.getBoundingClientRect()?.width || 0;
        const contentRectHeight = contentRef.value?.children[0]?.getBoundingClientRect()?.height || 0;

        let left: number = 0;
        let top: number = 0;
        if(document.documentElement.clientWidth >= contentRectWidth) {
          if(props.placement === 'top') {
            top = rect.top - contentRectHeight - 10;
            left = rect.left + rect.width / 2 - contentRectWidth / 2;
          } else if(props.placement === 'bottom') {
            top = rect.top + rect.height;
            left = rect.left + rect.width / 2 - contentRectWidth / 2;
          }
        }

        innerStyle.value = {
          position: 'absolute',
          transform: `translate3d(${left < 0 ? 0 : left}px, ${top}px, 0px)`,
          ...props?.overlayInnerStyle
        }
      }
    };
    watch(() => containerRef.value, updatePosition);

    const mouseenter = async () => {
      visible.value = true;
      await nextTick();
      updatePosition();
    }

    const mouseleave = () => {
      visible.value = false;
    }

    onMounted(() => {
      document.body.appendChild(container);
      if (contentRef.value && container) {
        // 将组件元素添加到目标 div 中
        container.style.cssText = 'position: absolute; top: 0px; left: 0px; width: 100%';
        container.appendChild(contentRef.value);
      }
      updatePosition();
      window.addEventListener('resize', updatePosition);
    })

    onUnmounted(() => {
      document.body.removeChild(container);
    })

    return {
      name,
      wrapperClassName,
      bem,
      contentRef,
      containerRef,
      visible,
      innerStyle,
      mouseenter,
      mouseleave
    };
  }
})
</script>