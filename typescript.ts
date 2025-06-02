/** matches any UUID with the following pattern: ########-####-####-####-############, where # is [a-zA-Z0-9] */
export const uuid = /[a-zA-Z0-9]{8}(?:-[a-zA-Z0-9]{4}){3}-[a-zA-Z0-9]{12}/;
/** matches hex RGB and RGBA values */
export const hexa = /^#(?:(?:[0-9a-f]{3}){1,2}|(?:[0-9a-f]{4}){1,2})$/;
/** matches hex RGB and RGBA values with name rgb and rgba groups */
export const autoHex = /^#(?:(?<rgb>(?:[a-fA-F0-9]{3}){1,2})|(?<rgba>(?:[a-fA-F0-9]{4}){1,2}))$/;
/** matches any rgb(###, ###, ###) value */
export const rgb = /rgb\(\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)(?:\s*,\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)){2}\s*\)/;
/** matches any rgb(###, ###, ###) value, but with named capture groups (r, g, and b) */
export const namedRgb = /rgb\(\s*(?<r>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<g>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<b>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*\)/;
export const rgba = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d?\.?\d+)\)$/;
export const hsl = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
export const hsla = /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/;
/** use this to split a console message into parts: object embeds, and raw text */
export const consoleEmbed = /(?<embed>%[oOdisfc])|(?<raw>(?:[^%]|%[^oOdisfc]|%$)+)/g;