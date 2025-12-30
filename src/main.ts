import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'
import { createHash } from 'crypto'

// Hash-map for user credentials for now
const creds = new Map<string, string>()

creds.set("Doodle", "cd9fb1e148ccd8442e5aa74904cc73bf6fb54d1d54d333bd596aa9bb4bb4e961")
creds.set("Sandy", "e817313e058cf46a44e5e972d5e702fdf9efec145c46f00e8e0ee7197f006e35")
creds.set("Patrick", "e357d396871d10121ee7921467cae8c0671d97275f7bb97e7ecfcf00970b5d27")
creds.set("Tio", "e09b6c1fc25adca4c29229bd4e0fe1e2ed47ec1c5dd355c0aa8ecf4ce8d64041")

function is_valid_credentials(username: string, unhashedPassword: string): boolean {
    if (creds.has(username)) {
        const password = createHash('sha256').update(unhashedPassword).digest('hex')
        if (password === creds.get(username)) {
            console.log("YOU'RE IN !!... My Secret is that sometimes I don't lift the toilet seat hehe")
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
