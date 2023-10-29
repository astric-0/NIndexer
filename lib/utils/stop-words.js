const stopWords = {
    'a': new Set(["a", "above", "actually", "about", "after", "again", "against", "all", "almost", "also", "although", "always", "am", "an", "and", "any", "are", "as", "at"]),
    'b': new Set(["be", "became", "become", "because", "been", "before", "being", "below", "between", "both", "but", "by"]),
    'c': new Set(["can", "could"]),
    'd': new Set(["did", "do", "does", "doing", "down", "during"]),
    'e': new Set(["each", "either", "else"]),
    'f': new Set(["few", "for", "from", "further"]),
    'g': new Set(["get", "got"]),
    'h': new Set(["had", "has", "have", "having", "he", "he'd", "he'll", "hence", "he's", "her", "here", "here's", "hers", "herself", "him", "himself", "his", "how", "how's"]),
    'i': new Set(["i", "i'd", "i'll", "i'm", "i've", "if", "in", "into", "is", "it", "it's", "its", "itself"]),
    'j': new Set(["just"]),
    'k': new Set([]),
    'l': new Set(["let's", "lets"]),
    'm': new Set(["may", "maybe", "me", "might", "mine", "more", "most", "must", "my", "myself"]),
    'n': new Set(["neither", "nor", "not", "no"]),
    'o': new Set(["of", "oh", "on", "once", "only", "ok", "or", "other", "ought", "our", "ours", "ourselves", "out", "over", "own"]),
    'p': new Set([]),
    'q': new Set([]),
    'r': new Set([]),
    's': new Set(["same", "she", "she'd", "she'll", "she's", "should", "so", "some", "such"]),
    't': new Set(["than", "that", "that's", "the", "their", "theirs", "them", "themselves", "then", "there", "there's", "these", "they", "they'd", "they'll", "they're", "they've", "this", "those", "through", "to", "too"]),
    'u': new Set(["under", "untill", "up"]),
    'v': new Set(["very"]),
    'w': new Set(["was", "we", "we'd", "we'll", "we're", "we've", "were", "what", "what's", "when", "whenever", "when's", "where", "whereas", "wherever", "where's", "whether", "which", "while", "who", "whoever", "who's", "whose", "whom", "why", "why's", "will", "with", "within", "would"]),
    'x': new Set([]),
    'y': new Set(["yes", "yet", "you", "you'd", "you'll", "you're", "you've", "your", "yours", "yourself", "yourselves"]),
    'z': new Set([])
}

function isStopWord(word) {
    return !word || stopWords[word[0]]?.has(word);
}

export { isStopWord, stopWords };