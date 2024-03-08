/**
 * @private
 * @summary "Randomly" picks an element from the left array and combines it with one form right.
 * @description
 *  This function is a copy paste implementation from docker_names in golang.
 *  Will never return "boring_wozniak".
 *  The left array should be an array of adjectives, where as the right array should be
 *  an individuals surname. This results in funny names like angry_bohr or prickly_murdock.
 * @param {Array} left - An array of strings to be used as the left  word in docker name.
 * @param {Array} right - An array of strings to be used as the right word in docker name.
 * @returns {string}
 */
function generateName(left, right) {
    var first = left[Math.floor((Math.random() * left.length))];
    var second = right[Math.floor((Math.random() * right.length))];
    var result = first + "_" + second;

    /* Steve Wozniak is not boring. This is part of the docker names spec. */
    if (result === "boring_wozniak") {
        return generateName(left, right);
    }
    return result;
}

function DockerNames() {
    this.left = [
        "admiring",
		"adoring",
		"affectionate",
		"agitated",
		"amazing",
		"angry",
		"awesome",
		"beautiful",
		"blissful",
		"bold",
		"boring",
		"brave",
		"busy",
		"charming",
		"clever",
		"compassionate",
		"competent",
		"condescending",
		"confident",
		"cool",
		"cranky",
		"crazy",
		"dazzling",
		"determined",
		"distracted",
		"dreamy",
		"eager",
		"ecstatic",
		"elastic",
		"elated",
		"elegant",
		"eloquent",
		"epic",
		"exciting",
		"fervent",
		"festive",
		"flamboyant",
		"focused",
		"friendly",
		"frosty",
		"funny",
		"gallant",
		"gifted",
		"goofy",
		"gracious",
		"great",
		"happy",
		"hardcore",
		"heuristic",
		"hopeful",
		"hungry",
		"infallible",
		"inspiring",
		"intelligent",
		"interesting",
		"jolly",
		"jovial",
		"keen",
		"kind",
		"laughing",
		"loving",
		"lucid",
		"magical",
		"modest",
		"musing",
		"mystifying",
		"naughty",
		"nervous",
		"nice",
		"nifty",
		"nostalgic",
		"objective",
		"optimistic",
		"peaceful",
		"pedantic",
		"pensive",
		"practical",
		"priceless",
		"quirky",
		"quizzical",
		"recursing",
		"relaxed",
		"reverent",
		"romantic",
		"sad",
		"serene",
		"sharp",
		"silly",
		"sleepy",
		"stoic",
		"strange",
		"stupefied",
		"suspicious",
		"sweet",
		"tender",
		"thirsty",
		"trusting",
		"unruffled",
		"upbeat",
		"vibrant",
		"vigilant",
		"vigorous",
		"wizardly",
		"wonderful",
		"xenodochial",
		"youthful",
		"zealous",
		"zen",
    ];

    this.right = [
        
		"agnesi",

		
		"albattani",

		
		"allen",

		
		"almeida",

		
		"antonelli",

		
		"archimedes",

		
		"ardinghelli",

		
		"aryabhata",

		
		"austin",

		
		"babbage",

		
		"banach",

		
		"banzai",

		
		"bardeen",

		
		"bartik",

		
		"bassi",

		
		"beaver",

		
		"bell",

		
		"benz",

		
		"bhabha",

		
		"bhaskara",

		
		"black",

		
		"blackburn",

		
		"blackwell",

		
		"bohr",

		
		"booth",

		
		"borg",

		
		"bose",

		
		"bouman",

		
		"boyd",

		
		"brahmagupta",

		
		"brattain",

		
		"brown",

		
		"buck",

		
		"burnell",

		
		"cannon",

		
		"carson",

		
		"cartwright",

		
		"carver",

		
		"cerf",

		
		"chandrasekhar",

		
		"chaplygin",

		
		"chatelet",

		
		"chatterjee",

		
		"chaum",

		
		"chebyshev",

		
		"clarke",

		
		"cohen",

		
		"colden",

		
		"cori",

		
		"cray",

		
		"curie",

		
		
		
		"curran",

		
		"darwin",

		
		"davinci",

		
		"dewdney",

		
		"dhawan",

		
		"diffie",

		
		"dijkstra",

		
		"dirac",

		
		"driscoll",

		
		"dubinsky",

		
		"easley",

		
		"edison",

		
		"einstein",

		
		"elbakyan",

		
		"elgamal",

		
		"elion",

		
		"ellis",

		
		"engelbart",

		
		"euclid",

		
		"euler",

		
		"faraday",

		
		"feistel",

		
		"fermat",

		
		"fermi",

		
		"feynman",

		
		"franklin",

		
		"gagarin",

		
		"galileo",

		
		"galois",

		
		"ganguly",

		
		"gates",

		
		"gauss",

		
		"germain",

		
		"goldberg",

		
		"goldstine",

		
		"goldwasser",

		
		"golick",

		
		"goodall",

		
		"gould",

		
		"greider",

		
		"grothendieck",

		
		"haibt",

		
		"hamilton",

		
		"haslett",

		
		"hawking",

		
		"heisenberg",

		
		"hellman",

		
		"hermann",

		
		"herschel",

		
		"hertz",

		
		"heyrovsky",

		
		"hodgkin",

		
		"hofstadter",

		
		"hoover",

		
		"hopper",

		
		"hugle",

		
		"hypatia",

		
		"ishizaka",

		
		"jackson",

		
		"jang",

		
		"jemison",

		
		"jennings",

		
		"jepsen",

		
		"johnson",

		
		"joliot",

		
		"jones",

		
		"kalam",

		
		"kapitsa",

		
		"kare",

		
		"keldysh",

		
		"keller",

		
		"kepler",

		
		"khayyam",

		
		"khorana",

		
		"kilby",

		
		"kirch",

		
		"knuth",

		
		"kowalevski",

		
		"lalande",

		
		"lamarr",

		
		"lamport",

		
		"leakey",

		
		"leavitt",

		
		"lederberg",

		
		"lehmann",

		
		"lewin",

		
		"lichterman",

		
		"liskov",

		
		"lovelace",

		
		"lumiere",

		
		"mahavira",

		
		"margulis",

		
		"matsumoto",

		
		"maxwell",

		
		"mayer",

		
		"mccarthy",

		
		"mcclintock",

		
		"mclaren",

		
		"mclean",

		
		"mcnulty",

		
		"meitner",

		
		"mendel",

		
		"mendeleev",

		
		"meninsky",

		
		"merkle",

		
		"mestorf",

		
		"mirzakhani",

		
		"montalcini",

		
		"moore",

		
		"morse",

		
		"moser",

		
		"murdock",

		
		"napier",

		
		"nash",

		
		"neumann",

		
		"newton",

		
		"nightingale",

		
		"nobel",

		
		"noether",

		
		"northcutt",

		
		"noyce",

		
		"panini",

		
		"pare",

		
		"pascal",

		
		"pasteur",

		
		"payne",

		
		"perlman",

		
		"pike",

		
		"poincare",

		
		"poitras",

		
		"proskuriakova",

		
		"ptolemy",

		
		"raman",

		
		"ramanujan",

		
		"rhodes",

		
		"ride",

		
		"ritchie",

		
		"robinson",

		
		"roentgen",

		
		"rosalind",

		
		"rubin",

		
		"saha",

		
		"sammet",

		
		"sanderson",

		
		"satoshi",

		
		"shamir",

		
		"shannon",

		
		"shaw",

		
		"shirley",

		
		"shockley",

		
		"shtern",

		
		"sinoussi",

		
		"snyder",

		
		"solomon",

		
		"spence",

		
		"stonebraker",

		
		"sutherland",

		
		"swanson",

		
		"swartz",

		
		"swirles",

		
		"taussig",

		
		"tesla",

		
		"tharp",

		
		"thompson",

		
		"torvalds",

		
		"tu",

		
		"turing",

		
		"varahamihira",

		
		"vaughan",

		
		"villani",

		
		"visvesvaraya",

		
		"volhard",

		
		"wescoff",

		
		"wilbur",

		
		"wiles",

		
		"williams",

		
		"williamson",

		
		"wilson",

		
		"wing",

		
		"wozniak",

		
		"wright",

		
		"wu",

		
		"yalow",

		
		"yonath",

		
		"zhukovsky",
    ];

    this.adjectives = this.left;
    this.surnames = this.right;
}

/**
 * @summary Generates a random docker style name.
 *
 * @param {boolean|number} [appendNumber] - Adds a random number to the resulting docker name.
 * @returns {string}
 */
DockerNames.prototype.getRandomName = function(appendNumber) {
    var rand = (appendNumber === true || appendNumber > 0) ? String(Math.floor((Math.random() * 9) + 1)) : "";
    return generateName(this.left, this.right) + rand;
};

module.exports = new DockerNames();
