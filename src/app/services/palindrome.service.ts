import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {

  constructor() { }

  isPalindrome(word: string): boolean {
    const letters: string[] = this.convertString(word);
    const letterCounts: LetterCount[] = [];
    letters.forEach(letter => {
      const currentLetterCount = letterCounts.find(letterCount => letterCount.letter === letter);
      if (currentLetterCount === undefined) {
        letterCounts.push(new LetterCount(letter));
      } else {
        currentLetterCount.count++;
      }
    });
    const oddCounts = letterCounts.filter(letterCount => letterCount.count % 2 !== 0);
    const isPalindrome = oddCounts.length > 1 ? false : true;
    return isPalindrome;
  }

  convertString(sentance: string): string[] {
    return sentance.replace(/[\W_]+/g, '').toLowerCase().split('');
  }
}

export class LetterCount {

  constructor(letter: string) {
    this.letter = letter;
    this.count = 1;
  }
  letter: string;
  count: number;
}
