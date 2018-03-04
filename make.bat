SET ANTLR=java -jar C:\Javalib\antlr-4.7.1-complete.jar
SET CURR_DIR=%cd%
SET GRAMMAR_IFC=%CURR_DIR%\Express.g4
SET GRAMMAR_STEP=%CURR_DIR%\STEP.g4
SET SCHEMA=%CURR_DIR%\IFC4.exp

::csharp:
    rmdir /s /q .\src\antlr
	%ANTLR% -Dlanguage=CSharp -package Express -o %CURR_DIR%\src\antlr %GRAMMAR_IFC%
	%ANTLR% -Dlanguage=CSharp -package STEP -o %CURR_DIR%\lang\csharp\src\antlr %GRAMMAR_STEP%
	dotnet build .\src\IFC-gen.csproj
	dotnet run -p .\src\IFC-gen.csproj -e %SCHEMA% -l csharp -o .\lang\csharp\src

::clean:
	rmdir /s /q .\lang\csharp\src\antlr
	rmdir /s /q .\src\bin
	rmdir /s /q .\src\obj