// Remove trailing slash from origin URL
const allowedOrigins = ['http://localhost:5173'];

export const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
<<<<<<< HEAD
  credentials: true, // ✅ must be lowercase
=======
  credentials: true,
>>>>>>> feature/backend-integration
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};
