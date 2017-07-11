grammar Express;

schema_declaration
	: 'SCHEMA IFC' Integer ';' type_declaration* entity_declaration* function_declaration* 'END_SCHEMA;' EOF;

type_declaration 
	: 'TYPE' Identifier EQ (value_type|enumeration) ';' type_declaration_body? 'END_TYPE;' ;

value_type 
	: BOOLEAN
	| FIXED
	| INTEGER
	| LOGICAL
	| REAL
	| STRING
	| STRING_FIXED
	| Identifier
	;

enumeration
	: ENUMERATION OF LP enum_id_list RP 
	;

id_list
	: Identifier(','Identifier)*
	;

enum_id_list
	: Identifier(','Identifier)*
	;

type_declaration_body 
	: condition_declaration ;

condition_declaration : 'WHERE' NOT? condition+ ';' ;

condition 
	: Identifier COLON SELF operator Float
	| Identifier COLON LB Float operator SELF operator Float RB
	| Identifier COLON SELF IN string_array
	| EXISTS '('self_property')'
	;

set_declaration
	: SET '[' Integer COLON (Integer|'?') ']' OF Identifier FOR Identifier
	;

list_declaration
	: LIST '[' Integer COLON (Integer|'?') ']' OF Identifier
	;

self_property
	: SELF '.' Identifier
	;

string_array
	: '[' id_list ']' 
	;

operator
	: (LT|GT|LTE|LTE)
	;

entity_declaration
	: 'ENTITY' Identifier entity_declaration_body 'END_ENTITY;' 
	;

entity_declaration_body
	: supertype_declaration? subtype_declaration? inverse_declaration? condition_declaration? unique_declaration? 
	;

supertype_declaration 
	:  ABSTRACT? SUPERTYPE OF LP (one_of | Identifier) RP ';'? attribute* 
	;

subtype_declaration 
	: SUBTYPE OF LP (one_of | Identifier) RP ';' attribute* 
	;

attribute
	: Identifier COLON OPTIONAL? (Identifier|set_declaration|list_declaration) ';'
	;

one_of 
: ONEOF LP id_list RP 
	;

inverse_declaration
	: 'INVERSE' attribute+ 
	;

unique_declaration
	: 'UNIQUE' unique_statement+ 
	;

unique_statement
	: Identifier ':' .*? ';' ;

function_declaration 
	: 'FUNCTION' function_declaration_body 'END_FUNCTION' ;

function_declaration_body
	: .*? ;

// Lexer

// Keywords

ABSTRACT : 'ABSTRACT' ;
AND : 'AND' ;
BOOLEAN : 'BOOLEAN' ;
ENUMERATION : 'ENUMERATION' ;
EXISTS : 'EXISTS' ;
FIXED : 'FIXED' ;
FOR : 'FOR' ;
IN : 'IN' ;
INTEGER : 'INTEGER' ;
LIST : 'LIST';
LOGICAL : 'LOGICAL' ;
NOT : 'NOT';
OF : 'OF';
ONEOF : 'ONEOF' ;
OPTIONAL : 'OPTIONAL' ;
OR : 'OR' ;
REAL : 'REAL' ;
SELF : 'SELF' ;
SET : 'SET' ;
SIZEOF : 'SIZE' ;
STRING_FIXED : 'STRING(' Integer ') FIXED' ;
STRING : 'STRING' ;
SUBTYPE : 'SUBTYPE' ;
SUPERTYPE : 'SUPERTYPE' ;

fragment
Digit : '0'..'9' ; 

Integer : Digit+;

LP : '(' ;
RP : ')' ;
LB : '{' ;
RB : '}' ;
COLON : ':' ;

EQ : '=' ;
GT : '>' ;
LT : '<' ;
GTE : '>=' ;
LTE : '<=' ;
NEQ  : '<>' ;

Float
	: Digit+ '.' Digit*
	| '.' Digit+
	;

QualifiedIdentifier
	: Identifier('.'Identifier)+
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


