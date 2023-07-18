import { App, Plugin } from 'vue'

const PREFIX = `l`

type Modifier = string | {[key: string]: unknown}

function createModifier(el: string, modifier?: Modifier | Modifier[]) {
  if (!modifier) return ''

  if(typeof modifier === 'string') {
    return ` ${el}--${modifier}`
  }

  if(Array.isArray(modifier)) {
    return modifier.reduce((prv, key) => prv + createModifier(el, key), '')
  }

  return Object.keys(modifier).reduce(
    (prev, key) => prev + (modifier[key] ? createModifier(el, key) : ''),
    ''
  )
}

export function createBem(name: string) {
  return (element?: Modifier, modifier?: Modifier | Modifier[]) => {
    if (element && typeof element !== 'string') {
      modifier = element
      element = ''
    }

    element = element ? `${name}__${element}` : name

    return `${element}${createModifier(element, modifier)}`
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

export function withInstall<T>(options: T) {
  ;(options as Record<string, unknown>).install = (app: App) => {
    const { name } = options as unknown as { name: string }
    app.component(name, options as any)
    // app.component(name, options as any)
  }

  return options as T & Plugin
}
