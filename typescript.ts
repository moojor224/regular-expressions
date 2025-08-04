/** matches any UUID with the following pattern: ########-####-####-####-############, where # is [a-zA-Z0-9] */
export const uuid = /[a-zA-Z0-9]{8}(?:-[a-zA-Z0-9]{4}){3}-[a-zA-Z0-9]{12}/;
/** matches hex RGB and RGBA values */
export const hex = /#(?:(?:[0-9a-f]{3}){1,2}|(?:[0-9a-f]{4}){1,2})/;
/** matches hex RGB and RGBA values with name rgb and rgba groups */
export const namedHex = /#(?:(?<rgb>(?:[a-fA-F0-9]{3}){1,2})|(?<rgba>(?:[a-fA-F0-9]{4}){1,2}))/;
/** matches any rgb(###, ###, ###) value */
export const rgb = /rgb\(\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)(?:\s*,\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)){2}\s*\)/;
/** matches any rgb(###, ###, ###) value, but with named capture groups (r, g, and b) */
export const namedRgb = /rgb\(\s*(?<r>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<g>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<b>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*\)/;
export const rgba = /rgba\(\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)(?:\s*,\s*(?:2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)){3}\s*\)/;
export const namedRgba = /rgba\(\s*(?<r>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<g>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<b>2(?:[0-4]\d|5[0-5])|1\d\d|[1-9]\d|\d)\s*,\s*(?<a>1(?:\.0+)?|0?\.\d+)\s*\)/;
export const hsl = /^hsl\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%\)$/;
export const hsla = /^hsla\((\d{1,3}),\s*(\d{1,3})%,\s*(\d{1,3})%,\s*(\d?\.?\d+)\)$/;
/** use this to split a console message into parts: object embeds, and raw text */
export const consoleEmbed = /(?<embed>%[oOdisfc])|(?<raw>(?:[^%]|%[^oOdisfc]|%$)+)/g;
export const phoneNumber = /(?:(?:\+|00)?\d{1,3})?[-.\s]?(?:(?:\(\d{1,4}\)|\d{1,4})[-.\s]?){1,4}\d{1,4}(?:[-.\s]?\d{1,4})?/g;
// start with letter, underscore, $
// can contain numbers
// no reserved keywords: break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|false|finally|for|function|if|import|in|instanceof|new|null|return|super|switch|this|throw|true|try|typeof|var|void|while|with
// async/module keywords: await
// future reserved keywords: enum
// strict mode keywords:
// let|static|yield
// future keywords: implements|interface|package|private|protected|public
// specials: arguments|from
const varBegin = "(?<=[^a-zA-Z_$\\d]|^)(?!(?:break|case|catch|class|const|continue|debugger|default|delete|do|else|export|extends|false|finally|for|function|if|import|in|instanceof|new|null|return|super|switch|this|throw|true|try|typeof|var|void|while|with|await|enum";
const strictOnly = "|let|static|yield|implements|interface|package|private|protected|public|arguments|from";
const varEnd = ")[^a-zA-Z_$\d])[a-zA-Z_$][a-zA-Z_$\d]*";
/** matches a valid javascript variable name (no strict mode) */
export const variableName = new RegExp(varBegin + varEnd, "g");
/** matches a valid javascript variable name (strict mode) */
export const strictVariableName = new RegExp(varBegin + strictOnly + varEnd, "g");