const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ideasAmil', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
    console.log('connection  database success');
    
}).catch( err =>{
    console.log(err);
    
})

module.exports = mongoose