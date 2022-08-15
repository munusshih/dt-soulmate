let newResizer = 10,
	newmOffsetX = 0,
	newmOffsetY = 0
let selectedNum, selected, gridArr = false,
	similarArr = true,
	vizSoulmate = false
let pinnedOnes = []

function mouseDragged() {
	if (selectedNum) {
		offseterX[selectedNum] -= (pmouseX - mouseX) / resizer
		offseterY[selectedNum] -= (pmouseY - mouseY) / resizer
	} else {
		newmOffsetX -= (pmouseX - mouseX)
		newmOffsetY -= (pmouseY - mouseY)

		constrainer = pow(resizer, 1.25)
		newmOffsetX = constrain(newmOffsetX, -960 * constrainer, 724 * constrainer);
		newmOffsetY = constrain(newmOffsetY, -660 * constrainer, 301 * constrainer);
	}
}

function shadow() {
	drawingContext.shadowOffsetX = 5;
	drawingContext.shadowOffsetY = -5;
	drawingContext.shadowBlur = 10;
	drawingContext.shadowColor = 'rgba(20, 20, 20, 0.3)';
}

function collider(x, xx, y, yy, fliper, num) {
	let boxWidth = (labelSizer + 2) * tileSize
	let boxHeight = (labelSizer + 2) * tileSize + fliper
	let maxBoxHeight = boxWidth + introHeight[num] * (labelSizer + 2) * tileSize

	push()
	noFill()
	// stroke('red')
	if (parseInt(mouseX) >= parseInt(x + xx - tileSize) &&
		parseInt(mouseX) <= parseInt(x + xx - tileSize + boxWidth) &&
		parseInt(mouseY) >= parseInt(y + yy - tileSize) &&
		parseInt(mouseY) <= parseInt(y + yy + boxHeight)) {

		document.body.style = 'cursor: pointer;';

		if (!flipState[num]) {
			newRandomFlip[num] = lerp(newRandomFlip[num], randomFlip[num] + tileSize * 3, 0.5)
			introScaler[num] = lerp(introScaler[num], 0, 0.2)
		}
		selectedNum = num
	} else if (!flipState[num]) {
		newRandomFlip[num] = lerp(newRandomFlip[num], randomFlip[num], 0.5)
		introScaler[num] = lerp(introScaler[num], 0, 0.2)
	}
	if (flipState[num]) {
		introScaler[num] = lerp(introScaler[num], 1, 0.2)
		newRandomFlip[num] = lerp(newRandomFlip[num], maxBoxHeight, 0.2)
	}

	rect(xx - tileSize, yy - tileSize, boxWidth, boxHeight)
	pop()
}

function mousePressed() {
	if (!flipState[selectedNum] && selectedNum) {
		pinnedOnes.push(selectedNum)
	} else {
		for (var i = 0; i < pinnedOnes.length; i++) {
			if (pinnedOnes[i] == selectedNum) {
				pinnedOnes.splice(i, 1);
				break;
			}
		}
	}
	flipState[selectedNum] = !flipState[selectedNum]
}

function selectedTop(xx, yy, name, num) {
	label_text(xx - tileSize, yy - tileSize, name, num)
	label_textile(user_data[num], xx, yy + 12, num)
	trait_textile(user_data[num], xx, yy + newRandomFlip[num], num)
}

function pinnedItems() {
	for (let i = 0; i < pinnedOnes.length; i++) {
		let tnum = int(pinnedOnes[i])
		let name = cFL(user_data[tnum]['Your First Name'])

		label_text(XX[tnum] - tileSize, YY[tnum] - tileSize, name, tnum)
		label_textile(user_data[tnum], XX[tnum], YY[tnum] + 12, tnum)
		trait_textile(user_data[tnum], XX[tnum], YY[tnum] + newRandomFlip[tnum], tnum)
	}
}

let tileSize = 5

function bigger() {
	tileSize += 1
	tileSize = parseInt(constrain(tileSize, 1, 7))
	newResizer = tileSize * 1.5 + 1
}

function smaller() {
	tileSize -= 1
	tileSize = parseInt(constrain(tileSize, 1, 7))
	newResizer = tileSize * 1.5 + 1
}

let sG = document.getElementById("sG");
let sS = document.getElementById("sS");

function showGrid() {
	similarArr = false
	vizSoulmate = false
	gridArr = true

	addRemoveClass([false, true, false])

	for (let num = 0; num < (user_data.length - 1); num++) {
		offseterX[num] = 0
		offseterY[num] = 0
	}

	tileSize = 5
	tileSize = parseInt(constrain(tileSize, 1, 7))
	newResizer = tileSize * 1.5 + 1
}

function showSimilar() {
	similarArr = true;
	gridArr = false;
	vizSoulmate = false;

	addRemoveClass([true, false, false])

	tileSize = 5
	tileSize = parseInt(constrain(tileSize, 1, 7))
	newResizer = tileSize * 1.5 + 1
}

function showSoulmate() {
	similarArr = false;
	gridArr = false;
	vizSoulmate = true;

	addRemoveClass([false, false, true])

	tileSize = 3
	tileSize = parseInt(constrain(tileSize, 1, 7))
	newResizer = tileSize * 1.5 + 1
}

function addRemoveClass(classI) {
	let classArray = [sB, sG, sS]

	for (let i = 0; i < 3; i++) {
		if (classI[i]) {
			classArray[i].classList.add("selected");
		} else {
			classArray[i].classList.remove("selected");
		}
	}
}