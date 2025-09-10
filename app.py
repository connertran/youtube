class Solution:
    def fullJustify(self, words: List[str], maxWidth: int) -> List[str]:
        def help (x, size):
            if len(x) == 1:
                return x[0] + ' ' * (maxWidth -size)

            spaces = (maxWidth -size) // (len(x) -1)
            extra = (maxWidth -size) % (len(x) -1) 

            ans = ''
            for i in range(len(x) -1):
                ans += x[i]
                ans += ' ' * (spaces + (1 if i < extra else 0))
            ans += x[-1]

            return ans

        ans = []
        line = [] 
        size = 0 
        for w in words:
            size += len(w) 
            line.append (w) 

            if len(line) -1 + size > maxWidth:
                ans.append (help(line[:-1], size -len(w))) 
                line = [line[-1]]
                size = len(w) 
            
        last = ' '.join (line)
        last += ' ' * (maxWidth -len(last)) 
        ans.append (last) 
        return ans