function introLabel(x, y, num){
	push()
	fill(sheetColor[num])
	rect(-1 * tileSize, -1 * tileSize,
			(labelSizer+2)*tileSize, introHeight[num]*(labelSizer+2)*tileSize)
	
	translate(0, 0)
	fill(255)
		
	text(bigChunText[num], 0, 0, (labelSizer+2)*tileSize*0.96)
	
	pop()
}