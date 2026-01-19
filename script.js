const contentData = {
    de: {
        title: "Crypto Guide für Anfänger – Deutsch",
        sections: [
            {
                h: "1. Was ist Kryptowährung?",
                p: ["Digitale Währung, die online funktioniert", "Kein Bankkonto nötig", "Beispiele: Bitcoin (BTC), Ethereum (ETH)"]
            },
            {
                h: "2. Wie funktioniert die Blockchain?",
                p: ["Eine Kette von Datenblöcken", "Jede Transaktion ist sicher und gespeichert", "Niemand kann sie einfach ändern"]
            },
            {
                h: "3. Wallets – Deine digitale Geldbörse",
                p: ["Hot Wallet: Online, einfach, z. B. MetaMask", "Cold Wallet: Offline, sicher, z. B. Ledger"]
            },
            {
                h: "4. So kaufst du Kryptowährungen",
                p: ["1. Börse auswählen (z. B. Binance, Coinbase)", "2. Konto erstellen & verifizieren", "3. Geld einzahlen", "4. Coin kaufen"]
            },
            {
                h: "5. Sicherheitstipps",
                p: ["2-Faktor-Authentifizierung aktivieren", "Private Keys niemals teilen", "Vorsicht vor verdächtigen Links", "Erst kleine Beträge testen"]
            },
            {
                h: "6. Grundlegende Strategien",
                p: ["Hodlen: Coins langfristig halten", "Diversifizieren: Nicht alles auf einen Coin setzen", "Trading: Kaufen & Verkaufen (erfordert Erfahrung)"]
            },
            {
                h: "7. Nützliche Begriffe",
                p: ["Altcoins: alle Coins außer Bitcoin", "DeFi: dezentrale Finanzsysteme", "NFT: digitales Eigentum"]
            },
            {
                h: "8. Fazit",
                p: ["Kryptowährungen sind spannend, aber riskant", "Nur Geld investieren, das du entbehren kannst"]
            }
        ],
        disclaimer: "NUR DÜR DEN PRIVATEN GEBRAUCH! NICHT WEITERVERKAUFEN!"
    },
    en: {
        title: "Crypto Beginner Guide – English (Easy Version)",
        sections: [
            {
                h: "1. What is Cryptocurrency?",
                p: ["Digital money that works online", "No bank account needed", "Examples: Bitcoin (BTC), Ethereum (ETH)"]
            },
            {
                h: "2. How does Blockchain work?",
                p: ["A chain of data blocks", "Every transaction is secure and stored", "Nobody can easily change it"]
            },
            {
                h: "3. Wallets – Your Digital Wallet",
                p: ["Hot Wallet: Online, easy, e.g., MetaMask", "Cold Wallet: Offline, safe, e.g., Ledger"]
            },
            {
                h: "4. How to Buy Cryptocurrencies",
                p: ["1. Choose an exchange (e.g., Binance, Coinbase)", "2. Create & verify account", "3. Deposit money", "4. Buy coins"]
            },
            {
                h: "5. Safety Tips",
                p: ["Enable 2-factor authentication", "Never share private keys", "Be careful with suspicious links", "Start with small amounts"]
            },
            {
                h: "6. Basic Strategies",
                p: ["Hodl: Hold coins long-term", "Diversify: Don’t put all in one coin", "Trading: Buy & sell (needs experience)"]
            },
            {
                h: "7. Useful Terms",
                p: ["Altcoins: all coins except Bitcoin", "DeFi: decentralized finance systems", "NFT: digital ownership"]
            },
            {
                h: "8. Conclusion",
                p: ["Cryptocurrencies are exciting but risky", "Only invest money you can afford to lose"]
            }
        ],
        disclaimer: "ONLY FOR PERSONAL USE! DO NOT RESELL!"
    }
};

function showLanguage(lang) {
    const data = contentData[lang];
    const container = document.getElementById('content');
    const disclaimer = document.getElementById('disclaimer');
    
    let html = `<h2>${data.title}</h2>`;
    data.sections.forEach(sec => {
        html += `<div class="section"><h3>${sec.h}</h3><ul>`;
        sec.p.forEach(line => {
            html += `<li>${line}</li>`;
        });
        html += `</ul></div>`;
    });
    
    container.innerHTML = html;
    disclaimer.innerText = data.disclaimer;
}

// Default to German
window.onload = () => showLanguage('de');