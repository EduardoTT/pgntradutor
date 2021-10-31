function translatePGN() {
    const from = document.getElementById('from')
    const to = document.getElementById('to')

    let fromString = from.value
    let isBetweenBrackets = false
    for (let i=0; i<fromString.length; i++) {
        let char = fromString.charAt(i)
        if (char === '[') {
            isBetweenBrackets = true
        } else if (char === ']') {
            isBetweenBrackets = false
        } else if (!isBetweenBrackets) {
            char = char
                .replace('R', 'K')
                .replace('T', 'R')
                .replace('C', 'N')
                .replace('D', 'Q')
            fromString = fromString.substring(0, i) + char + fromString.substring(i + 1)
        }
    }

    to.value = fromString
}