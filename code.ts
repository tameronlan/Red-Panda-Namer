figma.showUI(__html__, { width: 800, height: 648});

figma.ui.onmessage = msg => {
  if (msg.type === 'create-art-board') {
    const nodes: SceneNode[] = [];

    let startY = 0
    let spaceX = 100
    let spaceY = 100

    figma.currentPage.children.forEach(child => {
      let bottomY = child.height + child.y

      if (startY < bottomY) { startY = bottomY + spaceY }
    })

    msg.list.forEach(config => {
      let width = +config.width
      let height = +config.height

      config.names.forEach((name, index) => {
        const artBoard = figma.createFrame();

        artBoard.resizeWithoutConstraints(width, height);
        artBoard.x = index * (width + spaceX);
        artBoard.y = +startY;
        artBoard.fills = [{type: 'SOLID', color: {r: 1, g: 1, b: 1}}];
        artBoard.name = name

        figma.currentPage.appendChild(artBoard);

        nodes.push(artBoard);
      })

      startY += height + spaceY
    })

    figma.currentPage.selection = nodes;

    figma.viewport.scrollAndZoomIntoView(nodes);
  }

  figma.closePlugin();
};
