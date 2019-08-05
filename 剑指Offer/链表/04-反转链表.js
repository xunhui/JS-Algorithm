/**
 * 问题：输入一个链表，反转链表后，输出新链表的表头。
 */

/**
 * 思路：设置三个指针 `pre` `current` `next`，`next` 的作用是保存当前节点的下一个节点防止反转后断链
 */
function ReverseList(pHead)
{
    // write code here
    if (pHead == null || pHead.next == null)
        return pHead
    var pre = null
    var current = pHead

    while (current != null) {
        var next = current.next
        current.next = pre

        pre = current
        current = next
    }
    return pre
}