/**
 * 问题：输入一个链表，按链表值从尾到头的顺序返回一个ArrayList
 */

function printListFromTailToHead(head)
{
    const array = [];
    while (head){
        array.unshift(head.val);
        head = head.next;
    }
    return array;
}