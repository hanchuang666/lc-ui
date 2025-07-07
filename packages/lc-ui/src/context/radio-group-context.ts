import type { InjectionKey, ComputedRef } from 'vue'

export interface RadioGroupContext {
  value: ComputedRef<string | number>
  disabled?: boolean
  readonly?: boolean
  onChangeEvent: (value: string | number) => void
}

// 使用Symbol保证唯一性
export const RADIO_GROUP_CONTEXT: InjectionKey<RadioGroupContext> =
  Symbol('LC_UI_RADIO_GROUP') as InjectionKey<RadioGroupContext>