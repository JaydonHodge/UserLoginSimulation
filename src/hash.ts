import { createHash } from 'crypto'

function generateSHA256(input: string): string {
    return createHash('sha256').update(input).digest('hex')
}

function generateArgon2(input: string): string {
    return createHash('argon2').update(input).digest('hex')
}


const out1 = generateArgon2("Wayne")

console.log(`${out1}`)
