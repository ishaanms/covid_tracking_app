async function apiii(selected){
    const response= await fetch(`https://covid-19-data.p.rapidapi.com/country/code?code=${selected}`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"x-rapidapi-key": "4a32cd8c9bmshe605325a7f3bf12p1e76fcjsn1e869e2febe1"
	}
})
const response_1 = await response.json();

document.getElementById('confirm').innerHTML = `<p>${response_1[0]['confirmed']}</p>`;
document.getElementById('active').innerHTML = `<p>${response_1[0]['critical']}</p>`;
document.getElementById('recover').innerHTML = `<p>${response_1[0]['recovered']}</p>`;
document.getElementById('decease').innerHTML = `<p>${response_1[0]['deaths']}</p>`;
// var cc= "flag-icon flag-icon-"+selected.toLowerCase()
// console.log(cc);
// document.getElementById('imagecont').innerHTML=`<span class=${cc}></span>`;
}
export default apiii;