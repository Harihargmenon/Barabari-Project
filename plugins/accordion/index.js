import heading from "./heading.js";
import listing from "./list.js";
import { visit } from 'unist-util-visit';

function wrapper () {
  return transform;

  function transform ( tree ) {
    visit( tree, 'heading', head );
    visit( tree, 'list', list )
  }

  function list ( node, _, parent ) {
    if ( node.children.length > 0 )
      listing( node, parent );
  }


  function head ( node, _, parent ) {
    const d = node.depth;
    const l = node.children.length;
    if ( d === 3 && l > 0 )
      heading( node, parent );
  }
}; export default wrapper;