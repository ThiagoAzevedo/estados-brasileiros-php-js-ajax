let httpRequest = new XMLHttpRequest();

httpRequest.open('GET', 'estados-json.php');

httpRequest.onreadystatechange = function() {
	if( httpRequest.readyState == 4 ) {
		if( httpRequest.status == 200 ) {
			let json_obj = JSON.parse(httpRequest.responseText);
			// console.log( json_obj[0] );
			// console.log('200');
			// console.log(json_obj.length);
			let select_html = document.getElementById('lista-estados');
			
			json_obj.forEach(function(index, valor) {
				let option_html = document.createElement('option');
				option_html.value = index.sigla;
				option_html.innerHTML = index.nome;
				select_html.appendChild(option_html);
			})
			
		}
	}
}

httpRequest.send();
