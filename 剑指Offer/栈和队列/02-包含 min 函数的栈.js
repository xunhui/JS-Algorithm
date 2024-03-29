/**
 *  问题：定义栈的数据结构，请在该类型中实现一个能够得到栈中所含最小元素的min函数（时间复杂度应为O（1））
 
 *  思路：
    1.定义两个栈，一个栈用于存储数据，另一个栈用于存储每次数据进栈时栈的最小值.

    2.每次数据进栈时，将此数据和最小值栈的栈顶元素比较，将二者比较的较小值再次存入最小值栈.

    3.数据栈出栈，最小值栈也出栈。

    4.这样最小值栈的栈顶永远是当前栈的最小值。
 * */
var dataStack = [], minStack = []

function push(val) {
    dataStack.push(val)
    if (minStack.length === 0 ||  val < min()){
        minStack.push(val)
    } else {
        minStack.push(min())
    }
}

function pop() {
    minStack.pop()
    return dataStack.pop()
}

function min()
{
    var length = minStack.length;
    return length > 0 && minStack[length-1]
}