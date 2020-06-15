import DateComboBox from '../../node_modules/elix/define/DateComboBox';

import '../styles/generic.scss' ;

class Application {
    html = function(): HTMLElement {
        console.log('hello from Application.html()');
        const content = document.createElement('h2');
        content.innerHTML = 'Hoi';
        const elixTest = new DateComboBox();//document.createElement('elix-date-combo-box');
        elixTest.date = new Date();// = '1 Jan 2020';
        content.appendChild( elixTest );
        return content ;
    };
}

export default Application ;
