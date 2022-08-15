let keys = [],
	columnMax, rowMax,
	skills, person_id, cwidth, cheight, sketchCanvas
p5.disableFriendlyErrors = true; // disables FES

function setup() {
	// 	JSON setup	
	JSONSetup()
	keys = Object.keys(you[0])
	skills = keys.slice(7, 54)

	pixelDensity(2)
	let canvasDiv = document.getElementById('sketch');
    cwidth = canvasDiv.offsetWidth;
	cheight = canvasDiv.offsetHeight;
    sketchCanvas = createCanvas(cwidth-1,floor(cheight-5));
    sketchCanvas.parent("sketch");

	person_id = 0

	noStroke()
	setRandomColor()

	for(let i=0; i<bgNum; i++){
		bgT.push(new backgroundT(i))
	}
}

function windowResized() {
	let canvasDiv = document.getElementById('sketch');
    cwidth = canvasDiv.offsetWidth;
	cheight = canvasDiv.offsetHeight;

	width = cwidth
	sketchCanvas = resizeCanvas(cwidth-1,floor(cheight-5));
}

let tileColor = [],
	traitColor = [],
	randomFlip = [],
	newRandomFlip = [],
	introScaler = [],
	bigChunText = [],
	introHeight = [],
	flipState = [],
	offseterX = [],
	offseterY = [],
	XX = [],
	YY = [],
	nXX = [],
	nYY = [], sheetColor =[]

let sheetColorList = ['#000', '#f00', '#00f']

function setRandomColor() {
	for (let num = 0; num < user_data.length - 1; num++) {
		traitColor[num] = random(traitBgColor)
		tileColor[num] = []
		introScaler[num] = 0
		offseterX[num] = 0
		offseterY[num] = 0
		XX[num] = 0
		YY[num] = 0
		nXX[num] = 0
		nYY[num] = 0
		sheetColor[num] = random(sheetColorList)
		randomFlip[num] = random(20, 40)
		newRandomFlip[num] = randomFlip[num]
		flipState[num] = false
		for (let i = 0; i < 14; i++) {
			tileColor[num][i] = random(bgColor)
		}
		rawd = raw[num]
		bigChunText[num] = rawd['Your First Name'].toLowerCase() +
			rawd['You Last Name'].toLowerCase() +
			'\n(' + rawd["How would you identify yourself?"] + ')' +
			fiveQuads(num) +
			'\n\n*\n' + rawd["What's your cultural background?"]

		moreText = '\n\n' + rawd["How would describe yourself in less than three sentences?"]
		if (rawd["What was your background before DT?"]) {
			moreText += '\n\n-\nbackground:\n' + rawd["What was your background before DT?"]
		}
		if (rawd["Name at least one fav artist/designer/personal hero?"]) {
			moreText += '\n\nfav artist:\n' + rawd["Name at least one fav artist/designer/personal hero?"]
		}
		if (rawd["Identify at least one class you have taken in the new school that you think is the most beneficial to you? Why?"]) {
			moreText += '\n\nfav class:\n' + rawd["Identify at least one class you have taken in the new school that you think is the most beneficial to you? Why?"]
		}

		bigChunText[num] += moreText.replaceAll("，", ", ").replaceAll("/", ", ")
		introHeight[num] = moreText.length / 100 + 3
	}
}

function fiveQuads(num) {
	rawd = raw[num]
	phy = rawd["How experienced are you in building something physical?"]
	dig = int(rawd["How digital intensive are you?"])
	code = int(rawd["Are you more of a coding hacker or a software geek?"])
	research = rawd["Do you think of yourself as a research person or making person when you start a project?"]
	indi = rawd["Do you prefer to do individual project or collaborative project more?"]

	phyC = ['nothing physical', 'seldom physical', 'physical learner', 'physical builder', 'physical expert']
	digC = ['analog creature', 'seldom digital', 'sometimes digital', 'digital creature', 'metaverse habitat']
	codeC = ['code everything', 'a coder', 'sometimes coding, sometimes software', 'software person', 'software geek']
	researchC = ['intensive researcher', 'research-driven', 'research/maker amphibian', 'making-driven', 'lead maker']
	indiC = ['always solo', 'prefer solo', 'somtimes solo but open to collab', 'mostly collaborative', 'best teammate']

	output = '\n['
	if (phy) {
		output += phyC[phy - 1] + ', '
	}
	if (dig) {
		output += digC[dig - 1] + ', '
	}
	if (research) {
		output += researchC[research - 1] + ', '
	}
	if (code) {
		output += codeC[code - 1] + ', '
	}
	if (indi) {
		output += indiC[indi - 1]
	}
	output += ']'

	return output
}