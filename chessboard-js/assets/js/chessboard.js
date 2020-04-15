function selectNode(ele) {
    return document.getElementById(ele);
}
function createNode(element) {
    return document.createElement(element);
}
function append(parent, el) {
    return parent.appendChild(el);
}

for (i = 0; i < 8; i++) {

    const mydiv = selectNode("chessBoard");
    let list = createNode('ul');
    append(mydiv, list);

    for (j = 0; j < 8; j++) {
        let listitem = createNode('li');
        append(list, listitem);
    }
}
















