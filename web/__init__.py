###############################################################################
##
##  Copyright (C) 2011-2014 Tavendo GmbH
##
##  Licensed under the Apache License, Version 2.0 (the "License");
##  you may not use this file except in compliance with the License.
##  You may obtain a copy of the License at
##
##      http://www.apache.org/licenses/LICENSE-2.0
##
##  Unless required by applicable law or agreed to in writing, software
##  distributed under the License is distributed on an "AS IS" BASIS,
##  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
##  See the License for the specific language governing permissions and
##  limitations under the License.
##
###############################################################################

import uuid
import os

import mimetypes

mimetypes.add_type('image/svg+xml', '.svg')
mimetypes.add_type('text/javascript', '.jgz')


from optparse import OptionParser

from flask import Flask, Request, request, session, g, url_for, \
     abort, render_template, flash

from flask.helpers import locked_cached_property
import jinja2_highlight


## jinja2-highlight

class MyFlask(Flask):
   jinja_options = dict(Flask.jinja_options)
   jinja_options.setdefault('extensions',[]).append('jinja2_highlight.HighlightExtension')
# If you'd like to set the class name of the div code blocks are rendered in
# Uncomment the below lines otherwise the option below can be used
#@locked_cached_property
#def jinja_env(self):
# jinja_env = self.create_jinja_environment()
# jinja_env.extend(jinja2_highlight_cssclass = 'codehilite')
# return jinja_env

app = Flask(__name__)
app.secret_key = str(uuid.uuid4())


## generate Pygments CSS file for style:
## pygmentize -S default -f html > pygments.css
##

import mistune
from pygments import highlight
from pygments.lexers import get_lexer_by_name
from pygments.formatters import HtmlFormatter
import json

import sys
import re
import copy
import subprocess


@app.before_request
def before_request():
   session["widgeturl"] = app.widgeturl # TRANSFER
   session["cstatic"] = app.cstatic

@app.route('/')
def page_home():
   session['subsite'] = ''
   session['subsitetab'] = 'overview'
   return render_template('page_t_home.html')


@app.route('/impressum/')
def page_impressum():
   session['subsite'] = ''
   session['subsitetab'] = 'impressum'
   return render_template('page_t_impressum.html')



if __name__ == "__main__":

   parser = OptionParser ()

   parser.add_option ("-d",
                      "--debug",
                      dest = "debug",
                      action = "store_true",
                      default = False,
                      help = "Enable debug mode for Flask")

   parser.add_option ("-f",
                      "--freeze",
                      dest = "freeze",
                      action = "store_true",
                      default = False,
                      help = "Freeze website using Frozen-Flask")

   parser.add_option ("-s",
                      "--socketserver",
                      dest = "socketserver",
                      action = "store_true",
                      default = False,
                      help = "Run Flask web app under standard Python SocketServer, instead of under Twisted")

   parser.add_option ("-p",
                      "--port",
                      dest = "port",
                      default = 8080,
                      help = "Listening port for Web server (i.e. 8090).")

   parser.add_option ("-w",
                      "--widgeturl",
                      dest = "widgeturl",
                      default = "https://demo.crossbar.io/clandeckwidget",
                      help = "WebClan widget base URL.")

   parser.add_option ("--cstatic",
                      dest = "cstatic",
                      default = "//tavendo-common-static.s3-eu-west-1.amazonaws.com",
                      help = "Tavendo shared static assets base URL")

   (options, args) = parser.parse_args ()

   app.cstatic = str(options.cstatic).strip()

   app.widgeturl = str(options.widgeturl).strip()
   if len(app.widgeturl) == 0:
      app.widgeturl = None

   if options.freeze:

      from flask_frozen import Freezer
      freezer = Freezer(app)
      freezer.freeze()

      if options.debug:
         import sys, os
         from twisted.python import log
         log.startLogging(sys.stdout)

         from twisted.internet import reactor
         from twisted.web.server import Site
         from twisted.web.static import File

         resource = File(os.path.join(os.path.dirname(__file__), 'build'))
         site = Site(resource)
         reactor.listenTCP(int(options.port), site)
         reactor.run()

   else:
      if options.socketserver:
         print "Running Flask under standard Python SocketServer"
         app.run(host = "0.0.0.0", port = int(options.port), debug = options.debug)
      else:
         print "Running Flask under Twisted server"
         import sys
         from twisted.python import log
         from twisted.internet import reactor
         from twisted.web.server import Site
         from twisted.web.wsgi import WSGIResource

         app.debug = options.debug
         if options.debug:
            log.startLogging(sys.stdout)
         resource = WSGIResource(reactor, reactor.getThreadPool(), app)
         site = Site(resource)
         reactor.listenTCP(int(options.port), site)
         reactor.run()
