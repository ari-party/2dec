/**
 * @param {Number} number
 * @param {Number} decimals *
 * @param {Intl.Locale} locale *
 * @returns {String}
 */
export default function todec(number, decimals, locale) {
	if (!number) {
		throw new Error("Missing number argument");
	}

	if (typeof decimals !== number) decimals = 0;

	const NumberFormat = Intl.NumberFormat(locale || "en-us", {
		minimumFractionDigits: decimals,
		maximumFractionDigits: decimals,
	});

	return NumberFormat.format(number);
}
