export const debounce = function ( func, wait, immediate ) {
    let timeout;
    return () => {
        let context = this,
            args = arguments;
        let later = function () {
            timeout = null;
            if ( !immediate ) func.apply( context, args );
        };
        let callNow = immediate && !timeout;
        clearTimeout( timeout );
        timeout = setTimeout( later, wait );
        if ( callNow ) func.apply( context, args );
    };
};