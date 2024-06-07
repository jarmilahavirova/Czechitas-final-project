const questions = [
  {
    id: 1,
    question: "Je určeno pořadí, v kterém hráči vyhazují z výhoziště?",
    answers: [
      {
        text: "Ano, na první jamce dle skórkarty, poté dle skóre na předchozích jamkách.",
        correct: true,
      },
      {
        text: "Ano, na každé jamce je stejné, během celého kola neměnné.",
        correct: false,
      },
      { text: "Ne, kdo dřív přijde, ten dřív hraje.", correct: false },
    ],
  },
  {
    id: 2,
    question:
      "Na třetí jamce zahráli hráči toto skóre: Honza 3, Pepa 2, Kuba 4. V jakém pořadí budou vyhazovat na čtvrté jamce.",
    answers: [
      { text: "Nejdříve Honza, pak Kuba, pak Pepa.", correct: false },
      { text: "Nejdříve Kuba, pak Honza, nakonec Pepa.", correct: false },
      { text: "Nejdříve Pepa, pak Honza, nakonec Kuba.", correct: true },
    ],
  },
  {
    id: 3,
    question:
      "Má hráč časový limit na odhod, pokud je zrovna na řadě a v hodu mu nic nebrání?",
    answers: [
      { text: "Ano, 30 vteřin.", correct: true },
      { text: "Ano, 1 minutu.", correct: false },
      { text: "Ne, může rozmýšlet, jak je mu libo.", correct: false },
    ],
  },
  {
    id: 4,
    question:
      "Můžu v momentě, kdy disk vypouštím z ruky, stát jednou nohou mimo plochu výhoziště?",
    answers: [
      { text: "Jasně, pokud tou druhou stojím na výhozišti.", correct: false },
      {
        text: "Bohužel, v tento moment musí být všechny opěrné body jen na výhozišti.",
        correct: true,
      },
      {
        text: "Klidně oběma, výhoziště je jen orientační místo odhodu.",
        correct: false,
      },
    ],
  },
  {
    id: 5,
    question:
      "Na mapce jamky je vyznačen obdélníček a u něj DZ. Co to znamená?",
    answers: [
      {
        text: "Z českého dárková zóna - pokud mi sem disk dopadne, dostanu při vyhlašování výsledků dárek.",
        correct: false,
      },
      {
        text: "Z angličtiny Doom Zone - pokud mi sem dopadne disk, nesmím s ním do konce kola házet.",
        correct: false,
      },
      {
        text: "Z angličtiny Drop Zone - místo, odkud se za určitých podmínek (např. minutí mandatory) hází.",
        correct: true,
      },
    ],
  },
  {
    id: 6,
    question: "Všichni hráči již odhodili z výhoziště, kdo je nyní na řadě?",
    answers: [
      {
        text: "Ten, co z výhoziště házel jako první, pořadí na celou jamku zůstává stejné.",
        correct: false,
      },
      { text: "Ten, jehož disk leží nejdále od koše.", correct: true },
      { text: "Ten, který dohodil nejdále.", correct: false },
    ],
  },
  {
    id: 7,
    question:
      "Jdeš házet svůj druhý hod a hodilo by se ti použít disk z prvního hodu. Můžeš ho použít?",
    answers: [
      {
        text: "Bohužel, toto není vůbec možné. Musíš vybrat jiný.",
        correct: false,
      },
      {
        text: "Jasně, vezmeš ho ze země, zhruba se tam postavíš a pokračuješ.",
        correct: false,
      },
      {
        text: "Ano, ale nejdříve si musíš dané místo dle daných pravidel označit tzv. markerem.",
        correct: true,
      },
    ],
  },
  {
    id: 8,
    question:
      "Která z variant je jednou ze správných variant označení místa hry?",
    answers: [
      {
        text: "Tzv. marker, položený na přímce hry a dotýkající se přední části hozeného disku.",
        correct: true,
      },
      {
        text: "Disk z předchozího hodu, který po přímce hry převrátím.",
        correct: false,
      },
      {
        text: "Není nutné místo přesně označovat, po zvednutí disku si stoupnu zhruba na dané místo, které určím podle rostlin, kamínků apod.",
        correct: false,
      },
    ],
  },
  {
    id: 9,
    question:
      "Za diskem (směrem od koše) leží spadnutá větev a pár šišek. Co s tím?",
    answers: [
      { text: "Dle pravidel je můžu odstranit.", correct: true },
      {
        text: "S tím bohužel nejde nic udělat a budu se tam muset nohou nějak vecpat.",
        correct: false,
      },
      {
        text: "Šišky mohu odsunout, ale spadlá větev tam musí zůstat.",
        correct: false,
      },
    ],
  },
  {
    id: 10,
    question:
      "Asi 5 metrů před mým diskem, směřem ke koši, leží spadlá větev, jejíž větve mi zavazí. Co s tím?",
    answers: [
      { text: "Větev je spadlá, tak ji mohu dát pryč.", correct: false },
      {
        text: "Škoda, že nemám caddyho, ten by ji mohl dát pryč.",
        correct: false,
      },
      {
        text: "Větev je celá před diskem, tak tam bude muset zůstat a já asi zvolím jiný hod.",
        correct: true,
      },
    ],
  },
  {
    id: 11,
    question: "Můj disk skončil přímo na vosím hnízdě. Co teď?",
    answers: [
      {
        text: "S tím se nedá nic dělat, budu se do něj muset postavit.",
        correct: false,
      },
      {
        text: "Jde o nebezpečný hmyz, označený ředitelem turnaje, beru úlevu a markuju dle pravidel na linii od koše a dál od hnízda.",
        correct: true,
      },
      {
        text: "Vosy mohou být nebezpečné, markuju kdekoliv v okruhu 5 metrů od hnízda.",
        correct: false,
      },
    ],
  },
  {
    id: 12,
    question:
      "Pokud na hřišti vidím strom označený šipkou, o co se pravděpodobně jedná.",
    answers: [
      {
        text: "Nejspíš si zde místní hráči značí, jaké jsou zde převládající větry.",
        correct: false,
      },
      {
        text: "Objevuje se často v hustším lesem a směřuje hráče na první jamku, aby nezabloudili.",
        correct: false,
      },
      {
        text: "O tzv. mandatory, hranici plochy, kterou disk nesmí protnout. Bude nutné házet ze strany, kam ukazuje šipka.",
        correct: true,
      },
    ],
  },
  {
    id: 13,
    question:
      "Trefil jsem betonový sloup a můj disk se rozlomil na dva kusy, které dopadly na různá místa, odkud hraju?",
    answers: [
      {
        text: "Mohu si vybrat, od které části budu pokračovat.",
        correct: false,
      },
      { text: "Pozici určuje ten větší kus.", correct: true },
      {
        text: "Musím bohužel hod opakovat. Snad to tentokrát dopadne lépe.",
        correct: false,
      },
    ],
  },
  {
    id: 14,
    question: "Disk mi skončil ve větvích stromu. Odkud házím další hod?",
    answers: [
      {
        text: "Z místa přímo pod diskem, které markerem označím.",
        correct: true,
      },
      {
        text: "V takovém případě je jediná možnost hod opakovat z předchozí pozice.",
        correct: false,
      },
      {
        text: "Strom si představím jako těleso a markerem označím místo za tímto tělesem, dál od koše.",
        correct: false,
      },
    ],
  },
  {
    id: 15,
    question:
      "Disk mi skončil ve větvích stromu, ale než všichni ostatní odházeli, zvedl se vítr a shodil mi disk na zem. Ten se odkutálel do OB. Co si pomyslím?",
    answers: [
      {
        text: "Taky to mohlo být na druhou stranu, takhle to mám ještě s OB navíc.",
        correct: false,
      },
      {
        text: "Budu se muset s ostatními ve skupině domluvit na stanovení pozice, kde disk původně zastavil (v kterých větvích).",
        correct: true,
      },
      {
        text: "V tomto případě hranice OB neplatí a já budu hrát z místa, kam se disk odkutálel.",
        correct: false,
      },
    ],
  },
  {
    id: 16,
    question: "Jaký je časový limit určený na hledání disku?",
    answers: [
      { text: "10 minut", correct: false },
      { text: "1 minuta", correct: false },
      { text: "3 minuty", correct: true },
    ],
  },
  {
    id: 17,
    question:
      "Uplynuly 3 minuty na hledání disku a disk se bohužel nenašel, co to pro daného hráče znamená?",
    answers: [
      {
        text: "2 trestné hody a pozice bude určena zhruba v místě, kde byl disk očekáván",
        correct: false,
      },
      {
        text: "1 trestný hod a další hod z předchozího místa hry",
        correct: true,
      },
      { text: "Vyřazení z turnaje.", correct: false },
    ],
  },
  {
    id: 18,
    question:
      "Disk hráče byl po uplynutí časového limitu prohlášen za ztracený, ale ještě než hráč hodil znovu, se tento ztracený disk povedlo najít. Jaký je postup?",
    answers: [
      {
        text: "Stejný jakoby byl disk ztracen, jen s tou výjimkou, že s ním může hráč házet.",
        correct: true,
      },
      {
        text: "Hráč nemusí nikam chodit a bude házet od nalezeného disku, bez penalizace.",
        correct: false,
      },
      {
        text: "Hráčova pozice bude určene jako polovina vzdálenosti mezi předchozím místem hry a pozicí nalezeného disku.",
        correct: false,
      },
    ],
  },
  {
    id: 19,
    question: "Můžu po odhodu z výhoziště přešlápnout?",
    answers: [
      { text: "Pouze u jamek delších jak 100 metrů.", correct: false },
      { text: "Ne.", correct: false },
      { text: "Ano.", correct: true },
    ],
  },
  {
    id: 20,
    question: "Můžu po puttu v kruhu 10 metrů od koše přešlápnout?",
    answers: [
      {
        text: "Záleží na tom, zda toto pravidlo stanovil ředitel turnaje.",
        correct: false,
      },
      { text: "Ano, jako u jakéhokoliv jiného hodu.", correct: false },
      {
        text: "Ne, musím nejdříve prokázat stabilitu za diskem/markerem.",
        correct: true,
      },
    ],
  },
  {
    id: 21,
    question: "Čára značící OB (out-of-bounds) je...",
    answers: [
      { text: "součástí OB.", correct: true },
      { text: "ještě in-bounds (v hřišti).", correct: false },
      {
        text: "nerozhodně a je jen na skupině, jak se domluví.",
        correct: false,
      },
    ],
  },
  {
    id: 22,
    question: "Pokud hráčův disk skončí v oblasti zvané náhodná voda...",
    answers: [
      { text: "musí z této vody hrát.", correct: false },
      { text: "může využít volitelnou úlevu, bez penalizace.", correct: true },
      { text: "vztahují se na něj pravidla OB.", correct: false },
    ],
  },
  {
    id: 23,
    question:
      "Pokud ředitel turnaje stanovil nějakou oblast jako hazard a můj disk v ní skončil.",
    answers: [
      {
        text: "Hraju dle pravidel OB, ale s dvěmi trestnými hody.",
        correct: false,
      },
      {
        text: "Pokud je to můj první hod do hazardu, nic se neděje, jinak dva trestné hody.",
        correct: false,
      },
      {
        text: "Hraju z této zóny z klasické pozice, s jedním trestným hodem.",
        correct: true,
      },
    ],
  },
  {
    id: 24,
    question: "Disk skončil na vrchu koše, co to pro mě znamená.",
    answers: [
      {
        text: "Zamarkuji pod diskem a musím ještě dohodit poslední hod do koše.",
        correct: true,
      },
      { text: "Počítá se to jako dokončená jamka, jupí.", correct: false },
      {
        text: "Zamarkuji pod diskem a diskem, který držím v ruce, se dotknu řetězů pro dokončení jamky.",
        correct: false,
      },
    ],
  },
  {
    id: 25,
    question:
      "Může se hráč rozhodnout zanechat svůj poslední hodu tak, že to oznámí skupině?",
    answers: [
      { text: "Toto lze pouze v případě ztraceného disku.", correct: false },
      {
        text: "Ano, hraje z pozice zanechaného hodu, s jedním trestným hodem.",
        correct: true,
      },
      {
        text: "Ano, pokud ještě nezvedl marker na předchozí pozici.",
        correct: false,
      },
    ],
  },
  {
    id: 26,
    question:
      "Můj disk dopadl na zem asi 50 metrů od koše, když tu přiběhl pes a donesl ho pod koš. Co mi proběhne hlavou?",
    answers: [
      { text: "Hodný pejsek, takhle to bude birdie.", correct: false },
      {
        text: "Musím si zapamatovat, kde disk ležel, abychom ho tam mohli vrátit.",
        correct: true,
      },
      {
        text: "Ale ne, to budu muset házet znovu z výhoziště.",
        correct: false,
      },
    ],
  },
  {
    id: 27,
    question:
      "Můj oblíbený disk vletěl do OB, můžu si pro něj dojít a házet s ním?",
    answers: [
      { text: "Ne, to bohužel nejde.", correct: false },
      { text: "Ano, ale obdržím 1 trestný hod.", correct: false },
      {
        text: "Ano, pokud se i s hodem vejdu do povolených 30 sekund času na odhod.",
        correct: true,
      },
    ],
  },
  {
    id: 28,
    question: "Můžu se během odhodu držet sloupu, který je součástí hřiště?",
    answers: [
      {
        text: "Ano, pokud se celý sloup nachází za diskem (ve směru od koše).",
        correct: true,
      },
      { text: "Ne, hráč se nesmí ničeho dotýkat, jen disku.", correct: false },
      { text: "Ne, hráč se může opírat pouze o sého caddyho.", correct: false },
    ],
  },
  {
    id: 29,
    question:
      "Za diskem mi leží spadlá větev, která ale zasahuje i do prostoru před ním. Mohu ji posunout?",
    answers: [
      {
        text: "Bohužel, větev by musela být celá za diskem, aby bylo dovoleno ji odstranit.",
        correct: false,
      },
      { text: "Ano, je to možné.", correct: true },
      { text: "Ne, žádná spadlá větev nesmí být přesunuta.", correct: false },
    ],
  },
  {
    id: 30,
    question:
      "Můj měkký putter proletěl skrz stěnu sběrače koše a zůstal ležet uvnitř, počítá se to jako dokončená jamka?",
    answers: [
      {
        text: "Ano, pokud to neviděla většina hráčské skupiny.",
        correct: false,
      },
      {
        text: "Ne, musím zamarkovat pod košem a jamku dokončit.",
        correct: false,
      },
      {
        text: "Ano, nezáleží na tom, jak tam disk vletěl.",
        correct: true,
      },
    ],
  },
  {
    id: 31,
    question:
      "Můj disk vletěl do OB, ale nemůžeme ho tam najít, jak ho zahraju?",
    answers: [
      {
        text: "Pokud jsme si prokazatelně jisti, že je v OB, bude se hrát dle pravidel OB. ",
        correct: true,
      },
      {
        text: "Pokud ho v OB nemůže skupina najít, hraje se jako ztracený disk. ",
        correct: false,
      },
      {
        text: "Hraje se dle pravidel OB, ale s dvěmi trestnými hody.",
        correct: false,
      },
    ],
  },
  {
    id: 32,
    question: "Můj disk skončil asi 1 cm od hranice OB, kolmo ke koši. Co teď?",
    answers: [
      {
        text: "Jsem in-bounds, stoupnu si tedy za disk a hraju z této pozice, nevadí, že stojím v out-of-bounds.",
        correct: false,
      },
      {
        text: "Pokud si stoupnu za disk, byl bych v OB, využiji tedy možnost posunout disk po kolmici až o 1 metr, bez penalizace.",
        correct: true,
      },
      {
        text: "Nemám se kam postavit, budu si tedy muset vzít trestný hod, jako bych v OB byl.",
        correct: false,
      },
    ],
  },
  {
    id: 33,
    question:
      "Pokud můj disk skončil v OB (out-of-bounds), tak obdržím kolik restných hodů?",
    answers: [
      { text: "2", correct: false },
      { text: "1", correct: true },
      { text: "Žádný", correct: false },
    ],
  },
  {
    id: 34,
    question:
      "Mezi výhozištěm a košem je rybník, definovaný jako OB. Spoluhráčky drive skončil přímo uprostřed rybníka a rozhodla se tedy stanovit pozici hodu cca 20 metrů dozadu na spojnici koše a místa, kde byl disk naposledy in-bounds.",
    answers: [
      {
        text: "To bohužel nesmí, může maximálně 1 metr od tohoto místa. ",
        correct: false,
      },
      {
        text: "Toto smí udělat, ale bude za to mít dva trestné hody.",
        correct: false,
      },
      { text: "Toto smí udělat, obdrží pouze 1 trestný hod. ", correct: true },
    ],
  },
];

const results = [
  {
    id: 1,
    text: "",
  },
  {
    id: 2,
    text: "",
  },
  {
    id: 3,
    text: "",
  },
  {
    id: 4,
    text: "",
  },
];
