all:
	@echo "Targets:"
	@echo ""
	@echo "  clean"
	@echo "  deploy"
	@echo "  freeze"
	@echo "  test"
	@echo "  test_frozen"
	@echo ""

deploy: clean freeze upload

clean:
	rm -rf website/autobahnws/build

freeze:
	python website/autobahnws/__init__.py -f

upload:
	python website/autobahnws/upload.py --bucket "autobahn.ws" --directory "build"

test:
	python website/autobahnws/__init__.py -d

test_socketserver:
	python website/autobahnws/__init__.py -d -s

test_frozen:
	python website/autobahnws/__init__.py -f -d
