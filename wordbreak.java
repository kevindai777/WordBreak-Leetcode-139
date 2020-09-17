//Java Solution

class Solution {
    public boolean wordBreak(String s, List<String> wordDict) {
        boolean[] dp = new boolean[s.length()];
        Arrays.fill(dp, false);
        
        for (int i = 0; i < s.length(); i++) {
            for (String word : wordDict) {
                if ((i - (word.length() - 1) == 0 || (i - word.length() >= 0 && dp[i - word.length()] == true)) && s.substring(i - (word.length() - 1), i + 1).equals(word)) {
                    dp[i] = true;
                }
            }
        }
        
        return dp[dp.length - 1] == true ? true : false;
    }
}