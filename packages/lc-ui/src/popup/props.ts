import {ExtractPropTypes, PropType} from 'vue'
export type PopupProps = ExtractPropTypes<typeof POPUP_PROPS>

export const POPUP_PROPS = {
  visible: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<'left' | 'top' | 'right' | 'bottom'>,
    default: 'bottom'
  },
  overlayInnerStyle: {
    type: Object,
    default: undefined
  }
}