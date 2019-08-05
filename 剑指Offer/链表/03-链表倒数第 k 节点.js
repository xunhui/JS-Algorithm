/**
 * 问题：输入一个链表，输出该链表中倒数第k个结点。
 */

/**
 * 思路1：遍历两遍，第一遍得到链表长度，然后从头结点开始往后走 `L - k` 个节点即可
 */
function FindKthToTail(head, k)
{
    // write code here
    var temp = head;
    var count = 0;
    while (head != null) {
        head = head.next;
        count++;
    }
    if (k > count)
        return null;
    for (var i = 1;i <= count-k;i++) {
        temp = temp.next;
    }
    return temp;
}

/**
 * 思路2：遍历一遍
 * 1. 设置两个指针，先让指针1向后走 `k` 步后停止
 * 2. 两个指针同时向后移动，当指针1为空时，指针2即指向倒数第k个节点
 */
function FindKthToTail(head, k)
{
    // write code here
    //头结点为空
    if (!head)
        return null 
    var p1 = head, p2 = head
    while (k > 0 && p1 != null) {
        p1 = p1.next
        k--
    }
    //k 太大
    if (k > 0)
        return null

    while (p1 != null) {
        p1 = p1.next
        p2 = p2.next
    }
    return p2
}