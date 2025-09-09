class Solution:
    def fullJustify(self, words, maxWidth):
        result = []
        wordIndex = 0
        
        while wordIndex < len(words):
            string = ""
            maxWords = self.calculatingMaxWords(words, maxWidth)
            wordIndex += maxWords
            
            
            if len(words) - maxWords > 0: #meaning this is not the last line
                spaceBetween = maxWords-1
                wordLengthWithoutSpaces = 0
                for index in range(maxWords):
                    wordLengthWithoutSpaces += len(words[index])
                spaceLeft = maxWidth - wordLengthWithoutSpaces

                extra = 0
               
                if spaceLeft % spaceBetween != 0:
                    extra = spaceLeft % spaceBetween
                
                mathFloor = spaceLeft // spaceBetween
                
                for wordIndex in range(maxWords):
                    if extra < 0:
                        string += words[wordIndex] + (" " * mathFloor) + (" " * extra)
                        extra = 0
                        spaceLeft = spaceLeft - extra - mathFloor
                    else:
                        if spaceLeft > 0:
                            string += words[wordIndex] + (" " * mathFloor)
                            spaceLeft = spaceLeft - mathFloor
                            print("in if")
                        else: #last word
                            string += words[wordIndex]
                            print("here in else")

                    

            else: #meaning this is the last line
                # left-justified
                for i in range(maxWords):
                    string += word[i]+ " "
                theRest = (maxWidth - len(string)) * " "
                string += theRest

            for word in range(maxWords):
                words.pop(0)

            result.append(string)
            return result


    def calculatingMaxWords(self, words, maxWidth):
        result = 0
        currentWidth = 0
        for word in words:
            currentWidth += len(word) + 1 #after each word is a space
            if currentWidth < maxWidth or currentWidth == maxWidth or currentWidth == maxWidth+1: #the or logic because the last word doesnt need to have the extra space
                result += 1
            else:
                return result
        
        return result
    

words = ["This", "is", "an", "example", "of", "text", "justification."]
maxWidth = 16
solution = Solution().fullJustify(words, maxWidth)
print(solution)