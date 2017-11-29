ANTLR=java -jar /usr/local/lib/antlr-4.7-complete.jar
CURR_DIR=$(shell pwd)
GRAMMAR_IFC=$(CURR_DIR)/Express.g4
GRAMMAR_STEP=$(CURR_DIR)/STEP.g4
SCHEMA=$(CURR_DIR)/IFC4.exp

ifc-gen:
	dotnet build ./src/IFC-gen.csproj

generate:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)
	$(ANTLR) -Dlanguage=CSharp -package STEP -o ./lang/csharp/src/antlr $(GRAMMAR_STEP)
	
csharp: ifc-gen
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l csharp -o ./lang/csharp/src -t ./lang/csharp/tests
	dotnet build ./lang/csharp/IFC-dotnet.sln

csharp-tests: csharp
	cd ./lang/csharp/tests/ && dotnet xunit

proto: ifc-gen
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l proto -o ./lang/proto -t ./lang/proto

clean:
	rm -rf ./lang/csharp/src/antlr
	rm -rf ./src/antlr
	rm -rf ./src/bin
	rm -rf ./src/obj