/**
 * 问题1：给定单链表的头指针和要删除的指针节点，在O(1)时间内删除该节点。
 */

 /**
  * 思路：
  * 1. 正常删除一个节点需要知道该节点的前驱节点，时间复杂度为O(n)
  * 2. 要想在O(1)的时间复杂度删除该节点，实际是将该节点通过复制把其后的节点信息转移到该节点上，看起来就像删除了该节点
  * 
  * 节点位置有三种情况：
  * - 不是尾结点，采用上述方法
  * - 是尾结点同时也是头结点（只有一个节点），直接置空
  * - 是尾结点且不是头结点，需要遍历至末尾再删除 O(n)
  * 
  * T(n) = (O(N) + O(1) * (n - 1)) / n = O(1)
  */
var deleteNode = function (head, node) {
    if (node.next) {
        //把 node 后面的节点信息赋值到 node 上，删除后面节点
        node.val = node.next.val
        node.next = node.next.next
    } else if (node == head) {
        head = null
    } else {
        var p = head
        while (p.next != node) {
            p = p.next
        }
        p.next = null
    }
}

/**
 * 问题2：给定一个排序的链表，删除链表中重复的节点，重复的结点不保留，返回链表头指针
 */

/**
 * 思路1：由于重复的节点要删除，所以需要 hack 一个头结点，设置两个指针 `pre` 和 `pHead`
 */
function deleteDuplication(pHead)
{
    // write code here
    if (pHead == null || pHead.next == null)
        return pHead
         
    var first = new ListNode(-1)
    first.next = pHead
     
    var pre = first
    while(pHead != null && pHead.next != null) {
        if (pHead.val != pHead.next.val) {
            pre = pHead
            pHead = pHead.next
        } else {
            var val = pHead.val
            while (pHead != null && pHead.val == val) {
                pHead = pHead.next
            }
            pre.next = pHead
        }
    }
    return first.next
}

/**
 * 思路2：链表是排好顺序的，所以重复元素都会相邻出现 递归链表
 * 1. 当前节点或当前节点的next为空，返回该节点
 * 2. 当前节点是重复节点，返回后面第一个不重复的节点
 * 3. 当前节点是不重复节点，将当前节点的 next 赋值为下一个不重复的节点
 */
function deleteDuplication(pHead)
{
    if (!pHead || !pHead.next) {
        return pHead
    } 
    //当前节点是重复节点
    if (pHead.val == pHead.next.val) {
        var p = pHead.next
        while (p.next != null && p.val == p.next.val)
            p = p.next
        return deleteDuplication(p.next)
    } else {
        pHead.next = deleteDuplication(pHead.next)
        return pHead
    }
}