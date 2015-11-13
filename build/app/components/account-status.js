import riot from 'riot';
import componentFactory from '../component-factory';

componentFactory.createComponent('account-status', `

 <p>Account status:
    <span if="{stores.auth.user == null}">
         <a href="/login">Please Login</a>
    </span>
    <span if="{stores.auth.user != null}">
        Logged in as {stores.auth.user.username}
    </span>
 </p>
 
 `,
 function(opts) {
    this.dispatcher.on("login_success", (user) => {
        this.update();
    });
});


