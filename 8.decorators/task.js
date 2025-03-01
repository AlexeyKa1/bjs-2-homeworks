// задача 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = args.join(','); 
    let idx = cache.findIndex((item)=> item.hash === hash );
    if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].result); 
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args);
    cache.push({hash, result});
    if (cache.length > 5) { 
      cache.shift()
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
  }
  return wrapper;
}

// задача 2
function debounceDecoratorNew(func, ms) {
  let timerId = null;
  function wrapper (...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), ms);
  }
  return wrapper;
}

// задача 3
function debounceDecorator2(func, ms) {
  let timerId = null;
  function wrapper(...args){
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => func(...args), ms);
    wrapper.count++;
  }
  wrapper.count = 0;
  return wrapper;
}