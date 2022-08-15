let labelSizer = 17
let traitBgColor = ["#253A8D", "#015054", "#E1BA37", "#17080E", "#D46F7D", "#E78A11", "#1691CD", "#461950", "#DE381E",
	"#F796BA", "#46341B", "#F03B02", "#2F53B4", "#008870"
]
let bgColor = ["#253A8D", "#015054", "#E1BA37", "#17080E", "#D46F7D", "#E78A11", "#1691CD", "#461950", "#DE381E",
	"#F796BA", "#FED700", "#46341B", "#F03B02", "#2F53B4", "#008870"
]

function label_text(xx, yy, name, num) {
	textSize(tileSize * 1.8)
	textFont('Inconsolata')
	fill(0)
	rect(xx, yy - tileSize * 1.4, textWidth(name) + tileSize * 4, 22)
	fill(255)

	outName = ''
	
	if (flipState[num]) {
		outName += 'x '
	} else if (selectedNum == num) {
		outName += '+ '
	} else {
		outName += '* '
	}

	text(outName + name, xx + tileSize / 2, yy + tileSize)
}

function label_textile(user, x, y, num) {
	push()
	translate(x, y)
	let colorB = random(bgColor)
	fill(colorB)

	label_background()
	if (user['artist'] == true) {
		label_draw(artistTile, tileColor[num][0])
	}
	if (user['designer'] != false) {
		label_draw(designerTile, tileColor[num][1])
	}
	if (user['coder'] == true) {
		label_draw(coderTile, tileColor[num][2])
	}
	if (user['researcher'] == true) {
		label_draw(researcherTile, tileColor[num][3])
	}
	if (user['educator'] == true) {
		label_draw(educatorTile, tileColor[num][4])
	}
	if (user['curator'] == true) {
		label_draw(curatorTile, tileColor[num][5])
	}
	if (user['writer'] == true) {
		label_draw(writerTile, tileColor[num][6])
	}
	if (user['multimedia'] == true) {
		label_draw(multimediaTile, tileColor[num][7])
	}
	if (user['music_artist'] == true) {
		label_draw(music_artistTile, tileColor[num][8])
	}
	if (user['explorer'] == true) {
		label_draw(explorerTile, tileColor[num][9])
	}
	if (user['product_manager'] == true) {
		label_draw(product_managerTile, tileColor[num][10])
	}
	if (user['marketer'] == true) {
		label_draw(marketerTile, tileColor[num][11])
	}
	if (user['photographer'] == true) {
		label_draw(photographerTile, tileColor[num][12])
	}
	if (user['creator'] == true) {
		label_draw(creatorTile, tileColor[num][13])
	}

	push()
	translate(0, (labelSizer + 2) * tileSize)
	scale(1, introScaler[num])
	introLabel(x, y, num)
	pop()

	pop()
}

function label_background() {
	push()
	fill('#EED8C2')
	shadow()
	rect(-1 * tileSize, -1 * tileSize, (labelSizer + 2) * tileSize)
	pop()
}

function label_draw(tileList, color) {
	push()
	fill(color)
	for (let a = 0; a < tileList.length; a++) {
		for (let b = 0; b < tileList[0].length; b++) {
			if (tileList[a][b] == true) {
				rectT(a, b)
			}
		}
	}
	pop()
}

function rectT(x, y) {
	rect(x * tileSize, y * tileSize, tileSize)
}

let artistTile = [
	[true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, true],
	[0, 0, true, 0, true, 0, 0, 0, true, 0, 0, 0, true, false, true, false, 0],
	[0, true, 0, true, 0, true, 0, 0, true, 0, 0, true, 0, true, 0, true, 0],
	[0, 0, 0, 0, 0, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, true, true, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, true, true, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, true, 0, true, 0, true, 0, 0, true, 0, 0, true, 0, true, 0, true, 0],
	[0, false, true, 0, true, 0, 0, 0, true, 0, 0, 0, true, 0, true, 0, 0],
	[true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, true]
]
let designerTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, false, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0],
	[0, 0, 0, false, true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0],
	[0, 0, false, true, false, 0, 0, 0, 0, 0, 0, 0, false, true, 0, 0, 0],
	[false, false, true, 0, true, false, 0, 0, 0, 0, 0, false, true, 0, true, 0, 0],
	[false, true, 0, true, false, true, 0, 0, 0, 0, 0, true, false, true, 0, true, false],
	[true, 0, true, 0, 0, 0, true, 0, 0, false, true, 0, 0, 0, true, 0, true],
	[0, true, 0, 0, 0, 0, 0, true, 0, true, 0, 0, 0, 0, false, true, 0],
	[true, 0, 0, 0, true, 0, 0, false, true, 0, 0, 0, true, 0, 0, 0, true],
	[0, true, 0, 0, 0, 0, 0, true, 0, true, false, 0, 0, 0, 0, true, 0],
	[true, 0, true, 0, 0, 0, true, 0, 0, 0, true, 0, 0, 0, true, false, true],
	[false, true, 0, true, false, true, 0, 0, 0, 0, 0, true, false, true, 0, true, 0],
	[false, false, true, 0, true, false, 0, 0, 0, 0, 0, false, true, 0, true, 0, 0],
	[0, false, false, true, false, 0, 0, 0, 0, 0, 0, false, false, true, 0, 0, 0],
	[0, 0, 0, false, true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let coderTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, false, true, true, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, true, 0, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, true, 0, false, true, true, true, 0, 0, true, 0, 0, 0, 0],
	[0, false, false, true, false, 0, true, 0, true, 0, true, 0, 0, true, 0, 0, 0],
	[true, true, true, true, true, true, 0, 0, true, 0, 0, true, true, true, true, true, true],
	[0, 0, 0, true, 0, 0, true, false, true, 0, true, 0, 0, true, 0, 0, 0],
	[0, 0, 0, 0, true, 0, 0, true, true, true, 0, 0, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, true, 0, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, true, true, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0]
]
let researcherTile = [
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, true, false],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, true, false],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0]
]
let educatorTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, false, false, 0, 0, 0],
	[0, 0, true, true, true, true, true, true, 0, true, true, true, true, true, true, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, true, 0, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, true, 0, 0, 0, true, 0, 0, false, true, 0, 0, 0, 0],
	[0, 0, 0, true, 0, 0, 0, 0, true, 0, false, false, 0, true, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, false, 0, false, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, true, true, 0, true, true, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, true, 0, 0, 0, 0, true, 0, false, false, false, true, 0, 0, 0],
	[0, 0, 0, false, true, 0, 0, 0, true, 0, 0, false, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, true, 0, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, false, false, false, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, true, true, true, true, true, true, 0, true, true, true, true, true, true, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let curatorTile = [
	[true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[true, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, true],
	[false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0],
	[0, 0, false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false, 0, 0],
	[0, 0, true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0],
	[false, true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[0, true, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false],
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true],
	[0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true]
]
let writerTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, true, true, true, 0, 0, 0, 0, 0, 0, 0, true, true, true, 0, 0],
	[0, true, 0, false, true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, true, 0],
	[0, true, false, true, true, 0, 0, 0, true, 0, 0, 0, true, true, false, true, false],
	[0, true, true, true, false, 0, 0, 0, 0, 0, 0, 0, false, true, true, true, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, false, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, true, 0, 0, 0, true, 0, 0, 0, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, false, false, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, true, true, true, false, 0, 0, 0, 0, 0, 0, 0, false, true, true, true, 0],
	[0, true, 0, true, true, 0, 0, 0, true, 0, 0, 0, true, true, false, true, 0],
	[0, true, false, false, true, 0, 0, 0, 0, 0, 0, 0, true, false, 0, true, 0],
	[0, 0, true, true, true, 0, 0, 0, 0, 0, 0, 0, true, true, true, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0]
]
let creatorTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, true, 0, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, true, false, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, true, false, true, 0, true, false, true, false, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, true, 0, true, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, false, true, 0, true, 0, true, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, true, 0, true, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let multimediaTile = [
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, true, true, true]
]
let music_artistTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[false, false, false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, 0, 0, 0, 0, 0, true, false, 0, 0, 0, 0],
	[0, 0, 0, 0, true, false, 0, 0, 0, 0, 0, 0, true, false, 0, 0, 0],
	[0, 0, 0, true, false, false, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[true, true, true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[false, false, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true],
	[0, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let explorerTile = [
	[0, 0, 0, 0, true, false, true, 0, 0, 0, true, 0, true, 0, 0, 0, 0],
	[0, 0, 0, true, false, true, 0, 0, 0, 0, 0, true, false, true, 0, 0, 0],
	[0, false, true, false, true, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0, 0],
	[false, true, false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[true, false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true],
	[false, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0],
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, false, true],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true],
	[0, true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false],
	[true, false, true, false, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false, true],
	[0, true, false, true, false, false, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, 0, true, 0, true, false, false, 0, 0, 0, 0, 0, true, 0, true, 0, 0],
	[0, 0, 0, true, 0, true, 0, 0, 0, 0, 0, true, 0, true, 0, 0, 0],
	[0, 0, 0, 0, true, 0, true, 0, 0, 0, true, 0, true, 0, 0, 0, 0]
]
let product_managerTile = [
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true],
	[true, true, false, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true],
	[0, true, true, 0, 0, 0, 0, 0, true, false, 0, 0, 0, 0, true, true, 0],
	[0, 0, true, true, 0, 0, 0, true, 0, true, false, 0, false, true, true, 0, 0],
	[0, 0, 0, true, true, 0, true, 0, 0, 0, false, false, true, true, false, 0, 0],
	[0, 0, 0, true, false, false, true, true, true, true, true, true, false, true, false, 0, 0],
	[0, 0, 0, true, true, true, true, 0, 0, 0, 0, 0, true, true, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, false, 0, 0, 0, 0, 0, 0, false, false, 0, 0, 0],
	[0, 0, 0, true, true, true, true, 0, 0, 0, 0, 0, true, true, 0, 0, 0],
	[0, 0, 0, true, false, false, true, true, true, true, true, true, false, true, 0, 0, 0],
	[0, 0, 0, true, true, false, true, 0, 0, 0, false, false, true, true, 0, 0, 0],
	[0, 0, true, true, 0, 0, 0, true, false, true, 0, 0, 0, true, true, 0, 0],
	[0, true, true, 0, 0, 0, 0, 0, true, false, 0, 0, 0, 0, true, true, 0],
	[true, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, true],
	[true, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true]
]
let marketerTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, true, true, true, true, true, true, false, false, false, false, 0],
	[0, 0, 0, 0, true, 0, 0, 0, 0, 0, 0, false, true, false, false, 0, 0],
	[0, 0, 0, true, 0, false, true, true, true, true, true, 0, 0, true, false, 0, 0],
	[0, 0, true, false, 0, true, 0, 0, 0, 0, 0, true, 0, 0, true, false, 0],
	[0, true, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, true, 0, 0, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, true, 0, 0, 0, 0, true, 0, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, true, 0, 0, true, 0, 0, 0, 0, 0, 0, 0, true, true, 0, true, 0],
	[0, 0, true, 0, 0, true, 0, 0, 0, 0, 0, true, 0, false, true, 0, 0],
	[0, 0, 0, true, 0, 0, true, true, true, true, true, 0, 0, true, 0, 0, 0],
	[0, 0, 0, 0, true, 0, false, 0, 0, 0, 0, 0, true, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, true, true, true, true, true, true, true, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]
let photographerTile = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, true, true, true, true, 0],
	[0, true, 0, true, 0, 0, 0, 0, 0, 0, 0, 0, true, false, 0, 0, 0],
	[0, true, 0, false, false, false, false, false, false, 0, 0, 0, true, false, true, true, 0],
	[0, true, true, true, true, true, false, false, 0, 0, 0, 0, true, false, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, true, false, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, false, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, false, true, 0, 0, 0, 0, false, false, false, false, false, 0, 0, 0],
	[0, 0, 0, false, true, 0, 0, 0, 0, 0, 0, true, true, true, true, true, 0],
	[0, true, true, false, true, 0, 0, 0, 0, 0, 0, 0, 0, false, 0, true, 0],
	[0, 0, 0, false, true, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[false, true, true, true, true, 0, 0, 0, 0, 0, 0, 0, 0, true, 0, true, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
]

function label_textiler(user, x, y) {
	push()
	translate(x, y)
	let colorB = random(bgColor)
	fill(colorB)

	label_background()
	if (user == 0) {
		label_draw(artistTile, 255)
	}
	if (user == 1) {
		label_draw(designerTile, 255)
	}
	if (user == 2) {
		label_draw(coderTile, 255)
	}
	if (user == 3) {
		label_draw(researcherTile, 255)
	}
	if (user == 4) {
		label_draw(educatorTile, 255)
	}
	if (user == 5) {
		label_draw(curatorTile, 255)
	}
	if (user == 6) {
		label_draw(writerTile, 255)
	}
	if (user == 7) {
		label_draw(multimediaTile, 255)
	}
	if (user == 8) {
		label_draw(music_artistTile, 255)
	}
	if (user == 9) {
		label_draw(explorerTile, 255)
	}
	if (user == 10) {
		label_draw(product_managerTile, 255)
	}
	if (user == 11) {
		label_draw(marketerTile, 255)
	}
	if (user == 12) {
		label_draw(photographerTile, 255)
	}
	if (user == 13) {
		label_draw(creatorTile, 255)
	}
	pop()
}