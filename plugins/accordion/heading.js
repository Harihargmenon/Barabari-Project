function html ( string ) {
  return {
    type: 'html',
    value: string
  };
};

function heading ( node, parent ) {
  const startNode = parent.children.indexOf( node ) + 1;
  let endNode = parent.children.length;

  for ( let i = startNode;i < parent.children.length;i++ ) {
    if (
      parent.children[ i ].type === 'heading' &&
      parent.children[ i ].depth <= 3
    ) {
      endNode = i;
      break;
    };
  };

  parent.children = parent.children
    // -1 to remove the md heading itself
    .slice( 0, startNode - 1 )
    .concat(
      html( '<details><summary class="heading">' )
    ) // start wrap
    .concat( node.children ) // add back heading
    .concat(
      html( '</summary><div class="wrapped">' )
    ) // end heading
    // add back contents
    .concat( parent.children.slice( startNode, endNode ) )
    .concat(
      html( '</div></details>' )
    ) // end wrap
    .concat( parent.children.slice( endNode ) );
}

export default heading;