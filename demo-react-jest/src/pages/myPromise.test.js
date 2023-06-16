import myPromise from './myPromise';

describe('myPromise', () => {
  it('resolves with the correct message', async () => {
    expect.assertions(1); // Ensure that the assertions in the test are executed
    const result = await myPromise('success');
    expect(result).toBe('Data fetched successfully');
    // await expect(myPromise).resolves.assertions('Data fetched successfully')
    
  });

  it('rejects with an error message', async () => {
    expect.assertions(1); // Ensure that the assertions in the test are executed
    // try {
    //     await myPromise('hello');
    //   } catch (e) {
    //     expect(e).toMatch('An error occurred');
    //   }
    return myPromise('heylo').catch((error) => {
      expect(error).toBe('An error occurred');
    });
  });
});


// describe('myPromise', () => {
//   it('resolves with the correct message', () => {
//     expect.assertions(1); // Ensure that the assertions in the test are executed

//     return myPromise.then((result) => {
//       expect(result).toBe('Data fetched successfully');
//     });
//   });

//   it('rejects with an error message', () => {
//     expect.assertions(1); // Ensure that the assertions in the test are executed

//     return myPromise.catch((error) => {
//       expect(error).toBe('An error occurred');
//     });
//   });
// });