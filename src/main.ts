import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import argon2 from 'argon2'

import creds from './credentials.json' with {type: "json"}

async function is_valid_credentials_UNSAFE(username: string, unhashedPassword: string): Promise<boolean> {
    // This function is unsafe because it has a vulnerability to attacks. In this case timing attacks
    // This is because an attacker could use the fact that the function returns instantly when
    // inputted username is incorrect vs the function taking significantly longer when username is
    // correct. This basically gives attackers a way to find valid usernames
    const user = creds.users.find(user_f => username === user_f.username)

    if (user) {
        if (await argon2.verify(user.password_hash, unhashedPassword))
            return true
    }
    return false
}

async function is_valid_credentials(username: string, unhashedPassword: string): Promise<boolean> {
    const user = creds.users.find(user_f => username === user_f.username)

    // Usign a dummy hash if user doesn't exist to maintain constant timing
    const hashToVerify = user?.password_hash ?? '$argon2id$v=19$m=65536,t=3,p=4$c29tZXNhbHQ$SomeHashValue'

    const isValid = await argon2.verify(hashToVerify, unhashedPassword)

    // Only return true if user exists AND password is correct
    return user !== undefined && isValid
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
