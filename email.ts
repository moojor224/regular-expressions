import { regex } from "regex";
import { recursion } from "regex-recursion";

/*
recursion: \g<group-name&R=20>?

ABNF notation notes:

a*bRULE => RULE{a,b}
<a>RULE => RULE{a}
1*RULE => RULE{1,} => RULE+
[RULE] => RULE?

*/

function decToHex(dec: number): string {
    return dec.toString(16).padStart(2, '0').toUpperCase();
}

// core ABNF definitions
const ALPHA = "[a-zA-Z]";
const BIT = "[01]";
const CHAR = "[\\x01-\\x7F]";
const CR = "\\x0D";
const LF = "\\x0A";
const CRLF = `${CR}${LF}`;
const CTL = "[\\x00-\\x1F\\x7F]";
const DIGIT = "[0-9]";
const DQUOTE = `"`;
const HEXDIG = `(?:${DIGIT}|[ABCDEF])`;
const HTAB = `\\x09`;
const SP = `\\x20`;
const WSP = `(?:${SP}|${HTAB})`;
const LWSP = `(?:${WSP}|${CRLF}${WSP})`;
const OCTET = "[\\x00-\\xFF]";
const VCHAR = "[\\x21-\\x7E]";

// email spec
const FWS = `(?:${WSP}*${CRLF})?${WSP}`;
const ctext = `[\\x21-\\x27\\x2A-\\x5B\\x5D-\\x7E]`;
const quoted_pair = `(?:\\\\(${VCHAR}|${WSP}))`;
const ccontent = `(?:${ctext}|${quoted_pair}|\\g<comment&R=20>)`;
const comment = `(?<comment>\\((?:${FWS}${ccontent})*${FWS}?\\))`;
const CFWS = `(?:(?:(?:${FWS}?${comment})+${FWS}?)|${FWS})`;
const qtext = `[\\x21\\x$23-\\x5B\\x5D-\\x7E]`;
const qcontent = `(?:${qtext}|${quoted_pair})`;
const quoted_string = `(?:${CFWS}?${DQUOTE}(?:${FWS}?${qcontent})*${FWS}?${DQUOTE}${CFWS}?)`;
const specials = `[\\(\\)<>\\[\\]:;@\\\\,\\.${DQUOTE}]`;
const atext = `(?:${ALPHA}|${DIGIT}|[!#$%&'\\*\\+\\-\\/=\\?\\^_\`\\{\\|\\}~])`;
const dot_atom_text = `(?:${atext}+(?:\\.${atext}+)+)`;
const dot_atom = `(?:${CFWS}?${dot_atom_text}${CFWS}?)`;
const atom = `(?:${CFWS}?${atext}+${CFWS}?)`;
const dtext = `[\\x21-\\x5A\\x5E-\\x7E]`;
const domain_literal = `(?:${CFWS}?\\[(?:${FWS}?${dtext})*${FWS}?\\]${CFWS}?)`;
const domain = `(?:${dot_atom}|${domain_literal})`;
const local_part = `(?:${dot_atom}|${quoted_string})`;
let m1 = 0, m2 = 0;
const addr_spec = `(?:${local_part}@${domain})`.replaceAll("?<comment>", function () {
    return `?<comment${m1++}>`;
}).replaceAll("\\g<comment&R=20>", function () {
    return `\\g<comment${m2++}&R=20>`;
});



const email_regex = regex({ flags: 'g', plugins: [recursion] })`${addr_spec}`;
console.log(email_regex.source);
console.log("moojor224@gmail.com".match(email_regex));