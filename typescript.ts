/** matches any UUID with the following pattern: ########-####-####-####-############, where # is [a-zA-Z0-9] */
export const uuid = /[a-zA-Z0-9]{8}(?:-[a-zA-Z0-9]{4}){3}-[a-zA-Z0-9]{12}/;
/** matches hex RGB and RGBA values */
export const hexa = /^#(?:(?:[0-9a-f]{3}){1,2}|(?:[0-9a-f]{4}){1,2})$/;
/** matches hex RGB and RGBA values with name rgb and rgba groups */
export const autoHex = /^#(?:(?<rgb>[a-fA-F0-9]{3}|[a-fA-F0-9]{6})|(?<rgba>[a-fA-F0-9]{4}|[a-fA-F0-9]{8}))$/;
export const rgb = /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/;
export const rgba = /^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d?\.?\d+)\)$/;
export const hsl = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
export const hsla = /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/;
/** use this to split a console message into parts: object embeds, and raw text */
export const consoleEmbed = /(?<embed>%[oOdisfc])|(?<raw>(?:[^%]|%[^oOdisfc]|%$)+)/g;