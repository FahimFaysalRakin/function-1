# function-1
A function in JavaScript is similar to a procedure—a set of statements that performs a task or calculates a value, but for a procedure to qualify as a function, it should take some input and return an output where there is some obvious relationship between the input and the output.
# functionDeclaration
function rectArea (a, b) {
    return a / b;
  }
  
  console.log(rectArea (30, 6));

  #function*declaration
  function* generator(a) {
    yield a;
    yield a + 20;
    yield a - 5;
  }
  
  const gen = generator(20);
  
  console.log(gen.next().value);
 
  console.log(gen.next().value);

  console.log(gen.next().value);

