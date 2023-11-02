export function integerFormaterId (number: number) {
  return new Intl.NumberFormat('id-ID').format(number)
}
