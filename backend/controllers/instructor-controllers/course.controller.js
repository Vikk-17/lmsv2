const Course = require("../../models/course.model");


const addCourse = async (req, res) => {
    try{
        const courseData = req.body;
        const newCourse = new Course(courseData);
        const save = await newCourse.save();
        
        (save) ? res.status(200).json({
            message: "Saved successfully",
            data: save,
        })
        :
            return res.status(404).json({
                message: "Error while uploading course to db",
            })

    } catch (err) {
        res.status(500).json({
            message: "Error while adding course",
        })
    }

}

const getAllCourses = async (req, res) {
    try{
        const courseList = await Course.find({});
        res.status(200).json({
            data: courseList,
        })
    } catch(e) {
        console.log(e);
        res.status(500).json({
            message: "Error while getting courses",
        })
    }
}

const getDetailsById = async (req, res) {
    try{
        const id = req.params.id;

        const courseDetails = await Course.findById(id);

        (courseDetails)
        ?
            res.status(200).json({
                message: "Successfully got the course",
                data: courseDetails,
            })
        :
            return res.status(404).json({
                message: "No such course found",
            });
    } catch(err){
        console.log(err);
        res.status(500).json({
            message: "Error while getting course by ID",
        })
    }
}

const updateCourseById = async (req, res) {
    try{
        const { id } = req.params;
        const updatedData = req.body;

        const updateCourse = await Course.findByIdAndUpdate(
            id,
            updatedData,
            {new: true} // return the modified doc rather than original
        );

        (updateCourse)?
            res.status(200).json({
                message: "Update done",
                data: updateCourse,
            })
        :
            return res.status(404).json({
                message: "Provided course is not found to update",
            });
    } catch(err) {
        console.log(err);
        res.status(500).json({
            message: "Error while updating course",
        })
    }
} 

module.exports = {
    getAllCourses,
    getDetailsById,
    addCourse,
    updateCourseById
};
