import {PREFIX} from "../constants";

export function createBem(name: string) {
  return (element: string) => {
    return `${name}__${element}`
  }
}

/**
 * 创建组件类名
 * @param name block名称
 */
export function createClassName(name: string) {
  const blockName = `${PREFIX}-${name}`
  return [blockName, createBem(blockName)]
}
