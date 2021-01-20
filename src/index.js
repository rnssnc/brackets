module.exports = function check(str, bracketsConfig) {
    const bracketsPatterns = bracketsConfig.map((config) => config.join(""));

    function bracketRecursion() {
        for (const pattern of bracketsPatterns)
            if (str.includes(pattern))
                bracketRecursion(
                    (str = str.replace(pattern, "")),
                    bracketsPatterns
                );

        if (str.length == 0) return true;

        return false;
    }
    return bracketRecursion(str, bracketsPatterns);
};
