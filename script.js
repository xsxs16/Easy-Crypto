const guides = [
    {
        title: "Crypto Guide für Anfänger – Deutsch",
        content: `1. Was ist Kryptowährung?
- Digitale Währung, die online funktioniert
- Kein Bankkonto nötig
- Beispiele: Bitcoin (BTC), Ethereum (ETH)

2. Wie funktioniert die Blockchain?
- Eine Kette von Datenblöcken
- Jede Transaktion ist sicher und gespeichert
- Niemand kann sie einfach ändern

3. Wallets – Deine digitale Geldbörse
- Hot Wallet: Online, einfach, z. B. MetaMask
- Cold Wallet: Offline, sicher, z. B. Ledger

4. So kaufst du Kryptowährungen
1. Börse auswählen (z. B. Binance, Coinbase)
2. Konto erstellen & verifizieren
3. Geld einzahlen
4. Coin kaufen

5. Sicherheitstipps
- 2-Faktor-Authentifizierung aktivieren
- Private Keys niemals teilen
- Vorsicht vor verdächtigen Links
- Erst kleine Beträge testen

6. Grundlegende Strategien
- Hodlen: Coins langfristig halten
- Diversifizieren: Nicht alles auf einen Coin setzen
- Trading: Kaufen & Verkaufen (erfordert Erfahrung)

7. Nützliche Begriffe
- Altcoins: alle Coins außer Bitcoin
- DeFi: dezentrale Finanzsysteme
- NFT: digitales Eigentum

8. Fazit
- Kryptowährungen sind spannend, aber riskant
- Nur Geld investieren, das du entbehren kannst

NUR DÜR DEN PRIVATEN GEBRAUCH! NICHT WEITERVERKAUFEN!`
    },
    {
        title: "Crypto Beginner Guide – English (Easy Version)",
        content: `1. What is Cryptocurrency?
- Digital money that works online
- No bank account needed
- Examples: Bitcoin (BTC), Ethereum (ETH)

2. How does Blockchain work?
- A chain of data blocks
- Every transaction is secure and stored
- Nobody can easily change it

3. Wallets – Your Digital Wallet
- Hot Wallet: Online, easy, e.g., MetaMask
- Cold Wallet: Offline, safe, e.g., Ledger

4. How to Buy Cryptocurrencies
1. Choose an exchange (e.g., Binance, Coinbase)
2. Create & verify account
3. Deposit money
4. Buy coins

5. Safety Tips
- Enable 2-factor authentication
- Never share private keys
- Be careful with suspicious links
- Start with small amounts

6. Basic Strategies
- Hodl: Hold coins long-term
- Diversify: Don’t put all in one coin
- Trading: Buy & sell (needs experience)

7. Useful Terms
- Altcoins: all coins except Bitcoin
- DeFi: decentralized finance systems
- NFT: digital ownership

8. Conclusion
- Cryptocurrencies are exciting but risky
- Only invest money you can afford to lose

ONLY FOR PERSONAL USE! DO NOT RESELL!`
    }
];

function openGuide(index) {
    const guide = guides[index];
    const modal = document.getElementById('guideModal');
    const body = document.getElementById('modalBody');
    
    body.innerHTML = `
        <h2>${guide.title}</h2>
        <pre>${guide.content}</pre>
        <div style="margin-top: 3rem; opacity: 0.3; text-align: center; font-size: 0.8rem;">
            *** END OF FILE ***
        </div>
    `;
    
    modal.style.display = 'block';
}

function closeModal() {
    document.getElementById('guideModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('guideModal');
    if (event.target == modal) {
        closeModal();
    }
}

function copyAddr(id, btn) {
    const addr = document.getElementById(id).innerText;
    navigator.clipboard.writeText(addr).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'KOPIERT!';
        setTimeout(() => {
            btn.innerText = originalText;
        }, 2000);
    });
}
