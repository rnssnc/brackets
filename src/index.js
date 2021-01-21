module.exports = function check(str, bracketsConfig) {
    const bracketsPatterns = bracketsConfig.map((config) => config.join(""));

    function bracketRecursion() {
        if (str.length == 0) return true;
        for (const pattern of bracketsPatterns)
            if (str.includes(pattern))
                return bracketRecursion(
                    (str = str.replace(pattern, "")),
                    bracketsPatterns
                );

        return false;
    }
    return bracketRecursion(str, bracketsPatterns);
};
