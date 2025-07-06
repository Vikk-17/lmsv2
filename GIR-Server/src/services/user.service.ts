import prisma from "../config/prisma";
import bcrypt from "bcryptjs"

// Get all users
export const getAllUsers = async () => {
  return await prisma.user.findMany();
};

// Get single user by ID
export const getUserById = async (id: number) => {
  return await prisma.user.findUnique({ where: { id } });
};

// Get single user by Email
export const getUserByEmail = async (email:string) => {
  return await prisma.user.findUnique({ where: { email } });
};
// Create new user
export const createUser = async (data: {
  name: string;
  email: string;
  password: string;
  role: "student" | "trainer" | "admin";
  phoneNumber?: string;
  profile?: string;
  street?: string;
  city?: string;
  state?: string;
  pincode?: string;
  country?: string;
  bio?: string;
}) => {
  try {
    // 1. Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);

    // 2. Create base user first
    const user = await prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });

    // 3. Create role-specific entry
    if (data.role === "student") {
      await prisma.student.create({
        data: {
          userId: user.id,
          // add student-specific fields if any
        },
      });
    } else if (data.role === "trainer") {
      await prisma.instructor.create({
        data: {
          userId: user.id,
          // trainer-specific fields if any
        },
      });
    } else if (data.role === "admin") {
      await prisma.admin.create({
        data: {
          userId: user.id,
          // admin-specific fields if any
        },
      });
    }

    return user; // Optionally, you can also return full profile with includes
  } catch (error: any) {
    throw new Error(error.message);
  }
};


