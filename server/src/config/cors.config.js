const allowedOrigins = [
    'http://localhost:5173/'
];

export const corsOptions = {
    origin : (origin,cb)=>{
        if(!origin) return cb(null,true);
        if(allowedOrigins.includes(origin)){
            return cb(null,true);
        }
        return callback(new Error('not allowed by cors'));
    },
    Credential : true,
    methods : ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}