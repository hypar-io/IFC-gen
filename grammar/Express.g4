grammar Express;

actualParams
	: '(' ('--' SimpleId)? parameter (',' ('--' SimpleId)? parameter)* ')' // IFC Named parameters. Ex: -- Axis1 IfcRepresentationItem() || IfcGeometricRepresentationItem() || IfcDirection([-1., 0.])
	;

aggregateExpr
	: expression
	;

aggregateLiteral
	: '[' element (',' element)* ']'
	;

aggregateType
	: AGGREGATE (':' typeLabel)? OF allTypeSel
	;

aliasDef
	: SimpleId
	;

aliasRef
	: SimpleId
	;

aliasStmt
	: ALIAS aliasDef FOR varRef ';' stmts END_ALIAS ';'
	;

allTypeSel
	: aggregateType
	| conformantType
	| simpleType
	| namedType
	| pseudoType
	;

arrayType
	: ARRAY boundSpec OF OPTIONAL? UNIQUE? collectionTypeSel
	;

assignmentStmt
	: varRef ':=' (expression|derivedPath|'[]') ';' // IFC Allow assignment of derived path value. Ex: V1  := IfcNormalise(Arg1)\IfcDirection.DirectionRatios;
													// IFC Allow assignment of empty array. Ex: Surfs := [];
	;

attrDef
	: SimpleId
	| Path // IFC: Paths were not supported here.
	;

attributes
	: explicitClause* deriveClause* inverseClause*
	;

attrRef
	: SimpleId
	| Path // IFC: Ex: U[2].DirectionRatios[1] := -U[2].DirectionRatios[1];
	;

bagType
	: BAG boundSpec? OF collectionTypeSel
	;

binaryType
	: BINARY ('(' width ')' FIXED?)?
	;

booleanType
	: BOOLEAN
	;

bound1
	: numberExpr
	;

bound2
	: numberExpr
	;

boundSpec
	: '[' bound1 ':' bound2 ']'
	;

caseAction
	: caseLabel (',' caseLabel)* ':' stmt
	;

caseBody
	: caseAction* otherAction?
	;

caseLabel	
	: expression
	;

caseStmt
	: CASE selector OF caseBody END_CASE ';'
	;

choice
	: ONEOF '(' supertypeExpr (',' supertypeExpr)* ')'
	;

collectionType
	: arrayType
	| bagType
	| listType
	| setType
	;

collectionTypeSel
	: collectionType
	| namedType
	| simpleType
	| genericType // IFC Generic types in collections. Ex: ARRAY [Low1:U1] OF ARRAY [Low2:U2] OF GENERIC : T
	;

compoundStmt
	: BEGIN stmts END ';'
	;

conformantArray
	: ARRAY OF OPTIONAL? UNIQUE? allTypeSel
	;

conformantBag
	: BAG OF allTypeSel
	;

conformantList
	: LIST OF UNIQUE? allTypeSel
	;

conformantSet
	: SET OF allTypeSel
	;

conformantType
	: conformantArray
	| conformantBag
	| conformantList
	| conformantSet
	;

constantDecl
	: CONSTANT constBody* END_CONSTANT ';'
	;

constantRef
	: SimpleId
	;

constBody
	: constDef ':' collectionTypeSel init ';'
	;

constDef
	: SimpleId
	;

constRef
	: constDef
	| stdConst
	;

declaration
	: entityDecl
	| functionDecl
	| procedureDecl
	| typeDecl
	;

deriveClause
	: DERIVE derivedAttr+
	;

deriveDef
	: attrDef ':' collectionTypeSel init ';'
	;

derivedAttr
	: deriveDef
	| derivedRedef
	;

derivedRedef
	: attrRef ':' collectionTypeSel init ';'
	;

// IFC Ex: IfcNormalise(IfcCrossProduct(D1,D2))\IfcVector.Orientation
// This is a path whose first fragment is an expression, and whose
// second fragment is a path to the property on the resulting object.
derivedPath
	: expression '\\' Path
	;

domainRule
	: labelDef ':' logicalExpr
	;

domainRules
	: WHERE (domainRule ';')+
	;

element
	: expression ':' repetition
	| StringLiteral // IFC: Ex: ['thing1','thing2']
	| RealLiteral // IFC: Ex: [0.0,1.0]
	| expression // IFC expressions in aggregate literals.
	| derivedPath // IFC derived paths in aggregate literals.
	;

embeddedRemark
	: '(*' (embeddedRemark|remarkStuff)* '*)'
	;

entityBody
	: attributes localRules
	;

entityDecl
	: entityHead entityBody END_ENTITY ';'
	;

entityDef
	: SimpleId
	;

entityHead
	: ENTITY entityDef subSuper ';'
	;

entityLiteral
	: entityRef '(' (expression (',' expression)*)? ')'
	;

entityRef
	: SimpleId
	;

enumDef
	: SimpleId
	;

enumRef
	: (typeRef '.')? enumDef
	;

enumType
	: ENUMERATION OF '(' enumValues ')'
	;

enumValues
	: enumDef (',' enumDef)*
	;

escapeStmt
	: ESCAPE ';'
	;

explDef
	: attrDef (',' attrDef)* ':' OPTIONAL? collectionTypeSel ';'
	;

explicitClause
	: explDef
	| explRedef
	;

explRedef
	: attrRef ':' OPTIONAL? collectionTypeSel ';'
	;

expression
	: simpleExpr (('<'|'>'|'<='|'>='|'<>'|'='|':<>:'|':=:'|IN|LIKE) simpleExpr)?
	;

factor
	: simpleFactor ('**' simpleFactor)?
	;

formalParam
	: paramDef (',' paramDef)* ':' returnTypeChoice //IFC parameter type can be collection. Ex: UnitElements : SET [1:?] OF IfcDerivedUnitElement
	;

formalParams	
	: '(' formalParam (';' formalParam)* ')'
	;

funcDef
	: SimpleId
	;

funcHead
	: FUNCTION funcDef formalParams* ':' returnTypeChoice ';' // IFC allow list, array, and set types.
	;

returnTypeChoice
	: allTypeSel
	| collectionType
	;

funcRef
	: (funcDef|stdFunc) actualParams
	;

functionDecl
	: funcHead prolog stmts END_FUNCTION ';'
	;

genericType
	: GENERIC (':' typeLabel)?
	;

ifStmt
	: IF expression THEN stmts (ELSE stmts)? END_IF ';'
	;

importEntity
	: entityRef (AS entityDef)?
	;

importItem
	: importRef (AS aliasDef)?
	;

importList
	: '(' importItem (',' importItem)* ')'
	;

importRef
	: constantRef
	| entityRef
	| funcRef
	| procRef
	| typeRef
	;
incr
	: numberExpr
	;

incrementControl
	: varDef ':=' bound1 TO bound2 (BY incr)?
	;

init
	: ':=' (expression | '[]' | UNKNOWN)	// IFC Empty collection initialization. Ex: NamedUnitNames : SET OF IfcUnitEnum := [];
											// IFC Allow assignment to UNKNOWN. Ex: P : LOGICAL := UNKNOWN;

	;

integerType
	: INTEGER
	;

interfaceSpecification
	: referenceClause
	| useClause
	;

interval
	: '{' simpleExpr ('<'|'<=') simpleExpr ('<'|'<=') simpleExpr '}'
	;

inverseAttr
	: inverseDef
	| inverseRedef
	;

inverseClause
	: INVERSE inverseAttr*
	;

inverseDef
	: attrDef ':' inverseType FOR attrRef ';'
	;

inverseRedef
	: attrRef ';' inverseType FOR attrRef ';'
	;

inverseType
	: ((SET|BAG) boundSpec? OF)? entityRef
	;

labelDef
	: SimpleId
	;

listType
	: LIST boundSpec? OF UNIQUE? collectionTypeSel
	;

literal
	: BinaryLiteral
	| IntegerLiteral
	| LogicalLiteral
	| RealLiteral
	| StringLiteral
	| aggregateLiteral
	| entityLiteral
	;

localDecl
	: LOCAL localVar* END_LOCAL ';'
	;

localRules
	: uniqueRules? domainRules?
	;

localVar
	: varDef (',' varDef)* ':' (collectionTypeSel|conformantType) init? ';' // IFC Conformant types as local variables. Ex: NamedUnitNames : SET OF IfcUnitEnum := [];
	;

logicalExpr
	: expression
	;

logicalType
	: LOGICAL
	;

namedType
	: entityRef
	| typeRef
	;

nullStmt
	: ';'
	;

numberExpr
	: simpleExpr
	;

numberType
	: NUMBER
	;

otherAction
	: OTHERWISE ':' stmt
	;

paramDef
	: SimpleId
	;

parameter
	: expression
	;

paramRef
	: SimpleId
	;

precisionSpec
	: numberExpr
	;

procCallStmt
	: procRef ';'
	;

procDef
	: SimpleId
	;

procedureDecl
	: procHead prolog stmts END_PROCEDURE ';'
	;

procHead
	: PROCEDURE procDef varParams? ';'
	;

procRef
	: (procDef|stdProc) actualParams
	;

prolog
	: declaration* constantDecl? localDecl?
	;

pseudoType
	: aggregateType
	| genericType
	;

qualifier
	: (('.' attrRef)|subscript)*
	;

queryAssignment
	: varDef '<*' aggregateExpr
	;

queryExpr
	: QUERY '(' queryAssignment '|' queryScan ')'
	;

queryScan
	: logicalExpr
	;

realType
	: REAL ('(' precisionSpec ')')?
	;

referenceClause
	: REFERENCE FROM schemaRef importList? ';'
	;

referencedAttr
	: attrRef
	;

remark
	: embeddedRemark
	| tailRemark
	;

remarkStuff
	:.
	;

repeatControl
	: incrementControl? whileControl? untilControl?
	;

repeateStmt
	: REPEAT repeatControl ';' stmts END_REPEAT ';'
	;

repetition
	: numberExpr
	;

returnStmt
	: RETURN ('(' expression ')')? ';'
	| RETURN ('(' UNKNOWN ')')? ';'	// IFC Ex: RETURN (UNKNOWN);
	;

ruleDecl
	: ruleHead prolog stmts? domainRules END_RULE ';' // IFC Statements are optional in rules.
	;

ruleDef
	: SimpleId
	;

ruleHead
	: RULE ruleDef FOR ruleList ';'
	;

ruleList
	: '(' entityRef (',' entityRef)* ')'
	;

schemaBody
	: interfaceSpecification* constantDecl? (declaration|ruleDecl)*
	;

schemaDecl
	: SCHEMA SchemaDef ';' schemaBody END_SCHEMA ';'
	;

schemaRef
	: SimpleId
	;

selector
	: expression
	;

selectType
	: SELECT '(' selectValues ')'
	;

selectValues
	:  namedType (',' namedType)*
	;

setType
	: SET boundSpec OF collectionTypeSel
	;

simpleExpr
	: term (('+'|'-'|OR|XOR) term)*
	;

simpleFactor
	: (Path|literal|varRef|interval|queryExpr|'(' expression ')'|unaryOp simpleFactor) // IFC: Attribute values as factors. See Path.
	;

simpleType
	: binaryType
	| booleanType
	| integerType
	| logicalType
	| numberType
	| realType
	| stringType
	;

skipStmt
	: SKIP2 ';'
	;

stdConst	
	: CONST_E
	| PI
	| SELF
	| '?'
	;

stdFunc
	: ABS
	| ACOS
	| ASIN
	| ATAN
	| BLENGTH
	| COS
	| EXISTS
	| EXP
	| FORMAT
	| HIBOUND
	| HIINDEX
	| LENGTH
	| LOBOUND
	| LOINDEX
	| LOG
	| LOG2
	| LOG10
	| NVL
	| ODD
	| ROLESOF
	| SIN
	| SIZEOF
	| SQRT
	| TAN
	| TYPEOF
	| USEDIN
	| VALUE
	;

stdProc
	: INSERT
	| REMOVE
	;

stmt
	: aliasStmt
	| assignmentStmt
	| caseStmt
	| compoundStmt
	| escapeStmt
	| ifStmt
	| nullStmt
	| procCallStmt
	| repeateStmt
	| returnStmt
	| skipStmt
	;

stmts
	: stmt stmt*
	;

stringType
	: STRING ('(' width ')' FIXED?)?
	;

subSuper
	: supertypeDecl? subtypeDecl?
	;

subscript
	: ('[' numberExpr ']'|'[' numberExpr ':' numberExpr ']')
	;

subtypeDecl
	: SUBTYPE OF '(' entityRef (',' entityRef)* ')'
	;

supertypeDecl
	: (ABSTRACT SUPERTYPE | ABSTRACT? SUPERTYPE OF '(' supertypeExpr ')')
	;

supertypeExpr
	: supertypeFactor ((AND|ANDOR) supertypeFactor)*
	;

supertypeFactor
	: entityRef
	| choice
	| '(' supertypeExpr ')'
	;

tailRemark
	: '--' remarkStuff*
	;

term
	: factor (('*'|'/'|DIV|MOD|AND|'||') factor)*
	| TRUE	// IFC Allow TRUE and FALSE Ex: Result : BOOLEAN := TRUE;
	| FALSE
	| Path
	| arrayType
	;

typeBody
	: typeDef '=' typeSel ';' domainRules?
	;

typeDecl
	: TYPE typeBody END_TYPE ';'
	;

typeDef
	: SimpleId
	;

typeLabel
	: SimpleId
	;

typeRef
	: SimpleId
	;

typeSel
	: collectionType
	| namedType
	| simpleType
	| enumType
	| selectType
	;

unaryOp
	: '+'
	| '-'
	| NOT
	;

uniqueRule
	: labelDef ':' referencedAttr (',' referencedAttr)*
	;

uniqueRules
	: UNIQUE uniqueRule ';' (uniqueRule ';')*
	;

untilControl
	: UNTIL logicalExpr
	;

useClause
	: USE FROM schemaRef useList? ';'
	;

useList
	: '(' importEntity (',' importEntity)* ')'
	;

varDef
	: SimpleId
	;

varParam
	: VAR formalParam
	;

varParams
	: '(' varParam (';' varParam)* ')'
	;

varRef
	: varDef qualifier
	| aliasRef qualifier
	| attrRef qualifier
	| constRef qualifier
	| entityRef
	| enumRef
	| funcRef qualifier
	| paramRef qualifier
	| procRef
	;

whileControl
	: WHILE logicalExpr
	;

width
	: numberExpr
	;

// Lexer

ABS : 'ABS' ;
ABSTRACT : 'ABSTRACT' ;
ACOS : 'ACOS' ;
AGGREGATE : 'AGGREGATE' ;
ALIAS : 'ALIAS' ;
AND : 'AND' ;
ANDOR : 'ANDOR' ;
ARRAY : 'ARRAY' ;
AS : 'AS' ;
ASIN : 'ASIN' ;
ATAN : 'ATAN' ;
BAG : 'BAG' ;
BEGIN : 'BEGIN' ;
BINARY : 'BINARY' ;
BLENGTH : 'BLENGTH' ;
BOOLEAN : 'BOOLEAN' ;
BY : 'BY' ;
CASE : 'CASE' ;
CONSTANT : 'CONSTANT' ;
CONST_E : 'CONST_E' ;
COS : 'COS' ;
DERIVE : 'DERIVE' ;
DIV : 'DIV' ;
ELSE : 'ELSE' ;
END : 'END' ;
END_ALIAS : 'END_ALIAS' ;
END_CASE : 'END_CASE' ;
END_CONSTANT : 'END_CONSTANT' ;
END_ENTITY : 'END_ENTITY' ;
END_FUNCTION : 'END_FUNCTION' ;
END_IF : 'END_IF' ;
END_LOCAL : 'END_LOCAL' ;
END_PROCEDURE : 'END_PROCEDURE' ;
END_RULE : 'END_RULE' ;
END_REPEAT : 'END_REPEAT' ;
END_SCHEMA : 'END_SCHEMA' ;
END_TYPE : 'END_TYPE';
ENTITY : 'ENTITY' ;
ENUMERATION : 'ENUMERATION' ;
ESCAPE : 'ESCAPE' ;
EXISTS : 'EXISTS' ;
EXP : 'EXP' ;
FALSE : 'FALSE';
FIXED : 'FIXED';
FOR : 'FOR' ;
FORMAT : 'FORMAT' ;
FROM : 'FROM' ;
FUNCTION : 'FUNCTION' ;
GENERIC 
	: 'GENERIC' 
	| 'Generic' 
	;
HIBOUND : 'HIBOUND' ;
HIINDEX : 'HIINDEX' ;
IF : 'IF' ;
IN : 'IN' ;
INSERT : 'INSERT' ;
INVERSE : 'INVERSE' ;
INTEGER : 'INTEGER' ;
LENGTH : 'LENGTH' ;
LIKE : 'LIKE' ;
LIST : 'LIST' ;
LOCAL : 'LOCAL' ;
LOGICAL : 'LOGICAL' ;
LOBOUND : 'LOBOUND' ;
LOINDEX : 'LOINDEX' ;
LOG : 'LOG' ;
LOG2 : 'LOG2' ;
LOG10 : 'LOG10' ;
MOD : 'MOD' ;
NOT : 'NOT' ;
NUMBER : 'NUMBER' ;
NVL : 'NVL' ;
ODD : 'ODD' ;
OF : 'OF' | 'Of' ; // IFC Inconsistent capitalization. Ex: (UnitElements : SET [1:?] Of IfcDerivedUnitElement)
ONEOF : 'ONEOF' ;
OPTIONAL : 'OPTIONAL' ;
OR : 'OR' ;
OTHERWISE : 'OTHERWISE' ;
PI : 'PI' ;
PROCEDURE : 'PROCEDURE' ;
QUERY : 'QUERY' ;
REAL : 'REAL' ;
REFERENCE : 'REFERENCE' ;
REMOVE : 'REMOVE' ;
REPEAT : 'REPEAT' ;
RETURN : 'RETURN' ;
ROLESOF : 'ROLESOF' ;
RULE : 'RULE' ;
SCHEMA : 'SCHEMA' ;
SELECT : 'SELECT' ;
SELF : 'SELF' ;
SET : 'SET' ;
SIN : 'SIN' ;
SIZEOF : 'SIZEOF' ;
SKIP2 : 'SKIP' ;
SQRT : 'SQRT' ;
STRING : 'STRING' ;
SUBTYPE : 'SUBTYPE' ;
SUPERTYPE : 'SUPERTYPE' ;
TAN : 'TAN' ;
THEN : 'THEN' ;
TO : 'TO' ;
TRUE : 'TRUE' ;
TYPE : 'TYPE' ;
TYPEOF : 'TYPEOF' ;
UNIQUE : 'UNIQUE' ;
UNKNOWN : 'UNKNOWN' ;
UNTIL : 'UNTIL' ;
USE : 'USE' ;
USEDIN : 'USEDIN' ;
VALUE : 'VALUE' ;
VAR : 'VAR' ;
WHERE : 'WHERE' ;
WHILE : 'WHILE' ;
XOR : 'XOR';

SchemaDef 
	: ('IFC4'|'IFC2X3')
	; 

SimpleId
	: Letter (Letter|Digit|'_')*
	;

fragment
PathFragment
	: SimpleId ('.' SimpleId | IndexExpr)*
	;

// IFC Added to support indexing operationg Ex: Knots[i-1]
fragment
IndexExpr
	: SimpleId '[' (SimpleId|IntegerLiteral) (('+'|'-') (SimpleId|IntegerLiteral))* ']'
	;

Path
	: SELF
	| SELF '\\' PathFragment // IFC: Ex: SELF\IfcEdgeLoop.EdgeList
	| PathFragment ('\\' PathFragment)* // IFC: Ex: ElpFbnds.Bound\IfcEdgeLoop.EdgeList
	;

IntegerLiteral
	: '-'? Digits
	;

BinaryLiteral
	: '%' ('0'|'1') ('0'|'1')*
	;

LogicalLiteral
	: FALSE
	| TRUE
	| UNKNOWN
	;

RealLiteral
	: '-'? Digits '.' Digits* (('e'|'E') ('+'|'-') Digits)? // IFC: Scientific 'E' was not supported.
	;

fragment
Digit : [0-9] ;

Digits
	: Digit Digit*
	;

Letter
	: [a-zA-Z]
	;

Character
	: Digit
	| Letter
	;

QuoteChar 
	: '\'';

fragment
SpaceChar 
	: ' ' 
	;

fragment
RogueChar 
	: [\u0177] 
	;

StringLiteral
	: QuoteChar .*? QuoteChar 
	;

NewlineChar 
	: [\r\n\u000c]+ -> skip ;

WS 
	: [ \t\r\n\u000c]+ -> skip ;

Comments 
	: '(*' .*? '*)' -> skip ;

// IFC: Skip rules
// Rules
//	: 'RULE ' SimpleId .*? 'END_RULE;' -> skip ;

// Functons
//	: 'FUNCTION' .*? 'END_FUNCTION;' -> skip;



