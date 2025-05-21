import { Schema, model } from 'mongoose';

// particular lecture
const lectureSchema = new Schema({
     title:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    }, 
    videoUrl: {
        type: String,
        required: true,
        unique: true,
    }
    public_id: {
        type: String,
        required: true,
        unique: true,
    },
    freePreview: Boolean,
});


// collection of multiple lecture
const courseSchema = new Schema({
    title:{
        type:String,
        trim:true,
        required:true,
        unique:true,
    }, 
    image: {
        type: String, 
        required: true,
        trim: true,
    }
    subtitle:{
        type:String,
        trim:true,
    },
    description:{
        type:String,
        trim:true,
    },
    instructor:{
        type:Schema.Types.ObjectId,
        ref:'Instructor',
        required:true,
    },
    module:[{
        type:Schema.Types.ObjectId,
        ref:'Module',
    }],
    tag:{
        type:[String],
        default:[],
    },
    category:{
        type:String,
        trim:true,
        required:true,
    },
    language:{
        type:String,
        required:true,
    },
    progress:{
        type:Number,
        default:0,
    },
    princing: Number,
    objective: String,
    curriculam: [lectureSchema],
    isPublished: Boolean,

},{timestamps:true});



//delete all related modules and videos after deletion of course
// courseSchema.pre('findOneAndDelete', async function (next){
//     try{
//         const courseId = this.getQuery()._id;
//         const modules = await model('Module').find({course:courseId});
//         const modulesIds = modules.map(m=>m._id);
//         await model('Video').deleteMany({module:{$in:modulesIds}});
//         await model('Module').deleteMany({course:courseId});
//         next();
//     }catch(error){
//         next(error);
//     }
// });
//

module.exports = model('Course', courseSchema);
