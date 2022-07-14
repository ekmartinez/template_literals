const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };

function fStrings () {
    const listElements = [];
    for (let x = 0; x < result['failure'].length; x++) {
        let tempVar = `<li class="text-warning">${result['failure'][x]}</li>`;
        listElements.push(tempVar)
    }
  return listElements; 
}

console.log(fStrings())