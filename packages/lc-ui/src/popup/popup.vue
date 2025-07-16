<template>
  <div ref="containerRef" @mouseenter="mouseenter" @mouseleave="mouseleave">
    <slot />
  </div>
  <Teleport :to="teleport" v-if="isLoaded">
    <Transition name="l-popup">
      <div v-show="visible" ref="contentRef" :class="name">
        <div
            :class="bem('wrap')"
            :style="innerStyle"
            :data-popup-placement="placement"
        >
          <slot name="content" />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
<script lang="ts">
import { defineComponent, ref, watch, onMounted, nextTick } from "vue";
import { createClassName } from "../utils";
import { POPUP_PROPS } from "./props";

const [name, bem] = createClassName("popup");

export default defineComponent({
  name: name,
  emits: ["update:modelValue", "change"],
  props: POPUP_PROPS,
  setup(props, {emit}) {
    const contentRef = ref<HTMLElement | null>(null);
    const containerRef = ref<HTMLElement | null>(null);
    const visible = ref(props.visible)
    const isLoaded = ref(props.visible ? true : !props.lazyRender)
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
          transform: `translate3d(${left < 0 ? 0 : left}px, ${top}px, 0px)`,
          ...props?.overlayInnerStyle
        }
      }
    };

    const mouseenter = async () => {
      visible.value = true;
      await nextTick();
      updatePosition();
    }

    const mouseleave = () => {
      visible.value = false;
    }

    onMounted(() => {
      updatePosition();
      window.addEventListener('resize', updatePosition);
    })

    watch(() => containerRef.value, updatePosition);
    watch(
        () => visible.value,
        (visible) => {
          if (visible) {
            isLoaded.value = true
          }
        }
    )

    return {
      name,
      bem,
      contentRef,
      containerRef,
      visible,
      isLoaded,
      innerStyle,
      mouseenter,
      mouseleave
    };
  }
})
</script>