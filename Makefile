ANTLR=java -jar /usr/local/lib/antlr-4.7-complete.jar
CURR_DIR=$(shell pwd)
GRAMMAR_IFC=$(CURR_DIR)/grammar/Express.g4
GRAMMAR_STEP=$(CURR_DIR)/schemas/STEP.g4
SCHEMA=$(CURR_DIR)/schemas/IFC.exp
DEBUG_OUT=$(CURR_DIR)/src/bin/Debug/netcoreapp2.0

default:
	dotnet build ./src/IFC-gen.csproj

generate:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)
	$(ANTLR) -Dlanguage=CSharp -package STEP -o ./lang/csharp/src/antlr $(GRAMMAR_STEP)

generate_debug:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)

csharp: default
	dotnet $(DEBUG_OUT)/IFC-gen.dll -e $(SCHEMA) -l csharp -o ./lang/csharp/src/IFC
	dotnet build ./lang/csharp/IFC-dotnet.sln

csharp-tests: csharp
	cd ./lang/csharp/test/ && dotnet test

proto: default
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l proto -o ./lang/proto

ts: default
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l ts -o ./lang/typescript/src
	
debug_parser: generate_debug
	dotnet build ./src/IFC-gen.csproj
	dotnet $(DEBUG_OUT)/IFC-gen.dll -e ./debug.exp -l csharp -o ./lang/csharp/src/IFC -p

clean:
	rm -rf ./lang/csharp/src/antlr
	rm -rf ./src/antlr
	rm -rf ./src/bin
	rm -rf ./src/obj
	rm -rf ./lang/csharp/src/IFC/*.g.cs
	rm -rf ./lang/typescript/src/*.g.ts