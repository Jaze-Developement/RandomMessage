function generateRandomNumber(num){
  return Math.floor(Math.random() * num)
}

let randomMessage = {
  Greeting: ['Hi','Hello',"Hola","Bom Dia",'Boungiorno'],
  Day:['Mon','Tue','Wed','Thurs','Fri'],
}
let actualMessage = []
for(props in randomMessage){
  
  let messageKeys = generateRandomNumber(randomMessage[props].length)
  
  switch(props){
    case 'Day':
    console.log(actualMessage.push(`it's ${randomMessage[props][messageKeys]}`))
    break;
    case 'Greeting':
    console.log(actualMessage.push(`${randomMessage[props][messageKeys]} Joett`))
    default:
    
  }

}

console.log(actualMessage)