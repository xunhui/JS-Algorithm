/**
 * 问题：输入两个整数序列，第一个序列表示栈的压入顺序，请判断第二个序列是否可能为该栈的弹出顺序。
 * 例如序列1,2,3,4,5是某栈的压入顺序，序列4,5,3,2,1是该压栈序列对应的一个弹出序列，但4,3,5,1,2就不可能是该压栈序列的弹出序列。
 */

/**
 * 思路：
 * 1. 构建一个辅助栈
 * 2. 设置一个索引idx，记录`popV`（出栈序列）栈顶的位置
 * 3. 将`pushV`（压入顺序）中的数据依次入栈
 * 4. 当辅助栈栈顶元素和压`popV`栈顶元素相同时，辅助栈出栈。每次出栈索引`idx+1`
 */
function IsPopOrder(pushV, popV)
{
    // write code here
    var stack = []//辅助栈
    var index = 0//此时出栈序列 popV 的栈顶
    for (var i = 0;i < pushV.length;i++) {
        stack.push(pushV[i])
        while (stack.length > 0 && stack[stack.length - 1] == popV[index]) {
            stack.pop()
            index++
        }
    }
    return stack.length == 0 ? true : false
}