import {ExtractPropTypes, PropType} from "vue";

export type InputProps = ExtractPropTypes<typeof INPUT_PROPS>

export const INPUT_PROPS = {
  type: {
    type: String as PropType<'text' | 'number' | 'password' | 'email' | 'url'>,
    default: 'text'
  },
  value: {
    type: [String, Number] as PropType<string | number | undefined>,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  autocomplete: {
    type: Boolean,
    default: false
  },
  autofocus: {
    type: Boolean,
    default: false
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