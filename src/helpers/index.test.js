import {getLetterMatchCount} from './'

describe('getLetterMatchCount', ()=>{
    const secretWord = 'party';
    test('retunrs 0 count when no matchng lettr found',()=>{
        const matchCount = getLetterMatchCount('bones',secretWord)
        expect(matchCount).toBe(0);
    })

    test('returns 3 when 3 matched letters found',()=>{
        const matchCount = getLetterMatchCount('pargh',secretWord)
        expect(matchCount).toBe(3);
    });

    test('return correct count when duplicate letters found',()=>{
        const matchCount = getLetterMatchCount('pparg',secretWord)
        expect(matchCount).toBe(3);
    });
});