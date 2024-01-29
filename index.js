export default function todec(number, decimals = 2, locale) {
  if (typeof number !== "number") throw new Error("Inavlid number argument");

  const NumberFormat = Intl.NumberFormat(locale ?? "en-us", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });

  return NumberFormat.format(number);
}
