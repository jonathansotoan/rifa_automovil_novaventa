var selectedCellColor = '#selectedCellColor';
var cellsColor = '#cellsColor';
var bordersColor = '#bordersColor';
var textColor = '#textColor';

$( document ).ready( function() {
	createTable();
});

function updateBordersColor() {
	$( '#tbl' ).css( 'background-color', $( bordersColor ).val() );
}

function updateTextColor() {
	$( '.col' ).css( 'color', $( textColor ).val() );
}

function updateCellsColor() {
	$( '.col' ).css( 'background-color', $( cellsColor ).val() );
}

function mouseOverEffect( idCol ) {
	$( '#' + idCol ).css( 'background-color', $( selectedCellColor ).val() );
	
	//painting the row
	var name = idCol.split( '-' )[ 0 ];
	var selectedNumber = parseInt( idCol.split( '-' )[ 1 ] );
	
	$( '#' + name + '-0' ).css( 'color', $( selectedCellColor ).val() );
	
	for( j = 0; j < selectedNumber; ++j )
		$( '#' + name + '-' + j ).fadeTo( 0.1, 0.8 );

	//painting the col
	var selectedLetter = idCol.split( '-' )[ 0 ];
	selectedLetter = selectedLetter.charCodeAt( selectedLetter.length - 1 );
	name = idCol.split( '-' )[ 1 ];
	
	$( '#col_names' + name ).fadeTo( 0.1, 0.8 );
	$( '#col_names' + name ).css( 'color', $( selectedCellColor ).val() );
	
	for( j = 65; j < selectedLetter; ++j )
		$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 0.8 );
}

function mouseOutEffect( idCol ) {
	var selectedLetter = idCol.split( '-' )[ 0 ];
	selectedLetter = selectedLetter.charCodeAt( selectedLetter.length - 1 );

	//unpainted the selected cell
	$( '#' + idCol ).css( 'background-color', $( cellsColor ).val() );
	
	//unpainting the painted row
	$( '#' + idCol ).siblings().fadeTo( 0.1, 1 );
	$( '#col_' + String.fromCharCode( selectedLetter ) + '-0' ).css( 'color', $( textColor ).val() );
	
	//unpainting the painted column
	name = idCol.split( '-' )[ 1 ];
	
	$( '#col_names' + name ).fadeTo( 0.1, 1 );
	$( '#col_names' + name ).css( 'color', $( textColor ).val() );
	
	for( j = 65; j < selectedLetter; ++j )
		$( '#col_' + String.fromCharCode( j ) + '-' + name ).fadeTo( 0.1, 1 );
}

function createTable() {
	if( $( '#rowQuantity' ).val() > 26 )
		alert( "El número máximo de filas es 26, prueba agregando más columnas." );
	else if( $( '#rowQuantity' ).val() < 0 || $( '#columnQuantity' ).val() < 0 )
		alert( "Los números de filas y columnas deben ser positivos." );
	else if( isNaN( parseInt( $( '#rowQuantity' ).val() ) ) )
		alert( "Los datos suministrados solo pueden ser números." );
	else {
		$( '#tbl' ).remove();
		$( '<table id="tbl">' ).appendTo( '#mainEvent' );

		$( '<tr id="row_names" class="row">' ).appendTo( '#tbl' );
		$( '<td id="col_names0" class="col">' ).appendTo( '#row_names' );
		for( i = 1; i <= $( '#columnQuantity' ).val(); ++i ) {
			$( '<td id="col_names' + i + '" class="col">' ).appendTo( '#row_names' );
			$( '#col_names' + i).html('<h3>' + i + '</h3>' );
		}
		
		for( j = 66; j < parseInt( $( '#rowQuantity' ).val() ) + 66; ++j ) {
			$( '<tr id="row_' + String.fromCharCode( j - 1 ) + '" class="row">' ).appendTo( '#tbl' );
			$( '<td id="col_' + String.fromCharCode( j - 1 ) + '-0" class="col">' ).appendTo( '#row_'
				+ String.fromCharCode( j - 1 ) );
			$( '#col_' + String.fromCharCode( j - 1 ) + '-0' ).html( String.fromCharCode( j - 1 ) );
			
			for( i = 1; i <= $( '#columnQuantity' ).val(); ++i )
				$( '<td id="col_' + String.fromCharCode( j - 1 ) + "-" + i
					+ '" class="col" onMouseOver="mouseOverEffect(\'col_' + String.fromCharCode( j - 1 ) + '-' + i + '\')" onMouseOut="mouseOutEffect(\'col_' + String.fromCharCode( j - 1 ) + '-' + i + '\')">' ).appendTo( '#row_' + String.fromCharCode( j - 1 ) );
		}
	}
}