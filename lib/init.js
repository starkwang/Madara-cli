fs = require('fs-extra');

function init(){
  fs.mkdir('./source',function(err) {
    if(err){
      console.log('mkdir error!');
    }
  })

  // fs.copy('../themes','themes',function(err){
  //   if (err) return console.error(err);
  //   console.log('success!');
  // })
}

module.exports = {
  init : init
}