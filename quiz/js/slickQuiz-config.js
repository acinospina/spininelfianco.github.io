// Setup per il quiz domande e risposte




// NOTE: ricordati le virgole, IE ha problemi con i cattivi ragazzi




var quizJSON = {

    "info": {

        "name":    "Quanto ne sai sulla Cannabis?",

        "main":    "<p>Metti alla prova le tue conoscenze!</p>",

        "results": "<h5>Per saperne di più</h5><p>La politica sulla Cannabis dovrebbe essere basata su prove. Questo è il motivo per cui <a href='https://twitter.com/search?q=spininelfianco&src=typed_query' target='_blank'><b>#spininelfianco</b></a> propone le seguenti schede informative che evidenziano la scienza pertinente sottoposta a revisione paritaria relativa agli impatti sulla salute e sulla società dell'uso, dell'applicazione e della regolamentazione della Cannabis. <a href='https://norml.org/marijuana/fact-sheets' target='_blank'>Schede Informative via NORML</a></p><img src='https://i0.wp.com/norml.org/wp-content/uploads/2020/01/wordmark-green.png' class='img-fluid' alt='Norml facts check'> <br>Nel 2020, i ricercatori di tutto il mondo hanno pubblicato oltre 3.500 articoli scientifici sul tema della Cannabis, secondo i dati compilati dalla National Library of Medicine e <a href='https://pubmed.ncbi.nlm.nih.gov/?term=marijuana' target='_blank'>PubMed.gov</a><img src='https://logodix.com/logo/2072024.png'>",

        "level1":  "🏆 Ottimo",

        "level2":  "😏 Buono",

        "level3":  "😐 Nella media",

        "level4":  "😕 Potrebbe andar meglio",

        "level5":  "😡 Meglio studiare..." // no comma here

    },

    "questions": [

  
 { // Question 1
            "q": “In quali specie si distingue generalmente la Cannabis?”,
            "a": [
                {"option": "Sativa e Indica",      "correct": false},
                {"option": "Sativa, Indica, Ruderalis",     "correct": tue},
                {"option": "CBD e THC",      "correct": false}
            ],
            "correct": "<p><span>👍 Sì!</span> Il problema della speciazione all’interno del genere <i>Cannabis</i>, in particolare la distinzione fra <i>Cannabis sativa</i> (canapa da fibra) e <i>Cannabis indica</i> (canapa psicoattiva), ha generato una lunga discussione, per via anche delle implicazioni di natura legale associate all’impiego di questa pianta come droga psicoattiva. Indico di seguito i passi salienti di questa secolare problematica:
<ul>
<li>Nel 1753 Linneo considerò la canapa una singola specie, <i>Cannabis sativa</i> L.</li>
<li> Nel 1785 Lamarck fu il primo botanico a distinguere la <i>Cannabis indica</i> Lam. da <i>C. sativa</i> L. </li>
<li> Nel 1976 Small & Cronquist riconobbero una sola specie suddivisa in due subspecie, <i>C. sativa</i> L. subsp. <i>indica</i> (Lam) Small & Cronquist, e <i>C. sativa</i> L., subsp. <i>sativa</i>. </li>
<li>Nel 2005, basandosi su studi genetici, Hillig avrebbe dimostrato come il genere <i>Cannabis</i> sia derivato da <b>tre principali poli genetici</b>, e per questo motivo ha nuovamente distinto le due specie <b><i>C. sativa</i></b> e <b><i>C. indica</i></b>, aggiungendo la terza specie <b><i>C. ruderalis</i></b>.
</li>
</ul>
<br>Fonte:<a href=‘https://samorini.it/archeologia/asia/archeologia-della-canapa/’> Giorgio Samorini, Archeologia della canapa</a>.</p>”,
            "incorrect": "<p><span>👎 No</span> Il problema della speciazione all’interno del genere <i>Cannabis</i>, in particolare la distinzione fra <i>Cannabis sativa</i> (canapa da fibra) e <i>Cannabis indica</i> (canapa psicoattiva), ha generato una lunga discussione, per via anche delle implicazioni di natura legale associate all’impiego di questa pianta come droga psicoattiva. Indico di seguito i passi salienti di questa secolare problematica:
<ul>
<li>Nel 1753 Linneo considerò la canapa una singola specie, <i>Cannabis sativa</i> L.</li>
<li> Nel 1785 Lamarck fu il primo botanico a distinguere la <i>Cannabis indica</i> Lam. da <i>C. sativa</i> L. </li>
<li> Nel 1976 Small & Cronquist riconobbero una sola specie suddivisa in due subspecie, <i>C. sativa</i> L. subsp. <i>indica</i> (Lam) Small & Cronquist, e <i>C. sativa</i> L., subsp. <i>sativa</i>. </li>
<li>Nel 2005, basandosi su studi genetici, Hillig avrebbe dimostrato come il genere <i>Cannabis</i> sia derivato da <b>tre principali poli genetici</b>, e per questo motivo ha nuovamente distinto le due specie <b><i>C. sativa</i></b> e <b><i>C. indica</i></b>, aggiungendo la terza specie <b><i>C. ruderalis</i></b>.
</li>
</ul>
<br>Fonte:<a href=‘https://samorini.it/archeologia/asia/archeologia-della-canapa/’> Giorgio Samorini, Archeologia della canapa</a>.</p>” // no comma here
        },






















      

 { // Question 2

            "q": "Secondo le ricerche svolte finora, la pianta di Cannabis ha avuto origine in:",

            "a": [

                {"option": "America",      "correct": false},

                {"option": "Asia",     "correct": true},

                {"option": "Africa",      "correct": false}

            ],

             "correct": "<p><span>👍 Giusto!</span> Per quanto riguarda il o i centri d’origine delle specie di Cannabis, v’è una generale tendenza a riconoscere un’<b>origine asiatica</b>, vuoi orientale (Li, 1974), o, più recentemente, occidentale, cioè centro-asiatica, come per Faeti et al. (1996) e Zhekun & Bartholomew (2003), i quali sospettano quale area d’origine la regione dello Xinjiang della Cina occidentale, o l’India settentrionale. Nella considerazione delle due differenti specie, Hillig (2005) ritiene che <i>C. indica</i> sia originata in Afghanistan e si sia diffusa in seguito in Cina, Giappone, Africa e il Sud-Est asiatico, mentre <i>C. sativa</i> sia originata nell’Asia centrale e si sia diffusa in seguito in Europa. Tuttavia, studi genetici di campioni di canapa antichi di 2500 anni e ritrovati nella regione cinese dello Xinjiang, avrebbero evidenziato un’origine europea-siberiana di C. sativa, con sua successiva migrazione verso oriente (Mukherjee et al., 2008).<br>
Una recente rivisitazione dei dati fossili e genetici relativi al genere <i>Cannabis</i> porta a considerare un centro d’origine del genere situato nella regione nord-orientale dell’<b>altopiano tibetano</b>, e una dispersione verso l’Europa avvenuta attorno ai 1,8-1,2 milioni di anni fa (McPartland, 2018).
<br>Fonte:<a href=‘https://samorini.it/archeologia/asia/archeologia-della-canapa/’> Giorgio Samorini, Archeologia della canapa</a>.</p>”,
            "incorrect": "<p><span>👎 Sbagliato</span> Per quanto riguarda il o i centri d’origine delle specie di Cannabis, v’è una generale tendenza a riconoscere un’<b>origine asiatica</b>, vuoi orientale (Li, 1974), o, più recentemente, occidentale, cioè centro-asiatica, come per Faeti et al. (1996) e Zhekun & Bartholomew (2003), i quali sospettano quale area d’origine la regione dello Xinjiang della Cina occidentale, o l’India settentrionale. Nella considerazione delle due differenti specie, Hillig (2005) ritiene che <i>C. indica</i> sia originata in Afghanistan e si sia diffusa in seguito in Cina, Giappone, Africa e il Sud-Est asiatico, mentre <i>C. sativa</i> sia originata nell’Asia centrale e si sia diffusa in seguito in Europa. Tuttavia, studi genetici di campioni di canapa antichi di 2500 anni e ritrovati nella regione cinese dello Xinjiang, avrebbero evidenziato un’origine europea-siberiana di C. sativa, con sua successiva migrazione verso oriente (Mukherjee et al., 2008).<br>
Una recente rivisitazione dei dati fossili e genetici relativi al genere <i>Cannabis</i> porta a considerare un centro d’origine del genere situato nella regione nord-orientale dell’<b>altopiano tibetano</b>, e una dispersione verso l’Europa avvenuta attorno ai 1,8-1,2 milioni di anni fa (McPartland, 2018).
<br>Fonte:<a href=‘https://samorini.it/archeologia/asia/archeologia-della-canapa/’> Giorgio Samorini, Archeologia della canapa</a>.</p>"// no comma here
        },









 { // Question 3

            "q": "Quanti principi attivi ha la Cannabis?",

            "a": [

                {"option": "Due: CBD e THC",      "correct": false},

                {"option": "Finora ne sono stati identificati circa un centinaio",     "correct": true},

                {"option": "Undici, ma il più importante è il delta-9-tetraidrocannabinolo o THC",      "correct": false}

            ],

            "correct": "<p><span>👍 Bene!</span> Gli studi citano un’ampia forbice, <b>da 60 a "più di 100”</b>, a più di 140. Quest’ultimo numero potrebbe confermarsi vero in futuro, perché gli scienziati ritengono che restino da scoprire molti altri cannabinoidi.<br>Da quanto riscontrato esaminando le ricerche più recenti, è ancora difficile fissare un numero. Tuttavia, due numeri sono più comunemente citati in riferimento a cannabinoidi isolati e verificati: 111 e 113 - entrambi includono sette nuovi composti recentemente scoperti dai ricercatori del laboratorio di Cannabis presso l'Università del Mississippi nel marzo 2019.<br>
<b>Fonte</b>:<a href='https://cannabismd.com/basics/cannabinoids/how-many-cannabinoids-does-cannabis-actually-have/' target='_blank'>How many cannabinoids does Cannabis actually have?</a><br><br>
I ben noti effetti psicotropi del D-9-tetraidrocannabinolo (THC), che sono mediati dall'attivazione dei recettori CB1 cerebrali, ne hanno notevolmente limitato l'uso clinico. Tuttavia, la pianta Cannabis contiene <b>molti cannabinoidi con psicoattività debole o assente</b> che, dal punto di vista terapeutico, potrebbero essere più promettenti del D9-tetraidrocannabinolo.<br>
<b>Fonte</b>:<a href='http://biochanvre.ch/info/en/IMG/pdf/Non-Psychoactive-Cannabinoids.pdf' target='_blank'>Izzo AA, Borrelli F, Capasso R, Di marzo V, Mechoulam R. <I>Non-psychotropic plant cannabinoids: new therapeutic opportunities from an ancient herb</I>. Trends Pharmacol Sci. 2009;30(10):515-27.
</a></p>",

            "incorrect": "<p><span>👎 Ops... No.</span> Gli studi citano un’ampia forbice, <b>da 60 a "più di 100”</b>, a più di 140. Quest’ultimo numero potrebbe confermarsi vero in futuro, perché gli scienziati ritengono che restino da scoprire molti altri cannabinoidi.<br>Da quanto riscontrato esaminando le ricerche più recenti, è ancora difficile fissare un numero. Tuttavia, due numeri sono più comunemente citati in riferimento a cannabinoidi isolati e verificati: 111 e 113 - entrambi includono sette nuovi composti recentemente scoperti dai ricercatori del laboratorio di Cannabis presso l'Università del Mississippi nel marzo 2019.<br>
<b>Fonte</b>:<a href='https://cannabismd.com/basics/cannabinoids/how-many-cannabinoids-does-cannabis-actually-have/' target='_blank'>How many cannabinoids does Cannabis actually have?</a><br><br>
I ben noti effetti psicotropi del D-9-tetraidrocannabinolo (THC), che sono mediati dall'attivazione dei recettori CB1 cerebrali, ne hanno notevolmente limitato l'uso clinico. Tuttavia, la pianta Cannabis contiene <b>molti cannabinoidi con psicoattività debole o assente</b> che, dal punto di vista terapeutico, potrebbero essere più promettenti del D9-tetraidrocannabinolo.<br>
<b>Fonte</b>:<a href='http://biochanvre.ch/info/en/IMG/pdf/Non-Psychoactive-Cannabinoids.pdf' target='_blank'>Izzo AA, Borrelli F, Capasso R, Di marzo V, Mechoulam R. <I>Non-psychotropic plant cannabinoids: new therapeutic opportunities from an ancient herb</I>. Trends Pharmacol Sci. 2009;30(10):515-27.
</a></p>"// no comma here

        },



 { // Question 4
            "q": “Il THC contenuto nella Cannabis è:”,
            "a": [
                {"option": "Una sostanza allucinogena",      "correct": false false},
                {"option": "Una sostanza psicoattiva",     "correct": true},
                {"option": "Un alcaloide stupefacente ",      "correct": false}
            ],
            "correct": "<p><span>👍 Benissimo!</span> Il <b>THC</b> o delta-9-tetraidrocannabinolo è la sostanza a maggior <b>effetto psicoattivo</b> presente nella Cannabis. Benché poco risaputo, secondo la classificazione dell’OMS anche l’alcol è una sostanza psicoattiva, e secondo uno studio pubblicato sulla rivista Scientific Reports i rischi che comporta sono ben maggiori.<br> Secondo una valutazione comparativa del rischio di droghe, compresi alcol e tabacco, utilizzando l'approccio del margine di esposizione (MOE). […] Per l'esposizione individuale le quattro sostanze <b>alcol</b>, <b>nicotina</b>, <b>cocaina</b> ed <b>eroina</b> rientrano nella categoria “<b>ad alto rischio<“/b> con MOE <10, il resto dei composti eccetto THC rientrano nella categoria "rischio" con MOE <100. Su una scala di popolazione, solo l'alcol rientrerebbe nella categoria "ad alto rischio" e il fumo di sigaretta rientrerebbe nella categoria "rischio", mentre tutti gli altri agenti (oppiacei, cocaina, stimolanti di tipo anfetamina, ecstasy e benzodiazepine) presentavano MOE> 100 e Cannabis presentava MOE> 10,000. L'approccio MOE tossicologico conferma approcci di classificazione delle droghe basati su epidemiologia e scienze sociali, in particolare per quanto riguarda la classificazione di <b>alcol e tabacco (alto rischio) e Cannabis (basso rischio)</b>.
<br>Fonte:<a href=‘https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4311234/’ target='_blank'>Comparative risk assessment of alcohol, tobacco, cannabis and other illicit drugs using the margin of exposure approach, Sci Rep. 2015; 5: 8126.
</a>.<br><br>
Per una panoramica sulle droghe e loro effetti (caffeina e cioccolato compresi): <a href=‘https://www.informationisbeautiful.net/visualizations/drugs-world/’ target='_blank'> Infografica Drugs World </a>.</p>”,
            "incorrect": "<p><span>👎 Ahi ahi, no</span>Il <b>THC</b> o delta-9-tetraidrocannabinolo è la sostanza a maggior <b>effetto psicoattivo</b> presente nella Cannabis. Benché poco risaputo, secondo la classificazione dell’OMS anche l’alcol è una sostanza psicoattiva, e secondo uno studio pubblicato sulla rivista Scientific Reports i rischi che comporta sono ben maggiori.<br> Secondo una valutazione comparativa del rischio di droghe, compresi alcol e tabacco, utilizzando l'approccio del margine di esposizione (MOE). […] Per l'esposizione individuale le quattro sostanze <b>alcol</b>, <b>nicotina</b>, <b>cocaina</b> ed <b>eroina</b> rientrano nella categoria “<b>ad alto rischio<“/b> con MOE <10, il resto dei composti eccetto THC rientrano nella categoria "rischio" con MOE <100. Su una scala di popolazione, solo l'alcol rientrerebbe nella categoria "ad alto rischio" e il fumo di sigaretta rientrerebbe nella categoria "rischio", mentre tutti gli altri agenti (oppiacei, cocaina, stimolanti di tipo anfetamina, ecstasy e benzodiazepine) presentavano MOE> 100 e Cannabis presentava MOE> 10,000. L'approccio MOE tossicologico conferma approcci di classificazione delle droghe basati su epidemiologia e scienze sociali, in particolare per quanto riguarda la classificazione di <b>alcol e tabacco (alto rischio) e Cannabis (basso rischio)</b>.
<br>Fonte:<a href=‘https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4311234/’ target='_blank'>Comparative risk assessment of alcohol, tobacco, cannabis and other illicit drugs using the margin of exposure approach, Sci Rep. 2015; 5: 8126.
</a>.<br><br>
Per una panoramica sulle droghe e loro effetti (caffeina e cioccolato compresi): <a href=‘https://www.informationisbeautiful.net/visualizations/drugs-world/’ target='_blank'> Infografica Drugs World </a>.</p>” // no comma here
        },





 

























 { // Question 5

            "q": "Il THC contenuto nella Cannabis è una sostanza:",

            "a": [

                {"option": "Liposolubile",      "correct": true},

                {"option": "Idrosolubile",     "correct": false},

                {"option": "Nessuna delle due, si fuma",      "correct": false}

            ],

            "correct": "<p><span>👍 Oh sì!</span> Come cucinare con i concentrati di Cannabis<br>Una volta decarbossilati gli estratti, potrete usarli per dare una spinta in più a quasi tutti i vostri piatti preferiti. Ricordatevi che <b>il THC è liposolubile</b>, per cui avrete ancora bisogno di usare burro, olio o un'altra forma di grasso alimentare (come ad esempio il ghi, o burro chiarificato). Di solito, consigliamo di mescolare i concentrati in piccole quantità di <b>burro o olio</b> quando sono ancora caldi dal processo di decarbossilazione. Mescolate energicamente la miscela fino a completa dissoluzione del concentrato nel grasso.<b>Fonte</b>: Blog Royal Queen Seeds<a href='https://www.royalqueenseeds.it/blog-come-cucinare-con-concentrati-di-cannabis-come-kief-hashish-e-bho-n1125' target='_blank'> Come cucinare con concentrati di Cannabis come kief, hashish e BHO.</a></p>",

            "incorrect": "<p><span>👎 Sbagliato, ma questa non era facile…</span> Come cucinare con i concentrati di Cannabis<br>Una volta decarbossilati gli estratti, potrete usarli per dare una spinta in più a quasi tutti i vostri piatti preferiti. Ricordatevi che <b>il THC è liposolubile</b>, per cui avrete ancora bisogno di usare burro, olio o un'altra forma di grasso alimentare (come ad esempio il ghi, o burro chiarificato). Di solito, consigliamo di mescolare i concentrati in piccole quantità di <b>burro o olio</b> quando sono ancora caldi dal processo di decarbossilazione. Mescolate energicamente la miscela fino a completa dissoluzione del concentrato nel grasso.<b>Fonte</b>: Blog Royal Queen Seeds<a href='https://www.royalqueenseeds.it/blog-come-cucinare-con-concentrati-di-cannabis-come-kief-hashish-e-bho-n1125' target='_blank'> Come cucinare con concentrati di Cannabis come kief, hashish e BHO.</a></p>"// no comma here

        },



{ // Question 6

            "q": "Per la cura di quali patologie si è dimostrata utile la Cannabis?",

            "a": [

                {"option": "Cancro e depressione, per esempio, ma solo se la Cannabis assunta è light",      "correct": false},

                {"option": "Cancro, Parkinson, epilessia, fibromialgia, anoressia nervosa, insonnia, depressione",     "correct": true},

                {"option": "Non esistono prove scientifiche per nessuna delle patologie citate",      "correct": false}

            ],

            "correct": "<p><span>👍 Vero!</span> La Cannabis è usata come terapia nelle patologie citate e altre, ecco alcuni riferimenti su PubMed.gov<br><br>

<ul>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/30794025/’target='_blank'>Cancro</a><br>
Dolcevitaonline.it<a href=‘https://www.dolcevitaonline.it/stati-uniti-un-malato-di-cancro-su-cinque-usa-anche-la-cannabis-per-curarsi/’target='_blank'> Stati Uniti, un malato di cancro su cinque usa (anche) la Cannabis per curarsi</a><li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+parkinson’target='_blank'>Parkinson</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+epilepsy’target='_blank'>Epilessia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+fibromyalgia’target='_blank'>Fibromialgia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+anorexia’target='_blank'>Anoressia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+insomnia’target='_blank'>Insonnia</a></li>
<li><a href=‘https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7309674/’>Depressione</a><br>
Dolcevitaonline.it <a href=‘https://www.dolcevitaonline.it/la-cannabis-per-dare-sollievo-immediato-dai-sintomi-della-depressione/’target='_blank'>La Cannabis per dare sollievo immediato dai sintomi della depressione</a></li>
</ul></p>",

            "incorrect": "<p><span>👎 No…</span> La Cannabis è usata come terapia nelle patologie citate e altre, ecco alcuni riferimenti su PubMed.gov<br><br>

<ul>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/30794025/’target='_blank'>Cancro</a><br>
Dolcevitaonline.it<a href=‘https://www.dolcevitaonline.it/stati-uniti-un-malato-di-cancro-su-cinque-usa-anche-la-cannabis-per-curarsi/’target='_blank'> Stati Uniti, un malato di cancro su cinque usa (anche) la Cannabis per curarsi</a><li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+parkinson’target='_blank'>Parkinson</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+epilepsy’target='_blank'>Epilessia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+fibromyalgia’target='_blank'>Fibromialgia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+anorexia’target='_blank'>Anoressia</a></li>
<li><a href=‘https://pubmed.ncbi.nlm.nih.gov/?term=cannabis+insomnia’target='_blank'>Insonnia</a></li>
<li><a href=‘https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7309674/’>Depressione</a><br>
Dolcevitaonline.it <a href=‘https://www.dolcevitaonline.it/la-cannabis-per-dare-sollievo-immediato-dai-sintomi-della-depressione/’target='_blank'>La Cannabis per dare sollievo immediato dai sintomi della depressione</a></li>
</ul> </p>"// no comma here

        },





 { // Question 7

            "q": "La cosiddetta Cannabis <i>light</i> deve contenere una percentuale di THC:",

            "a": [

                {"option": "Inferiore o pari a 0,5%",      "correct": true},

                {"option": "Inferiore a 1%",     "correct": false},

                {"option": "Non contiene THC",      "correct": false}

            ],

            "correct": "<p><span>👍 Yep</span> Per quanto riguarda la vendita dei fiori di Cannabis, in linea teorica devono contenere una percentuale di THC inferiore o pari allo <b>0,6</b>; all'atto pratico, c'è un <b>vuoto normativo</b> e la cassazione si è pronunciata fino allo <b>0,5</b>.<br>
Fonte:<br>Altalex.com - <a href='https://www.altalex.com/documents/news/2017/01/05/disposizioni-per-la-promozione-della-coltivazione-e-della-filiera-agroindustriale-della-canapa' target='_blank'>Canapa: disposizioni per la promozione della coltivazione e della filiera agroindustriale</a>, Legge, 02/12/2016 n° 242, G.U. 30/12/2016.<br><br>
Per approfondire le vicende legali della Cannabis light in Italia, guarda il video di Matteo Gracis, direttore di Dolcevita Magazine: <a href='https://www.youtube.com/watch?v=byGL2VxFCT0' target='_blank'>Salvini e la Cannabis: una storia triste.</a></p>",

            "incorrect": "<p><span>👎 Nope </span> Per quanto riguarda la vendita dei fiori di Cannabis, in linea teorica devono contenere una percentuale di THC inferiore o pari allo <b>0,6</b>; all'atto pratico, c'è un <b>vuoto normativo</b> e la cassazione si è pronunciata fino allo <b>0,5</b>.<br>
Fonte:<br>Altalex.com - <a href='https://www.altalex.com/documents/news/2017/01/05/disposizioni-per-la-promozione-della-coltivazione-e-della-filiera-agroindustriale-della-canapa' target='_blank'>Canapa: disposizioni per la promozione della coltivazione e della filiera agroindustriale</a>, Legge, 02/12/2016 n° 242, G.U. 30/12/2016.<br><br>
Per approfondire le vicende legali della Cannabis light in Italia, guarda il video di Matteo Gracis, direttore di Dolcevita Magazine: <a href='https://www.youtube.com/watch?v=byGL2VxFCT0' target='_blank'>Salvini e la Cannabis: una storia triste.</a></p>"// no comma here

        },




 { // Question 8

            "q": "In Italia, dal 2020, secondo la Cassazione, non costituisce più reato ma illecito amministrativo:",

            "a": [

                {"option": "Coltivare un limitato numero di piante di Cannabis, con metodi rudimentali, per uso personale",      "correct": true},

                {"option": "Coltivare Cannabis senza fini di lucro",     "correct": false},

                {"option": "Coltivare fino a 10 piante di Cannabis in grow box",      "correct": false}

            ],

            "correct": "<p><span>👍 Molto bene!</span> Con sentenza depositata il <b>16 aprile 2020</b>, le Sezioni Unite hanno affermato il seguente principio di diritto: «il reato di coltivazione di stupefacenti è configurabile indipendentemente dalla quantità di principio attivo ricavabile nell'immediatezza, […] devono però ritenersi escluse, in quanto non riconducibili all'ambito di applicazione della norma penale, le attività di coltivazione di minime dimensioni svolte in forma domestica, che per le <b>rudimentali tecniche</b> utilizzate, lo <b>scarso numero di piante</b>, il modestissimo quantitativo di prodotto ricavabile, la mancanza di ulteriori indici di un loro inserimento nell'ambito del mercato degli stupefacenti, appaiono destinate in via esclusiva all’<b>uso personale</b> del coltivatore».<br><b>Fonte</b>: Giurisprudenzapenale.com <a href='https://www.giurisprudenzapenale.com/2020/04/16/coltivazione-di-piante-da-cui-siano-ricavabili-sostanze-stupefacenti-depositata-la-sentenza-delle-sezioni-unite-12348-2020/' target='_blank'>Coltivazione di piante da cui siano ricavabili sostanze stupefacenti: depositata la sentenza delle Sezioni Unite (12348/2020).</a></p>",

            "incorrect": "<p><span>👎 Errato</span> Con sentenza depositata il <b>16 aprile 2020</b>, le Sezioni Unite hanno affermato il seguente principio di diritto: «il reato di coltivazione di stupefacenti è configurabile indipendentemente dalla quantità di principio attivo ricavabile nell'immediatezza, […] devono però ritenersi escluse, in quanto non riconducibili all'ambito di applicazione della norma penale, le attività di coltivazione di minime dimensioni svolte in forma domestica, che per le <b>rudimentali tecniche</b> utilizzate, lo <b>scarso numero di piante</b>, il modestissimo quantitativo di prodotto ricavabile, la mancanza di ulteriori indici di un loro inserimento nell'ambito del mercato degli stupefacenti, appaiono destinate in via esclusiva all’<b>uso personale</b> del coltivatore».<br><b>Fonte</b>: Giurisprudenzapenale.com <a href='https://www.giurisprudenzapenale.com/2020/04/16/coltivazione-di-piante-da-cui-siano-ricavabili-sostanze-stupefacenti-depositata-la-sentenza-delle-sezioni-unite-12348-2020/' target='_blank'>Coltivazione di piante da cui siano ricavabili sostanze stupefacenti: depositata la sentenza delle Sezioni Unite (12348/2020).</a></p>"// no comma here

        },







 { // Question 9

            "q": "Quanto spendono all'incirca gli italiani in Cannabis?",

            "a": [

                {"option": "1 miliardo/anno",      "correct": false},

                {"option": "3 miliardi/anno",     "correct": false},

                {"option": "6 miliardi/anno",      "correct": true}

            ],

            "correct": "<p><span>👍 Proprio così</span> Secondo le <b>Relazioni al Parlamento sulle dipendenze 2020</b>, il traffico illegale di Cannabis risulta aver generato solo nel <b>2019</b> una spesa da parte dei consumatori di <b>6,3 miliardi di euro</b>. Una cifra enorme che ogni anno finisce nella mani delle mafie.⁣ <b>Fonte</b>: <a href='http://www.politicheantidroga.gov.it/it/dpa-in-sintesi/relazioni-annuali-al-parlamento/relazione-annuale-al-parlamento-sul-fenomeno-delle-tossicodipendenze-in-italia-anno-2020-dati-2019/
' target='_blank'>Relazione Annuale al Parlamento sul Fenomeno delle Tossicodipendenze in Italia Anno 2020 (dati 2019)</a> via <a href='https://www.instagram.com/p/CHYL6DOjMJZ/' target='_blank'>Megliolegale.it</a></p>",

            "incorrect": "<p><span>👎 No, ben di più</span> Secondo le <b>Relazioni al Parlamento sulle dipendenze 2020</b>, il traffico illegale di Cannabis risulta aver generato solo nel <b>2019</b> una spesa da parte dei consumatori di <b>6,3 miliardi di euro</b>. Una cifra enorme che ogni anno finisce nella mani delle mafie.⁣ <b>Fonte</b>: <a href='http://www.politicheantidroga.gov.it/it/dpa-in-sintesi/relazioni-annuali-al-parlamento/relazione-annuale-al-parlamento-sul-fenomeno-delle-tossicodipendenze-in-italia-anno-2020-dati-2019/
' target='_blank'>Relazione Annuale al Parlamento sul Fenomeno delle Tossicodipendenze in Italia Anno 2020 (dati 2019)</a> via <a href='https://www.instagram.com/p/CHYL6DOjMJZ/' target='_blank'>Megliolegale.it</a></p>"// no comma here

        },







 { // Question 10

            "q": "In Italia riguardano la Cannabis:",

            "a": [

                {"option": "Il 15% di tutte le operazioni antidroga",      "correct": false},

                {"option": " Il 35% di tutte le operazioni antidroga",      "correct": false},

                {"option": "Il 58% di tutte le operazioni antidroga",      "correct": true}

            ],

            "correct": "<p><span>👍 Ebbene sì</span> In Italia riguardano la Cannabis:<br> 
<ul><li>il <b>58%</b> di tutte le operazioni antidroga</li> 
<li>96% dei sequestri</li> 
<li>80% delle segnalazioni ai Prefetti per uso e possesso personale</li> 
<li>48% delle denunce alle autorità giudiziarie.</li></ul> 
Il 30% dei detenuti in Italia si trova in carcere per reati legati alla droga.<br> 
La maggior parte di essi è stato arrestato per lo spaccio della sostanza meno pericolosa: la Cannabis.<br><b>Fonte</b>:<a href='https://megliolegale.it' target='_blank'>Megliolegale.it</a></p>",

            "incorrect": "<p><span>👎 Eh no</span> In Italia riguardano la Cannabis:<br> 
<ul><li>il <b>58%</b> di tutte le operazioni antidroga</li> 
<li>96% dei sequestri</li> 
<li>80% delle segnalazioni ai Prefetti per uso e possesso personale</li> 
<li>48% delle denunce alle autorità giudiziarie.</li></ul> 
Il 30% dei detenuti in Italia si trova in carcere per reati legati alla droga.<br> 
La maggior parte di essi è stato arrestato per lo spaccio della sostanza meno pericolosa: la Cannabis.<br><b>Fonte</b>:<a href='https://megliolegale.it' target='_blank'>Megliolegale.it</a></p>"// no comma here

        },




 

























  { // Question 11

            "q": "La legalizzazione della Cannabis porta a un aumento del consumo tra i giovani?",

            "a": [

                {"option": "Sì, soprattutto adolescenti",      "correct": false},

                {"option": "Certo, é risaputo!",     "correct": false},

                {"option": "No, è diminuito”,      "correct": true}

            ],

            "correct": "<p><span>👍 Risposta esatta!</span> A seguito dell'emanazione sia delle leggi sull'accesso alla Cannabis terapeutica sia delle leggi per l'uso da parte degli adulti, <b>non c'è stato alcun aumento</b> nel consumo da parte degli adolescenti. Anzi, sono diminuiti!<br>
<b>Fonti:</b><br>
BeLeaf Magazine<a href=‘https://beleafmagazine.it/2020/11/24/con-la-legalizzazione-gli-adolescenti-consumano-meno-cannabis-ecco-un-nuovo-studio-che-lo-dimostra/
’ target='_blank'> Con la legalizzazione gli adolescenti consumano meno Cannabis. Ecco il nuovo studio che lo dimostra</a><br>
Norml.org <a href=‘https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/’ target='_blank'> Marijuana regulation and teen use rates</a><br>
Cdc.gov <a href=‘https://www.cdc.gov/pcd/issues/2020/20_0156.htm’ target='_blank'> Trends in adolescent treatment admissions for marijuana in the United States, 2008–2017</a></p>",

            "incorrect": "<p><span>👎 Uhh no.</span> A seguito dell'emanazione sia delle leggi sull'accesso alla Cannabis terapeutica sia delle leggi per l'uso da parte degli adulti, <b>non c'è stato alcun aumento</b> nel consumo da parte degli adolescenti. Anzi, sono diminuiti!<br>
<b>Fonti:</b><br>
BeLeaf Magazine<a href=‘https://beleafmagazine.it/2020/11/24/con-la-legalizzazione-gli-adolescenti-consumano-meno-cannabis-ecco-un-nuovo-studio-che-lo-dimostra/
’ target='_blank'> Con la legalizzazione gli adolescenti consumano meno Cannabis. Ecco il nuovo studio che lo dimostra</a><br>
Norml.org <a href=‘https://norml.org/marijuana/fact-sheets/marijuana-regulation-and-teen-use-rates/’ target='_blank'> Marijuana regulation and teen use rates</a><br>
Cdc.gov <a href=‘https://www.cdc.gov/pcd/issues/2020/20_0156.htm’ target='_blank'> Trends in adolescent treatment admissions for marijuana in the United States, 2008–2017</a></p>"// no comma here

        },




        { // Question 12

            "q": "La legalizzazione della Cannabis porta a un aumento della criminalità?",

            "a": [

                {"option": "Si, i crimini aumentano",               "correct": false},

                {"option": "No, i crimini diminuiscono",   "correct": true},

                {"option": "È provato comunque che aumenta lo spaccio illegale",               "correct": false}

            ],

            "select_any": true,

            "correct": "<p><span>👍 Giusto!</span> Questo documento studia gli <b>effetti della legalizzazione della Cannabis</b> sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado ecc.. I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un <b>calo di circa il 19% rispetto al tasso medio di criminalità</b> nel periodo campione. […] Nel complesso, i nostri risultati suggeriscono che i dispensari causano una <b>riduzione complessiva della criminalità</b> nei quartieri, senza prove di ricadute nei quartieri circostanti. […] I nostri risultati sono coerenti con le teorie che prevedono che la <b>legalizzazione</b> della marijuana <b>rimpiazzerà le organizzazioni criminali</b> illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. 
<b>Fonte:</b> <a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!' target='_blank'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, <i><Regional Science and Urban Economics</i>, 2019</a><br><br>
<b>Approfondimento:</b>
<a href=‘https://www.giurisprudenzapenale.com/2016/07/08/stupefacenti-la-relazione-della-dna-alla-proposta-legge-sulla-legalizzazione-della-cannabis/
’ target='_blank'>Stupefacenti: Relazione della Direzione Nazionale Antimafia sulla proposta di legge sulla legalizzazione della Cannabis, 2016
</a></p>",

            "incorrect": "<p><span>👎 No. Al contrario</span> Questo documento studia gli effetti della legalizzazione della marijuana sulla criminalità di quartiere e documenta i modelli nel tempo nelle sedi dei dispensari, utilizzando dati dettagliati da Denver, Colorado etc… I risultati implicano che un dispensario aggiuntivo in un quartiere porta a una riduzione di 17 crimini al mese per 10.000 residenti, che corrisponde a un calo di circa il 19% rispetto al tasso medio di criminalità nel periodo campione. … Nel complesso, i nostri risultati suggeriscono che i dispensari causano una riduzione complessiva della criminalità nei quartieri, senza prove di ricadute nei quartieri circostanti. … I nostri risultati sono coerenti con le teorie che prevedono che la legalizzazione della marijuana rimpiazzerà le organizzazioni criminali illecite e ridurrà la criminalità attraverso cambiamenti nei comportamenti di sicurezza o sostituzione con sostanze più dannose. …<a href='https://www.sciencedirect.com/science/article/pii/S016604621830293X#!' target='_blank'>L'effetto della legalizzazione della marijuana sulla criminalità di quartiere, Regional Science and Urban Economics, 2019</a> & <a href='http://journals.sagepub.com/doi/full/10.1177/1098611118786255' target='_blank'>Legalizzazione della marijuana e tassi di eliminazione del crimine: test delle affermazioni dei sostenitori in Colorado e nello stato di Washington, Police Quarterly, 2018</a></p>" // no comma here

        }

    ]

};
