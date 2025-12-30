import { createHash } from 'crypto'

function generateSHA256(input: string): string {
    return createHash('sha256').update(input).digest('hex')
}


const out1 = generateSHA256("Bob")
const out2 = generateSHA256("Cheeks")
const out3 = generateSHA256("Star")
const out4 = generateSHA256("Pepe")

console.log(`${out1}`)
console.log(`${out2}`)
console.log(`${out3}`)
console.log(`${out4}`)
