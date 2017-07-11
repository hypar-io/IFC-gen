grammar Express;

schema_declaration
	: SCHEMA Version ';' type_declaration* entity_declaration* function_declaration*  END_SCHEMA';' EOF;

type_declaration 
	: TYPE Identifier EQ (value_type|enumeration|select) FIXED? ';' type_declaration_body? END_TYPE ';' ;

value_type 
	: BOOLEAN
	| INTEGER
	| LOGICAL
	| REAL
	| STRING
	| STRING_SIZED
	| set_declaration
	| list_declaration
	| array_declaration
	| Identifier
	;

set_declaration
	: SET '[' Integer COLON (Integer|'?') ']' OF value_type (FOR Identifier)?
	;

list_declaration
	: LIST '[' Integer COLON (Integer|'?') ']' OF value_type
	;

array_declaration
	: ARRAY '[' Integer COLON (Integer|'?') ']' OF value_type
	;

enumeration
	: ENUMERATION OF LP enum_id_list RP 
	;

select
	: SELECT LP enum_id_list RP
	;

id_list
	: Identifier(','Identifier)*
	| IfcType(','IfcType)*
	;

enum_id_list
	: Identifier(','Identifier)*
	;

type_declaration_body 
	: rule_declaration 
	;

rule_declaration : 'WHERE' rule+ ;

rule 
	: Identifier COLON expr ';'
	;

expr
	: func_call_expr
	| bool_expr
	| LB bool_expr RB
	; 

func_call_expr
	: (EXISTS|SIZEOF|TYPEOF|QUERY|ABS|USEDIN|Identifier)'(' func_parameters ')'
	;

func_parameters
	: atom(','atom)*
	| formula_expr
	;

query_expr
	: Identifier INIT (Identifier|Path|PropertyAccessor|func_call_expr) PIPE bool_expr
	;

bool_expr
	: atom((LT|GT|LTE|GTE|EQ|NEQ|AND|OR)atom)*
	| (IfcType|Path|PropertyAccessor|Identifier|SELF) IN (func_call_expr|'['id_list']')
	;

formula_expr
	: atom((ADD|SUB|MUL|DIV)atom)+
	;

atom 
	: SELF
	| IfcType
	| Integer 
	| Float
	| Identifier
	| Path
	| PropertyAccessor
	| SetAccessor
	| '[' id_list ']'
	| query_expr
	| func_call_expr
	| '('NOT? expr ')'
	| NOT?'('expr')'
	;

self_property
	: SELF '.' Identifier
	;

entity_declaration
	: ENTITY Identifier ';'? entity_declaration_body END_ENTITY ';' 
	;

entity_declaration_body
	: attribute* supertype_declaration? subtype_declaration? inverse_declaration? derive_declaration? rule_declaration? unique_declaration? 
	;

supertype_declaration 
	:  ABSTRACT? SUPERTYPE OF LP (one_of | Identifier) RP ';'? attribute* 
	;

subtype_declaration 
	: SUBTYPE OF LP (one_of | Identifier) RP ';' attribute* 
	;

attribute
	: Identifier COLON OPTIONAL? value_type definition? ';'
	;

definition
	: DEF expr;

one_of 
	: ONEOF LP id_list RP 
	;

inverse_declaration
	: INVERSE attribute+ 
	;

derive_declaration
	: DERIVE attribute+
	;

unique_declaration
	: UNIQUE unique_statement+ 
	;

unique_statement
	: Identifier COLON .*? ';' 
	;

function_declaration 
	: 'FUNCTION' function_declaration_body 'END_FUNCTION' ;

function_declaration_body
	: .*? ;

// Lexer

//Base Types
BOOLEAN : 'BOOLEAN' ;
INTEGER : 'INTEGER' ;
LIST : 'LIST';
LOGICAL : 'LOGICAL' ;
REAL : 'REAL' ;
SET : 'SET' ;
STRING_SIZED : 'STRING(' Integer ')';
FIXED : 'FIXED';
STRING : 'STRING' ;
ARRAY : 'ARRAY' ;

// Keywords
ABSTRACT : 'ABSTRACT' ;
AND : 'AND' ;
DERIVE : 'DERIVE' ;
ENTITY : 'ENTITY' ;
END_ENTITY : 'END_ENTITY' ;
ENUMERATION : 'ENUMERATION' ;
FOR : 'FOR' ;
IN : 'IN' ;
INVERSE : 'INVERSE';
OF : 'OF';
ONEOF : 'ONEOF' ;
OPTIONAL : 'OPTIONAL' ;
OR : 'OR' ;
SCHEMA : 'SCHEMA' ;
END_SCHEMA : 'END_SCHEMA' ;
SELECT : 'SELECT' ;
SELF : 'SELF' ;
SUBTYPE : 'SUBTYPE' ;
SUPERTYPE : 'SUPERTYPE' ;
TYPE : 'TYPE' ;
END_TYPE : 'END_TYPE' ;
UNIQUE : 'UNIQUE' ;
//WHERE : 'WHERE' ;

// Functions
EXISTS : 'EXISTS' ;
SIZEOF : 'SIZEOF' ;
QUERY : 'QUERY' ;
TYPEOF : 'TYPEOF' ;
ABS : 'ABS' ;
USEDIN : 'USEDIN' ;

IfcType
	: '\'' Version ('.'Identifier)+ '\''
	;

Version 
	: 'IFC' Integer
	; 

fragment
Digit : '0'..'9' ; 

Integer : Digit+;

LP : '(' ;
RP : ')' ;
LB : '{' ;
RB : '}' ;
COLON : ':' ;
PIPE : '|' ;

// Operators
NOT : 'NOT';
EQ : '=' ;
GT : '>' ;
LT : '<' ;
GTE : '>=' ;
LTE : '<=' ;
NEQ  : '<>' ;
MUL : '*' ;
DIV : '/' ;
ADD : '+' ;
SUB : '-' ;
DEF : ':=' ;
INIT : '<*' ;

Float
	: Digit+ '.' Digit*
	| '.' Digit+
	;

SetAccessor
	: Identifier '[' (Integer|Identifier) ']'
	| SELF '[' (Integer|Identifier) ']'
	;

Path
	: (SELF'\\')? (Identifier|PropertyAccessor)('\\'(Identifier|PropertyAccessor))+
	;

PropertyAccessor
	:  (SetAccessor|Identifier)('.'(SetAccessor|Identifier))+
	;

Identifier 
	: IdLetter (IdLetter | Digit)*
	| '\'' (IdLetter|Digit) (IdLetter|Digit|' ')* '\''
	;

fragment
IdLetter 
	: CapitalLetter
	| LowercaseLetter
	| '_' 
	| '-'
	;

fragment
CapitalLetter
	: 'A'..'Z'
	;

fragment
LowercaseLetter
	: 'a'..'z'
	;

Rules
	: 'RULE ' Identifier .*? 'END_RULE;' -> skip ;

Functions
	: 'FUNCTION ' Identifier .*? 'END_FUNCTION;' -> skip ;

WS 
	: [ \t\r\n\u000c]+ -> skip ;

Comments 
	: '(*' .*? '*)' -> skip ;




