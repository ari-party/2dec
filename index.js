export default function todec(number, decimals = 2, locale = "en-us") {
  if (typeof number !== "number") throw new Error("Invalid number argument");

  const NumberFormat = Intl.NumberFormat(locale, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return NumberFormat.format(number);
}
