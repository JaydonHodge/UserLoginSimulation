import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

function is_valid_credentials(username: string, password: string): boolean {
    const correct_username: string = 'doodle';
    const correct_password: string = 'bob';

    if ((username == correct_username) && (password == correct_password)) {
        console.log("Login Success!")
        return true;
    }
    console.log("GET LOSTTT!!!")
    return false;
}

const rl = readline.createInterface({ input, output });

const username: string = await rl.question('What is your username?');
const password: string = await rl.question('What is your password?');

is_valid_credentials(username, password);

rl.close();
