# 2dec

Lightweight library to convert numbers into strings with decimal points

## Usage

```js
import todec from "2dec";

// Basic functionality
todec(8866.51); // Expected result: 8,866.51
todec(10.50); // Expected result: 10.50

// More decimal points (defaults to 2 using logical disjunction)
todec(6.862, 2); // Expected result: 6.86
todec(6.862, 3); // Expected result: 6.862
todec(5324.819, 3); // Expected result: 5,324.819

// Locale (defaults to en-us using logical disjunction)
todec(123456.789, 2, "ar-EG") // Expected result: ١٢٣٬٤٥٦٫٧٩ (123,456.79)
```
