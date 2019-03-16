export function getLetterMatchCount(guessedWord, secretWord){
    const secretLetterSet = new Set(secretWord.split(''));
    const guessLetterWord = new Set(guessedWord.split(''));
    return [...secretLetterSet].filter(letter=>guessLetterWord.has(letter)).length;
}