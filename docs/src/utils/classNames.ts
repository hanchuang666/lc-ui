import {createClassName} from "./bem";

export const classNames = (() => {
  const [,bem] = createClassName('doc')
  return bem
})()