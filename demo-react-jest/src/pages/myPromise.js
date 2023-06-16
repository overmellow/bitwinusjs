const myPromise = (input) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(input === 'success') {
        resolve('Data fetched successfully');    
      } else {
        reject('An error occurred');
      }      
    }, 2000)
  })
};

// myPromise.then(res => console.log(res))

(async () => {
  const res = await myPromise('success')
  console.log('hey ' + res)

})()

export default myPromise;    
  