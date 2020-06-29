//Objective is to see whether a word can be broken down into words in a dictionary.

let s = "leetcode"
let words = ["leet", "code"]


//O(n^2) solution that uses dynamic programming.

let dp = new Array(s.length)

for (let i = 0; i < s.length; i++) {
    for (let word of words) {
        //Check if it's a prefix
        //If not a prefix, check whether the first letter is valid from the previous word
        //Finally, check whether the substring is actually the word
        if (i - (word.length - 1) == 0 || dp[i - word.length] && s.substring(i - (word.length - 1), i + 1) == word) {
            dp[i] = true
        }
    }
}

//Make sure all letters are accounted for.
return dp[dp.length - 1] !== undefined