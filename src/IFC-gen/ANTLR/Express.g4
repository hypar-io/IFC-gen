grammar Express;

schema_declaration
	: 'SCHEMA IFC' Integer ';' type_declaration* entity_declaration* function_declaration* 'END_SCHEMA;' EOF;

type_declaration 
	: 'TYPE' Identifier '=' (value_type|enumeration) ';' type_declaration_body? 'END_TYPE;' ;

value_type 
	: BOOLEAN
	| FIXED
	| INTEGER
	| LOGICAL
	| REAL
	| STRING
	| STRING_FIXED
	;

enumeration
	: ENUMERATION LP enum_id_list RP 
	;

id_list
	: Identifier(','Identifier)*
	;

enum_id_list
	: EnumIdentifier(','EnumIdentifier)*
	;

type_declaration_body 
	: where_declaration ;

where_declaration : 'WHERE' where_statement+ ;

where_statement : .*? ':' .*? ';' ;

entity_declaration
	: 'ENTITY' entity_declaration_body 'END_ENTITY;' ;

entity_declaration_body
	: subtype_declaration? supertype_declaration? inverse_declaration? where_declaration? unique_declaration? ;

subtype_declaration 
	: 'SUBTYPE OF' RP (one_of | Identifier) RP ';' ;

one_of 
	: 'ONE OF' LP id_list RP ';' ;

supertype_declaration 
	:  ('ABSTRACT')? 'SUPERTYPE OF' LP (one_of | Identifier) RP ';' ;

inverse_declaration
	: 'INVERSE' inverse_statement+ ;

inverse_statement
	: Identifier ':' .*? ';' ;

unique_declaration
	: 'UNIQUE' unique_statement+ ;

unique_statement
	: Identifier ':' .*? ';' ;

function_declaration 
	: 'FUNCTION' function_declaration_body 'END_FUNCTION' ;

function_declaration_body
	: .*? ;

// Lexer

BOOLEAN : 'BOOLEAN' ;
ENUMERATION : 'ENUMERATION OF' ;
FIXED : 'FIXED' ;
INTEGER : 'INTEGER' ;
LOGICAL : 'LOGICAL' ;
REAL : 'REAL' ;
STRING_FIXED : 'STRING(' Integer ') FIXED' ;
STRING : 'STRING' ;

fragment
Digit : '0'..'9' ; 

Integer : Digit+;

LP : '(' ;
RP : ')' ;

Float
	: Digit+ '.' Digit*
	| '.' Digit+
	;

EnumIdentifier
	: (CapitalLetter|'_'|Digit)+
	;

Identifier 
	: IdLetter (IdLetter | Digit)* 
	;

fragment
IdLetter 
	: CapitalLetter
	| LowercaseLetter
	| '_' 
	;

fragment
CapitalLetter
	: 'A'..'Z'
	;

fragment
LowercaseLetter
	: 'a'..'z'
	;

WS 
	: [ \t\n\r]+ -> skip ;

Newline 
	: ('\r'? '\n' | '\r')+ -> skip ;

Comments 
	: '(*' .*? '*)' -> skip ;


