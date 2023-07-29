const { round: rd, min, max, abs } = Math;

function interpOne ( from, to, parts ) {
  from = parseInt( from, 16 );
  to = parseInt( to, 16 );

  const step = abs( from - to ) / ( parts - 1 );
  const sign = from < to ? 1 : -1;

  const vals = new Array( parts );
  for ( let i = 0;i < parts;i++ ) {
    const interp = rd( from + i * step * sign )
      .toString( 16 )
      .toUpperCase();

    vals[ i ] = interp;
  };

  return vals;
}

export function interpolate ( from, to, parts ) {
  parts = max( min( parts - 1, 5 ), 2 );
  console.log( `Interpolating ${ from } to ${ to } in ${ parts + 1 } parts` );

  from = from.replace( /^#/, '' ).split( '' );
  to = to.replace( /^#/, '' ).split( '' );

  const result = [];
  for ( let i = 0;i < from.length;i++ ) {
    result.push( interpOne( from[ i ], to[ i ], parts + 1 ) );
  };

  const colors = new Array( parts + 1 );
  for ( let i = 0;i < parts + 1;i++ ) {
    colors[ i ] = "";
    for ( let j = 0;j < from.length;j++ ) {
      colors[ i ] += result[ j ][ i ];
    };
  };

  return colors;
};