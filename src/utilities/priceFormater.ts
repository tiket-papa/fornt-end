export function priceFormaterID (number: number) {
  const IDRPrice = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 2
  }).format(number).replace('Rp', 'IDR.')
  return IDRPrice
}
