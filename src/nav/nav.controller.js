
import navData from './navData'
export default class navCtrl{
    constructor($http){
        'ngInject'
        Object.assign(this, {$http})
        this.navList = navData()
        this.fixedNav()
    }
    click() {
        console.log(this.navList)
    }

    fixedNav() {
        let nav = $('#top')
        nav.scroll( function() {
            console.log('22')
        }) 
    }
}