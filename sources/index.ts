import Application from './Application/Application' ;

const application = new Application() ;

console.log( 'hoi from index.ts' );
const rootNode
    = document
    .body
    .querySelector( '#root' )
;
if (rootNode)
    rootNode
    .appendChild( application.html() )
;
