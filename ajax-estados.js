/*
*	Thiago Soares de Azevedo
*	tsoaresaz@gmail.com
*/

let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'estados-json.php');

httpRequest.onreadystatechange = function() {
	if( httpRequest.readyState == 4 ) {
		if( httpRequest.status == 200 ) {
			let json_obj = JSON.parse(httpRequest.responseText);

			let select_html = document.getElementById('lista-estados');

			let option_txt = document.createElement('option');
			option_txt.innerHTML = 'Selecione um estado';

			select_html.appendChild(option_txt);
			
			json_obj.forEach(function(index, valor) {
				let option_html = document.createElement('option');
				option_html.value = index.sigla;
				option_html.innerHTML = index.nome;
				select_html.appendChild(option_html);
			})
			
		} else if( httpRequest.status == 404 ) {
			alert('Arquivo não localizado');
		}
	}
}

httpRequest.send();
