
import navData from './navData'
export default class navCtrl{
    constructor($http){
        'ngInject'
        Object.assign(this, [$http])
        this.navList = navData()
    }
    click() {
        console.log(this.navList)
    }
}