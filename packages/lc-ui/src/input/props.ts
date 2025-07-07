import {ExtractPropTypes, PropType} from "vue";

export type InputProps = ExtractPropTypes<typeof INPUT_PROPS>

export const INPUT_PROPS = {
  type: {
    type: String as PropType<'text' | 'number' | 'password' | 'email' | 'url'>,
    default: 'text'
  },
  modelValue: {
    type: [String, Number] as PropType<string | number | undefined>,
    default: '',
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  maxlength: {
    type: Number,
    default: undefined
  },
  placeholder: {
    type: String,
    default: undefined
  },
  autocomplete: {
    type: String,
    default: 'off'
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