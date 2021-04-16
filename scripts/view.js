import HUD from './HUD.js';

const renderDOM = (html) => document.getElementById('view').innerHTML = html;



export const CatPic = (w,h) => {
	renderDOM(
		`${HUD(w,h)}`
		)
}