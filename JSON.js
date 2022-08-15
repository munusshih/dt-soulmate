function preload() {
	you = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1553240/hff75ea8c2a06f57216d2091912b28c0e/you.json")
	soulmate = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1565363/h3dbda826300e17755188e06c5cfde013/soulmate.json")
	everyone_bg = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1553240/hff75ea8c2a06f57216d2091912b28c0e/everyone_bg.json")
	everyone_get = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1553240/hff75ea8c2a06f57216d2091912b28c0e/everyone_get.json")
	everyone_wish = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1553240/hff75ea8c2a06f57216d2091912b28c0e/everyone_wish.json")
	user_data = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1553240/hff75ea8c2a06f57216d2091912b28c0e/user_data.json")
	pca = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1549495/h7e4ba0dfd3bfdf11d5f0e6e009e0a7ce/PCA.json")
	raw = loadJSON("https://openprocessing-usercontent.s3.amazonaws.com/files/user261940/visual1565363/h3dbda826300e17755188e06c5cfde013/raw.json")
}

function JSONSetup(){
	you = you["you"]
	soulmate = soulmate["soulmate"]
	everyone_bg = everyone_bg["bg"]
	everyone_get = everyone_get["get"]
	everyone_wish = everyone_wish["wish"]
	user_data = user_data["user_data"]
	pca = pca["PCA"]
	raw = raw["raw"]
}