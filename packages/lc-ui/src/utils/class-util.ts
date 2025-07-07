
// 统一处理插槽相关类名
export function createSlotInfo(slotName: string, {
  bem,
  slots,
  computed
}) {
  const hasSlot = computed(() => !!slots[slotName]);
  const wrapperClass = computed(() => bem(`${slotName}-wrap`));
  const containerClass = computed(() => bem(slotName));
  return { hasSlot, wrapperClass, containerClass };
}