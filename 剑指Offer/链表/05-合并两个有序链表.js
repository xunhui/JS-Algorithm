/**
 * 问题：输入两个递增排序的链表，合并这两个链表并使新链表中的结点仍然是按照递增排序的。
 */

/**
 * 思路1：直接依次比较，然后将更长链表的多出部分全部放到新链表后
 */

/**
 * 思路2：递归法
 */
function Merge(pHead1, pHead2) {
    if (pHead1 == null) {
        return pHead2
    }
    if (pHead2 == null) {
        return pHead1
    }
    if (pHead1.val <= pHead2.val) {
        pHead1.next = Merge(pHead1.next, pHead2)
        return pHead1
    } else {
        pHead2.next = Merge(pHead1, pHead2.next)
        return pHead2
    }
}