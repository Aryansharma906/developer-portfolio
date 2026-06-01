import cors from 'cors';

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'https://aryansharma906.github.io',
  'https://your-production-domain.com'
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

export default cors(corsOptions);
