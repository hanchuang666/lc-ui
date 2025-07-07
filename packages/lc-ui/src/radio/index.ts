import Radio from "./radio.vue";
import {withInstall} from "../utils";

export const LRadio = withInstall(Radio)

export { type RadioProps } from './props'

export default LRadio

declare module 'vue' {
  export interface GlobalComponents {
    LRadio: typeof Radio
  }
}