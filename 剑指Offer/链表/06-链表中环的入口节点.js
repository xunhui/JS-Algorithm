/**
 * 问题：给一个链表，若其中包含环，请找出该链表的环的入口结点，否则，输出null。
 * 此问题的初级版本是：如何判断一个链表是一个循环链表（有环）
 */

/**
 * 思路：
 * 1. 设置一个快指针和一个慢指针，快指针每次走两步，慢指针每次走一步
 * 2. 若链表存在环，那么一定会在环中某个节点处相遇
 * 3. 相遇后将一个节点移动至头结点，两个节点均以1的速度向后移动，相遇点即为入口节点
 */
function EntryNodeOfLoop(pHead)
{
    if (pHead == null || pHead.next == null)
        return null

    var p1 = p2 = pHead
    while (p1 != null && p2 != null) {
        p1 = p1.next.next
        p2 = p2.next
        if (p1 == p2) {
            p1 = pHead
            while (p1 != p2) {
                p1 = p1.next
                p2 = p2.next
            }
            return p1
        }
    }
    return null
}