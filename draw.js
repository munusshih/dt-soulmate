let mOffsetX = 0,
	mOffsetY = 0,
	resizer = 0.1

function draw() {
	// document.body.style = 'cursor: grab;';
	clear()

	backgroundSet()
	backgroundXY()

	columnMax = parseInt(width / tileSize)
	rowMax = parseInt(height / tileSize)
	sheetLong = 0

	push()
	if (similarArr) {
		translateX = width / 2
		translateY = height / 2
	} else if (gridArr) {
		translateX = 25
		translateY = 25
	} else {
		translateX = width / 2
		translateY = height / 2
	}

	// 	lerp
	resizer = lerp(resizer, newResizer, 0.1)
	mOffsetX = lerp(mOffsetX, newmOffsetX, 0.3)
	mOffsetY = lerp(mOffsetY, newmOffsetY, 0.3)

	translate(translateX + mOffsetX, translateY + mOffsetY)

	selectedNum = undefined
	let tileMax = parseInt((width - 50) / ((labelSizer + 2) * tileSize * 2))
	let angleStep = 360 / user_data.length


	for (let num = 0; num < (user_data.length - 1); num++) {
		let eachSize = labelSizer
		let name = cFL(user_data[num]['Your First Name'])

		if (similarArr) {
			nXX[num] = pca[num]["X"] * 30 * resizer + offseterX[num] * resizer
			nYY[num] = pca[num]["Y"] * 20 * resizer + offseterY[num] * resizer
		} else if (gridArr) {
			nXX[num] = parseInt(num % tileMax) * tileSize * 5 * resizer + offseterX[num] * resizer
			nYY[num] = parseInt(num / tileMax) * tileSize * 5 * resizer + offseterY[num] * resizer
		} else if (vizSoulmate) {
			push()
			angleMode(DEGREES)
			let name = cFL(user_data[num]['Your First Name'])

			nXX[num] = 60 * resizer * cos(num * angleStep) + offseterX[num] * resizer
			nYY[num] = 60 * resizer * sin(num * angleStep) + offseterY[num] * resizer
			pop()
		}

		XX[num] = lerp(XX[num], nXX[num], 0.5)
		YY[num] = lerp(YY[num], nYY[num], 0.5)

		collider(translateX + mOffsetX, XX[num],
			translateY + mOffsetY, YY[num], newRandomFlip[num], num)

		label_text(XX[num] - tileSize, YY[num] - tileSize, name, num)
		label_textile(user_data[num], XX[num], YY[num] + 12, num)
		trait_textile(user_data[num], XX[num], YY[num] + newRandomFlip[num], num)
	}
	if (selectedNum != undefined) {

		selectedTop(XX[selectedNum], YY[selectedNum],
			cFL(user_data[selectedNum]['Your First Name']), selectedNum)
	}
	pinnedItems()

	// cursor
	push()
	noFill()
	stroke(255)
	circle(mouseX - translateX - mOffsetX,
		mouseY - translateY - mOffsetY, 20)
	pop()

	// 	viz soulmate
	if (vizSoulmate) {
		soulmateViz()
	}

	pop()
}

function cFL(string) {
	return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

function soulmateViz() {
	push()
	explainText = " "
	for (let num = 0; num < (user_data.length - 1); num++) {
		theirsoulmmate = soulmate[num]['Index']
		let base = createVector(XX[num], YY[num])
		let vec = createVector(XX[theirsoulmmate], YY[theirsoulmmate])

		compareOffset(num, base)
		compareOffset(theirsoulmmate, vec)

		if (selectedNum != undefined) {
			if (num == selectedNum) {
				drawArrow(base, vec, traitColor[num], soulmate[num]['maxValue'])
				explainText += soulmate[num]['source'] + ' -> ' + soulmate[num]['target'] + '\n'
			} else if (theirsoulmmate == selectedNum) {
				drawArrow(base, vec, traitColor[num], soulmate[num]['maxValue'])
				explainText += soulmate[num]['target'] + ' <- ' + soulmate[num]['source'] + '\n'
			}
		} else {
			drawArrow(base, vec, traitColor[num], soulmate[num]['maxValue'])
		}
	}
	if (selectedNum != undefined) {
		push()
		fill(161, 126, 43)
		textFont('VT323')
		textSize(20)
		textAlign(CENTER)
		text(explainText.replaceAll("‘", "e"), 0, 0)
		console.log(explainText)
		pop()
	}
	pop()
}

function compareOffset(num, base) {
	let quadUnit = (user_data.length - 1) / 4
	let squareSize = (labelSizer + 2) * tileSize

	if (num < (quadUnit)) {
		base.add(0, -tileSize)
	} else if (num < quadUnit * 2) {
		base.add(squareSize / 2, -tileSize)
	} else if (num < quadUnit * 3) {
		base.add(squareSize, -tileSize + squareSize + newRandomFlip[num])
	} else if (num <= quadUnit * 4) {
		base.add(0, -tileSize + squareSize + newRandomFlip[num])
	}

	return base
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor, weight) {

	if (myColor == '#17080E') {
		myColor = '#42222f'
	}

	let v3 = p5.Vector.sub(vec, base);
	push();
	stroke(myColor);
	strokeWeight(pow(weight / 3, 1.5));
	fill(myColor);
	translate(-tileSize, -tileSize)
	translate(base.x, base.y);
	line(0, 0, v3.x, v3.y);
	rotate(v3.heading());
	let arrowSize = 7;
	translate(v3.mag() - arrowSize, 0);
	triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
	pop();
}


class backgroundT {
	constructor(num) {
		this.x = parseInt(random(width));
		this.y = parseInt(random(height));
		this.c = random(bgColor) + "9a";
		this.num = num
	}

	draw() {
		fill(this.c)
		rectT(this.x, this.y)
	}

	reset() {
		if (similarArr) {
			this.x += 1
			this.y += 1

			if (this.x > width) {
				this.x = 0
			} else if (this.x < 0) {
				this.x = width
			}
			if (this.y > height) {
				this.y = 0
			} else if (this.y < 0) {
				this.y = height
			}

		} else if (gridArr) {

			this.y -= 1
			if (this.x > width) {
				this.x = 0
			} else if (this.x < 0) {
				this.x = width
			}
			if (this.y > height) {
				this.y = 0
			} else if (this.y < 0) {
				this.y = height
			}

		} else {

			if (this.y < height / 4) {
				this.y += 4
			} else {
				this.y += 1
			}
			this.x += 1
			if (this.x > width || this.x < 0) {
				this.x = 0
			}
			if (this.y > height || this.y < 0) {
				this.y = height / 4
			}
		}
	}
}
let bgT = [],
	bgNum = 10000

function backgroundXY() {
	for (let i = 0; i < bgNum; i++) {
		bgT[i].draw()
	}
}

function backgroundSet() {
	for (let i = 0; i < bgNum; i++) {
		bgT[i].reset()
	}
}