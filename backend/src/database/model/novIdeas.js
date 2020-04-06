const moogoose = require('../dataBaseConection');

const Idea = new moogoose.Schema(
    {
        title:{
            type:String,
            required:true,
        },
        category:{
            type:String,
            required : true,
        },
        description:{
            type:String,
            required : true,
        }, 
    },
    {
        timestamps: true
    }
)
module.exports =  moogoose.model('idea',Idea);