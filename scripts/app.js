import * as http from './http.js';
import * as view from './view.js';

var width = (document.getElementById('img-width')).value;
var height = (document.getElementById('img-height')).value;
var PIC_URL = `http://placekitten.com/${width}/${height}`;

window.changePicture = (w,h) => {
	view.CatPic(w,h);
}

window.randomize = () => {
	var randomRes = []
	

	while (!(randomRes[0] % 50) && !(randomRes[1] % 50)){
		randomRes[0] = Math.floor(Math.random() * 701);
		randomRes[1] = Math.floor(Math.random() * 701);
		if (randomRes[0] % 50){
			if (randomRes[1] % 50){
				changePicture(randomRes[0], randomRes[1]);
		}
	}
	}
	
	
}