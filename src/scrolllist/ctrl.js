

import listData from './reslist'

export default class scroListCtrl {
  constructor () {
    'ngInject'
    Object.assign(this,{})
    console.log('11')
    this.listData = listData()[0].data.list
    this.fixedScroll()
    
    console.log(this.listData )


  }
  // fixedScroll() {
		
	// 		$('#table').DataTable( {
	// 				"scrollX": true
	// 		} );


				
	// }
  
}