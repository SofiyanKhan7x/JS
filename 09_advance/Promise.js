const promiseOne = new Promise(function(resolve, reject){

    setTimeout(function(){
    console.log('hello')
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('one promised completed')
})