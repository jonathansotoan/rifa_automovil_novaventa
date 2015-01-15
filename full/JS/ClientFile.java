import java.io.*;

public class ClientFile {
	private String selectedCellColor = "red";
	private String cellsColor = "gray";
	private String bordersColor = "black";
	private String textColor = "white";
	
	private int rowsQuantity = 14;
	private int columnsQuantity = 15;
	
	private String[] names = { "LUZ AMPARO VALENCIA BUSTOS",
								"YINETH DUQUE MORENO",
								"CENITH DEL CARMEN DE LA ROSA BERTEL",
								"NANCY YANIRA HERNANDEZ GOMEZ",
								"YAMILE PEREZ CRUZ",
								"ADRIANA IVON ZABALA MESA",
								"CARMEN ELENA GUEVARA ZARTA",
								"LINA MARIA SERNA ARISTIZABAL",
								"NANCY MILENA SUANCHA GUTIERREZ",
								"LINA MARIA CASTRILLON HURTADO",
								"MARTHA LUCIA BELTRAN OLMOS",
								"MARIA DEL CARMEN ACELDAS BELTRAN",
								"VICTORIA EUGENIA VARONA HERRERA",
								"CLAUDIA PATRICIA TROCHEZ MOLINA",
								"BIOLET ESTHER NARANJO CARDENAS",
								"NARDEYI CIFUENTES COCA",
								"PAULA ANDREA ESCOBAR ROJAS",
								"SANDRA CECILIA ZAFRA BAUTISTA",
								"LAURA MILENA NAVAS CORZO",
								"RUBY ESTHELA LOZANO AUDIVERTH",
								"ALBA YEINSY LONDONO MONCADA",
								"DURLEY VIVIANA LLANO DUQUE" };
								
	private int[] chances = { 31, 21, 18, 17, 15, 14, 13, 12, 8, 8, 7, 6, 5, 5, 5, 5, 4, 4, 3, 3, 3, 3  };
	
	private String[] colors = { "red",
								"blue",
								"darksalmon",
								"green",
								"black",
								"orange",
								"#DC143C",
								"#53868B",
								"#FFB90F",
								"#006400",
								"#556B2F",
								"#00688B",
								"#8B3A62",
								"#000080",
								"#8968CD",
								"#3D59AB",
								"#B8860B",
								"#68228B",
								"#FF1493",
								"#00C957",
								"#FF6103",
								"#8B0A50" };
	
	private BufferedReader in;
	private PrintWriter out;
	
	public ClientFile( String nameFile ) throws FileNotFoundException, IOException {
		in = new BufferedReader( new InputStreamReader( new BufferedInputStream( new FileInputStream( new File( nameFile ) ) ) ) );
		
		String file = "";
		String temp;
		while ( (temp = in.readLine()) != null )
			file += temp + "\n";

		file = file.replaceAll( "#java:selectedCellColor", selectedCellColor ).replaceAll( "#java:cellsColor", cellsColor ).replaceAll( "#java:bordersColor", bordersColor ).replaceAll( "#java:textColor", textColor ).replaceAll( "#java:rowsQuantity", "" + rowsQuantity ).replaceAll( "#java:columnsQuantity", "" + columnsQuantity ).replaceAll( "#java:names", getFormattedNames() ).replaceAll( "#java:chances", getFormattedChances() ).replaceAll( "#java:colors", getFormattedColors() );
	
		out = new PrintWriter( new FileWriter( "rf_" + nameFile ) );
		out.print( file );
		
		in.close();
		out.close();
	}
	
	private String getFormattedNames() {
		String results = "[";
		
		for( short j = 0; j < names.length; ++j )
			results += "'" + names[ j ] + "',\n\t\t\t\t";
			
		return results.substring( 0, results.length() - 6 ) + "]";
	}
	
	private String getFormattedChances() {
		String results = "[";
		
		for( short j = 0; j < chances.length; ++j )
			results += chances[ j ] + ",";
			
		return results.substring( 0, results.length() - 1 ) + "]";
	}
	
	private String getFormattedColors() {
		String results = "[";
		
		for( short j = 0; j < colors.length; ++j )
			results += "'" + colors[ j ] + "',";
			
		return results.substring( 0, results.length() - 1 ) + "]";
	}
	
	public static void main( String args[] ) {
		try {
			new ClientFile( args[ 0 ] );
		} catch( FileNotFoundException fnfe ) {
			System.err.println( "File not found: " + fnfe.toString() );
		} catch( IOException ioe ) {
			System.err.println( "I/O Exception: " + ioe.toString() );
		} catch( ArrayIndexOutOfBoundsException aioobe ) {
			System.err.println( "file is not specified: " + aioobe.toString() );
		}
	}
}