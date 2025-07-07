import Input from './input.vue'

export { type InputProps } from './props'

export const LInput = Input

export default LInput

declare module 'vue' {
  export interface GlobalComponents {
    LInput: typeof LInput
  }
}