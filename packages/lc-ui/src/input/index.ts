import Input from './input.vue'

export { type InputProps } from './props'

export default Input

declare module 'vue' {
  export interface GlobalComponents {
    LInput: typeof Input
  }
}
