const array = [1,5,9,45,2,6,12,21,58,95]
module.exports = {
    sequencial(num){
        for(let i=0;i<array.length;i++){
            if(array[i]==num){
                console.log("O numero "+num+' esta no array');
                console.log('Foram feitas '+i+' comparações');
            }   
        }

    },
    binaria(num){
        let primeiro =0;
        let ultimo = array.length -1
        let i=0;
        while(primeiro<=ultimo){
            let meio = Math.floor((primeiro+ultimo)/2)
            i++;
            if(array[meio]==num){
                console.log("O numero "+num+' esta no array\nForam feitas '+i+' comparações');
                break;
            }
            else if(array[meio]<num){
                primeiro = meio+1
            }else{
                ultimo = meio-1
            }
        }
    }
}