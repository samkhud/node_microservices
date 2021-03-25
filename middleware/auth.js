const jwt = require ('jsonwebtoken');
config = require('../config.json');

auth={
    authenticate:(req,res,next)=>{
        if (!req.headers.authorization){
            return res.status(403).json({error: 'No credentials found'});
        }else{
            let token = req.headers.authorization;
            console.log(token);
            jwt.verify(token, config.config_token.tokenSecret,(err =>{
                if(err){
                return res.status(403).json({error: 'invalid token'});

                }
                next()

            }));    
            
        }

    }
}
module.exports=auth;