import RadioGroup from './riado-group.vue'
import {withInstall} from "../utils";

export const LRadioGroup = withInstall(RadioGroup)

export { type RadioGroupProps } from './props'

export default LRadioGroup

declare module 'vue' {
  export interface GlobalComponents {
    LRadioGroup: typeof RadioGroup
  }
}