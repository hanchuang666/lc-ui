import {ExtractPropTypes} from "vue";

export type RadioProps = ExtractPropTypes<typeof RADIO_PROPS>

export const RADIO_PROPS = {
  modelValue: {
    type: [String, Number],
    default: ''
  },
  label: {
    type: [String, Number],
    default: ''
  },
  value: {
    type: [String, Number],
    default: ''
  },
  readonly: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
}