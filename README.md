# Sito pubblico di DOMIA

La home contiene le istruzioni e il download relativo `domia.zip`. Pubblica anche questo file, già copiato dall’installer in `distribute/DOMIA-Windows-Easy.zip`. Quando aggiorni l’installer, ricopia il nuovo ZIP in questa cartella con il nome `domia.zip` e pubblicalo insieme alle pagine.

Sito statico per GitHub Pages. Tutti i collegamenti interni sono relativi: funziona anche sotto `https://NOME.github.io/REPOSITORY/`.

## Prima di pubblicare

In **index.html** e **privacy.html** sono già inseriti il responsabile del progetto, **Gianluca Garofalo**, e il contatto pubblico **gianluca.garofalo@gmail.com**, con collegamento email.

La privacy descrive il comportamento dell’implementazione attuale: Calendar personale, modello locale predefinito, eventuale motore remoto configurabile, token cifrati, chat memorizzate, backup e condivisione esplicita. Conferma le informazioni del responsabile e le condizioni della tua distribuzione prima della pubblicazione. Questa pagina non costituisce un’approvazione Google.

## GitHub Pages

1. Crea un repository destinato al sito e copia **il contenuto di questa cartella** nella sua radice. Non pubblicare l’intero progetto DOMIA, `.cache`, `data`, JSON OAuth o credenziali.
2. Nel repository apri **Settings → Pages → Build and deployment**.
3. Scegli **Deploy from a branch**, il branch `main` e la cartella `/ (root)`, quindi salva.
4. Apri il sito all’indirizzo indicato da GitHub. La home deve essere accessibile senza login e deve collegare l’informativa privacy.

Se usi un repository con altri file, puoi copiare il sito in `docs/` e selezionare `/docs` nelle impostazioni Pages. `PagineWeb/` non è una delle cartelle selezionabili nella pubblicazione da branch standard.

## Indirizzi per Google

Con un sito di progetto GitHub Pages:

- Home page: `https://NOME.github.io/REPOSITORY/`
- Informativa privacy: `https://NOME.github.io/REPOSITORY/privacy.html`

Per la verifica Google il dominio e i riferimenti pubblici devono soddisfare i requisiti di proprietà e verifica. Non indicare `github.io` come se fosse un tuo dominio. Verifica in Search Console la proprietà URL del tuo sito con il metodo HTML disponibile, mantenendo il file fornito da Google nella radice pubblicata. Se Google richiede una verifica del dominio che non puoi eseguire sul sottodominio GitHub Pages, usa un dominio personalizzato sotto il tuo controllo, collegato a GitHub Pages e verificato in Search Console. Non è necessario ospitare il server DOMIA su quel dominio.

Inserisci gli URL finali in **Google Auth Platform → Branding**. Il client desktop non richiede di registrare questi URL come callback.

## Verifica Google Calendar

Il connettore Calendar richiede `https://www.googleapis.com/auth/calendar.events`. Gli scope Gmail e Drive sono elencati sotto. Pubblicazione dell’app, verifica del branding e verifica dei permessi sono passaggi distinti. Google può richiedere giustificazione e video dimostrativo del flusso effettivo.

Quando l’URL privacy è definitivo, il riferimento e una descrizione del trattamento devono essere disponibili anche nell’applicazione prima della richiesta di consenso. Non usare URL inventati o provvisori nella release pubblica. Il sito da solo non completa questa parte della verifica.

## File

- `index.html`: presentazione, funzioni, istruzioni Calendar e contatti.
- `privacy.html`: informativa e istruzioni di revoca/cancellazione.
- `assets/style.css`: stile responsive, senza dipendenze esterne.
- `assets/mark.svg`: simbolo DOMIA.
- `.nojekyll`: pubblicazione dei file statici senza elaborazione Jekyll.

Nessun JavaScript, analytics, font remoto o modulo che raccolga dati. GitHub Pages può trattare informazioni tecniche delle richieste secondo la propria informativa.

Fonti: [requisiti Google](https://developers.google.com/identity/protocols/oauth2/production-readiness/sensitive-scope-verification), [Limited Use](https://developers.google.com/terms/api-services-user-data-policy), [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site).

## Drive e Gmail

I connettori sono inclusi nell’app: Gmail cerca e legge email e invia messaggi di testo dopo conferma; Drive cerca file, legge metadati ed esporta Google Docs come testo o Google Sheets come CSV. Gli scope sono `gmail.readonly`, `gmail.send` e `drive.readonly` (prefisso `https://www.googleapis.com/auth/`). Aggiungili in Google Auth Platform → Data Access prima della verifica. I due scope readonly sono restricted: la verifica pubblica può richiedere controlli aggiuntivi, in particolare se dati Google vengono trasmessi a servizi remoti.
