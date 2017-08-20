export function swap<T>(
  input: T[], 
  index1: number, 
  index2: number
): T[] {
  let temp = input[index1]
  input[index1] = input[index2]
  input[index2] = temp
  return input
}

export function moveRight(input: number[], index: number): void {
  input[index + 1] = input[index]
}

export function range(
  start: number, 
  end: number, 
  step = 1
): number[] {
  let { ceil, abs } = Math,
      fromRight = end - start < 0,
      length = ceil(abs(end - start) / step),
      output = Array(length),
      index = 0
  
  if (step === 0) step = 1
  
  while (length--) {
    output[index++] = start
    fromRight ? start -= step : start += step
  }
  
  return output
}
