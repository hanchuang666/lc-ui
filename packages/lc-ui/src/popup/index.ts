import Popup from './popup.vue'

export {type PopupProps} from './props'

export const LPopup = Popup

export default LPopup

declare module 'vue' {
  export interface GlobalComponents {
    LPopup: typeof LPopup
  }
}