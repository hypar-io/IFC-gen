ANTLR=java -jar /usr/local/lib/antlr-4.7-complete.jar
CURR_DIR=$(shell pwd)
GRAMMAR_IFC=$(CURR_DIR)/Express.g4
GRAMMAR_STEP=$(CURR_DIR)/STEP.g4
SCHEMA=$(CURR_DIR)/IFC4.exp

generate:
	$(ANTLR) -Dlanguage=CSharp -package Express -o ./src/antlr $(GRAMMAR_IFC)
	$(ANTLR) -Dlanguage=CSharp -package STEP -o ./lang/csharp/src/antlr $(GRAMMAR_STEP)
	dotnet build ./src/IFC-gen.csproj

csharp: generate
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l csharp -o ./lang/csharp/src

proto: generate
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l proto -o ./lang/proto
	#protoc -I=./lang/proto IFC.g.proto --csharp_out=./lang/csharp/src --grpc_out=./lang/csharp/src --plugin=protoc-gen-grpc=${HOME}/.nuget/packages/grpc.tools/1.7.1/tools/macosx_x64/grpc_csharp_plugin

ts: generate	
	dotnet run -p ./src/IFC-gen.csproj -e $(SCHEMA) -l ts -o ./lang/ts

clean:
	rm -rf ./lang/csharp/src/antlr
	rm -rf ./src/antlr
	rm -rf ./src/bin
	rm -rf ./src/obj