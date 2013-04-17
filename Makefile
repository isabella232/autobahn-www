all:
	@echo "Targets:"
	@echo ""
	@echo "  clean"
	@echo "  deploy"
	@echo "  cleandeploy"
	@echo ""

clean:
	echo "Cleaning "autobahn.ws" website .."
	sudo rm -rf /usr/local/www/autobahn

deploy:
	echo "Deploying "autobahn.ws" website .."
	sudo cp -R website/* /usr/local/www/autobahn

cleandeploy: clean deploy
