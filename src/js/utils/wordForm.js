export default function wordForm(varWords, quantity) {
  return varWords[
    (quantity %= 100, quantity < 20 && quantity > 4)
      ? 2 : [2, 0, 1, 1, 1, 2][(quantity %= 10, quantity < 5)
        ? quantity : 5]
  ];
}
