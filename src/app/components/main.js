import riot from 'riot';
import componentFactory from '../component-factory';

import topsection from './top-section';

componentFactory.createComponent('main', `

    <top-section></top-section>





<style>
    main {
        display: block;

    }
</style>
 
 `,
 function(opts) {
    this.on('mount', () => {
        console.log("Main mounted");
    });

    this.dispatcher.on('main_state_updated', () => {
        this.update();
    });
});
