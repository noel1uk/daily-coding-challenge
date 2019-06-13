import { TestBed } from '@angular/core/testing';

import { PalindromeService } from './palindrome.service';

describe('PalindromeService', () => {

  let service: PalindromeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PalindromeService]
    });
    service = TestBed.get(PalindromeService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#isPalindrome()', () => {

    it('should return false when given "abc"', () => {
      expect(service.isPalindrome('abc')).toEqual(false);
    });

    it('should return false when given "abcd"', () => {
      expect(service.isPalindrome('abcd')).toEqual(false);
    });

    it('should return true when given "abcba"', () => {
      expect(service.isPalindrome('abcba')).toEqual(true);
    });

    it('should return true when given "Red rum, sir, is murder"', () => {
      expect(service.isPalindrome('Red rum, sir, is murder')).toEqual(true);
    });

    it('should return false when given "Red rum, sir, i murder"', () => {
      expect(service.isPalindrome('Red rum, sir, i murder')).toEqual(false);
    });

    it('should return false when given "daily"', () => {
      expect(service.isPalindrome('daily')).toEqual(false);
    });
  });

  describe('#convertString()', () => {
    it('removes all spaces', () => {
      expect(service.convertString('a b c')).toEqual(['a', 'b', 'c']);
    });
    it('replaces uppercase to lower case', () => {
      expect(service.convertString('ABc')).toEqual(['a', 'b', 'c']);
    });
    it('replaces all non alpha characters from string', () => {
      expect(service.convertString('a!@£$%^a&*()a')).toEqual(['a', 'a', 'a']);
    });
    it('converts string into array where each letter is a member', () => {
      expect(service.convertString('anj$£ df')).toEqual(['a', 'n', 'j', 'd', 'f']);
    });
  });

});
