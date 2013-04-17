###############################################################################
##
##  Copyright 2011-2013 Tavendo GmbH
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

from optparse import OptionParser

from flask import Flask, Request, request, session, g, redirect, url_for, \
     abort, render_template, flash


app = Flask(__name__)
app.secret_key = str(uuid.uuid4())


@app.before_request
def before_request():
   session["debug"] = app.debug

@app.after_request
def after_request(response):
   return response


################################################################################
## Home
##

@app.route('/')
def page_home():
   session['subsite'] = ''
   session['subsitetab'] = 'overview'
   return render_template('page_t_home.html')


################################################################################
## AutobahnPython
##

@app.route('/python')
def page_python():
   session['subsite'] = 'python'
   session['subsitetab'] = 'overview'
   return render_template('python/page_tpnd_python.html')

@app.route('/python/getstarted')
def page_python_getstarted():
   session['subsite'] = 'python'
   session['subsitetab'] = 'getstarted'
   return render_template('python/page_tpnd_python_getstarted.html')

@app.route('/python/tutorials')
def page_python_tutorials():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpn_python_tutorials.html')

@app.route('/python/tutorials/echo')
def page_python_tutorials_echo():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpnd_python_tutorials_echo.html')

@app.route('/python/tutorials/tls')
def page_python_tutorials_tls():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/websocket/echo_tls')

@app.route('/python/tutorials/web')
def page_python_tutorials_web():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/websocket/echo_site')

@app.route('/python/tutorials/broadcast')
def page_python_tutorials_broadcast():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/websocket/broadcast')

@app.route('/python/tutorials/streaming')
def page_python_tutorials_streaming():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpnd_python_tutorials_streaming.html')

@app.route('/python/tutorials/producerconsumer')
def page_python_tutorials_producerconsumer():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpnd_python_tutorials_producerconsumer.html')

@app.route('/python/tutorials/rpc')
def page_python_tutorials_rpc():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpnd_python_tutorials_rpc.html')

@app.route('/python/tutorials/calculator')
def page_python_tutorials_calculator():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/rpc/calculator')

@app.route('/python/tutorials/keyvaluestore')
def page_python_tutorials_keyvaluestore():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/rpc/keyvalue')

@app.route('/python/tutorials/pubsub')
def page_python_tutorials_pubsub():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return render_template('python/page_tpnd_python_tutorials_pubsub.html')

@app.route('/python/tutorials/pubsubhandlers')
def page_python_tutorials_pubsubhandlers():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/pubsub/custom')

@app.route('/python/tutorials/sessionauth')
def page_python_tutorials_sessionauth():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/authentication')

@app.route('/python/tutorials/serial2ws')
def page_python_tutorials_serial2ws():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/serial2ws')

@app.route('/python/tutorials/dbusdesktopnotify')
def page_python_tutorials_dbusdesktopnotify():
   session['subsite'] = 'python'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnPython/tree/master/examples/wamp/dbus')

@app.route('/python/reference')
def page_python_reference():
   session['subsite'] = 'python'
   session['subsitetab'] = 'reference'
   return render_template('python/page_tpn_python_reference.html')

@app.route('/python/downloads')
def page_python_downloads():
   session['subsite'] = 'python'
   session['subsitetab'] = 'downloads'
   return render_template('python/page_tpn_python_downloads.html')

@app.route('/python/getintouch')
def page_python_getintouch():
   session['subsite'] = 'python'
   session['subsitetab'] = 'getintouch'
   return render_template('page_tpn_getintouch.html')


################################################################################
## AutobahnAndroid
##

@app.route('/android')
def page_android():
   session['subsite'] = 'android'
   session['subsitetab'] = 'overview'
   return render_template('android/page_tpnd_android.html')

@app.route('/android/getstarted')
def page_android_getstarted():
   session['subsite'] = 'android'
   session['subsitetab'] = 'getstarted'
   return render_template('android/page_tpnd_android_getstarted.html')

@app.route('/android/tutorials')
def page_android_tutorials():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return render_template('android/page_tpn_android_tutorials.html')

@app.route('/android/tutorials/echo')
def page_android_tutorials_echo():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnAndroid/tree/master/Demo/EchoClient')

@app.route('/android/tutorials/broadcast')
def page_android_tutorials_broadcast():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnAndroid/tree/master/Demo/BroadcastClient')

@app.route('/android/tutorials/testsuiteclient')
def page_android_tutorials_testsuiteclient():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnAndroid/tree/master/Demo/TestSuiteClient')

@app.route('/android/tutorials/rpc')
def page_android_tutorials_rpc():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnAndroid/tree/master/Demo/SimpleRpc')

@app.route('/android/tutorials/pubsub')
def page_android_tutorials_pubsub():
   session['subsite'] = 'android'
   session['subsitetab'] = 'tutorials'
   return redirect('https://github.com/tavendo/AutobahnAndroid/tree/master/Demo/SimplePubSub')

@app.route('/android/reference')
def page_android_reference():
   session['subsite'] = 'android'
   session['subsitetab'] = 'reference'
   return render_template('android/page_tpn_android_reference.html')


@app.route('/android/downloads')
def page_android_downloads():
   session['subsite'] = 'android'
   session['subsitetab'] = 'downloads'
   return render_template('android/page_tpn_android_downloads.html')

@app.route('/android/getintouch')
def page_android_getintouch():
   session['subsite'] = 'android'
   session['subsitetab'] = 'getintouch'
   return render_template('page_tpn_getintouch.html')


################################################################################
## AutobahnJS
##

@app.route('/js')
def page_js():
   session['subsite'] = 'js'
   session['subsitetab'] = 'overview'
   return render_template('js/page_tpnd_js.html')

@app.route('/js/getstarted')
def page_js_getstarted():
   session['subsite'] = 'js'
   session['subsitetab'] = 'getstarted'
   return render_template('js/page_tpnd_js_getstarted.html')

@app.route('/js/tutorials')
def page_js_tutorials():
   session['subsite'] = 'js'
   session['subsitetab'] = 'tutorials'
   return render_template('js/page_tpn_js_tutorials.html')

@app.route('/js/tutorials/pubsub')
def page_js_tutorials_pubsub():
   session['subsite'] = 'js'
   session['subsitetab'] = 'tutorials'
   return render_template('js/page_tpnd_js_tutorials_pubsub.html')

@app.route('/js/tutorials/rpc')
def page_js_tutorials_rpc():
   session['subsite'] = 'js'
   session['subsitetab'] = 'tutorials'
   return render_template('js/page_tpnd_js_tutorials_rpc.html')

@app.route('/js/reference')
def page_js_reference():
   session['subsite'] = 'js'
   session['subsitetab'] = 'reference'
   return render_template('js/page_tpsd_js_reference.html')

@app.route('/js/downloads')
def page_js_downloads():
   session['subsite'] = 'js'
   session['subsitetab'] = 'downloads'
   return render_template('js/page_tpn_js_downloads.html')

@app.route('/js/getintouch')
def page_js_getintouch():
   session['subsite'] = 'js'
   session['subsitetab'] = 'getintouch'
   return render_template('page_tpn_getintouch.html')


################################################################################
## AutobahnTestsuite
##

@app.route('/testsuite')
def page_testsuite():
   session['subsite'] = 'testsuite'
   session['subsitetab'] = 'overview'
   return render_template('testsuite/page_tp_testsuite.html')

@app.route('/testsuite/installation')
def page_testsuite_installation():
   session['subsite'] = 'testsuite'
   session['subsitetab'] = 'installation'
   return render_template('testsuite/page_tp_testsuite_installation.html')

@app.route('/testsuite/manual')
def page_testsuite_manual():
   session['subsite'] = 'testsuite'
   session['subsitetab'] = 'manual'
   return render_template('testsuite/page_tp_testsuite_manual.html')

@app.route('/testsuite/downloads')
def page_testsuite_downloads():
   session['subsite'] = 'testsuite'
   session['subsitetab'] = 'downloads'
   return render_template('testsuite/page_tpn_testsuite_downloads.html')

@app.route('/testsuite/getintouch')
def page_testsuite_getintouch():
   session['subsite'] = 'testsuite'
   session['subsitetab'] = 'getintouch'
   return render_template('page_tpn_getintouch.html')


if __name__ == "__main__":

   parser = OptionParser ()

   parser.add_option ("-d",
                      "--debug",
                      dest = "debug",
                      action = "store_true",
                      default = False,
                      help = "Enable debug mode for Flask")

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

   (options, args) = parser.parse_args ()

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
