
/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search/description/
 *
 * algorithms
 * Medium (30.23%)
 * Total Accepted:    248.9K
 * Total Submissions: 822.2K
 * Testcase Example:  '[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]]\n"ABCCED"'
 *
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * Example:
 * 
 * 
 * board =
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * Given word = "ABCCED", return true.
 * Given word = "SEE", return true.
 * Given word = "ABCB", return false.
 * 
 * 
 */

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if(board==null||board.length==0||board[0].length==0){
        return false;
    }
    
    if(word==null||word.length===0){
        return true;
    }
    
    const w=word.split('');
    
    for(let i = 0; i<board.length; i++){
        for(let j = 0;j<board[i].length; j++){
            if(dfs(board, w, i, j, 0)){
                return true;
            }
        }
    }
    return false;    
};

function dfs(board, word, i, j, checkIndex){

    if(checkIndex >= word.length){
        return true;
    }
    
    if(i<0||i>=board.length||
       j<0||j>=board[0].length||
       board[i][j]!=word[checkIndex]){
        return false;
    }
    //use ~ instead of xor and visited matrix
    board[i][j]='#';

    let match=dfs(board,word,i+1,j,checkIndex+1)
        ||dfs(board,word,i-1,j,checkIndex+1)
        ||dfs(board,word,i,j-1,checkIndex+1)
        ||dfs(board,word,i,j+1,checkIndex+1);

    board[i][j]=word[checkIndex];
    
    return match;
}

