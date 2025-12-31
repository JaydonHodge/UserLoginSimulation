import argon2 from 'argon2'

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const credentialsPath = path.join(__dirname, '..', 'src', 'credentials.json');

// Reading data
const data = fs.readFileSync(credentialsPath, 'utf8');
const creds = JSON.parse(data);

async function generateArgon2(input: string): Promise<string> {
    return (await argon2.hash(input))
}

const superheroCreds: { [key: string]: string } = {
    'Bruce': 'Wayne',
    'Clark': 'Kent',
    'Diana': 'Prince',
    'Peter': 'Parker',
    'Tony': 'Stark',
    'Steve': 'Rogers',
    'Natasha': 'Romanoff',
    'Barry': 'Allen',
    'Wally': 'West',
    'Hal': 'Jordan',
    'Oliver': 'Queen',
    'Arthur': 'Curry',
    'Victor': 'Stone',
    'Billy': 'Batson',
    'Selina': 'Kyle',
    'Carol': 'Danvers',
    'Scott': 'Lang',
    'Hank': 'Pym',
    'Janet': 'VanDyne',
    'Clint': 'Barton',
    'Wade': 'Wilson',
    'Matt': 'Murdock',
    'Jessica': 'Jones',
    'Luke': 'Cage',
    'Danny': 'Rand',
    'Frank': 'Castle',
    'Stephen': 'Strange',
    'Thor': 'Odinson',
    'Loki': 'Laufeyson',
    'Wanda': 'Maximoff',
    'Pietro': 'Maximoff',
    'Vision': 'Stark',
    'James': 'Rhodes',
    'Sam': 'Wilson',
    'Bucky': 'Barnes',
    'TChalla': 'Udaku',
    'Shuri': 'Udaku',
    'ScottS': 'Summers',
    'Jean': 'Grey',
    'Logan': 'Howlett',
    'Ororo': 'Munroe',
    'Kurt': 'Wagner',
    'Remy': 'LeBeau',
    'Rogue': 'Anna',
    'Bobby': 'Drake',
    'Kitty': 'Pryde',
    'Piotr': 'Rasputin',
    'Warren': 'Worthington',
    'HankM': 'McCoy',
    'Charles': 'Xavier',
    'Erik': 'Lehnsherr',
    'Kara': 'Danvers',
    'Barbara': 'Gordon',
    'Dick': 'Grayson',
    'Jason': 'Todd',
    'Tim': 'Drake',
    'Damian': 'Wayne',
    'Kyle': 'Rayner',
    'John': 'Stewart',
    'Guy': 'Gardner',
    'JessicaC': 'Cruz',
    'Ray': 'Palmer',
    'Carter': 'Hall',
    'Shiera': 'Sanders',
    'Ted': 'Kord',
    'Michael': 'Carter',
    'Jaime': 'Reyes',
    'Dinah': 'Lance',
    'Zatanna': 'Zatara',
    'JohnC': 'Constantine',
    'Harley': 'Quinn',
    'Pamela': 'Isley',
    'Edward': 'Nygma',
    'Oswald': 'Cobblepot',
    'Harvey': 'Dent',
    'Jonathan': 'Crane',
    'Reed': 'Richards',
    'Susan': 'Storm',
    'Johnny': 'Storm',
    'Ben': 'Grimm',
    'Norrin': 'Radd',
    'BruceB': 'Banner',
    'Jennifer': 'Walters',
    'Marc': 'Spector',
    'Kamala': 'Khan',
    'Miles': 'Morales',
    'Gwen': 'Stacy',
    'Miguel': 'OHara',
    'Kate': 'Bishop',
    'America': 'Chavez',
    'Riri': 'Williams',
    'Monica': 'Rambeau',
    'Hope': 'VanDyne',
    'Cassie': 'Lang',
    'Yelena': 'Belova',
    'Shang': 'Chi',
    'Dane': 'Whitman',
    'Thena': 'Eternal'
};

// Loop through new credentials and hash the passwords then add them to the config
for (const username in superheroCreds) {
    const password = superheroCreds[username]!  // ! Asserts that password is not undefined
    const password_hashed = await generateArgon2(password)

    creds.users.push({
        username: username,
        password_hash: password_hashed
    })
}

// Write data back
fs.writeFileSync(credentialsPath, JSON.stringify(creds, null, 2));
