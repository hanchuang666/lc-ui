import {ExtractPropTypes} from "vue";

export type RadioProps = ExtractPropTypes<typeof RADIO_PROPS>

export const RADIO_PROPS = {
  label: {
    type: String,
    default: ''
  }
}