'use strict'
import riot from 'riot';

import Store from './store';

export default class MainStore extends Store {
    constructor() {
        super();
        console.log("Init MainStore");

        this.on("login_pressed", (state) => {
            this.state = 'login';
            this.trigger("main_state_updated", "login");
        });

        this.on("main_loaded", (fruit) => {
            this.state ='mall';
            this.trigger("main_state_updated", "mall");
        });
    }     

};

