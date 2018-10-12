const waitXToReturnY = (timeout, returnValue) => async () => {
  return new Promise((res) => {
    setTimeout(() => {
      return res(returnValue)
    }, timeout)
  })
}

const getName = waitXToReturnY(500, 'Jimmy')
const getJob = waitXToReturnY(1000, 'Surgeon')

const getPersonInfo = async () => {
  const name = await getName()
  const job = await getJob()
  
  return {
    name,
    job
  }
}

const getPersonInfoOptimised = async () => {
  const fetchName = getName()
  const fetchJob = getJob()
  
  const name = await fetchName
  const job = await fetchJob
  
  return {
    name,
    job
  }
}

const startTime = new Date()
getPersonInfo().then(person => {
  console.log('not optimised')
  console.log('person info: ', person)
  console.log('time taken:', new Date() - startTime)
})

const startTimeOptimised = new Date()
getPersonInfoOptimised().then(person => {
  console.log('optimised')
  console.log('person info: ', person)
  console.log('time taken:', new Date() - startTimeOptimised)
})
