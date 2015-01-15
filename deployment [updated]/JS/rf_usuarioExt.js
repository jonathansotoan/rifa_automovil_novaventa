//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
var selectedCellColor = 'red';
//var cellsColor = 'gray';//deprecated: cellsColor
var bordersColor = 'black';
var textColor = 'white';
var rowsQuantity = 14;
var columnsQuantity = 15;

var selectedCells = new Array();

var currentIndex = 0;

var names = ['LUZ AMPARO VALENCIA BUSTOS',
				'YINETH DUQUE MORENO',
				'CENITH DEL CARMEN DE LA ROSA BERTEL',
				'NANCY YANIRA HERNANDEZ GOMEZ',
				'YAMILE PEREZ CRUZ',
				'ADRIANA IVON ZABALA MESA',
				'CARMEN ELENA GUEVARA ZARTA',
				'LINA MARIA SERNA ARISTIZABAL',
				'NANCY MILENA SUANCHA GUTIERREZ',
				'LINA MARIA CASTRILLON HURTADO',
				'MARTHA LUCIA BELTRAN OLMOS',
				'MARIA DEL CARMEN ACELDAS BELTRAN',
				'VICTORIA EUGENIA VARONA HERRERA',
				'CLAUDIA PATRICIA TROCHEZ MOLINA',
				'BIOLET ESTHER NARANJO CARDENAS',
				'NARDEYI CIFUENTES COCA',
				'PAULA ANDREA ESCOBAR ROJAS',
				'SANDRA CECILIA ZAFRA BAUTISTA',
				'LAURA MILENA NAVAS CORZO',
				'RUBY ESTHELA LOZANO AUDIVERTH',
				'ALBA YEINSY LONDONO MONCADA',
				'DURLEY VIVIANA LLANO DUQUE'];
var chances = [31,21,18,17,15,14,13,12,8,8,7,6,5,5,5,5,4,4,3,3,3,3];
var colors = ['red','blue','darksalmon','green','black','orange','#DC143C','#53868B','#FFB90F','#006400','#556B2F','#00688B','#8B3A62','#000080','#8968CD','#3D59AB','#B8860B','#68228B','#FF1493','#00C957','#FF6103','#8B0A50'];

var showingMsg = false;
var clicks = 0;

$( document ).ready( function() {
	for( j = 0; j < names.length; ++j )
		selectedCells[ j ] = [ names[ j ], chances[ j ], new Array(), colors[ j ] ];

	reset();
	addUsers();
});
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function reset() {
	createTable( rowsQuantity, columnsQuantity );
	updateCellsColor();
	updateBordersColor();
	updateTextColor();
	updateSelectedCellColor();
}

function updateBordersColor() {
	$( 'td' ).css( 'border', '1px solid ' + bordersColor );
}

function updateTextColor() {
	$( '.col' ).css( 'color', textColor );
}
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function updateCellsColor() {
	$( '.col' ).css( 'background-color', '' );//deprecated: '' instead cellsColor
	updateSelectedCells();//ch
}

function updateSelectedCellColor() {
	selectedCellColor = selectedCells[ currentIndex ][ 3 ];
}

function mouseOverEffect( idCol ) {
	$( '#' + idCol ).css( 'background-color', selectedCellColor );
	
	//painting the row
	var name = idCol.split( '-' )[ 0 ];
	var selectedNumber = parseInt( idCol.split( '-' )[ 1 ] );
	
	$( '#' + name + '-0' ).css( 'color', selectedCellColor );
	//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
	
	for( j = 0; j < selectedNumber; ++j )
		//$( '#' + name + '-' + j ).fadeTo( 0.1, 0.8 );
		$( '#' + name + '-' + j ).fadeTo( 0.1, 0.8 ).css( 'background-color', 'white' );

	//painting the col
	var selectedLetter = idCol.split( '-' )[ 0 ];
	selectedLetter = selectedLetter.charCodeAt( selectedLetter.length - 1 );
	name = idCol.split( '-' )[ 1 ];
	
	//$( '#col_names' + name ).fadeTo( 0.1, 0.8 );
	$( '#col_names' + name ).fadeTo( 0.1, 0.8 ).css( 'background-color', 'white' );
	$( '#col_names' + name ).css( 'color', selectedCellColor );
	
	for( j = 65; j < selectedLetter; ++j )
		//$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 0.8 );
		$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 0.8 ).css( 'background-color', 'white' );
		
	//painting again the selected ones
	/*for( j = 0; j < selectedCells[ currentIndex ][ 2 ].length; ++j )
		$( '#' + selectedCells[ currentIndex ][ 2 ][ j ] ).css( 'background-color', selectedCells[ currentIndex ][ 3 ] );*///ch
}

function mouseOutEffect( idCol ) {
	var selectedLetter = idCol.split( '-' )[ 0 ];
	selectedLetter = selectedLetter.charCodeAt( selectedLetter.length - 1 );

	//unpainted the selected cell
	$( '#' + idCol ).css( 'background-color', '' );//deprecated: '' instead cellsColor
	
	//unpainting the painted row
	//$( '#' + idCol ).siblings().fadeTo( 0.1, 1 );
	$( '#' + idCol ).siblings().fadeTo( 0.1, 1 ).css( 'background-color', '' );
	$( '#col_' + String.fromCharCode( selectedLetter ) + '-0' ).css( 'color', textColor );
	
	//unpainting the painted column
	name = idCol.split( '-' )[ 1 ];
	
	//$( '#col_names' + name ).fadeTo( 0.1, 1 );
	$( '#col_names' + name ).fadeTo( 0.1, 1 ).css( 'background-color', '' );
	$( '#col_names' + name ).css( 'color', textColor );
	
	for( j = 65; j < selectedLetter; ++j )
		//$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 1 );
		$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 1 ).css( 'background-color', '' );

	//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
	updateSelectedCells();//ch
}

function updateSelectedCells() {
	for( s = 0; s < selectedCells.length; ++s )
		for( j = 0; j < selectedCells[ s ][ 2 ].length; ++j )
			$( '#' + selectedCells[ s ][ 2 ][ j ] ).css( 'background-color', selectedCells[ s ][ 3 ] ).text( selectedCells[ s ][ 2 ][ j ].split( '_' )[ 1 ].replace( '-', '' ) );
}

function createTable( rows, cols ) {
	if( rows > 26 )
		alert( "El número máximo de filas es 26, prueba agregando más columnas." );
	else if( rows < 0 || cols < 0 )
		alert( "Los números de filas y columnas deben ser positivos." );
	else if( isNaN( rows ) )
		alert( "Los datos suministrados solo pueden ser números." );
	else {
		$( '#tbl' ).remove();
		$( '<table id="tbl">' ).appendTo( '#mainEvent' );

		$( '<tr id="row_names" class="row">' ).appendTo( '#tbl' );
		$( '<td id="col_names0" class="col">' ).appendTo( '#row_names' );
		for( i = 1; i <= cols; ++i ) {
			$( '<td id="col_names' + i + '" class="col">' ).appendTo( '#row_names' );
			$( '#col_names' + i).html( '<span class="colNames">' + i + '</span>' );
		}
		
		for( j = 66; j < rows + 66; ++j ) {
			$( '<tr id="row_' + String.fromCharCode( j - 1 ) + '" class="row">' ).appendTo( '#tbl' );
			$( '<td id="col_' + String.fromCharCode( j - 1 ) + '-0" class="col">' ).appendTo( '#row_'
				+ String.fromCharCode( j - 1 ) );
			$( '#col_' + String.fromCharCode( j - 1 ) + '-0' ).html( String.fromCharCode( j - 1 ) );
			
			//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
			for( i = 1; i <= cols; ++i )
				$( '<td id="col_' + String.fromCharCode( j - 1 ) + "-" + i
					+ '" class="col" onMouseOver="mouseOverEffect(\'col_' + String.fromCharCode( j - 1 ) + '-' + i + '\')" onMouseOut="mouseOutEffect(\'col_' + String.fromCharCode( j - 1 ) + '-' + i + '\')" onclick="clickedCell(\'col_' + String.fromCharCode( j - 1 ) + "-" + i + '\')">' ).appendTo( '#row_' + String.fromCharCode( j - 1 ) );
		}
	}

	//removing the selector in the unavailable cells
	$( '#row_names' ).children().css( 'cursor', 'default' );
	
	for( j = 65; j < rowsQuantity + 65; ++j )
		$( '#col_' + String.fromCharCode( j ) + '-0' ).removeAttr( 'onclick' ).css( 'cursor', 'default' );
}
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function addUsers() {
	$( '<option value="' + names[ 0 ] + '" selected="selected">' + names[ 0 ] + '</option>' ).appendTo( '#userList' );

	for( j = 1; j < names.length; ++j )
		$( '<option value="' + names[ j ] + '">' + names[ j ] + '</option>' ).appendTo( '#userList' );
}

function clickedCell( cellId ) {
	var index;

	if( (index = getIndex( cellId, selectedCells[ currentIndex ][ 2 ] )) >= 0 ) {//if the cell is already locked for the current user
		$( '#' + cellId ).css( 'background-color', '' ).text( '' );//deprecated: first '' instead cellsColor
		selectedCells[ currentIndex ][ 2 ].splice( index, 1 );
		selectedCells[ currentIndex ][ 2 ][ getIndex( cellId, selectedCells[ currentIndex ][ 2 ] ) ] = "";
		
		//deleting the ball
		$( '#ball_' + cellId.split( '_' )[ 1 ] ).hide( 'slow', function() {
			$( '#ball_' + cellId.split( '_' )[ 1 ] ).remove()
		} );
	} else if ( !isFreeCell( cellId ) ) {//if the cell is already locked for another user
		if( !showingMsg ) {
			showingMsg = true;
			clicks = 0;
			$( '#messages' ).html( '<div class="msgStyle1">La casilla seleccionada ya ha sido elegida, por favor selecciona otra.</div>' ).fadeIn().delay( 3000 ).fadeOut( function() {
				showingMsg = false;
			} );
		} else if( clicks == 3 ) {
			alert( 'Calma, la casilla seleccionada ya ha sido elegida, por favor selecciona otra.' );
			clicks = 0;
		} else
			++clicks;
	} else if ( selectedCells[ currentIndex ][ 2 ].length != selectedCells[ currentIndex ][ 1 ] ) {//if the cell is not locked
		code = cellId.split( '_' )[ 1 ].replace( '-', '' );
		$( '#' + cellId ).css( 'background-color', selectedCellColor ).text( code );
		selectedCells[ currentIndex ][ 2 ][ selectedCells[ currentIndex ][ 2 ].length ] = cellId;
		
		//adding the ball
		$( '<div id="ball_' + cellId.split( '_' )[ 1 ] + '" class="ball"><div class="ballText">' + code + '</div></div>' ).appendTo( '#ballsField' ).css( 'background-color', selectedCellColor ).css( 'color', textColor ).hide( 0 ).show( 'slow' );
	} else {//If the maximum quantity of selections have been reached
		if( !showingMsg ) {
			showingMsg = true;
			clicks = 0;
			$( '#messages' ).html( '<div class="msgStyle2">Has llegado al número máximo permitido para ti, pero aún puedes cambiar!</div>' ).fadeIn().delay( 3000 ).fadeOut( function() {
				showingMsg = false;
			} );
		} else if( clicks == 3 ) {
			alert( 'Calma, has llegado al número máximo permitido para ti, pero aún puedes cambiar!' );
			clicks = 0;
		} else
			++clicks;
	}
}
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function getIndex( cellId, array ) {
	for( j = 0; j < array.length; ++j ) {
		if( array[ j ] == cellId )
			return j;
	}
	
	return -1;
}

function getCorrespondentIndex( name ) {
	for( j = 0; j < names.length; ++j ) {
		if( names[ j ] == name )
			return j;
	}
			
	return -1;
}

function updateBalls() {
	for( j = 0; j < selectedCells[ currentIndex ][ 2 ].length; ++j )
		$( '#ball_' + selectedCells[ currentIndex ][ 2 ][ j ].split( '_' )[ 1 ] ).remove();

	currentIndex = getCorrespondentIndex( $( '#userList' ).val() );
	reset();

	for( j = 0; j < selectedCells[ currentIndex ][ 2 ].length; ++j )
		paintCell( selectedCells[ currentIndex ][ 2 ][ j ] );
	
	//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com	
	for( j = 0; j < selectedCells[ currentIndex ][ 2 ].length; ++j )	
		$( '<div id="ball_' + selectedCells[ currentIndex ][ 2 ][ j ].split( '_' )[ 1 ] + '" class="ball"><div class="ballText">' + selectedCells[ currentIndex ][ 2 ][ j ].split( '_' )[ 1 ].replace( '-', '' ) + '</div></div>' ).appendTo( '#ballsField' ).css( 'background-color', selectedCellColor ).css( 'color', textColor );
}
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function paintCell( id ) {
	$( '#' + id ).css( 'background-color', selectedCellColor );
	code = id.split( '_' )[ 1 ].replace( '-', '' );
	$( '#' + id ).css( 'background-color', selectedCellColor ).text( code );
}

function isFreeCell( id ) {
	for( j = 0; j < selectedCells.length; ++j )
		if( j != currentIndex )
			for( s = 0; s < selectedCells[ j ][ 2 ].length; ++s )
				if( id == selectedCells[ j ][ 2 ][ s ] )
					return false;
		
	return true;
}
//Hecho por SoftBox, e-mail de contacto: jonathansoto.an@gmail.com
function showWinner() {//ch
	winner = false;
	winnerCode = $( '#winner' ).val();

	for( s = 0; s < selectedCells.length; ++s )
		for( j = 0; j < selectedCells[ s ][ 2 ].length; ++j )
			if( selectedCells[ s ][ 2 ][ j ] == 'col_' + winnerCode[ 0 ].toUpperCase() + '-' + winnerCode.substr( 1, winnerCode.length - 1 ) ) {
				//alert( 'winner ' + selectedCells[ s ][ 0 ] );
				$( '#winnerMessage' ).html( '<div id="winnerText">' + selectedCells[ s ][ 0 ] + '<br>es la feliz ganadora,<br>FELICITACIONES!</div><img src="imgs/pirotecnia.jpg" id="winnerImg"></img>' ).css( 'position', 'absolute' ).fadeIn( 'slow' );
			
				winner = true;
			}
	
	if( !winner && !showingMsg ) {
			showingMsg = true;
			clicks = 0;
			$( '#messages' ).html( '<div class="msgStyle2">La balota ' + winnerCode.toUpperCase() + ' no ha sido seleccionada, por lo que a&uacute;n no hay ganador.</div>' ).fadeIn().delay( 3000 ).fadeOut( function() {
				showingMsg = false;
			} );
		} else if( clicks == 3 ) {
			alert( 'Calma, La balota ' + winnerCode.toUpperCase() + ' no ha sido seleccionada a&uacute;n.' );
			clicks = 0;
		} else
			++clicks;
}