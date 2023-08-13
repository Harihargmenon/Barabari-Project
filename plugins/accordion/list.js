function metaLink ( node ) {
  const url = node.children[ 0 ].url;
  console.log( "Transforming: ", url );
  try {
    new URL( url );
    node.children[ 0 ] = {
      type: 'html',
      value: /*html*/`<a href="${ url }" class="f d-b blur rpm-5 meta">
      <img class="rx5" src="&icon;" alt="&title;" />
      <div>
        <div class="fw7">&title;</div>
        <div class="desc">&desc;</div>
      </div>
      </a>`
    };
  } catch ( error ) { }
}

function list ( node, parent ) {
  node.children.forEach( ( item ) => {
    if ( item.children && item.children.length > 0 && item.children[ 0 ].type === 'paragraph' ) {
      let p = item.children[ 0 ]
      if ( !p || p.children.length < 1 ) return;

      console.log( "List item: ", p );
      if ( p.children[ 0 ].type === 'link' )
        metaLink( p );
    }
  } );
}

export default list;