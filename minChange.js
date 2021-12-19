function nonConstructibleChange(coins) {
      let currentChange = 0;
      coins.sort((a,b) => a-b)
      for(const val of coins){
          if(val>currentChange + 1){
              return currentChange + 1
          }else{
              currentChange += val
          }
      }
    return currentChange + 1
}
  