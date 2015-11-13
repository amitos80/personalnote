/**
 * Created by amit on 30/10/15.
 */


import riot from 'riot';
import miscUtil from '../util/misc';
import {transform} from 'legofy';
import componentFactory from '../component-factory';


componentFactory.createComponent('top-section', `

<div class="top-section">
    <div class="ui grid">

        <div class="two wide column"></div>

        <div class="four wide column">
            <img class="ui  avatar image profile-image" riot-src="{imageUrl}"/>
        </div>

        <div class="nine wide column">
            <div class="intro-text">{introText}</div>
        </div>

        <div class="two wide column"></div>

    </div>
</div>




`,
function(opts) {


    this.on('update', () => {

    })


    this.on('mount', () => {
        console.log("top-section mounted");
        this.imageUrl = "/images/profile_image.jpg";
        this.introText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

        this.update();

        if(miscUtil.isBrowser()){
            let imgProfile = $(this.root).find('.profile-image');
            transform(imgProfile[0], { factor: .03 });
        }

});



});

