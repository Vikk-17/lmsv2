import {Schema, model} from 'mongoose';


const studentSchema = new Schema({
    _id:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    enrolledCourses:[{
        type:Schema.Types.ObjectId,
        ref:'Course',
    }],
    dob:{
        type:Date,
    },
    wishList:[{
        type:Schema.Types.ObjectId,
        ref:'Course',
    }],
});

const Student = model('Student', studentSchema);
export default Student;
