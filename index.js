function shout(string){
  return string.toUpperCase()
}

function whisper(string){
  return string.toLowerCase()
}

function logShout(string){
  console.log("HELLO")
}

function logWhisper(string){
  console.log("hello")
}

function sayHiToGrandma(string){
  var uppercase = "HELLO"
  var lowercase = "hello"
  var mixedcase = "I love you, Grandma."
  
  if (lowercase.toLowerCase() === lowercase){
    return "I can't hear you!"
    
  } else if (uppercase.toUpperCase() === uppercase){
    return "YES INDEED!"
    
  }else if(mixedcase.toLowerCase() === mixedcase){
    return "I love you too."
  }
  
  
}