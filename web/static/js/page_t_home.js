var when = autobahn.when;
var codeRequests = [];
var vm = new ViewModel();

function ViewModel() {

   var self = this;

   self.demos = [

      { category: "pubsub", title: "PubSub" , examples:
         [
            { example: "basic", title: "Basic", gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/pubsub/basic",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/basic/frontend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/basic/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/basic/backend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/basic/backend.py" }
               ]
            },
            { example: "complex", title: "Complex", gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/pubsub/complex",
               frontend: [
                  // { language: "javascript", url: "/static/files/examples/pubsub/complex/frontend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/complex/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/complex/backend.js" },
                  // { language: "python", url: "/static/files/examples/pubsub/complex/backend.py" }
               ]
            },
            { example: "options", title: "Options", gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/pubsub/options",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/options/frontend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/options/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/options/backend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/options/backend.py" }
               ]
            },
            { example: "unsubscribe", title: "Unsubscribe", gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/pubsub/unsubscribe",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/unsubscribe/frontend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/unsubscribe/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/pubsub/unsubscribe/backend.js" },
                  { language: "python", url: "/static/files/examples/pubsub/unsubscribe/backend.py" }
               ]
            }
         ]
      },

      { category: "rpc", title: "RPC ", examples:
         [
            { example: "timeservice", title: "Time Service", gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/timeservice",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/timeservice/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/timeservice/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/timeservice/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/timeservice/backend.py" }
               ]
            },
            { example: "slowsquare", title: "Slow Square",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/slowsquare",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/slowsquare/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/slowsquare/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/slowsquare/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/slowsquare/backend.py" }
               ]
            },
            { example: "arguments", title: "Arguments",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/arguments",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/arguments/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/arguments/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/arguments/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/arguments/backend.py" }
               ]
            },
            { example: "complex", title: "Complex Result",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/complex",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/complex/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/complex/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/complex/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/complex/backend.py" }
               ]
            },
            { example: "errors", title: "Errors",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/errors",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/errors/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/errors/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/errors/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/errors/backend.py" }
               ]
            },
            { example: "progress", title: "Progressive Results",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/progress",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/progress/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/progress/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/progress/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/progress/backend.py" }
               ]
            },
            { example: "options", title: "Options",  gitHubUrl: "https://github.com/tavendo/AutobahnPython/tree/master/examples/twisted/wamp/basic/rpc/options",
               frontend: [
                  { language: "javascript", url: "/static/files/examples/rpc/options/frontend.js" },
                  { language: "python", url: "/static/files/examples/rpc/options/frontend.py" }
               ],
               backend: [
                  { language: "javascript", url: "/static/files/examples/rpc/options/backend.js" },
                  { language: "python", url: "/static/files/examples/rpc/options/backend.py" }
               ]
            }
         ]
      }
   ];
   self.defaultExample = { category: "pubsub", example: "basic", frontendLanguage: "javascript", backendLanguage: "python" };


   self.languageToTitle = { javascript: "Javascript", python: "Python" };
   self.languageToBrush = { javascript: "js", python: "python" }; // for the SyntaxHighlighter brushes

   // create the array for the switchBar
   self.switches = [];
   self.demos.forEach ( function ( el, i, arr ) {

      self.switches[i] = {};
      var curr = self.switches[i];
      curr.title = el.title;
      curr.category = el.category;
      curr.examples = [];

      el.examples.forEach ( function ( ex, p, r ) {

         curr.examples[p] = {};
         curr.examples[p].title = ex.title;
         curr.examples[p].example = ex.example;
      })

      console.log(curr, self.switches);
   });

   // create the examples object
   // structure is:
   // self.examples = {
   //    category: {
   //       example: {
   //          frontend: {
   //             language: { url: "..." }
   //          },
   //          backend: {
   //             language: { url: "..." }
   //          },
   //          link: "... url ..."
   //       }
   //    }
   // };
   self.examples = {};
   self.codeUrls = [];
   // loop over the categories
   self.demos.forEach(function(cat) {
      var category = self.examples[cat.category] = {};
      // loop over the examples
      cat.examples.forEach(function(ex) {
         var examples = category[ex.example] = {
            frontend: {},
            backend: {},
            link: ex.gitHubUrl
         };
         // loop over the frontend languages
         ex.frontend.forEach(function(lang) {
            examples.frontend[lang.language] = {
               url: lang.url
            };
            self.codeUrls.push({ category: cat.category, example: ex.example, component: "frontend", language: lang.language, url: lang.url });
         })
         // loop over the backend languages
         ex.backend.forEach(function(lang) {
            examples.backend[lang.language] = {
               url: lang.url
            };
            self.codeUrls.push({ category: cat.category, example: ex.example, component: "backend", language: lang.language, url: lang.url });
         })
      })
   })

   self.fillLanguageBars = function(cat, ex) {
      console.log("fillLanguageBars", cat, ex, self.examples[cat]);
      var example = self.examples[cat][ex],
          frontend = example.frontend,
          backend = example.backend;
      // fill the frontendLanguages observable array
      self.currentExample.frontendLanguages([]);
      for(fl in frontend) {
         console.log("fl", fl);
         self.currentExample.frontendLanguages.push(fl);
      }
      // fill the backendLanguages observable array
      self.currentExample.backendLanguages([]);
      for(bl in backend) {
         self.currentExample.backendLanguages.push(bl);
      }
   }


   // observables containing the what should currently be displayed
   var de = self.defaultExample;
   self.currentExample = {
         category: ko.observable(de.category),
         example: ko.observable(de.example),
         frontendLanguage: ko.observable(de.frontendLanguage),
         backendLanguage: ko.observable(de.backendLanguage),
         frontendLanguages: ko.observableArray(["javascript"]),
         backendLanguages: ko.observableArray(["python"]),
         link: ko.observable(self.examples[de.category][de.example].link)
      };
   self.singleBoxComponent = ko.observable("frontend");
   // subscriptions to trigger changing displayed code on example / language change
   self.currentExample.frontendLanguage.subscribe(function(newLang) {
      console.log("new frontendLanguage selected");
      self.changeLanguage("frontend", newLang);
   });
   self.currentExample.backendLanguage.subscribe(function(newLang) {
      console.log("new backendLanguage selected");
      self.changeLanguage("backend", newLang);
   });
   self.currentExample.example.subscribe(function(newEx) {
      console.log("new example selected");
      self.changeExample(newEx);
   });

   self.noCodeAvailable = "In this example, there is no code for the chosen language. Please select another language."
   self.checkNoCodeAvailable = function (component) {
      // var se = self.examples,
      //     ce = self.currentExample;
      // ce[component + "Languages"].forEach(function(lang, i, arr) {
      //    if(!se[ce.category()][ce.example()][component][lang]) {
      //       //  remove this button
      //       arr.splice(i, 1);
      //    }
      // })

   };

   self.changeExample = function(newEx) {
      var curEx = self.currentExample,
          exs = self.examples;

      // check whether the currently selected languages are available for the new Example
      if(exs[curEx.category()][newEx].frontend[curEx.frontendLanguage()]) {
         var frontendCode = exs[curEx.category()][newEx].frontend[curEx.frontendLanguage()].code;
         self.replaceCode ( "frontend", curEx.frontendLanguage(), frontendCode );
         self.fillLanguageBars(curEx.category(), newEx);
      } else {
         console.log("language not available for this example");
         // fill language Bar + add currently selected, non-available language
         // call replaceCode with current component, language + replacement text
         self.replaceCode ( "frontend", curEx.frontendLanguage(), self.noCodeAvailable );
         self.fillLanguageBars(curEx.category(), newEx);
         // below not working - but works for the backend!!! - CONTINUE HERE!!!!
         self.currentExample.frontendLanguages.push(curEx.frontendLanguage());
      }

      if(exs[curEx.category()][newEx].backend[curEx.backendLanguage()]) {
         var backendCode = exs[curEx.category()][newEx].backend[curEx.backendLanguage()].code;
         self.replaceCode ( "backend", curEx.backendLanguage(), backendCode );
         self.fillLanguageBars(curEx.category(), newEx);
      } else {
         console.log("language not available for this example");
         self.replaceCode ( "backend", curEx.frontendLanguage(), self.noCodeAvailable );
         self.fillLanguageBars(curEx.category(), newEx);
         self.currentExample.backendLanguages.push(curEx.backendLanguage());
      }

      self.currentExample.link(exs[curEx.category()][newEx].link);

      // rewrite the languagesBar

   };

   self.changeLanguage = function (component, newLang) {
      console.log("changeLanguage", component, newLang);
      var curEx = self.currentExample,
          exs = self.examples,
          code = exs[curEx.category()][curEx.example()][component][newLang].code;
      self.replaceCode ( component, newLang, code );
   };

   self.replaceCode = function ( component, language, code ) {

      // console.log("replaceCode", component, language, code );
      // construct a pre element containing the code, with the correct brush
      var pre = document.createElement("pre");
      pre.setAttribute("class", "brush: " + self.languageToBrush[language]);
      pre.innerHTML = code;

      // clone element and attach to both syntaxContainers
      // self.syntaxContainer[component].forEach(function(cont) {  // nope, this is a node list which doesn't have this method!
      var syntaxContainer = self.syntaxContainer[component];
      for(var i = 0; i < syntaxContainer.length; i++) {
         var cont = syntaxContainer[i];
         codeNode = pre.cloneNode(true);
         cont.innerHTML = "";
         cont.appendChild(codeNode);
         SyntaxHighlighter.highlight(codeNode);
      };

   };

   self.codeRequests = [];
   self.startCodeDownload = function() {
      self.codeUrls.forEach(function(el) {
         var url = el.url,
             id = {
               category: el.category,
               example: el.example,
               component: el.component,
               language: el.language
             },
             req = getCode(url, id)
         self.codeRequests.push(req);
      });

      when.all(self.codeRequests).then(self.storeCode, function() { console.log("error", arguments);});
   }

   self.storeCode = function(arr) {
      // console.log("code received", arr);
      arr.forEach(function(el) {
         var id = el[0],
             rawCode = el[1],
             code = rawCode.replace("<", "&lt;").replace(">", "&gt");
         self.examples[id.category][id.example][id.component][id.language].code = code;
      })
   }

   // set up the initial display of the default example:
   //    - initial example + language highlighting already done in the
   //    - request the default example code
   //    - put this into the boxes
   self.initialCodeRequests = [];
   var de = self.defaultExample;
   self.initialCodeRequests.push(getCode(self.examples[de.category][de.example].frontend[de.frontendLanguage].url, { language: de.frontendLanguage, component: "frontend" }));
   self.initialCodeRequests.push(getCode(self.examples[de.category][de.example].backend[de.backendLanguage].url, { language: de.backendLanguage, component: "backend" }));
   self.fillLanguageBars(de.category, de.example);


   self.syntaxContainer = {};
   self.syntaxContainer.frontend = document.getElementsByClassName("frontendSyntaxContainer");
   self.syntaxContainer.backend = document.getElementsByClassName("backendSyntaxContainer");

   self.fillInitialCode = function(arr) {

      // start the requests for all the code
      self.startCodeDownload();

      // for both frontend + backend code:
      arr.forEach(function(el, r) {
         // clean up the code to escape all angle brackets - closing and opening
         var component = el[0].component,
             language = el[0].language,
             rawCode = el[1],
             code = rawCode.replace("<", "&lt;").replace(">", "&gt");

         // construct a pre element containing the code, with the correct brush
         var pre = document.createElement("pre");
         pre.setAttribute("class", "brush: " + self.languageToBrush[language]);
         pre.innerHTML = code;

         // clone element and attach to both syntaxContainers
         // self.syntaxContainer[component].forEach(function(cont) {  // nope, this is a node list which doesn't have this method!
         var syntaxContainer = self.syntaxContainer[component];
         for(var i = 0; i < syntaxContainer.length; i++) {
            var cont = syntaxContainer[i];
            codeNode = pre.cloneNode(true);
            cont.appendChild(codeNode);
            SyntaxHighlighter.highlight(codeNode);
         };
      });

   }
   when.all(self.initialCodeRequests).then(self.fillInitialCode, function(err) { console.log("error on initial code request", err)});


}

ko.applyBindings(vm);


// XMLHttpRequests as promises

function getCode (url, id) {
   // console.log("received", id);
   var d = autobahn.when.defer();
   var req = new XMLHttpRequest();

   req.onreadystatechange = function (evt) {

      // console.log("onreadystatechange", evt, req.readyState);

      // console.log(req.readyState);
      // console.log(req.response);
      // console.log(req.responseText);
      // console.log(req.responseType);

      if (req.readyState === 4) {

         if (req.status === 200) {
            // console.log("resolved", id);
            d.resolve([id, req.response]);

         } if (req.status === 204) {
            d.resolve();

         } else {
            d.reject(req.status, req.statusText);
         }

      }
   }

   req.open("GET", url, true);

   req.send();

   return d.promise;

};
