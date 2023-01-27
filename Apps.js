// ici on importe les modules indispensable à notre base de données 

const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const app=express();
const commentRoute=require('./routes/comments');
const userRoute=require('./routes/users');
const likeRouter = require('./routes/likes');
const disLikeRouter = require('./routes/disLikes');

// cors(police) pour permettre l'accès à notre API 
app.use(cors());

// ici express.json nous permet de recuperer le corps de la requette en format json

app.use(express.json());
app.use(express.urlencoded({extended:false}));
const port=3000;

// connexion à mongo

mongoose.connect('mongodb+srv://Joseph:JosephMongoData@cluster0.9bkt0ap.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


// on importe notre controlers

app.use('/comments',commentRoute);
app.use('/users',userRoute);
app.use('/likes',likeRouter);
app.use('/disLikes',disLikeRouter);


app.listen(process.env.PORT||{port},()=>{console.log('server started')});

module.exports=app