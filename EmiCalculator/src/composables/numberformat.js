// composables/useFormatter.js
export function useNumberFormatter() {
  const thousandSeparator = (input, withSymbol = false) => {
    if (input === null || input === undefined) return input;

    // Convert to string
    let value = input.toString();

    // Handle negative numbers
    const isNegative = value.startsWith('-');
    if (isNegative) value = value.slice(1);

    // Split into integer and decimal parts
    const [integerPart, decimalPart] = value.split('.');

    // Remove non-digits from integer part
    const digits = integerPart.replace(/\D/g, '');

    // Indian formatting for integer part
    const lastThree = digits.slice(-3);
    const rest = digits.slice(0, -3);
    const formattedInteger = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + (rest ? "," : "") + lastThree;

    // Combine with decimal if exists
    const result = formattedInteger + (decimalPart ? `.${decimalPart}` : '');

    // Add ₹ if needed
    const finalValue = (isNegative ? '-' : '') + (withSymbol ? '₹' : '') + result;

    return finalValue;
  };

  return {
    thousandSeparator,
  };
}
