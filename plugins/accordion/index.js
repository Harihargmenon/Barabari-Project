import heading from "./heading.js";
import { visit } from 'unist-util-visit';

function wrapper () {
  return transform;

  function transform ( tree ) {
    visit( tree, 'heading', visitor );
  }

  function visitor ( node, _, parent ) {
    const { type: t, depth: d } = node;
    const l = node.children.length;
    if ( d === 3 && t === 'heading' && l > 0 ) {
      heading( node, parent );
    }
  }
}; export default wrapper;