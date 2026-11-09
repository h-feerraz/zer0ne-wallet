export const balanceColor = (balance: number): 'red' | undefined => {
  if (balance < 0) return 'red'
}
