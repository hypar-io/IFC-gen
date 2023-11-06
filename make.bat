SET ANTLR=java -jar C:\Javalib\antlr-4.13.1-complete.jar
SET CURR_DIR=%cd%
SET GRAMMAR_IFC=%CURR_DIR%\grammar\Express.g4
SET GRAMMAR_STEP=%CURR_DIR%\grammar\STEP.g4
SET SCHEMA_VERSION=IFC
SET SCHEMA=%CURR_DIR%\schemas\%SCHEMA_VERSION%.exp

::csharp:
	%ANTLR% -Dlanguage=CSharp -package Express -o %CURR_DIR%\src\antlr %GRAMMAR_IFC%
	%ANTLR% -Dlanguage=CSharp -package STEP -o %CURR_DIR%\lang\csharp\src\antlr %GRAMMAR_STEP%
	dotnet build .\src\IFC-gen.csproj
	dotnet run -p .\src\IFC-gen.csproj -e %SCHEMA% -l csharp -o .\lang\csharp\src

::clean:
	rmdir /s /q .\lang\csharp\src\antlr
	rmdir /s /q .\src\antlr
	rmdir /s /q .\src\bin
	rmdir /s /q .\src\obj