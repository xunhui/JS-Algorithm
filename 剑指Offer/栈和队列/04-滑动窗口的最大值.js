/**
 * 问题：给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口 k 内的数字。滑动窗口每次只向右移动一位。 返回滑动窗口最大值。
 * 输入: nums = [2,3,4,2,6,2,5,1], 和 k = 3
 * 输出: [4,4,6,6,6,5] 
 */

/**
 * 思路1：直接暴力求解每一个窗口的最大值 时间复杂度 O(n*m)，n 为给定 nums 的长度，m 为滑动窗口大小
 */
function maxInWindows(num, size)
{
    // write code here
    var index = 0
    var maxVal = []
    var len = num.length
    if (size == 0 || size > len)
        return maxVal
    while (index < len - size + 1) {
        var win = []
        for (var i = index;i < index + size;i++) {
            win.push(num[i])
        }
        index++
        maxVal.push(Math.max(...win))
    }
    return maxVal
}

/**
 * 思路2：使用一个双端队列（队列两面都可进出），用于存储处于窗口中的值的下标，保证窗口头部元素永远是窗口最大值
 */