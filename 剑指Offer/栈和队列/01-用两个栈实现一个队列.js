/**
 * 即模拟元素先进先出
 * 入队：将元素进栈A
 * 出队：判断栈B是否为空，如果为空，则将栈A中所有元素pop，并push进栈B，栈B出栈；如果不为空，栈B直接出栈。
 */
var stack1 = [], stack2 = [];
function push(node)
{
    // write code here
    stack1.push(node);
}
function pop()
{
    // write code here
    if (stack2.length == 0) {
        while (stack1.length != 0) {
            stack2.push(stack1.pop())
        }
    }
    return stack2.pop();
}