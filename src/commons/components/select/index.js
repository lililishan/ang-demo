
import './select.styl'
const template = `
        <div>
            <label for=""></label>
            <ul ng-repeat="">
                <li></li>
            </ul>
        </div>
        `
export default angular.module('dropselect',[])
    .component('dropSelect', {
        template,
        replace: true,
        bindings: {

        }
    })