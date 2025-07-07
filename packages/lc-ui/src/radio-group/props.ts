import {ExtractPropTypes, PropType} from 'vue';
// import {RADIO_PROPS} from "../radio/props";

export type RadioGroupProps = ExtractPropTypes<typeof RADIO_GROUP_PROPS>

export const RADIO_GROUP_PROPS = {
  options: {
    type: Array<{label: string | number, value: string | number}>,
    default: undefined
  },
  modelValue: {
    type: [String, Number],
    required: true
  },
  className: {
    type: [String],
  },
  direction: {
    type: String as PropType<'horizontal' | 'vertical'>,
    default: 'horizontal'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  }
}