grammar Express;

schemaDeclaration
	: SCHEMA Version ';' typeDeclaration* entityDeclaration* functionDeclaration*  END_SCHEMA';' EOF;

typeDeclaration 
	: TYPE typeName EQ (valueType|enumeration|select) FIXED? ';' typeDeclarationBody? END_TYPE ';' ;

typeName	
	: Identifier
	;

valueType 
	: BOOLEAN
	| INTEGER
	| LOGICAL
	| REAL
	| STRING
	| STRING_SIZED
	| setDeclaration
	| listDeclaration
	| arrayDeclaration
	| Identifier
	;

setDeclaration
	: SET '[' Integer COLON (setSize|'?') ']' OF valueType (FOR Identifier)?
	;

setSize
	: Integer
	;

listDeclaration
	: LIST '[' Integer COLON (listSize|'?') ']' OF valueType
	;

listSize
	: Integer
	;

arrayDeclaration
	: ARRAY '[' Integer COLON (arraySize|'?') ']' OF valueType
	;

arraySize
	: Integer
	;

enumeration
	: ENUMERATION OF LP enumIdList RP 
	;

enumIdList
	: idList
	;

select
	: SELECT LP selectIdList RP
	;

selectIdList
	: idList
	;

idList
	: Identifier(','Identifier)*
	| IfcType(','IfcType)*
	;

typeDeclarationBody 
	: ruleDeclaration 
	;

ruleDeclaration : 'WHERE' rule+ ;

rule 
	: Identifier COLON expr ';'
	;

expr
	: funcCallExpr
	| boolExpr
	| LB boolExpr RB
	; 

funcCallExpr
	: (EXISTS|SIZEOF|TYPEOF|QUERY|ABS|USEDIN|Identifier)'(' funcParameters ')'
	;

funcParameters
	: atom(','atom)*
	| formulaExpr
	;

queryExpr
	: Identifier INIT (Identifier|Path|PropertyAccessor|funcCallExpr) PIPE boolExpr
	;

boolExpr
	: atom((LT|GT|LTE|GTE|EQ|NEQ|AND|OR)atom)*
	| (IfcType|Path|PropertyAccessor|Identifier|SELF) IN (funcCallExpr|'['idList']')
	;

formulaExpr
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
	| '[' idList ']'
	| queryExpr
	| funcCallExpr
	| '('NOT? expr ')'
	| NOT?'('expr')'
	;

selfProperty
	: SELF '.' Identifier
	;

entityDeclaration
	: ENTITY entityName ';'? entityDeclarationBody END_ENTITY ';' 
	;

entityName
	: Identifier
	;

entityDeclarationBody
	: attribute* supertypeDeclaration? subtypeDeclaration? inverseDeclaration? deriveDeclaration? ruleDeclaration? uniqueDeclaration? 
	;

supertypeDeclaration 
	:  ABSTRACT? SUPERTYPE OF LP (oneOf | supertypeName) RP ';'? attribute* 
	;

supertypeName
	: Identifier
	;

subtypeDeclaration 
	: SUBTYPE OF LP (oneOf | subtypeName) RP ';' attribute* 
	;

subtypeName
	: Identifier
	;

attribute
	: attributeName COLON OPTIONAL? valueType definition? ';'
	;

attributeName
	: Identifier
	;

definition
	: DEF expr;

oneOf 
	: ONEOF LP idList RP 
	;

inverseDeclaration
	: INVERSE attribute+ 
	;

deriveDeclaration
	: DERIVE attribute+
	;

uniqueDeclaration
	: UNIQUE uniqueStatement+ 
	;

uniqueStatement
	: Identifier COLON .*? ';' 
	;

functionDeclaration 
	: 'FUNCTION' functionDeclarationBody 'END_FUNCTION' ;

functionDeclarationBody
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




