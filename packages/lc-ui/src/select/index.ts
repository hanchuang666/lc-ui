import Select from './select.vue'

export {type SelectProps} from './props'

export const LSelect = Select

export default LSelect

declare module 'vue' {
  export interface GlobalComponents {
    LSelect: typeof LSelect
  }
}