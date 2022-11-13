import express from 'express';
import { getConnection } from './database/connection';
import { User } from './entity';
import messages from './messages';

// App
const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false })); // Receive also form data

// Routes
app.get('/', (req, res) => {
    res.send('Holi');
    res.end();
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body

    if(!username || !password){
        res.status(400).json(messages.missingParameters("username and password"));
        return res.end()
    }

    try {
        const conn = await getConnection();
        const searchUser: any = await conn?.query(`SELECT * FROM \`User\` WHERE Username = ?`, [username]);       

        const user: User | undefined = searchUser[0][0];

        if(!user){
            const message: any = messages.resultFound({}, "User does not exist");
            message.loginCode = -1;
            res.status(200).json(message);            
            return res.end();
        }

        if(user.Password !== password){
            const message: any = messages.resultFound({}, "Password incorrect");
            message.loginCode = 0;
            res.status(200).json(message);
            return res.end();
        }

        const message: any = messages.resultFound({ user }, "Log In!");
        message.loginCode = 1;
        res.status(200).json(message);

    }catch(err) {
        res.status(500).json(messages.sqlError);
        console.log(`ERROR - Login POST -> ${err}`)
    }finally{
        res.end();
    }

});


export default app;