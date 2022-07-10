let canvas = document.createElement('canvas');
let ctx = canvas.getContext('2d');
let valuesObj={};
var croppr = new Croppr('#imagem', {
    type:1,
    default:null,
    aspectRatio: 1,
    onCropEnd: function(value) {
        valuesObj=value
    },
    onInitialize: function(instance) {
     console.log(instance)
    }
  });
document.querySelector('#crop').addEventListener('click',function(){
    console.log(valuesObj)
})
  