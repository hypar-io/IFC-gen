#!/bin/bash
antlr4 -Dlanguage=CSharp -package Express ./ANTLR/Express.g4
dotnet build
dotnet run ~/Documents/IFC-dotnet/src/IFC-gen/IFC4.exp