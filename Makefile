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

requirements:
	#pip install scons # fails on Windows, so install manually
	pip install taschenmesser
	pip install scour
	pip install boto
	pip install flask
	pip install jinja2-highlight
	pip install mistune
	pip install frozen-flask

deploy: clean freeze upload

clean:
	rm -rf web/build
	rm -rf web/build_uploaded
	scons -uc

img:
	scons img

freeze:
	python web/__init__.py -f

upload:
	# python web/upload.py --bucket 'autobahn.ws' --directory 'build'
	scons upload

upload_reports:
	python web/upload.py --bucket 'autobahn.ws' --directory 'reports' --prefix 'testsuite/reports'
	python web/upload.py --bucket 'autobahn.ws' --directory 'reports_20131013' --prefix 'testsuite/reports_20131013'
	python web/upload.py --bucket 'autobahn.ws' --directory 'reports_20140314' --prefix 'testsuite/reports_20140314'

test: img
	python web/__init__.py -d --widgeturl 'http://127.0.0.1:8090/widget' -p 8030

test_no_network: img
	python web/__init__.py -d --widgeturl 'http://127.0.0.1:8090/widget' -p 8030 --cstatic 'http://127.0.0.1:8888'

test_socketserver:
	python web/__init__.py -d -s

test_frozen:
	python web/__init__.py -f -d -p 8030
