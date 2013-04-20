# Autobahn Website

[Website](http://autobahn.ws/) of the Autobahn project ([Flask-based](http://flask.pocoo.org/)).


## How to run

The Website is a Flask-based WSGI application which can be run directly from Python:

    cd website/autobahnws
    python __init__.py

There are a number of options

    $ python __init__.py --help
    Usage: __init__.py [options]
    
    Options:
      -h, --help            show this help message and exit
      -d, --debug           Enable debug mode for Flask
      -s, --socketserver    Run Flask web app under standard Python SocketServer,
                            instead of under Twisted
      -p PORT, --port=PORT  Listening port for Web server (i.e. 8090).
    
For production use, the Website can also be run under Apache via mod_wsgi.

## Content

All web pages reside under

    website/autobahnws/templates

and all static assets can be found here

    website/autobahnws/static

The contents under the directory

    website/autobahnws/static/reference

is library documentation that needs to be generated from the respective Autobahn project. See the `README.md` in above directory.

## License

The content of this Web site is licensed under the [Creative Commons CC-BY-SA](http://creativecommons.org/licenses/by-sa/3.0/).

The code for the Web site itself and any example or tutorial code is licensed under the [Apache 2.0 license](http://www.apache.org/licenses/LICENSE-2.0.html).