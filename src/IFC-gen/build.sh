#!/bin/bash
ANTLR="java -jar /usr/local/lib/antlr-4.7-complete.jar"
LANG=$1

if [ -z "$1" ]
  then
    LANG="CSharp"
fi

echo "Parsing EXPRESS grammar..."
$ANTLR -Dlanguage=$LANG -package Express -o ./$LANG/antlr Express.g4

echo "Building for $LANG..."
if [ "$LANG" == "CSharp" ]
    then
        echo "Building IFC-gen..."
        dotnet build ./csharp/IFC-gen.csproj

        echo "Building IFC-dotnet..."
        dotnet run -p ./csharp/IFC-gen.csproj IFC4.exp ../../../IFC-dotnet/src/IFC-dotnet
fi
