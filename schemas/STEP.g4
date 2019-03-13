grammar STEP;

author
	: AnyString
	;

authorisation
	: AnyString
	;

collection
	: '(' collectionValue (',' collectionValue)* ')'
	| '()'
	;

collectionValue
	: RealLiteral
	| IntegerLiteral
	| StringLiteral
	| AnyString
	| Id
	| constructor
	| Undefined
	;

constructor
	: TypeRef '(' parameter? (',' parameter)* ')'
	;

data
	: DATA ';' instance* ENDSEC ';'
	;

description
	: AnyString
	| collection
	;

file
	: ISO header data ISO_END
	;

fileDescription
	: FILE_DESCRIPTION '(' description ',' implementation ')' ';'
	;

fileName
	: FILE_NAME '(' name ',' timeStamp ',' (author|collection) ',' (organization|collection) ',' preprocessor_version ',' originating_system ',' authorisation ')' ';'
	;

filePath
	: '\'' Letter* '.' Letter* '\''
	;

fileSchema
	: FILE_SCHEMA '(' '(' AnyString ')' ')' ';'
	;

header
	: HEADER ';' fileDescription fileName fileSchema ENDSEC ';'
	;

implementation
	: AnyString
	;

instance
	: Id '=' constructor ';'
	;

name
	: AnyString
	| filePath
	;

originating_system
	: AnyString
	;

organization
	: AnyString
	;

parameter
	: constructor
	| collection
	| Undefined
	| StringLiteral
	| Derived
	| Enum
	| BoolLogical
	| RealLiteral
	| AnyString
	| Id
	| IntegerLiteral
	;

preprocessor_version
	: AnyString
	;

timeStamp
	: DateTime
	;

// Lexer

fragment
Digit
	: [0-9]
	;

fragment
Digits
	: Digit Digit*
	;

IntegerLiteral
	: '-'? Digits
	;

Letter
	: [a-zA-Z]
	;

CapitalLetter
	: [A-Z]
	;

DateTime
	: '\'' Digits '-' Digits '-' Digits 'T' Digits ':' Digits ':' Digits '\''
	;

Derived
	: '*'
	;

BoolLogical
	: '.' ('T'|'F'|'U') '.'
	;

Enum
	: '.' [A-Z]([A-Z]|[0-9]|'_')* '.'
	;

RealLiteral
	: '-'? Digits '.'? Digits* (('e'|'E') '-'? Digits)? // IFC: Scientific 'E' was not supported.
	;

DATA : 'DATA' ; 
ENDSEC : 'ENDSEC' ;
FILE_DESCRIPTION : 'FILE_DESCRIPTION' ;
FILE_NAME : 'FILE_NAME' ;
FILE_SCHEMA : 'FILE_SCHEMA' ;
HEADER : 'HEADER' ;
Id 
	: '#' Digits 
	;

ISO 
	: 'ISO' '-' Digits '-' Digits ';' 
	;

ISO_END 
	: 'END-ISO' '-' Digits '-' Digits ';' 
	;

StringLiteral
	: '"' Letter* '"'
	;

TypeRef
	: CapitalLetter (CapitalLetter|Digit)*
	;
	
Undefined 
	: '$' 
	;

AnyString
	: '\'' .*? '\''
	;

NewlineChar 
	: [\r\n\u000c]+ -> skip ;

WS 
	: [ \t\r\n\u000c]+ -> skip ;

Comments 
	: '/*' .*? '*/' -> skip ;