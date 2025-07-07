import {ref, computed, watchEffect} from "vue";
function useModelValue(props: any, emit: any, key = 'modelValue') {
  const internalValue = ref()

  watchEffect(() => {
    internalValue.value = props[key]
  })


  const internalValueRef = computed(() => ({
    get() {
      return internalValue.value
    },
    set(v: any) {
      internalValue.value = v
    }
  }))

  return [internalValueRef]
}
export default useModelValue