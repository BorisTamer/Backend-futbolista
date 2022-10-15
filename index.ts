import bodyParser from "body-parser";
import mongoose from "mongoose";
import Server from "./clases/server";
import defaultRouter from './routes/default.routes';
import futbolistaRoutes from "./routes/futbolista.routes";
  

const server = new Server();

server.app.use(bodyParser.json());
server.app.use(bodyParser.urlencoded({extended:true}));
 
server.app.use('/',defaultRouter);
server.app.use('/Futbolista', futbolistaRoutes);

mongoose.connect('mongodb://localhost:27017/futbolistaDB',(error)=>{
    if (error) {
        throw error;        
    }
    console.log('BD online');
})
server.Start(()=>{
    console.log(`servidor corriendo en puerto: ${server.port}`)
})