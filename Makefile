all:
	@echo "Targets:"
	@echo ""
	@echo "  clean"
	@echo "  deploy"
	@echo "  freeze"
	@echo "  test"
	@echo "  test_frozen"
	@echo "  upload"
	@echo "  upload_reports"
	@echo ""

deploy: clean freeze upload

clean:
	rm -rf web/build

freeze:
	python web/__init__.py -f

upload:
	python web/upload.py --bucket "autobahn.ws" --directory "build"

upload_reports:
	python web/upload.py --bucket "autobahn.ws" --directory "reports" --prefix "testsuite/reports"
	python web/upload.py --bucket "autobahn.ws" --directory "reports_20131013" --prefix "testsuite/reports_20131013"
	python web/upload.py --bucket "autobahn.ws" --directory "reports_20140314" --prefix "testsuite/reports_20140314"

test:
	python web/__init__.py -d --widgeturl "http://127.0.0.1:8090/widget" -p 8030

test_socketserver:
	python web/__init__.py -d -s

test_frozen:
	python web/__init__.py -f -d
