import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// Get all courses
export const findAllCourses = async () => {
  return await prisma.course.findMany({
    include: {
      modules: true, // optional: include related modules
    },
  });
};

// Insert a new course
export const insertIntoCourse = async (courseData: Prisma.CourseCreateInput) => {
  return await prisma.course.create({
    data: courseData,
  });
};

// Find course by ID
export const findCourseById = async (courseId: number) => {
  return await prisma.course.findUnique({
    where: { id: courseId },
    include: {
      modules: true,
    },
  });
};

// Update a course
export const updateCourseById = async (
  courseId: number,
  updateData: Prisma.CourseUpdateInput
) => {
  return await prisma.course.update({
    where: { id: courseId },
    data: updateData,
  });
};

// Delete a course
export const deleteCourseById = async (courseId: number) => {
  return await prisma.course.delete({
    where: { id: courseId },
  });
};
