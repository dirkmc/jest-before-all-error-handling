describe('test', () => {
  beforeAll(() => {
    console.log('before');
    return new Promise((resolve, reject) => {
      reject(new Error('My error'))
    })
  })
  
  afterAll(() => console.log('after'))

  it('tests 1 === 1', () => {
    console.log('test 1')
    expect(1).toBe(1)
  })

  it('tests 2 === 2', () => {
    console.log('test 2')
    expect(2).toBe(2)
  })
})
