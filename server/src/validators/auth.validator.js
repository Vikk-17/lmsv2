// Importing the Zod library for schema validation
import { z } from "zod";

// List of valid Top-Level Domains (TLDs) for email validation
const validTLDs = [
  "com",
  "org",
  "net",
  "gov",
  "edu",
  "int",
  "mil",
  "co",
  "io",
  "ai",
  "dev",
  "us",
  "in",
  "eu",
  "xyz",
  "me",
  "uk",
  "ca",
  "de",
  "fr",
  "jp",
];

// Registration form validation schema
export const registerSchema = z
  .object({
    // Username must be a string between 3 and 20 characters
    name: z
      .string()
      .min(3, { message: "Username must be at least 3 characters" })
      .max(20, { message: "Username must be at most 20 characters" }),

    // Email must be a valid format and meet custom validation rules
    email: z
      .string()
      .email() // Standard email format validation
      .refine(
        (email) => {
          // Extract domain and TLD from email, check if TLD is valid
          const domain = email.split("@")[1];
          const tld = domain.split(".").pop();
          return validTLDs.includes(tld);
        },
        { message: "Invalid TLD in email" }
      )
      .refine(
        (email) => {
          // Email must start with a letter or number
          return /^[A-Za-z0-9]/.test(email);
        },
        {
          message: "Email must start with a letter or a number",
        }
      ),

    // Password must meet complexity requirements
    password: z
      .string()
      .min(8, "Password must be at least 8 characters") // Minimum length
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      }) // At least one uppercase letter
      .regex(/[!@#$%^&*(),.?":{}|<>]/, {
        message: "Password must contain at least one special character",
      }), // At least one special character

    // Optional role field, must be one of the specified values if provided
    role: z.enum(["student", "trainer", "admin"]).optional(),

    // Confirm password field, plain string
    confirmPassword: z.string(),
  })
  // Custom refinement: confirmPassword must match password
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords don't match",
  });

// Login form validation schema
export const loginSchema = z.object({
  // Email must be valid and follow the same checks as in registerSchema
  email: z
    .string()
    .email()
    .refine(
      (email) => {
        // Validate TLD
        const domain = email.split("@")[1];
        const tld = domain.split(".").pop();
        return validTLDs.includes(tld);
      },
      { message: "invalid emailID" }
    )
    .refine(
      (email) => {
        // Email must start with a letter or number
        return /^[A-Za-z0-9]/.test(email);
      },
      {
        message: "Email must start with a letter or a number",
      }
    ),

  // Password must be at least 8 characters
  password: z.string().min(8, "Password must be at least 8 characters"),
});
