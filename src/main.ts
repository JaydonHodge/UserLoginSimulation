import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

// Hash-map for user credentials for now
const creds = new Map<string, string>()

creds.set("Doodle", "Bob")
creds.set("Sandy", "Cheeks")
creds.set("Patrick", "Star")
creds.set("Tio", "Pepe")

function is_valid_credentials(username: string, password: string): boolean {
    if (creds.has(username)) {
        if (password == creds.get(username)) {
            console.log("YOU'RE IN !!... My Secret is that I sometime's don't lift the toilet seat...")
            return true
        }
    }

    console.log("GET LOSTTT !!!")
    return false
}

const rl = readline.createInterface({ input, output })

const username: string = await rl.question('What is your username?')
const password: string = await rl.question('What is your password?')

is_valid_credentials(username, password)

rl.close()
