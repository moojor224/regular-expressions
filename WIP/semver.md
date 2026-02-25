```bnf
<valid semver> ::= <version core>
                 | <version core> "-" <pre-release>
                 | <version core> "+" <build>
                 | <version core> "-" <pre-release> "+" <build>

<version core> ::= <major> "." <minor> "." <patch>

<major> ::= <numeric identifier>

<minor> ::= <numeric identifier>

<patch> ::= <numeric identifier>

<pre-release> ::= <dot-separated pre-release identifiers>

<dot-separated pre-release identifiers> ::= <pre-release identifier>
                                          | <pre-release identifier> "." <dot-separated pre-release identifiers>

<build> ::= <dot-separated build identifiers>

<dot-separated build identifiers> ::= <build identifier>
                                    | <build identifier> "." <dot-separated build identifiers>

<pre-release identifier> ::= <alphanumeric identifier>
                           | <numeric identifier>

<build identifier> ::= <alphanumeric identifier>
                     | <digits>

<alphanumeric identifier> ::= <non-digit>
                            | <non-digit> <identifier characters>
                            | <identifier characters> <non-digit>
                            | <identifier characters> <non-digit> <identifier characters>

<numeric identifier> ::= "0"
                       | <positive digit>
                       | <positive digit> <digits>

<identifier characters> ::= <identifier character>
                          | <identifier character> <identifier characters>

<identifier character> ::= <digit>
                         | <non-digit>

<non-digit> ::= <letter>
              | "-"

<digits> ::= <digit>
           | <digit> <digits>

<digit> ::= "0"
          | <positive digit>

<positive digit> ::= "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"

<letter> ::= "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J"
           | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" | "S" | "T"
           | "U" | "V" | "W" | "X" | "Y" | "Z" | "a" | "b" | "c" | "d"
           | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l" | "m" | "n"
           | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
           | "y" | "z"
```

```ts
(() => {
    const letter = `[a-zA-Z]`;
    const positiveDigit = `[1-9]`;
    const digit = `(?:0|${positiveDigit})`;
    const digits = `${digit}+`;
    const nonDigit = `(?:${letter}|\\-)`;
    const identifierCharacter = `(?:${digit}|${nonDigit})`;
    const identifierCharacters = `(?:${identifierCharacter}+)`;
    const numericIdentifier = `(?:0|${positiveDigit}${digits}|${positiveDigit})`;
    const alphanumericIdentifier = `(?:${nonDigit}|${nonDigit}${identifierCharacters}|${identifierCharacters}${nonDigit}|${identifierCharacters}${nonDigit}${identifierCharacters})`;
    const buildIdentifier = `(?:${alphanumericIdentifier}|${digits})`;
    const preReleaseIdentifier = `(?:${alphanumericIdentifier}|${digits})`;
    const dotSeparatedBuildIdentifiers = `(?:${buildIdentifier}(?:\\.${buildIdentifier})*)`;
    const build = dotSeparatedBuildIdentifiers;
    const dotSeparatedPreReleaseIdentifiers = `${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*`;
    const preRelease = dotSeparatedPreReleaseIdentifiers;
    const patch = numericIdentifier;
    const minor = numericIdentifier;
    const major = numericIdentifier;
    const versionCore = `${major}\\.${minor}\\.${patch}`;
    const validSemver = `${versionCore}|${versionCore}\\-${preRelease}|${versionCore}+${build}|${versionCore}\\-${preRelease}\\+${build}`;
    console.log(validSemver);
})();
```
