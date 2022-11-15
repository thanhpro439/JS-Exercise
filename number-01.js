// NUMBER-01: Kiểm tra số tăng dần 0 < n < 1000000
// '1234'
// '1' '2' '3' '4'
export function isIncreasingNumber(n) {
  if (n < 0 || n >= 1000000) return false;
  if (n < 10) return false;

  const stringN = n.toString();
  for (let i = 1; i < stringN.length; i++) {
    if (stringN.charAt(i) <= stringN.charAt(i - 1)) return false;
  }

  return true;
}
