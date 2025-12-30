import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { createHash } from 'crypto'

import creds from './credentials.json' with {type: "json"}

function is_valid_credentials(username: string, unhashedPassword: string): boolean {
    const password = createHash('sha256').update(unhashedPassword).digest('hex')

    return (creds.users.some(user =>
        username === user.username && password === user.password_hash))
}


const rl = readline.createInterface({ input, output })

const username: string = await rl.question('What is your username?')
const password: string = await rl.question('What is your password?')

if (is_valid_credentials(username, password)) {
    console.log("YOU'RE IN !!... My Secret is that sometimes I don't lift the toilet seat hehe")
}
else {
    console.log("GET LOSTTT !!!")
}

rl.close()
