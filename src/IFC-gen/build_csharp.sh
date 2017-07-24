#!/bin/bash
antlr4 -Dlanguage=CSharp -package Express -o ./csharp/antlr Express.g4
dotnet build ./csharp/IFC-gen.csproj
dotnet run -p ./csharp/IFC-gen.csproj IFC4.exp ../IFC-dotnet
dotnet build ../../../IFC-dotnet/IFC-dotnet.csproj