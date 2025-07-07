
export function toPascalCase(str: string, connector?: string) {
  if(!str) {
    return ''
  }
  return str.replace(/[A-Z]/g, (matchStr, index) => {
    if(index) {
      return `${connector || '-'}${matchStr.toLowerCase()}`
    }
    return matchStr.toLowerCase()
  })
}