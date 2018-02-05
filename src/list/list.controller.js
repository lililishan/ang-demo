export default class listCtrl{

  constructor($scope,$http) {
    'ngInject'
    Object.assign(this, {$http})
    this.listData = [
      {id: '1', name: 'iphone4', quantity:2, price:2300, date:'2017-05-27'},
      {id: '21', name: '诺基亚',quantity:10, price:5200, date:'2017-05-27'},
      {id: '13', name: 'iphone4s',quantity:4, price:3000, date:'2017-05-27'},
      {id: '33', name: 'iphone6',quantity:12, price:4300, date:'2017-05-27'},
      {id: '531', name: 'iphone 6s',quantity:20, price:4888, date:'2017-05-27'},
      {id: '2', name: 'oppoR11',quantity:15, price:2999, date:'2017-05-27'},
      {id: '34', name: '华为P10',quantity:34, price:5129, date:'2017-05-27'},
      {id: '652', name: 'iPad',quantity:2, price:2380, date:'2017-05-27'},
      {id: '1111', name: 'ipad Pro',quantity:5, price:5400, date:'2017-05-27'},
      {id: '666', name: 'iphone7',quantity:8, price:6000, date:'2017-05-27'},
      {id: '435', name: 'iphone 7P',quantity:16, price:6880, date:'2017-05-27'}
    ]
    this.user = [
      { user: 'barney', age: 36},
      { user: 'fred', age: 40},
      { user: 'pebbles', age: 18},
    ]

    $scope.$watch('this.listData',(newValue, oldValue) => {
        newValue.map((v, key) => {
          if(v.quantity < 1) {
            let vkey = confirm('是否从购物车内删除该产品!')
            if(vkey) {
                this.remove(v.id,index)
            } else {
              v.quantity = oldValue[key].quantity
            }
          }
            
        })
    })
    // this.getList()
  }
  $onInit() {
    this.totalPrice = this.totalPrice()
    this.totalQuantity = this.totalQuantity()
  }

  getList() {
    this.$http.post('/Page/DmpTmpl/DmpTmpl/getList', {
        currentPage: 1,
        isAll: 0,
        perPage: 20,
        searchKey: ''
    }).then((resp) => {
        console.log(resp)
        if(resp.code === 0) {

        }
    })
  }
  //计算购物总价
  totalPrice() {
    let total =0 
    this.listData.map(v => {
      total += v.quantity * v.price
      console.log(total)
    })
    return total
  }
  //计算总购买数量
  totalQuantity() {
    let num =0
    this.listData.map(v => {
      num += parseInt(v.quantity)
    })
    return num
  }
  //添加数量
  addQuantity(id,index) {
    if(index !==-1) {
      ++this.listData[index].quantity
    }
  }
  //减少数量
  reduce(id,index) {
    if(index !== -1) {
      let v =  this.listData[index]
      if(v.quantity > 1) {
        --v.quantity
      } else {
        let vkey = confirm('是否从购物车内删除该产品!')
        if(vkey) {
          this.remove(id,index)
        }
      }
    }
  }
  //删除
  remove(id, index) {
    if(index !== -1) {
      this.listData.splice(index, 1)
    }
  }




}