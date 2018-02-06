export function createNodeMock(tagName: string, parent: any, content?: string) {
  const mockNode = {
    content,
    tagName,
    parentNode: parent,
    style: {},
    children: [] as any[],
    appendChild: (node: any) => {
      mockNode.children.push(node);
      node.parentNode = mockNode;
    },
    scrollHeight: 0,
    textContent() {
      if (mockNode.children.length > 0) {
        return mockNode.children
          .map((child) => child.textContent())
          .join('');
      }
      return mockNode.content || '';
    },
    dispatchEvent: () => {},
  };

  return mockNode;
}
