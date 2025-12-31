import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import argon2 from 'argon2'

import creds from './credentials.json' with {type: "json"}

async function is_valid_credentials(username: string, unhashedPassword: string): Promise<boolean> {
    const user = creds.users.find(user_f => username === user_f.username)

    if (user) {
        if (await argon2.verify(user.password_hash, unhashedPassword))
            return true
    }
    return false
}


const rl = readline.createInterface({ input, output })

const username: string = await rl.question('What is your username?')
const password: string = await rl.question('What is your password?')

if (await is_valid_credentials(username, password)) {
    console.log("YOU'RE IN !!... My Secret is that sometimes I don't lift the toilet seat hehe")
}
else {
    console.log("GET LOSTTT !!!")
}

rl.close()
