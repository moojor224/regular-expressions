const parts = {
    hex: "(?:2([0-4]\\d|5[0-5])|1\\d\\d|[1-9]\\d|\\d)",
    comma: "\\s*,\\s*",
}
console.log(new RegExp(`rgb\\(\\s*${parts.hex}(?:${parts.comma}${parts.hex}){2}\\s*\\)`));
