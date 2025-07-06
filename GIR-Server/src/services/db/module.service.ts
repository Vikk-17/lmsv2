import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

// 1. Find all modules
export const findAllModules = async () => {
  return await prisma.module.findMany();
};

// 2. Insert a new module and auto-connect to course
export const insertIntoModule = async (moduleData: Prisma.ModuleCreateInput) => {
  return await prisma.module.create({
    data: moduleData,
  });
};
// 3. Find module by ID (Note: .populate() is not used in Prisma)
export const findModuleById = async (moduleId: string) => {
  return await prisma.module.findUnique({
    where: { id: moduleId },
    include: {
      // videos: true, // Uncomment if you define the `videos` relation
      course: true,
    },
  });
};

// 4. Update a module by ID
export const updateModuleById = async (
  moduleId: string,
  updateData: Prisma.ModuleUpdateInput
) => {
  return await prisma.module.update({
    where: { id: moduleId },
    data: updateData,
  });
};

// 5. Delete a module by ID
export const deleteModuleById = async (moduleId: string) => {
  return await prisma.module.delete({
    where: { id: moduleId },
  });
};
