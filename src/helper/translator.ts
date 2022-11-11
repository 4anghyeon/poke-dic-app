const translatorMap = new Map<string, string>();
translatorMap.set("all", "전체");

// 지방
translatorMap.set("kanto", "관동지방");
translatorMap.set("johto", "성도지방");
translatorMap.set("hoenn", "호연지방");
translatorMap.set("sinnoh", "신오지방");
translatorMap.set("unova", "하나지방");
translatorMap.set("kalos", "칼로스지방");
translatorMap.set("alola", "알로라지방");
translatorMap.set("galar", "가라르지방");
translatorMap.set("hisui", "히스이지방");

// 타입
translatorMap.set("grass", "풀");
translatorMap.set("normal", "노말");
translatorMap.set("poison", "독");
translatorMap.set("fire", "불꽃");
translatorMap.set("flying", "비행");
translatorMap.set("dragon", "드래곤");
translatorMap.set("water", "물");
translatorMap.set("bug", "벌레");
translatorMap.set("dark", "악");
translatorMap.set("electric", "전기");
translatorMap.set("psychic", "에스퍼");
translatorMap.set("ground", "땅");
translatorMap.set("fairy", "페어리");
translatorMap.set("steel", "강철");
translatorMap.set("fighting", "격투");
translatorMap.set("rock", "바위");
translatorMap.set("ice", "얼음");
translatorMap.set("ghost", "고스트");

// 포켓몬
translatorMap.set("bulbasaur", "이상해씨");
translatorMap.set("ivysaur", "이상해풀");
translatorMap.set("venusaur", "이상해꽃");
translatorMap.set("charmander", "파이리");
translatorMap.set("charmeleon", "리자드");
translatorMap.set("charizard", "리자몽");
translatorMap.set("squirtle", "꼬부기");
translatorMap.set("wartortle", "어니부기");
translatorMap.set("blastoise", "거북왕");
translatorMap.set("caterpie", "캐터피");
translatorMap.set("metapod", "단데기");
translatorMap.set("butterfree", "버터플");
translatorMap.set("weedle", "뿔충이");
translatorMap.set("kakuna", "딱충이");
translatorMap.set("beedrill", "독침붕");
translatorMap.set("pidgey", "구구");
translatorMap.set("pidgeotto", "피죤");
translatorMap.set("pidgeot", "피죤투");
translatorMap.set("rattata", "꼬렛");
translatorMap.set("raticate", "레트라");
translatorMap.set("spearow", "깨비참");
translatorMap.set("fearow", "깨비드릴조");
translatorMap.set("ekans", "아보");
translatorMap.set("arbok", "아보크");
translatorMap.set("pikachu", "피카츄");
translatorMap.set("raichu", "라이츄");
translatorMap.set("sandshrew", "모래두지");
translatorMap.set("sandslash", "고지");
translatorMap.set("nidoran-f", "니드런♀");
translatorMap.set("nidorina", "니드리나");
translatorMap.set("nidoqueen", "니드퀸");
translatorMap.set("nidoran-m", "니드런♂");
translatorMap.set("nidorino", "니드리노");
translatorMap.set("nidoking", "니드킹");
translatorMap.set("clefairy", "삐삐");
translatorMap.set("clefable", "픽시");
translatorMap.set("vulpix", "식스테일");
translatorMap.set("ninetales", "나인테일");
translatorMap.set("jigglypuff", "푸린");
translatorMap.set("wigglytuff", "푸크린");
translatorMap.set("zubat", "주뱃");
translatorMap.set("golbat", "골뱃");
translatorMap.set("oddish", "뚜벅쵸");
translatorMap.set("gloom", "냄새꼬");
translatorMap.set("vileplume", "라플레시아");
translatorMap.set("paras", "파라스");
translatorMap.set("parasect", "파라섹트");
translatorMap.set("venonat", "콘팡");
translatorMap.set("venomoth", "도나리");
translatorMap.set("diglett", "디그다");
translatorMap.set("dugtrio", "닥트리오");
translatorMap.set("meowth", "나옹");
translatorMap.set("persian", "페르시온");
translatorMap.set("psyduck", "고라파덕");
translatorMap.set("golduck", "골덕");
translatorMap.set("mankey", "망키");
translatorMap.set("primeape", "성원숭");
translatorMap.set("growlithe", "가디");
translatorMap.set("arcanine", "윈디");
translatorMap.set("poliwag", "발챙이");
translatorMap.set("poliwhirl", "슈륙챙이");
translatorMap.set("poliwrath", "강챙이");
translatorMap.set("abra", "캐이시");
translatorMap.set("kadabra", "윤겔라");
translatorMap.set("alakazam", "후딘");
translatorMap.set("machop", "알통몬");
translatorMap.set("mr-mime", "마임맨");
translatorMap.set("deoxys-normal", "테오키스-노말");
translatorMap.set("wormadam-plant", "도롱마담");
translatorMap.set("mime-jr", "흉내내");
translatorMap.set("machoke", "근육몬");
translatorMap.set("machamp", "괴력몬");
translatorMap.set("bellsprout", "모다피");
translatorMap.set("weepinbell", "우츠동");
translatorMap.set("victreebel", "우츠보트");
translatorMap.set("tentacool", "왕눈해");
translatorMap.set("tentacruel", "독파리");
translatorMap.set("geodude", "꼬마돌");
translatorMap.set("graveler", "데구리");
translatorMap.set("golem", "딱구리");
translatorMap.set("ponyta", "포니타");
translatorMap.set("rapidash", "날쌩마");
translatorMap.set("slowpoke", "야돈");
translatorMap.set("slowbro", "야도란");
translatorMap.set("magnemite", "코일");
translatorMap.set("magneton", "레어코일");
translatorMap.set("farfetchd", "파오리");
translatorMap.set("doduo", "두두");
translatorMap.set("dodrio", "두트리오");
translatorMap.set("seel", "쥬쥬");
translatorMap.set("dewgong", "쥬레곤");
translatorMap.set("grimer", "질퍽이");
translatorMap.set("muk", "질뻐기");
translatorMap.set("shellder", "셀러");
translatorMap.set("cloyster", "파르셀");
translatorMap.set("gastly", "고오스");
translatorMap.set("haunter", "고우스트");
translatorMap.set("gengar", "팬텀");
translatorMap.set("onix", "롱스톤");
translatorMap.set("drowzee", "슬리프");
translatorMap.set("hypno", "슬리퍼");
translatorMap.set("krabby", "크랩");
translatorMap.set("kingler", "킹크랩");
translatorMap.set("voltorb", "찌리리공");
translatorMap.set("electrode", "붐볼");
translatorMap.set("exeggcute", "아라리");
translatorMap.set("exeggutor", "나시");
translatorMap.set("cubone", "탕구리");
translatorMap.set("marowak", "텅구리");
translatorMap.set("hitmonlee", "시라소몬");
translatorMap.set("hitmonchan", "홍수몬");
translatorMap.set("lickitung", "내루미");
translatorMap.set("koffing", "또가스");
translatorMap.set("weezing", "또도가스");
translatorMap.set("rhyhorn", "뿔카노");
translatorMap.set("rhydon", "코뿌리");
translatorMap.set("chansey", "럭키");
translatorMap.set("tangela", "덩쿠리");
translatorMap.set("kangaskhan", "캥카");
translatorMap.set("horsea", "쏘드라");
translatorMap.set("seadra", "시드라");
translatorMap.set("goldeen", "콘치");
translatorMap.set("seaking", "왕콘치");
translatorMap.set("staryu", "별가사리");
translatorMap.set("starmie", "아쿠스타");
translatorMap.set("mr. mime", "마임맨");
translatorMap.set("scyther", "스라크");
translatorMap.set("jynx", "루주라");
translatorMap.set("electabuzz", "에레브");
translatorMap.set("magmar", "마그마");
translatorMap.set("pinsir", "쁘사이저");
translatorMap.set("tauros", "켄타로스");
translatorMap.set("magikarp", "잉어킹");
translatorMap.set("gyarados", "갸라도스");
translatorMap.set("lapras", "라프라스");
translatorMap.set("ditto", "메타몽");
translatorMap.set("eevee", "이브이");
translatorMap.set("vaporeon", "샤미드");
translatorMap.set("jolteon", "쥬피썬더");
translatorMap.set("flareon", "부스터");
translatorMap.set("porygon", "폴리곤");
translatorMap.set("omanyte", "암나이트");
translatorMap.set("omastar", "암스타");
translatorMap.set("kabuto", "투구");
translatorMap.set("kabutops", "투구푸스");
translatorMap.set("aerodactyl", "프테라");
translatorMap.set("snorlax", "잠만보");
translatorMap.set("articuno", "프리져");
translatorMap.set("zapdos", "썬더");
translatorMap.set("moltres", "파이어");
translatorMap.set("dratini", "미뇽");
translatorMap.set("dragonair", "신뇽");
translatorMap.set("dragonite", "망나뇽");
translatorMap.set("mewtwo", "뮤츠");
translatorMap.set("mew", "뮤");
translatorMap.set("chikorita", "치코리타");
translatorMap.set("bayleef", "베이리프");
translatorMap.set("meganium", "메가니움");
translatorMap.set("cyndaquil", "브케인");
translatorMap.set("quilava", "마그케인");
translatorMap.set("typhlosion", "블레이범");
translatorMap.set("totodile", "리아코");
translatorMap.set("croconaw", "엘리게이");
translatorMap.set("feraligatr", "장크로다일");
translatorMap.set("sentret", "꼬리선");
translatorMap.set("furret", "다꼬리");
translatorMap.set("hoothoot", "부우부");
translatorMap.set("noctowl", "야부엉");
translatorMap.set("ledyba", "레디바");
translatorMap.set("ledian", "레디안");
translatorMap.set("spinarak", "페이검");
translatorMap.set("ariados", "아리아도스");
translatorMap.set("crobat", "크로뱃");
translatorMap.set("chinchou", "초라기");
translatorMap.set("lanturn", "랜턴");
translatorMap.set("pichu", "피츄");
translatorMap.set("cleffa", "삐");
translatorMap.set("igglybuff", "푸푸린");
translatorMap.set("togepi", "토게피");
translatorMap.set("togetic", "토게틱");
translatorMap.set("natu", "네이티");
translatorMap.set("xatu", "네이티오");
translatorMap.set("mareep", "메리프");
translatorMap.set("flaaffy", "보송송");
translatorMap.set("ampharos", "전룡");
translatorMap.set("bellossom", "아르코");
translatorMap.set("marill", "마릴");
translatorMap.set("azumarill", "마릴리");
translatorMap.set("sudowoodo", "꼬지모");
translatorMap.set("politoed", "왕구리");
translatorMap.set("hoppip", "통통코");
translatorMap.set("skiploom", "두코");
translatorMap.set("jumpluff", "솜솜코");
translatorMap.set("aipom", "에이팜");
translatorMap.set("sunkern", "해너츠");
translatorMap.set("sunflora", "해루미");
translatorMap.set("yanma", "왕자리");
translatorMap.set("wooper", "우파");
translatorMap.set("quagsire", "누오");
translatorMap.set("espeon", "에브이");
translatorMap.set("umbreon", "블래키");
translatorMap.set("murkrow", "니로우");
translatorMap.set("slowking", "야도킹");
translatorMap.set("misdreavus", "무우마");
translatorMap.set("unown", "안농");
translatorMap.set("wobbuffet", "마자용");
translatorMap.set("girafarig", "키링키");
translatorMap.set("pineco", "피콘");
translatorMap.set("forretress", "쏘콘");
translatorMap.set("dunsparce", "노고치");
translatorMap.set("gligar", "글라이거");
translatorMap.set("steelix", "강철톤");
translatorMap.set("snubbull", "블루");
translatorMap.set("granbull", "그랑블루");
translatorMap.set("qwilfish", "침바루");
translatorMap.set("scizor", "핫삼");
translatorMap.set("shuckle", "단단지");
translatorMap.set("heracross", "헤라크로스");
translatorMap.set("sneasel", "포푸니");
translatorMap.set("teddiursa", "깜지곰");
translatorMap.set("ursaring", "링곰");
translatorMap.set("slugma", "마그마그");
translatorMap.set("magcargo", "마그카르고");
translatorMap.set("swinub", "꾸꾸리");
translatorMap.set("piloswine", "메꾸리");
translatorMap.set("corsola", "코산호");
translatorMap.set("remoraid", "총어");
translatorMap.set("octillery", "대포무노");
translatorMap.set("delibird", "딜리버드");
translatorMap.set("mantine", "만타인");
translatorMap.set("skarmory", "무장조");
translatorMap.set("houndour", "델빌");
translatorMap.set("houndoom", "헬가");
translatorMap.set("kingdra", "킹드라");
translatorMap.set("phanpy", "코코리");
translatorMap.set("donphan", "코리갑");
translatorMap.set("porygon2", "폴리곤2");
translatorMap.set("stantler", "노라키");
translatorMap.set("smeargle", "루브도");
translatorMap.set("tyrogue", "배루키");
translatorMap.set("hitmontop", "카포에라");
translatorMap.set("smoochum", "뽀뽀라");
translatorMap.set("elekid", "에레키드");
translatorMap.set("magby", "마그비");
translatorMap.set("miltank", "밀탱크");
translatorMap.set("blissey", "해피너스");
translatorMap.set("raikou", "라이코");
translatorMap.set("entei", "앤테이");
translatorMap.set("suicune", "스이쿤");
translatorMap.set("larvitar", "애버라스");
translatorMap.set("pupitar", "데기라스");
translatorMap.set("tyranitar", "마기라스");
translatorMap.set("lugia", "루기아");
translatorMap.set("ho-oh", "칠색조");
translatorMap.set("celebi", "세레비");
translatorMap.set("treecko", "나무지기");
translatorMap.set("grovyle", "나무돌이");
translatorMap.set("sceptile", "나무킹");
translatorMap.set("torchic", "아차모");
translatorMap.set("combusken", "영치코");
translatorMap.set("blaziken", "번치코");
translatorMap.set("mudkip", "물짱이");
translatorMap.set("marshtomp", "늪짱이");
translatorMap.set("swampert", "대짱이");
translatorMap.set("poochyena", "포챠나");
translatorMap.set("mightyena", "그라에나");
translatorMap.set("zigzagoon", "지그제구리");
translatorMap.set("linoone", "직구리");
translatorMap.set("wurmple", "개무소");
translatorMap.set("silcoon", "실쿤");
translatorMap.set("beautifly", "뷰티플라이");
translatorMap.set("cascoon", "카스쿤");
translatorMap.set("dustox", "독케일");
translatorMap.set("lotad", "연꽃몬");
translatorMap.set("lombre", "로토스");
translatorMap.set("ludicolo", "로파파");
translatorMap.set("seedot", "도토링");
translatorMap.set("nuzleaf", "잎새코");
translatorMap.set("shiftry", "다탱구");
translatorMap.set("taillow", "테일로");
translatorMap.set("swellow", "스왈로");
translatorMap.set("wingull", "갈모매");
translatorMap.set("pelipper", "패리퍼");
translatorMap.set("ralts", "랄토스");
translatorMap.set("kirlia", "킬리아");
translatorMap.set("gardevoir", "가디안");
translatorMap.set("surskit", "비구술");
translatorMap.set("masquerain", "비나방");
translatorMap.set("shroomish", "버섯꼬");
translatorMap.set("breloom", "버섯모");
translatorMap.set("slakoth", "게을로");
translatorMap.set("vigoroth", "발바로");
translatorMap.set("slaking", "게을킹");
translatorMap.set("nincada", "토중몬");
translatorMap.set("ninjask", "아이스크");
translatorMap.set("shedinja", "껍질몬");
translatorMap.set("whismur", "소곤룡");
translatorMap.set("loudred", "노공룡");
translatorMap.set("exploud", "폭음룡");
translatorMap.set("makuhita", "마크탕");
translatorMap.set("hariyama", "하리뭉");
translatorMap.set("azurill", "루리리");
translatorMap.set("nosepass", "코코파스");
translatorMap.set("skitty", "에나비");
translatorMap.set("delcatty", "델케티");
translatorMap.set("sableye", "깜까미");
translatorMap.set("mawile", "입치트");
translatorMap.set("aron", "가보리");
translatorMap.set("lairon", "갱도라");
translatorMap.set("aggron", "보스로라");
translatorMap.set("meditite", "요가랑");
translatorMap.set("medicham", "요가램");
translatorMap.set("electrike", "썬더라이");
translatorMap.set("manectric", "썬더볼트");
translatorMap.set("plusle", "플러시");
translatorMap.set("minun", "마이농");
translatorMap.set("volbeat", "볼비트");
translatorMap.set("illumise", "네오비트");
translatorMap.set("roselia", "로젤리아");
translatorMap.set("gulpin", "꼴깍몬");
translatorMap.set("swalot", "꿀꺽몬");
translatorMap.set("carvanha", "샤프니아");
translatorMap.set("sharpedo", "샤크니아");
translatorMap.set("wailmer", "고래왕자");
translatorMap.set("wailord", "고래왕");
translatorMap.set("numel", "둔타");
translatorMap.set("camerupt", "폭타");
translatorMap.set("torkoal", "코터스");
translatorMap.set("spoink", "피그점프");
translatorMap.set("grumpig", "피그킹");
translatorMap.set("spinda", "얼루기");
translatorMap.set("trapinch", "톱치");
translatorMap.set("vibrava", "비브라바");
translatorMap.set("flygon", "플라이곤");
translatorMap.set("cacnea", "선인왕");
translatorMap.set("cacturne", "밤선인");
translatorMap.set("swablu", "파비코");
translatorMap.set("altaria", "파비코리");
translatorMap.set("zangoose", "쟝고");
translatorMap.set("seviper", "세비퍼");
translatorMap.set("lunatone", "루나톤");
translatorMap.set("solrock", "솔록");
translatorMap.set("barboach", "미꾸리");
translatorMap.set("whiscash", "메깅");
translatorMap.set("corphish", "가재군");
translatorMap.set("crawdaunt", "가재장군");
translatorMap.set("baltoy", "오뚝군");
translatorMap.set("claydol", "점토도리");
translatorMap.set("lileep", "릴링");
translatorMap.set("cradily", "릴리요");
translatorMap.set("anorith", "아노딥스");
translatorMap.set("armaldo", "아말도");
translatorMap.set("feebas", "빈티나");
translatorMap.set("milotic", "밀로틱");
translatorMap.set("castform", "캐스퐁");
translatorMap.set("kecleon", "켈리몬");
translatorMap.set("shuppet", "어둠대신");
translatorMap.set("banette", "다크펫");
translatorMap.set("duskull", "해골몽");
translatorMap.set("dusclops", "미라몽");
translatorMap.set("tropius", "트로피우스");
translatorMap.set("chimecho", "치렁");
translatorMap.set("absol", "앱솔");
translatorMap.set("wynaut", "마자");
translatorMap.set("snorunt", "눈꼬마");
translatorMap.set("glalie", "얼음귀신");
translatorMap.set("spheal", "대굴레오");
translatorMap.set("sealeo", "씨레오");
translatorMap.set("walrein", "씨카이저");
translatorMap.set("clamperl", "진주몽");
translatorMap.set("huntail", "헌테일");
translatorMap.set("gorebyss", "분홍장이");
translatorMap.set("relicanth", "시라칸");
translatorMap.set("luvdisc", "사랑동이");
translatorMap.set("bagon", "아공이");
translatorMap.set("shelgon", "쉘곤");
translatorMap.set("salamence", "보만다");
translatorMap.set("beldum", "메탕");
translatorMap.set("metang", "메탕구");
translatorMap.set("metagross", "메타그로스");
translatorMap.set("regirock", "레지락");
translatorMap.set("regice", "레지아이스");
translatorMap.set("registeel", "레지스틸");
translatorMap.set("latias", "라티아스");
translatorMap.set("latios", "라티오스");
translatorMap.set("kyogre", "가이오가");
translatorMap.set("groudon", "그란돈");
translatorMap.set("rayquaza", "레쿠쟈");
translatorMap.set("jirachi", "지라치");
translatorMap.set("deoxys", "테오키스");
translatorMap.set("turtwig", "모부기");
translatorMap.set("grotle", "수풀부기");
translatorMap.set("torterra", "토대부기");
translatorMap.set("chimchar", "불꽃숭이");
translatorMap.set("monferno", "파이숭이");
translatorMap.set("infernape", "초염몽");
translatorMap.set("piplup", "팽도리");
translatorMap.set("prinplup", "팽태자");
translatorMap.set("empoleon", "엠페르트");
translatorMap.set("starly", "찌르꼬");
translatorMap.set("staravia", "찌르버드");
translatorMap.set("staraptor", "찌르호크");
translatorMap.set("bidoof", "비버니");
translatorMap.set("bibarel", "비버통");
translatorMap.set("kricketot", "귀뚤뚜기");
translatorMap.set("kricketune", "귀뚤톡크");
translatorMap.set("shinx", "꼬링크");
translatorMap.set("luxio", "럭시오");
translatorMap.set("luxray", "렌트라");
translatorMap.set("budew", "꼬몽울");
translatorMap.set("roserade", "로즈레이드");
translatorMap.set("cranidos", "두개도스");
translatorMap.set("rampardos", "램펄드");
translatorMap.set("shieldon", "방패톱스");
translatorMap.set("bastiodon", "바리톱스");
translatorMap.set("burmy", "도롱충이");
translatorMap.set("wormadam", "도롱마담");
translatorMap.set("mothim", "나메일");
translatorMap.set("combee", "세꿀버리");
translatorMap.set("vespiquen", "비퀸");
translatorMap.set("pachirisu", "파치리스");
translatorMap.set("buizel", "브이젤");
translatorMap.set("floatzel", "플로젤");
translatorMap.set("cherubi", "체리버");
translatorMap.set("cherrim", "체리꼬");
translatorMap.set("shellos", "깝질무");
translatorMap.set("gastrodon", "트리토돈");
translatorMap.set("ambipom", "겟핸보숭");
translatorMap.set("drifloon", "흔들풍손");
translatorMap.set("drifblim", "둥실라이드");
translatorMap.set("buneary", "이어롤");
translatorMap.set("lopunny", "이어롭");
translatorMap.set("mismagius", "무우마직");
translatorMap.set("honchkrow", "돈크로우");
translatorMap.set("glameow", "나옹마");
translatorMap.set("purugly", "몬냥이");
translatorMap.set("chingling", "랑딸랑");
translatorMap.set("stunky", "스컹뿡");
translatorMap.set("skuntank", "스컹탱크");
translatorMap.set("bronzor", "동미러");
translatorMap.set("bronzong", "동탁군");
translatorMap.set("bonsly", "꼬지지");
translatorMap.set("mime jr.", "흉내내");
translatorMap.set("happiny", "핑복");
translatorMap.set("chatot", "페라페");
translatorMap.set("spiritomb", "화강돌");
translatorMap.set("gible", "딥상어동");
translatorMap.set("gabite", "한바이트");
translatorMap.set("garchomp", "한카리아스");
translatorMap.set("munchlax", "먹고자");
translatorMap.set("riolu", "리오르");
translatorMap.set("lucario", "루카리오");
translatorMap.set("hippopotas", "히포포타스");
translatorMap.set("hippowdon", "하마돈");
translatorMap.set("skorupi", "스콜피");
translatorMap.set("drapion", "드래피온");
translatorMap.set("croagunk", "삐딱구리");
translatorMap.set("toxicroak", "독개굴");
translatorMap.set("carnivine", "무스틈니");
translatorMap.set("finneon", "형광어");
translatorMap.set("lumineon", "네오라이트");
translatorMap.set("mantyke", "타만타");
translatorMap.set("snover", "눈쓰개");
translatorMap.set("abomasnow", "눈설왕");
translatorMap.set("weavile", "포푸니라");
translatorMap.set("magnezone", "자포코일");
translatorMap.set("lickilicky", "내룸벨트");
translatorMap.set("rhyperior", "거대코뿌리");
translatorMap.set("tangrowth", "덩쿠림보");
translatorMap.set("electivire", "에레키블");
translatorMap.set("magmortar", "마그마번");
translatorMap.set("togekiss", "토게키스");
translatorMap.set("yanmega", "메가자리");
translatorMap.set("leafeon", "리피아");
translatorMap.set("glaceon", "글레이시아");
translatorMap.set("gliscor", "글라이온");
translatorMap.set("mamoswine", "맘모꾸리");
translatorMap.set("porygon-z", "폴리곤z");
translatorMap.set("gallade", "엘레이드");
translatorMap.set("probopass", "대코파스");
translatorMap.set("dusknoir", "야느와르몽");
translatorMap.set("froslass", "눈여아");
translatorMap.set("rotom", "로토무");
translatorMap.set("uxie", "유크시");
translatorMap.set("mesprit", "엠라이트");
translatorMap.set("azelf", "아그놈");
translatorMap.set("dialga", "디아루가");
translatorMap.set("palkia", "펄기아");
translatorMap.set("heatran", "히드런");
translatorMap.set("regigigas", "레지기가스");
translatorMap.set("giratina", "기라티나");
translatorMap.set("cresselia", "크레세리아");
translatorMap.set("phione", "피오네");
translatorMap.set("manaphy", "마나피");
translatorMap.set("darkrai", "다크라이");
translatorMap.set("shaymin", "쉐이미");
translatorMap.set("shaymin-land", "쉐이미");
translatorMap.set("arceus", "아르세우스");
translatorMap.set("victini", "비크티니");
translatorMap.set("snivy", "주리비얀");
translatorMap.set("servine", "샤비");
translatorMap.set("serperior", "샤로다");
translatorMap.set("tepig", "뚜꾸리");
translatorMap.set("pignite", "챠오꿀");
translatorMap.set("emboar", "염무왕");
translatorMap.set("oshawott", "수댕이");
translatorMap.set("dewott", "쌍검자비");
translatorMap.set("samurott", "대검귀");
translatorMap.set("patrat", "보르쥐");
translatorMap.set("watchog", "보르그");
translatorMap.set("lillipup", "요테리");
translatorMap.set("herdier", "하데리어");
translatorMap.set("stoutland", "바랜드");
translatorMap.set("purrloin", "쌔비냥");
translatorMap.set("liepard", "레파르다스");
translatorMap.set("pansage", "야나프");
translatorMap.set("simisage", "야나키");
translatorMap.set("pansear", "바오프");
translatorMap.set("simisear", "바오키");
translatorMap.set("panpour", "앗차프");
translatorMap.set("simipour", "앗차키");
translatorMap.set("munna", "몽나");
translatorMap.set("musharna", "몽얌나");
translatorMap.set("pidove", "콩둘기");
translatorMap.set("tranquill", "유토브");
translatorMap.set("unfezant", "켄호로우");
translatorMap.set("blitzle", "줄뮤마");
translatorMap.set("zebstrika", "제브라이카");
translatorMap.set("roggenrola", "단굴");
translatorMap.set("boldore", "암트르");
translatorMap.set("gigalith", "기가이어스");
translatorMap.set("woobat", "또르박쥐");
translatorMap.set("swoobat", "맘박쥐");
translatorMap.set("drilbur", "두더류");
translatorMap.set("excadrill", "몰드류");
translatorMap.set("audino", "다부니");
translatorMap.set("timburr", "으랏차");
translatorMap.set("gurdurr", "토쇠골");
translatorMap.set("conkeldurr", "노보청");
translatorMap.set("tympole", "동챙이");
translatorMap.set("palpitoad", "두까비");
translatorMap.set("seismitoad", "두빅굴");
translatorMap.set("throh", "던지미");
translatorMap.set("sawk", "타격귀");
translatorMap.set("sewaddle", "두르보");
translatorMap.set("swadloon", "두르쿤");
translatorMap.set("leavanny", "모아머");
translatorMap.set("venipede", "마디네");
translatorMap.set("whirlipede", "휠구");
translatorMap.set("scolipede", "펜드라");
translatorMap.set("cottonee", "소미안");
translatorMap.set("whimsicott", "엘풍");
translatorMap.set("petilil", "치릴리");
translatorMap.set("lilligant", "드레디어");
translatorMap.set("basculin", "배쓰나이");
translatorMap.set("basculin-red-striped", "배쓰나이");
translatorMap.set("sandile", "깜눈크");
translatorMap.set("krokorok", "악비르");
translatorMap.set("krookodile", "악비아르");
translatorMap.set("darumaka", "달막화");
translatorMap.set("darmanitan", "불비달마");
translatorMap.set("darmanitan-standard", "불비달마");
translatorMap.set("maractus", "마라카치");
translatorMap.set("dwebble", "돌살이");
translatorMap.set("crustle", "암팰리스");
translatorMap.set("scraggy", "곤율랭");
translatorMap.set("scrafty", "곤율거니");
translatorMap.set("sigilyph", "심보러");
translatorMap.set("yamask", "데스마스");
translatorMap.set("cofagrigus", "데스니칸");
translatorMap.set("tirtouga", "프로토가");
translatorMap.set("carracosta", "늑골라");
translatorMap.set("archen", "아켄");
translatorMap.set("archeops", "아케오스");
translatorMap.set("trubbish", "깨봉이");
translatorMap.set("garbodor", "더스트나");
translatorMap.set("zorua", "조로아");
translatorMap.set("zoroark", "조로아크");
translatorMap.set("minccino", "치라미");
translatorMap.set("cinccino", "치라치노");
translatorMap.set("gothita", "고디탱");
translatorMap.set("gothorita", "고디보미");
translatorMap.set("gothitelle", "고디모아젤");
translatorMap.set("solosis", "유니란");
translatorMap.set("duosion", "듀란");
translatorMap.set("reuniclus", "란쿨루스");
translatorMap.set("ducklett", "꼬지보리");
translatorMap.set("swanna", "스완나");
translatorMap.set("vanillite", "바닐프티");
translatorMap.set("vanillish", "바닐리치");
translatorMap.set("vanilluxe", "배바닐라");
translatorMap.set("deerling", "사철록");
translatorMap.set("sawsbuck", "바라철록");
translatorMap.set("emolga", "에몽가");
translatorMap.set("karrablast", "딱정곤");
translatorMap.set("escavalier", "슈바르고");
translatorMap.set("foongus", "깜놀버슬");
translatorMap.set("amoonguss", "뽀록나");
translatorMap.set("frillish", "탱그릴");
translatorMap.set("jellicent", "탱탱겔");
translatorMap.set("alomomola", "맘복치");
translatorMap.set("joltik", "파쪼옥");
translatorMap.set("galvantula", "전툴라");
translatorMap.set("ferroseed", "철시드");
translatorMap.set("ferrothorn", "너트령");
translatorMap.set("klink", "기어르");
translatorMap.set("klang", "기기어르");
translatorMap.set("klinklang", "기기기어르");
translatorMap.set("tynamo", "저리어");
translatorMap.set("eelektrik", "저리릴");
translatorMap.set("eelektross", "저리더프");
translatorMap.set("elgyem", "리그레");
translatorMap.set("beheeyem", "벰크");
translatorMap.set("litwick", "불켜미");
translatorMap.set("lampent", "램프라");
translatorMap.set("chandelure", "샹델라");
translatorMap.set("axew", "터검니");
translatorMap.set("fraxure", "액슨도");
translatorMap.set("haxorus", "액스라이즈");
translatorMap.set("cubchoo", "코고미");
translatorMap.set("beartic", "툰베어");
translatorMap.set("cryogonal", "프리지오");
translatorMap.set("shelmet", "쪼마리");
translatorMap.set("accelgor", "어지리더");
translatorMap.set("stunfisk", "메더");
translatorMap.set("mienfoo", "비조푸");
translatorMap.set("mienshao", "비조도");
translatorMap.set("druddigon", "크리만");
translatorMap.set("golett", "골비람");
translatorMap.set("golurk", "골루그");
translatorMap.set("pawniard", "자망칼");
translatorMap.set("bisharp", "절각참");
translatorMap.set("bouffalant", "버프론");
translatorMap.set("rufflet", "수리둥보");
translatorMap.set("braviary", "워글");
translatorMap.set("vullaby", "벌차이");
translatorMap.set("mandibuzz", "버랜지나");
translatorMap.set("heatmor", "앤티골");
translatorMap.set("durant", "아이앤트");
translatorMap.set("deino", "모노두");
translatorMap.set("zweilous", "디헤드");
translatorMap.set("hydreigon", "삼삼드래");
translatorMap.set("larvesta", "활화르바");
translatorMap.set("volcarona", "불카모스");
translatorMap.set("cobalion", "코바르온");
translatorMap.set("terrakion", "테라키온");
translatorMap.set("virizion", "비리디온");
translatorMap.set("tornadus", "토네로스");
translatorMap.set("tornadus-incarnate", "토네로스");
translatorMap.set("thundurus", "볼트로스");
translatorMap.set("thundurus-incarnate", "볼트로스");
translatorMap.set("reshiram", "레시라무");
translatorMap.set("zekrom", "제크로무");
translatorMap.set("landorus", "랜드로스");
translatorMap.set("landorus-incarnate", "랜드로스");
translatorMap.set("kyurem", "큐레무");
translatorMap.set("keldeo", "케르디오");
translatorMap.set("keldeo-ordinary", "케르디오");
translatorMap.set("meloetta", "메로엣타");
translatorMap.set("meloetta-aria", "메로엣타");
translatorMap.set("genesect", "게노세크트");
translatorMap.set("chespin", "도치마론");
translatorMap.set("quilladin", "도치보구");
translatorMap.set("chesnaught", "브리가론");
translatorMap.set("fennekin", "푸호꼬");
translatorMap.set("braixen", "테르나");
translatorMap.set("delphox", "마폭시");
translatorMap.set("froakie", "개구마르");
translatorMap.set("frogadier", "개굴반장");
translatorMap.set("greninja", "개굴닌자");
translatorMap.set("bunnelby", "파르빗");
translatorMap.set("diggersby", "파르토");
translatorMap.set("fletchling", "화살꼬빈");
translatorMap.set("fletchinder", "불화살빈");
translatorMap.set("talonflame", "파이어로");
translatorMap.set("scatterbug", "분이벌레");
translatorMap.set("spewpa", "분떠도리");
translatorMap.set("vivillon", "비비용");
translatorMap.set("litleo", "레오꼬");
translatorMap.set("pyroar", "화염레오");
translatorMap.set("flabébé", "플라베베");
translatorMap.set("flabebe", "플라베베");
translatorMap.set("floette", "플라엣테");
translatorMap.set("florges", "플라제스");
translatorMap.set("skiddo", "메이클");
translatorMap.set("gogoat", "고고트");
translatorMap.set("pancham", "판짱");
translatorMap.set("pangoro", "부란다");
translatorMap.set("furfrou", "트리미앙");
translatorMap.set("espurr", "냐스퍼");
translatorMap.set("meowstic", "냐오닉스");
translatorMap.set("meowstic-male", "냐오닉스");
translatorMap.set("honedge", "단칼빙");
translatorMap.set("doublade", "쌍검킬");
translatorMap.set("aegislash", "킬가르도");
translatorMap.set("aegislash-shield", "킬가르도");
translatorMap.set("spritzee", "슈쁘");
translatorMap.set("aromatisse", "프레프티르");
translatorMap.set("swirlix", "나룸퍼프");
translatorMap.set("slurpuff", "나루림");
translatorMap.set("inkay", "오케이징");
translatorMap.set("malamar", "칼라마네로");
translatorMap.set("binacle", "거북손손");
translatorMap.set("barbaracle", "거북손데스");
translatorMap.set("skrelp", "수레기");
translatorMap.set("dragalge", "드래캄");
translatorMap.set("clauncher", "완철포");
translatorMap.set("clawitzer", "블로스터");
translatorMap.set("helioptile", "목도리키텔");
translatorMap.set("heliolisk", "일레도리자드");
translatorMap.set("tyrunt", "티고라스");
translatorMap.set("tyrantrum", "견고라스");
translatorMap.set("amaura", "아마루스");
translatorMap.set("aurorus", "아마루르가");
translatorMap.set("sylveon", "님피아");
translatorMap.set("hawlucha", "루차불");
translatorMap.set("dedenne", "데덴네");
translatorMap.set("carbink", "멜리시");
translatorMap.set("goomy", "미끄메라");
translatorMap.set("sliggoo", "미끄네일");
translatorMap.set("goodra", "미끄래곤");
translatorMap.set("klefki", "클레피");
translatorMap.set("phantump", "나목령");
translatorMap.set("trevenant", "대로트");
translatorMap.set("pumpkaboo", "호바귀");
translatorMap.set("pumpkaboo-average", "호바귀");
translatorMap.set("gourgeist", "펌킨인");
translatorMap.set("gourgeist-average", "펌킨인");
translatorMap.set("bergmite", "꽁어름");
translatorMap.set("avalugg", "크레베이스");
translatorMap.set("noibat", "음뱃");
translatorMap.set("noivern", "음번");
translatorMap.set("xerneas", "제르네아스");
translatorMap.set("yveltal", "이벨타르");
translatorMap.set("zygarde", "지가르데");
translatorMap.set("zygarde-50", "지가르데");
translatorMap.set("diancie", "디안시");
translatorMap.set("hoopa", "후파");
translatorMap.set("volcanion", "볼케니온");
translatorMap.set("rowlet", "나몰빼미");
translatorMap.set("dartrix", "빼미스로우");
translatorMap.set("decidueye", "모크나이퍼");
translatorMap.set("litten", "냐오불");
translatorMap.set("torracat", "냐오히트");
translatorMap.set("incineroar", "어흥염");
translatorMap.set("popplio", "누리공");
translatorMap.set("brionne", "키요공");
translatorMap.set("primarina", "누리레느");
translatorMap.set("pikipek", "콕코구리");
translatorMap.set("trumbeak", "크라파");
translatorMap.set("toucannon", "왕큰부리");
translatorMap.set("yungoos", "영구스");
translatorMap.set("gumshoos", "형사구스");
translatorMap.set("grubbin", "턱지충이");
translatorMap.set("charjabug", "전지충이");
translatorMap.set("vikavolt", "투구뿌논");
translatorMap.set("crabrawler", "오기지게");
translatorMap.set("crabominable", "모단단게");
translatorMap.set("oricorio", "춤추새");
translatorMap.set("oricorio-baile", "춤추새");
translatorMap.set("cutiefly", "에블리");
translatorMap.set("ribombee", "에리본");
translatorMap.set("rockruff", "암멍이");
translatorMap.set("lycanroc", "루가루암");
translatorMap.set("lycanroc-midday", "루가루암");
translatorMap.set("wishiwashi", "약어리");
translatorMap.set("wishiwashi-solo", "약어리");
translatorMap.set("mareanie", "시마사리");
translatorMap.set("toxapex", "더시마사리");
translatorMap.set("mudbray", "머드나기");
translatorMap.set("mudsdale", "만마드");
translatorMap.set("dewpider", "물거미");
translatorMap.set("araquanid", "깨비물거미");
translatorMap.set("fomantis", "짜랑랑");
translatorMap.set("lurantis", "라란티스");
translatorMap.set("morelull", "자마슈");
translatorMap.set("shiinotic", "마셰이드");
translatorMap.set("salandit", "야도뇽");
translatorMap.set("salazzle", "염뉴트");
translatorMap.set("stufful", "포곰곰");
translatorMap.set("bewear", "이븐곰");
translatorMap.set("bounsweet", "달콤아");
translatorMap.set("steenee", "달무리나");
translatorMap.set("tsareena", "달코퀸");
translatorMap.set("comfey", "큐아링");
translatorMap.set("oranguru", "하랑우탄");
translatorMap.set("passimian", "내던숭이");
translatorMap.set("wimpod", "꼬시레");
translatorMap.set("golisopod", "갑주무사");
translatorMap.set("sandygast", "모래꿍");
translatorMap.set("palossand", "모래성이당");
translatorMap.set("pyukumuku", "해무기");
translatorMap.set("type: null", "타입:널");
translatorMap.set("type-null", "타입:널");
translatorMap.set("silvally", "실버디");
translatorMap.set("minior", "메테노");
translatorMap.set("minior-red-meteor", "메테노");
translatorMap.set("komala", "자말라");
translatorMap.set("turtonator", "폭거북스");
translatorMap.set("togedemaru", "토게데마루");
translatorMap.set("mimikyu", "따라큐");
translatorMap.set("mimikyu-disguised", "따라큐");
translatorMap.set("bruxish", "치갈기");
translatorMap.set("drampa", "할비롱");
translatorMap.set("dhelmise", "타타륜");
translatorMap.set("jangmo-o", "짜랑꼬");
translatorMap.set("hakamo-o", "짜랑고우");
translatorMap.set("kommo-o", "짜랑고우거");
translatorMap.set("tapu koko", "카푸꼬꼬꼭");
translatorMap.set("tapu-koko", "카푸꼬꼬꼭");
translatorMap.set("tapu-lele", "카푸나비나");
translatorMap.set("tapu-bulu", "카푸브루루");
translatorMap.set("tapu-fini", "카푸느지느");
translatorMap.set("cosmog", "코스모그");
translatorMap.set("cosmoem", "코스모움");
translatorMap.set("solgaleo", "솔가레오");
translatorMap.set("lunala", "루나아라");
translatorMap.set("nihilego", "텅비드");
translatorMap.set("buzzwole", "매시붕");
translatorMap.set("pheromosa", "페로코체");
translatorMap.set("xurkitree", "전수목");
translatorMap.set("celesteela", "철화구야");
translatorMap.set("kartana", "종이신도");
translatorMap.set("guzzlord", "악식킹");
translatorMap.set("necrozma", "네크로즈마");
translatorMap.set("magearna", "마기아나");
translatorMap.set("marshadow", "마샤도");
translatorMap.set("poipole", "베베놈");
translatorMap.set("naganadel", "아고용");
translatorMap.set("stakataka", "차곡차곡");
translatorMap.set("blacephalon", "두파팡");
translatorMap.set("zeraora", "제라오라");
translatorMap.set("meltan", "멜탄");
translatorMap.set("melmetal", "멜메탈");
translatorMap.set("grookey", "흥나숭");
translatorMap.set("thwackey", "채키몽");
translatorMap.set("rillaboom", "고릴타");
translatorMap.set("scorbunny", "염버니");
translatorMap.set("raboot", "래비풋");
translatorMap.set("cinderace", "에이스번");
translatorMap.set("sobble", "울머기");
translatorMap.set("drizzile", "누겔레온");
translatorMap.set("inteleon", "인텔리레온");
translatorMap.set("skwovet", "탐리스");
translatorMap.set("greedent", "요씽리스");
translatorMap.set("rookiedee", "파라꼬");
translatorMap.set("rookidee", "파라꼬");
translatorMap.set("corvisquire", "파크로우");
translatorMap.set("corviknight", "아머까오");
translatorMap.set("blipbug", "두루지벌레");
translatorMap.set("dottler", "레돔벌레");
translatorMap.set("orbeetle", "이올브");
translatorMap.set("nickit", "훔처우");
translatorMap.set("thievul", "폭슬라이");
translatorMap.set("gossifleur", "꼬모카");
translatorMap.set("eldegoss", "백솜모카");
translatorMap.set("wooloo", "우르");
translatorMap.set("dubwool", "배우르");
translatorMap.set("chewtle", "깨물부기");
translatorMap.set("drednaw", "갈가부기");
translatorMap.set("yamper", "멍파치");
translatorMap.set("boltund", "펄스멍");
translatorMap.set("rolycoly", "탄동");
translatorMap.set("carkol", "탄차곤");
translatorMap.set("coalossal", "석탄산");
translatorMap.set("applin", "과사삭벌레");
translatorMap.set("flapple", "애프룡");
translatorMap.set("appletun", "단지래플");
translatorMap.set("silicobra", "모래뱀");
translatorMap.set("sandaconda", "사다이사");
translatorMap.set("cramorant", "윽우지");
translatorMap.set("arrokuda", "찌로꼬치");
translatorMap.set("barraskewda", "꼬치조");
translatorMap.set("toxel", "일레즌");
translatorMap.set("toxtricity", "스트린더");
translatorMap.set("toxtricity-amped", "스트린더");
translatorMap.set("sizzlipede", "태우지네");
translatorMap.set("centiskorch", "다태우지네");
translatorMap.set("clobbopus", "때때무노");
translatorMap.set("grapploct", "케오퍼스");
translatorMap.set("sinistea", "데인차");
translatorMap.set("polteageist", "포트데스");
translatorMap.set("hatenna", "몸지브림");
translatorMap.set("hattrem", "손지브림");
translatorMap.set("hatterene", "브리무음");
translatorMap.set("impidimp", "메롱꿍");
translatorMap.set("morgrem", "쏘겨모");
translatorMap.set("grimmsnarl", "오롱털");
translatorMap.set("obstagoon", "가로막구리");
translatorMap.set("perrserker", "나이킹");
translatorMap.set("cursola", "산호르곤");
translatorMap.set("sirfetch'd", "창파나이트");
translatorMap.set("sirfetchd", "창파나이트");
translatorMap.set("mr. rime", "마임꽁꽁");
translatorMap.set("mr-rime", "마임꽁꽁");
translatorMap.set("runerigus", "데스판");
translatorMap.set("milcery", "마빌크");
translatorMap.set("alcremie", "마휘핑");
translatorMap.set("falinks", "대여르");
translatorMap.set("pincurchin", "찌르성게");
translatorMap.set("snom", "누니머기");
translatorMap.set("frosmoth", "모스노우");
translatorMap.set("stonjourner", "돌헨진");
translatorMap.set("eiscue", "빙큐보");
translatorMap.set("eiscue-ice", "빙큐보");
translatorMap.set("indeedee", "에써르");
translatorMap.set("indeedee-male", "에써르");
translatorMap.set("morpeko", "모르페코");
translatorMap.set("morpeko-full-belly", "모르페코");
translatorMap.set("cufant", "끼리동");
translatorMap.set("copperajah", "대왕끼리동");
translatorMap.set("dracozolt", "파치래곤");
translatorMap.set("arctozolt", "파치르돈");
translatorMap.set("dracovish", "어래곤");
translatorMap.set("arctovish", "어치르돈");
translatorMap.set("duraludon", "두랄루돈");
translatorMap.set("dreepy", "드라꼰");
translatorMap.set("drakloak", "드래런치");
translatorMap.set("dragapult", "드래펄트");
translatorMap.set("zacian", "자시안");
translatorMap.set("zamazenta", "자마젠타");
translatorMap.set("eternatus", "무한다이노");

export default translatorMap;