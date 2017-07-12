#!/bin/bash
antlr4 -Dlanguage=CSharp -package Express -o ./generated ./Express.g4
dotnet build
dotnet run ../IFC4.exp