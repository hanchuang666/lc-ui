import {ExtractPropTypes} from 'vue'
export type SelectProps = ExtractPropTypes<typeof SELECT_PROPS>

export const SELECT_PROPS = {
  // className: {
  //   type: [String],
  // },
  modelValue: {
    type: [String, Number],
    default: ''
  },
  options: {
    type: Array<{label: string | number, value: string | number}>,
    default: undefined
  },
  placeholder: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
    type: Boolean,
    default: false
  },
}