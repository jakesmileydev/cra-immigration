var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/contentful/dist/contentful.node.js
var require_contentful_node = __commonJS({
  "node_modules/contentful/dist/contentful.node.js"(exports2, module2) {
    module2.exports = function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module3 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module3.exports, module3, module3.exports, __webpack_require__);
        module3.l = true;
        return module3.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports3, name, getter) {
        if (!__webpack_require__.o(exports3, name)) {
          Object.defineProperty(exports3, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports3) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports3, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports3, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module3) {
        var getter = module3 && module3.__esModule ? function getDefault() {
          return module3["default"];
        } : function getModuleExports() {
          return module3;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "";
      return __webpack_require__(__webpack_require__.s = 0);
    }({
      "../node_modules/asynckit/index.js": function(module3, exports3, __webpack_require__) {
        module3.exports = {
          parallel: __webpack_require__("../node_modules/asynckit/parallel.js"),
          serial: __webpack_require__("../node_modules/asynckit/serial.js"),
          serialOrdered: __webpack_require__("../node_modules/asynckit/serialOrdered.js")
        };
      },
      "../node_modules/asynckit/lib/abort.js": function(module3, exports3) {
        module3.exports = abort;
        function abort(state) {
          Object.keys(state.jobs).forEach(clean.bind(state));
          state.jobs = {};
        }
        function clean(key) {
          if (typeof this.jobs[key] == "function") {
            this.jobs[key]();
          }
        }
      },
      "../node_modules/asynckit/lib/async.js": function(module3, exports3, __webpack_require__) {
        var defer = __webpack_require__("../node_modules/asynckit/lib/defer.js");
        module3.exports = async;
        function async(callback) {
          var isAsync = false;
          defer(function() {
            isAsync = true;
          });
          return function async_callback(err, result) {
            if (isAsync) {
              callback(err, result);
            } else {
              defer(function nextTick_callback() {
                callback(err, result);
              });
            }
          };
        }
      },
      "../node_modules/asynckit/lib/defer.js": function(module3, exports3) {
        module3.exports = defer;
        function defer(fn) {
          var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
          if (nextTick) {
            nextTick(fn);
          } else {
            setTimeout(fn, 0);
          }
        }
      },
      "../node_modules/asynckit/lib/iterate.js": function(module3, exports3, __webpack_require__) {
        var async = __webpack_require__("../node_modules/asynckit/lib/async.js"), abort = __webpack_require__("../node_modules/asynckit/lib/abort.js");
        module3.exports = iterate;
        function iterate(list, iterator, state, callback) {
          var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
          state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
            if (!(key in state.jobs)) {
              return;
            }
            delete state.jobs[key];
            if (error) {
              abort(state);
            } else {
              state.results[key] = output;
            }
            callback(error, state.results);
          });
        }
        function runJob(iterator, key, item, callback) {
          var aborter;
          if (iterator.length == 2) {
            aborter = iterator(item, async(callback));
          } else {
            aborter = iterator(item, key, async(callback));
          }
          return aborter;
        }
      },
      "../node_modules/asynckit/lib/state.js": function(module3, exports3) {
        module3.exports = state;
        function state(list, sortMethod) {
          var isNamedList = !Array.isArray(list), initState = {
            index: 0,
            keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
            jobs: {},
            results: isNamedList ? {} : [],
            size: isNamedList ? Object.keys(list).length : list.length
          };
          if (sortMethod) {
            initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
              return sortMethod(list[a], list[b]);
            });
          }
          return initState;
        }
      },
      "../node_modules/asynckit/lib/terminator.js": function(module3, exports3, __webpack_require__) {
        var abort = __webpack_require__("../node_modules/asynckit/lib/abort.js"), async = __webpack_require__("../node_modules/asynckit/lib/async.js");
        module3.exports = terminator;
        function terminator(callback) {
          if (!Object.keys(this.jobs).length) {
            return;
          }
          this.index = this.size;
          abort(this);
          async(callback)(null, this.results);
        }
      },
      "../node_modules/asynckit/parallel.js": function(module3, exports3, __webpack_require__) {
        var iterate = __webpack_require__("../node_modules/asynckit/lib/iterate.js"), initState = __webpack_require__("../node_modules/asynckit/lib/state.js"), terminator = __webpack_require__("../node_modules/asynckit/lib/terminator.js");
        module3.exports = parallel;
        function parallel(list, iterator, callback) {
          var state = initState(list);
          while (state.index < (state["keyedList"] || list).length) {
            iterate(list, iterator, state, function(error, result) {
              if (error) {
                callback(error, result);
                return;
              }
              if (Object.keys(state.jobs).length === 0) {
                callback(null, state.results);
                return;
              }
            });
            state.index++;
          }
          return terminator.bind(state, callback);
        }
      },
      "../node_modules/asynckit/serial.js": function(module3, exports3, __webpack_require__) {
        var serialOrdered = __webpack_require__("../node_modules/asynckit/serialOrdered.js");
        module3.exports = serial;
        function serial(list, iterator, callback) {
          return serialOrdered(list, iterator, null, callback);
        }
      },
      "../node_modules/asynckit/serialOrdered.js": function(module3, exports3, __webpack_require__) {
        var iterate = __webpack_require__("../node_modules/asynckit/lib/iterate.js"), initState = __webpack_require__("../node_modules/asynckit/lib/state.js"), terminator = __webpack_require__("../node_modules/asynckit/lib/terminator.js");
        module3.exports = serialOrdered;
        module3.exports.ascending = ascending;
        module3.exports.descending = descending;
        function serialOrdered(list, iterator, sortMethod, callback) {
          var state = initState(list, sortMethod);
          iterate(list, iterator, state, function iteratorHandler(error, result) {
            if (error) {
              callback(error, result);
              return;
            }
            state.index++;
            if (state.index < (state["keyedList"] || list).length) {
              iterate(list, iterator, state, iteratorHandler);
              return;
            }
            callback(null, state.results);
          });
          return terminator.bind(state, callback);
        }
        function ascending(a, b) {
          return a < b ? -1 : a > b ? 1 : 0;
        }
        function descending(a, b) {
          return -1 * ascending(a, b);
        }
      },
      "../node_modules/axios/index.js": function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__("../node_modules/axios/lib/axios.js");
      },
      "../node_modules/axios/lib/adapters/http.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("../node_modules/axios/lib/core/settle.js");
        var buildFullPath = __webpack_require__("../node_modules/axios/lib/core/buildFullPath.js");
        var buildURL = __webpack_require__("../node_modules/axios/lib/helpers/buildURL.js");
        var http = __webpack_require__("http");
        var https = __webpack_require__("https");
        var httpFollow = __webpack_require__("../node_modules/follow-redirects/index.js").http;
        var httpsFollow = __webpack_require__("../node_modules/follow-redirects/index.js").https;
        var url = __webpack_require__("url");
        var zlib = __webpack_require__("zlib");
        var VERSION = __webpack_require__("../node_modules/axios/lib/env/data.js").version;
        var transitionalDefaults = __webpack_require__("../node_modules/axios/lib/defaults/transitional.js");
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        var CanceledError = __webpack_require__("../node_modules/axios/lib/cancel/CanceledError.js");
        var isHttps = /https:?/;
        var supportedProtocols = ["http:", "https:", "file:"];
        function setProxy(options, proxy, location) {
          options.hostname = proxy.host;
          options.host = proxy.host;
          options.port = proxy.port;
          options.path = location;
          if (proxy.auth) {
            var base64 = Buffer.from(proxy.auth.username + ":" + proxy.auth.password, "utf8").toString("base64");
            options.headers["Proxy-Authorization"] = "Basic " + base64;
          }
          options.beforeRedirect = function beforeRedirect(redirection) {
            redirection.headers.host = redirection.host;
            setProxy(redirection, proxy, redirection.href);
          };
        }
        module3.exports = function httpAdapter(config) {
          return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
            var onCanceled;
            function done() {
              if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
              }
              if (config.signal) {
                config.signal.removeEventListener("abort", onCanceled);
              }
            }
            var resolve = function resolve2(value) {
              done();
              resolvePromise(value);
            };
            var rejected = false;
            var reject = function reject2(value) {
              done();
              rejected = true;
              rejectPromise(value);
            };
            var data = config.data;
            var headers = config.headers;
            var headerNames = {};
            Object.keys(headers).forEach(function storeLowerName(name) {
              headerNames[name.toLowerCase()] = name;
            });
            if ("user-agent" in headerNames) {
              if (!headers[headerNames["user-agent"]]) {
                delete headers[headerNames["user-agent"]];
              }
            } else {
              headers["User-Agent"] = "axios/" + VERSION;
            }
            if (utils.isFormData(data) && utils.isFunction(data.getHeaders)) {
              Object.assign(headers, data.getHeaders());
            } else if (data && !utils.isStream(data)) {
              if (Buffer.isBuffer(data)) {
              } else if (utils.isArrayBuffer(data)) {
                data = Buffer.from(new Uint8Array(data));
              } else if (utils.isString(data)) {
                data = Buffer.from(data, "utf-8");
              } else {
                return reject(new AxiosError("Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream", AxiosError.ERR_BAD_REQUEST, config));
              }
              if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
                return reject(new AxiosError("Request body larger than maxBodyLength limit", AxiosError.ERR_BAD_REQUEST, config));
              }
              if (!headerNames["content-length"]) {
                headers["Content-Length"] = data.length;
              }
            }
            var auth = void 0;
            if (config.auth) {
              var username = config.auth.username || "";
              var password = config.auth.password || "";
              auth = username + ":" + password;
            }
            var fullPath = buildFullPath(config.baseURL, config.url);
            var parsed = url.parse(fullPath);
            var protocol = parsed.protocol || supportedProtocols[0];
            if (supportedProtocols.indexOf(protocol) === -1) {
              return reject(new AxiosError("Unsupported protocol " + protocol, AxiosError.ERR_BAD_REQUEST, config));
            }
            if (!auth && parsed.auth) {
              var urlAuth = parsed.auth.split(":");
              var urlUsername = urlAuth[0] || "";
              var urlPassword = urlAuth[1] || "";
              auth = urlUsername + ":" + urlPassword;
            }
            if (auth && headerNames.authorization) {
              delete headers[headerNames.authorization];
            }
            var isHttpsRequest = isHttps.test(protocol);
            var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
            try {
              buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, "");
            } catch (err) {
              var customErr = new Error(err.message);
              customErr.config = config;
              customErr.url = config.url;
              customErr.exists = true;
              reject(customErr);
            }
            var options = {
              path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ""),
              method: config.method.toUpperCase(),
              headers,
              agent,
              agents: { http: config.httpAgent, https: config.httpsAgent },
              auth
            };
            if (config.socketPath) {
              options.socketPath = config.socketPath;
            } else {
              options.hostname = parsed.hostname;
              options.port = parsed.port;
            }
            var proxy = config.proxy;
            if (!proxy && proxy !== false) {
              var proxyEnv = protocol.slice(0, -1) + "_proxy";
              var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
              if (proxyUrl) {
                var parsedProxyUrl = url.parse(proxyUrl);
                var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
                var shouldProxy = true;
                if (noProxyEnv) {
                  var noProxy = noProxyEnv.split(",").map(function trim(s) {
                    return s.trim();
                  });
                  shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
                    if (!proxyElement) {
                      return false;
                    }
                    if (proxyElement === "*") {
                      return true;
                    }
                    if (proxyElement[0] === "." && parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
                      return true;
                    }
                    return parsed.hostname === proxyElement;
                  });
                }
                if (shouldProxy) {
                  proxy = {
                    host: parsedProxyUrl.hostname,
                    port: parsedProxyUrl.port,
                    protocol: parsedProxyUrl.protocol
                  };
                  if (parsedProxyUrl.auth) {
                    var proxyUrlAuth = parsedProxyUrl.auth.split(":");
                    proxy.auth = {
                      username: proxyUrlAuth[0],
                      password: proxyUrlAuth[1]
                    };
                  }
                }
              }
            }
            if (proxy) {
              options.headers.host = parsed.hostname + (parsed.port ? ":" + parsed.port : "");
              setProxy(options, proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
            }
            var transport;
            var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
            if (config.transport) {
              transport = config.transport;
            } else if (config.maxRedirects === 0) {
              transport = isHttpsProxy ? https : http;
            } else {
              if (config.maxRedirects) {
                options.maxRedirects = config.maxRedirects;
              }
              if (config.beforeRedirect) {
                options.beforeRedirect = config.beforeRedirect;
              }
              transport = isHttpsProxy ? httpsFollow : httpFollow;
            }
            if (config.maxBodyLength > -1) {
              options.maxBodyLength = config.maxBodyLength;
            }
            if (config.insecureHTTPParser) {
              options.insecureHTTPParser = config.insecureHTTPParser;
            }
            var req = transport.request(options, function handleResponse(res) {
              if (req.aborted)
                return;
              var stream = res;
              var lastRequest = res.req || req;
              if (res.statusCode !== 204 && lastRequest.method !== "HEAD" && config.decompress !== false) {
                switch (res.headers["content-encoding"]) {
                  case "gzip":
                  case "compress":
                  case "deflate":
                    stream = stream.pipe(zlib.createUnzip());
                    delete res.headers["content-encoding"];
                    break;
                }
              }
              var response = {
                status: res.statusCode,
                statusText: res.statusMessage,
                headers: res.headers,
                config,
                request: lastRequest
              };
              if (config.responseType === "stream") {
                response.data = stream;
                settle(resolve, reject, response);
              } else {
                var responseBuffer = [];
                var totalResponseBytes = 0;
                stream.on("data", function handleStreamData(chunk) {
                  responseBuffer.push(chunk);
                  totalResponseBytes += chunk.length;
                  if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
                    rejected = true;
                    stream.destroy();
                    reject(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
                  }
                });
                stream.on("aborted", function handlerStreamAborted() {
                  if (rejected) {
                    return;
                  }
                  stream.destroy();
                  reject(new AxiosError("maxContentLength size of " + config.maxContentLength + " exceeded", AxiosError.ERR_BAD_RESPONSE, config, lastRequest));
                });
                stream.on("error", function handleStreamError(err) {
                  if (req.aborted)
                    return;
                  reject(AxiosError.from(err, null, config, lastRequest));
                });
                stream.on("end", function handleStreamEnd() {
                  try {
                    var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
                    if (config.responseType !== "arraybuffer") {
                      responseData = responseData.toString(config.responseEncoding);
                      if (!config.responseEncoding || config.responseEncoding === "utf8") {
                        responseData = utils.stripBOM(responseData);
                      }
                    }
                    response.data = responseData;
                  } catch (err) {
                    reject(AxiosError.from(err, null, config, response.request, response));
                  }
                  settle(resolve, reject, response);
                });
              }
            });
            req.on("error", function handleRequestError(err) {
              reject(AxiosError.from(err, null, config, req));
            });
            req.on("socket", function handleRequestSocket(socket) {
              socket.setKeepAlive(true, 1e3 * 60);
            });
            if (config.timeout) {
              var timeout = parseInt(config.timeout, 10);
              if (isNaN(timeout)) {
                reject(new AxiosError("error trying to parse `config.timeout` to int", AxiosError.ERR_BAD_OPTION_VALUE, config, req));
                return;
              }
              req.setTimeout(timeout, function handleRequestTimeout() {
                req.abort();
                var transitional = config.transitional || transitionalDefaults;
                reject(new AxiosError("timeout of " + timeout + "ms exceeded", transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, req));
              });
            }
            if (config.cancelToken || config.signal) {
              onCanceled = function(cancel) {
                if (req.aborted)
                  return;
                req.abort();
                reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
              };
              config.cancelToken && config.cancelToken.subscribe(onCanceled);
              if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
              }
            }
            if (utils.isStream(data)) {
              data.on("error", function handleStreamError(err) {
                reject(AxiosError.from(err, config, null, req));
              }).pipe(req);
            } else {
              req.end(data);
            }
          });
        };
      },
      "../node_modules/axios/lib/adapters/xhr.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var settle = __webpack_require__("../node_modules/axios/lib/core/settle.js");
        var cookies = __webpack_require__("../node_modules/axios/lib/helpers/cookies.js");
        var buildURL = __webpack_require__("../node_modules/axios/lib/helpers/buildURL.js");
        var buildFullPath = __webpack_require__("../node_modules/axios/lib/core/buildFullPath.js");
        var parseHeaders = __webpack_require__("../node_modules/axios/lib/helpers/parseHeaders.js");
        var isURLSameOrigin = __webpack_require__("../node_modules/axios/lib/helpers/isURLSameOrigin.js");
        var transitionalDefaults = __webpack_require__("../node_modules/axios/lib/defaults/transitional.js");
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        var CanceledError = __webpack_require__("../node_modules/axios/lib/cancel/CanceledError.js");
        var parseProtocol = __webpack_require__("../node_modules/axios/lib/helpers/parseProtocol.js");
        module3.exports = function xhrAdapter(config) {
          return new Promise(function dispatchXhrRequest(resolve, reject) {
            var requestData = config.data;
            var requestHeaders = config.headers;
            var responseType = config.responseType;
            var onCanceled;
            function done() {
              if (config.cancelToken) {
                config.cancelToken.unsubscribe(onCanceled);
              }
              if (config.signal) {
                config.signal.removeEventListener("abort", onCanceled);
              }
            }
            if (utils.isFormData(requestData) && utils.isStandardBrowserEnv()) {
              delete requestHeaders["Content-Type"];
            }
            var request = new XMLHttpRequest();
            if (config.auth) {
              var username = config.auth.username || "";
              var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
              requestHeaders.Authorization = "Basic " + btoa(username + ":" + password);
            }
            var fullPath = buildFullPath(config.baseURL, config.url);
            request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
            request.timeout = config.timeout;
            function onloadend() {
              if (!request) {
                return;
              }
              var responseHeaders = "getAllResponseHeaders" in request ? parseHeaders(request.getAllResponseHeaders()) : null;
              var responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
              var response = {
                data: responseData,
                status: request.status,
                statusText: request.statusText,
                headers: responseHeaders,
                config,
                request
              };
              settle(function _resolve(value) {
                resolve(value);
                done();
              }, function _reject(err) {
                reject(err);
                done();
              }, response);
              request = null;
            }
            if ("onloadend" in request) {
              request.onloadend = onloadend;
            } else {
              request.onreadystatechange = function handleLoad() {
                if (!request || request.readyState !== 4) {
                  return;
                }
                if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
                  return;
                }
                setTimeout(onloadend);
              };
            }
            request.onabort = function handleAbort() {
              if (!request) {
                return;
              }
              reject(new AxiosError("Request aborted", AxiosError.ECONNABORTED, config, request));
              request = null;
            };
            request.onerror = function handleError() {
              reject(new AxiosError("Network Error", AxiosError.ERR_NETWORK, config, request, request));
              request = null;
            };
            request.ontimeout = function handleTimeout() {
              var timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
              var transitional = config.transitional || transitionalDefaults;
              if (config.timeoutErrorMessage) {
                timeoutErrorMessage = config.timeoutErrorMessage;
              }
              reject(new AxiosError(timeoutErrorMessage, transitional.clarifyTimeoutError ? AxiosError.ETIMEDOUT : AxiosError.ECONNABORTED, config, request));
              request = null;
            };
            if (utils.isStandardBrowserEnv()) {
              var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ? cookies.read(config.xsrfCookieName) : void 0;
              if (xsrfValue) {
                requestHeaders[config.xsrfHeaderName] = xsrfValue;
              }
            }
            if ("setRequestHeader" in request) {
              utils.forEach(requestHeaders, function setRequestHeader(val, key) {
                if (typeof requestData === "undefined" && key.toLowerCase() === "content-type") {
                  delete requestHeaders[key];
                } else {
                  request.setRequestHeader(key, val);
                }
              });
            }
            if (!utils.isUndefined(config.withCredentials)) {
              request.withCredentials = !!config.withCredentials;
            }
            if (responseType && responseType !== "json") {
              request.responseType = config.responseType;
            }
            if (typeof config.onDownloadProgress === "function") {
              request.addEventListener("progress", config.onDownloadProgress);
            }
            if (typeof config.onUploadProgress === "function" && request.upload) {
              request.upload.addEventListener("progress", config.onUploadProgress);
            }
            if (config.cancelToken || config.signal) {
              onCanceled = function(cancel) {
                if (!request) {
                  return;
                }
                reject(!cancel || cancel && cancel.type ? new CanceledError() : cancel);
                request.abort();
                request = null;
              };
              config.cancelToken && config.cancelToken.subscribe(onCanceled);
              if (config.signal) {
                config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
              }
            }
            if (!requestData) {
              requestData = null;
            }
            var protocol = parseProtocol(fullPath);
            if (protocol && ["http", "https", "file"].indexOf(protocol) === -1) {
              reject(new AxiosError("Unsupported protocol " + protocol + ":", AxiosError.ERR_BAD_REQUEST, config));
              return;
            }
            request.send(requestData);
          });
        };
      },
      "../node_modules/axios/lib/axios.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var bind = __webpack_require__("../node_modules/axios/lib/helpers/bind.js");
        var Axios = __webpack_require__("../node_modules/axios/lib/core/Axios.js");
        var mergeConfig = __webpack_require__("../node_modules/axios/lib/core/mergeConfig.js");
        var defaults = __webpack_require__("../node_modules/axios/lib/defaults/index.js");
        function createInstance(defaultConfig) {
          var context = new Axios(defaultConfig);
          var instance = bind(Axios.prototype.request, context);
          utils.extend(instance, Axios.prototype, context);
          utils.extend(instance, context);
          instance.create = function create(instanceConfig) {
            return createInstance(mergeConfig(defaultConfig, instanceConfig));
          };
          return instance;
        }
        var axios = createInstance(defaults);
        axios.Axios = Axios;
        axios.CanceledError = __webpack_require__("../node_modules/axios/lib/cancel/CanceledError.js");
        axios.CancelToken = __webpack_require__("../node_modules/axios/lib/cancel/CancelToken.js");
        axios.isCancel = __webpack_require__("../node_modules/axios/lib/cancel/isCancel.js");
        axios.VERSION = __webpack_require__("../node_modules/axios/lib/env/data.js").version;
        axios.toFormData = __webpack_require__("../node_modules/axios/lib/helpers/toFormData.js");
        axios.AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        axios.Cancel = axios.CanceledError;
        axios.all = function all(promises) {
          return Promise.all(promises);
        };
        axios.spread = __webpack_require__("../node_modules/axios/lib/helpers/spread.js");
        axios.isAxiosError = __webpack_require__("../node_modules/axios/lib/helpers/isAxiosError.js");
        module3.exports = axios;
        module3.exports.default = axios;
      },
      "../node_modules/axios/lib/cancel/CancelToken.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var CanceledError = __webpack_require__("../node_modules/axios/lib/cancel/CanceledError.js");
        function CancelToken(executor) {
          if (typeof executor !== "function") {
            throw new TypeError("executor must be a function.");
          }
          var resolvePromise;
          this.promise = new Promise(function promiseExecutor(resolve) {
            resolvePromise = resolve;
          });
          var token = this;
          this.promise.then(function(cancel) {
            if (!token._listeners)
              return;
            var i;
            var l = token._listeners.length;
            for (i = 0; i < l; i++) {
              token._listeners[i](cancel);
            }
            token._listeners = null;
          });
          this.promise.then = function(onfulfilled) {
            var _resolve;
            var promise = new Promise(function(resolve) {
              token.subscribe(resolve);
              _resolve = resolve;
            }).then(onfulfilled);
            promise.cancel = function reject() {
              token.unsubscribe(_resolve);
            };
            return promise;
          };
          executor(function cancel(message) {
            if (token.reason) {
              return;
            }
            token.reason = new CanceledError(message);
            resolvePromise(token.reason);
          });
        }
        CancelToken.prototype.throwIfRequested = function throwIfRequested() {
          if (this.reason) {
            throw this.reason;
          }
        };
        CancelToken.prototype.subscribe = function subscribe(listener) {
          if (this.reason) {
            listener(this.reason);
            return;
          }
          if (this._listeners) {
            this._listeners.push(listener);
          } else {
            this._listeners = [listener];
          }
        };
        CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
          if (!this._listeners) {
            return;
          }
          var index = this._listeners.indexOf(listener);
          if (index !== -1) {
            this._listeners.splice(index, 1);
          }
        };
        CancelToken.source = function source() {
          var cancel;
          var token = new CancelToken(function executor(c) {
            cancel = c;
          });
          return {
            token,
            cancel
          };
        };
        module3.exports = CancelToken;
      },
      "../node_modules/axios/lib/cancel/CanceledError.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        function CanceledError(message) {
          AxiosError.call(this, message == null ? "canceled" : message, AxiosError.ERR_CANCELED);
          this.name = "CanceledError";
        }
        utils.inherits(CanceledError, AxiosError, {
          __CANCEL__: true
        });
        module3.exports = CanceledError;
      },
      "../node_modules/axios/lib/cancel/isCancel.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function isCancel(value) {
          return !!(value && value.__CANCEL__);
        };
      },
      "../node_modules/axios/lib/core/Axios.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var buildURL = __webpack_require__("../node_modules/axios/lib/helpers/buildURL.js");
        var InterceptorManager = __webpack_require__("../node_modules/axios/lib/core/InterceptorManager.js");
        var dispatchRequest = __webpack_require__("../node_modules/axios/lib/core/dispatchRequest.js");
        var mergeConfig = __webpack_require__("../node_modules/axios/lib/core/mergeConfig.js");
        var buildFullPath = __webpack_require__("../node_modules/axios/lib/core/buildFullPath.js");
        var validator = __webpack_require__("../node_modules/axios/lib/helpers/validator.js");
        var validators = validator.validators;
        function Axios(instanceConfig) {
          this.defaults = instanceConfig;
          this.interceptors = {
            request: new InterceptorManager(),
            response: new InterceptorManager()
          };
        }
        Axios.prototype.request = function request(configOrUrl, config) {
          if (typeof configOrUrl === "string") {
            config = config || {};
            config.url = configOrUrl;
          } else {
            config = configOrUrl || {};
          }
          config = mergeConfig(this.defaults, config);
          if (config.method) {
            config.method = config.method.toLowerCase();
          } else if (this.defaults.method) {
            config.method = this.defaults.method.toLowerCase();
          } else {
            config.method = "get";
          }
          var transitional = config.transitional;
          if (transitional !== void 0) {
            validator.assertOptions(transitional, {
              silentJSONParsing: validators.transitional(validators.boolean),
              forcedJSONParsing: validators.transitional(validators.boolean),
              clarifyTimeoutError: validators.transitional(validators.boolean)
            }, false);
          }
          var requestInterceptorChain = [];
          var synchronousRequestInterceptors = true;
          this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
            if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
              return;
            }
            synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
            requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
          });
          var responseInterceptorChain = [];
          this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
            responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
          });
          var promise;
          if (!synchronousRequestInterceptors) {
            var chain = [dispatchRequest, void 0];
            Array.prototype.unshift.apply(chain, requestInterceptorChain);
            chain = chain.concat(responseInterceptorChain);
            promise = Promise.resolve(config);
            while (chain.length) {
              promise = promise.then(chain.shift(), chain.shift());
            }
            return promise;
          }
          var newConfig = config;
          while (requestInterceptorChain.length) {
            var onFulfilled = requestInterceptorChain.shift();
            var onRejected = requestInterceptorChain.shift();
            try {
              newConfig = onFulfilled(newConfig);
            } catch (error) {
              onRejected(error);
              break;
            }
          }
          try {
            promise = dispatchRequest(newConfig);
          } catch (error) {
            return Promise.reject(error);
          }
          while (responseInterceptorChain.length) {
            promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
          }
          return promise;
        };
        Axios.prototype.getUri = function getUri(config) {
          config = mergeConfig(this.defaults, config);
          var fullPath = buildFullPath(config.baseURL, config.url);
          return buildURL(fullPath, config.params, config.paramsSerializer);
        };
        utils.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
          Axios.prototype[method] = function(url, config) {
            return this.request(mergeConfig(config || {}, {
              method,
              url,
              data: (config || {}).data
            }));
          };
        });
        utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
          function generateHTTPMethod(isForm) {
            return function httpMethod(url, data, config) {
              return this.request(mergeConfig(config || {}, {
                method,
                headers: isForm ? {
                  "Content-Type": "multipart/form-data"
                } : {},
                url,
                data
              }));
            };
          }
          Axios.prototype[method] = generateHTTPMethod();
          Axios.prototype[method + "Form"] = generateHTTPMethod(true);
        });
        module3.exports = Axios;
      },
      "../node_modules/axios/lib/core/AxiosError.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        function AxiosError(message, code, config, request, response) {
          Error.call(this);
          this.message = message;
          this.name = "AxiosError";
          code && (this.code = code);
          config && (this.config = config);
          request && (this.request = request);
          response && (this.response = response);
        }
        utils.inherits(AxiosError, Error, {
          toJSON: function toJSON() {
            return {
              message: this.message,
              name: this.name,
              description: this.description,
              number: this.number,
              fileName: this.fileName,
              lineNumber: this.lineNumber,
              columnNumber: this.columnNumber,
              stack: this.stack,
              config: this.config,
              code: this.code,
              status: this.response && this.response.status ? this.response.status : null
            };
          }
        });
        var prototype = AxiosError.prototype;
        var descriptors = {};
        [
          "ERR_BAD_OPTION_VALUE",
          "ERR_BAD_OPTION",
          "ECONNABORTED",
          "ETIMEDOUT",
          "ERR_NETWORK",
          "ERR_FR_TOO_MANY_REDIRECTS",
          "ERR_DEPRECATED",
          "ERR_BAD_RESPONSE",
          "ERR_BAD_REQUEST",
          "ERR_CANCELED"
        ].forEach(function(code) {
          descriptors[code] = { value: code };
        });
        Object.defineProperties(AxiosError, descriptors);
        Object.defineProperty(prototype, "isAxiosError", { value: true });
        AxiosError.from = function(error, code, config, request, response, customProps) {
          var axiosError = Object.create(prototype);
          utils.toFlatObject(error, axiosError, function filter(obj) {
            return obj !== Error.prototype;
          });
          AxiosError.call(axiosError, error.message, code, config, request, response);
          axiosError.name = error.name;
          customProps && Object.assign(axiosError, customProps);
          return axiosError;
        };
        module3.exports = AxiosError;
      },
      "../node_modules/axios/lib/core/InterceptorManager.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        function InterceptorManager() {
          this.handlers = [];
        }
        InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
          this.handlers.push({
            fulfilled,
            rejected,
            synchronous: options ? options.synchronous : false,
            runWhen: options ? options.runWhen : null
          });
          return this.handlers.length - 1;
        };
        InterceptorManager.prototype.eject = function eject(id) {
          if (this.handlers[id]) {
            this.handlers[id] = null;
          }
        };
        InterceptorManager.prototype.forEach = function forEach(fn) {
          utils.forEach(this.handlers, function forEachHandler(h) {
            if (h !== null) {
              fn(h);
            }
          });
        };
        module3.exports = InterceptorManager;
      },
      "../node_modules/axios/lib/core/buildFullPath.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var isAbsoluteURL = __webpack_require__("../node_modules/axios/lib/helpers/isAbsoluteURL.js");
        var combineURLs = __webpack_require__("../node_modules/axios/lib/helpers/combineURLs.js");
        module3.exports = function buildFullPath(baseURL, requestedURL) {
          if (baseURL && !isAbsoluteURL(requestedURL)) {
            return combineURLs(baseURL, requestedURL);
          }
          return requestedURL;
        };
      },
      "../node_modules/axios/lib/core/dispatchRequest.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var transformData = __webpack_require__("../node_modules/axios/lib/core/transformData.js");
        var isCancel = __webpack_require__("../node_modules/axios/lib/cancel/isCancel.js");
        var defaults = __webpack_require__("../node_modules/axios/lib/defaults/index.js");
        var CanceledError = __webpack_require__("../node_modules/axios/lib/cancel/CanceledError.js");
        function throwIfCancellationRequested(config) {
          if (config.cancelToken) {
            config.cancelToken.throwIfRequested();
          }
          if (config.signal && config.signal.aborted) {
            throw new CanceledError();
          }
        }
        module3.exports = function dispatchRequest(config) {
          throwIfCancellationRequested(config);
          config.headers = config.headers || {};
          config.data = transformData.call(config, config.data, config.headers, config.transformRequest);
          config.headers = utils.merge(config.headers.common || {}, config.headers[config.method] || {}, config.headers);
          utils.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function cleanHeaderConfig(method) {
            delete config.headers[method];
          });
          var adapter = config.adapter || defaults.adapter;
          return adapter(config).then(function onAdapterResolution(response) {
            throwIfCancellationRequested(config);
            response.data = transformData.call(config, response.data, response.headers, config.transformResponse);
            return response;
          }, function onAdapterRejection(reason) {
            if (!isCancel(reason)) {
              throwIfCancellationRequested(config);
              if (reason && reason.response) {
                reason.response.data = transformData.call(config, reason.response.data, reason.response.headers, config.transformResponse);
              }
            }
            return Promise.reject(reason);
          });
        };
      },
      "../node_modules/axios/lib/core/mergeConfig.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        module3.exports = function mergeConfig(config1, config2) {
          config2 = config2 || {};
          var config = {};
          function getMergedValue(target, source) {
            if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
              return utils.merge(target, source);
            } else if (utils.isPlainObject(source)) {
              return utils.merge({}, source);
            } else if (utils.isArray(source)) {
              return source.slice();
            }
            return source;
          }
          function mergeDeepProperties(prop) {
            if (!utils.isUndefined(config2[prop])) {
              return getMergedValue(config1[prop], config2[prop]);
            } else if (!utils.isUndefined(config1[prop])) {
              return getMergedValue(void 0, config1[prop]);
            }
          }
          function valueFromConfig2(prop) {
            if (!utils.isUndefined(config2[prop])) {
              return getMergedValue(void 0, config2[prop]);
            }
          }
          function defaultToConfig2(prop) {
            if (!utils.isUndefined(config2[prop])) {
              return getMergedValue(void 0, config2[prop]);
            } else if (!utils.isUndefined(config1[prop])) {
              return getMergedValue(void 0, config1[prop]);
            }
          }
          function mergeDirectKeys(prop) {
            if (prop in config2) {
              return getMergedValue(config1[prop], config2[prop]);
            } else if (prop in config1) {
              return getMergedValue(void 0, config1[prop]);
            }
          }
          var mergeMap = {
            "url": valueFromConfig2,
            "method": valueFromConfig2,
            "data": valueFromConfig2,
            "baseURL": defaultToConfig2,
            "transformRequest": defaultToConfig2,
            "transformResponse": defaultToConfig2,
            "paramsSerializer": defaultToConfig2,
            "timeout": defaultToConfig2,
            "timeoutMessage": defaultToConfig2,
            "withCredentials": defaultToConfig2,
            "adapter": defaultToConfig2,
            "responseType": defaultToConfig2,
            "xsrfCookieName": defaultToConfig2,
            "xsrfHeaderName": defaultToConfig2,
            "onUploadProgress": defaultToConfig2,
            "onDownloadProgress": defaultToConfig2,
            "decompress": defaultToConfig2,
            "maxContentLength": defaultToConfig2,
            "maxBodyLength": defaultToConfig2,
            "beforeRedirect": defaultToConfig2,
            "transport": defaultToConfig2,
            "httpAgent": defaultToConfig2,
            "httpsAgent": defaultToConfig2,
            "cancelToken": defaultToConfig2,
            "socketPath": defaultToConfig2,
            "responseEncoding": defaultToConfig2,
            "validateStatus": mergeDirectKeys
          };
          utils.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
            var merge = mergeMap[prop] || mergeDeepProperties;
            var configValue = merge(prop);
            utils.isUndefined(configValue) && merge !== mergeDirectKeys || (config[prop] = configValue);
          });
          return config;
        };
      },
      "../node_modules/axios/lib/core/settle.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        module3.exports = function settle(resolve, reject, response) {
          var validateStatus = response.config.validateStatus;
          if (!response.status || !validateStatus || validateStatus(response.status)) {
            resolve(response);
          } else {
            reject(new AxiosError("Request failed with status code " + response.status, [AxiosError.ERR_BAD_REQUEST, AxiosError.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4], response.config, response.request, response));
          }
        };
      },
      "../node_modules/axios/lib/core/transformData.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var defaults = __webpack_require__("../node_modules/axios/lib/defaults/index.js");
        module3.exports = function transformData(data, headers, fns) {
          var context = this || defaults;
          utils.forEach(fns, function transform(fn) {
            data = fn.call(context, data, headers);
          });
          return data;
        };
      },
      "../node_modules/axios/lib/defaults/env/FormData.js": function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__("../node_modules/axios/node_modules/form-data/lib/form_data.js");
      },
      "../node_modules/axios/lib/defaults/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var normalizeHeaderName = __webpack_require__("../node_modules/axios/lib/helpers/normalizeHeaderName.js");
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        var transitionalDefaults = __webpack_require__("../node_modules/axios/lib/defaults/transitional.js");
        var toFormData = __webpack_require__("../node_modules/axios/lib/helpers/toFormData.js");
        var DEFAULT_CONTENT_TYPE = {
          "Content-Type": "application/x-www-form-urlencoded"
        };
        function setContentTypeIfUnset(headers, value) {
          if (!utils.isUndefined(headers) && utils.isUndefined(headers["Content-Type"])) {
            headers["Content-Type"] = value;
          }
        }
        function getDefaultAdapter() {
          var adapter;
          if (typeof XMLHttpRequest !== "undefined") {
            adapter = __webpack_require__("../node_modules/axios/lib/adapters/xhr.js");
          } else if (typeof process !== "undefined" && Object.prototype.toString.call(process) === "[object process]") {
            adapter = __webpack_require__("../node_modules/axios/lib/adapters/http.js");
          }
          return adapter;
        }
        function stringifySafely(rawValue, parser, encoder) {
          if (utils.isString(rawValue)) {
            try {
              (parser || JSON.parse)(rawValue);
              return utils.trim(rawValue);
            } catch (e) {
              if (e.name !== "SyntaxError") {
                throw e;
              }
            }
          }
          return (encoder || JSON.stringify)(rawValue);
        }
        var defaults = {
          transitional: transitionalDefaults,
          adapter: getDefaultAdapter(),
          transformRequest: [function transformRequest(data, headers) {
            normalizeHeaderName(headers, "Accept");
            normalizeHeaderName(headers, "Content-Type");
            if (utils.isFormData(data) || utils.isArrayBuffer(data) || utils.isBuffer(data) || utils.isStream(data) || utils.isFile(data) || utils.isBlob(data)) {
              return data;
            }
            if (utils.isArrayBufferView(data)) {
              return data.buffer;
            }
            if (utils.isURLSearchParams(data)) {
              setContentTypeIfUnset(headers, "application/x-www-form-urlencoded;charset=utf-8");
              return data.toString();
            }
            var isObjectPayload = utils.isObject(data);
            var contentType = headers && headers["Content-Type"];
            var isFileList;
            if ((isFileList = utils.isFileList(data)) || isObjectPayload && contentType === "multipart/form-data") {
              var _FormData = this.env && this.env.FormData;
              return toFormData(isFileList ? { "files[]": data } : data, _FormData && new _FormData());
            } else if (isObjectPayload || contentType === "application/json") {
              setContentTypeIfUnset(headers, "application/json");
              return stringifySafely(data);
            }
            return data;
          }],
          transformResponse: [function transformResponse(data) {
            var transitional = this.transitional || defaults.transitional;
            var silentJSONParsing = transitional && transitional.silentJSONParsing;
            var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
            var strictJSONParsing = !silentJSONParsing && this.responseType === "json";
            if (strictJSONParsing || forcedJSONParsing && utils.isString(data) && data.length) {
              try {
                return JSON.parse(data);
              } catch (e) {
                if (strictJSONParsing) {
                  if (e.name === "SyntaxError") {
                    throw AxiosError.from(e, AxiosError.ERR_BAD_RESPONSE, this, null, this.response);
                  }
                  throw e;
                }
              }
            }
            return data;
          }],
          timeout: 0,
          xsrfCookieName: "XSRF-TOKEN",
          xsrfHeaderName: "X-XSRF-TOKEN",
          maxContentLength: -1,
          maxBodyLength: -1,
          env: {
            FormData: __webpack_require__("../node_modules/axios/lib/defaults/env/FormData.js")
          },
          validateStatus: function validateStatus(status) {
            return status >= 200 && status < 300;
          },
          headers: {
            common: {
              "Accept": "application/json, text/plain, */*"
            }
          }
        };
        utils.forEach(["delete", "get", "head"], function forEachMethodNoData(method) {
          defaults.headers[method] = {};
        });
        utils.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
          defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
        });
        module3.exports = defaults;
      },
      "../node_modules/axios/lib/defaults/transitional.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = {
          silentJSONParsing: true,
          forcedJSONParsing: true,
          clarifyTimeoutError: false
        };
      },
      "../node_modules/axios/lib/env/data.js": function(module3, exports3) {
        module3.exports = {
          "version": "0.27.2"
        };
      },
      "../node_modules/axios/lib/helpers/bind.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function bind(fn, thisArg) {
          return function wrap() {
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i];
            }
            return fn.apply(thisArg, args);
          };
        };
      },
      "../node_modules/axios/lib/helpers/buildURL.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        function encode(val) {
          return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
        }
        module3.exports = function buildURL(url, params, paramsSerializer) {
          if (!params) {
            return url;
          }
          var serializedParams;
          if (paramsSerializer) {
            serializedParams = paramsSerializer(params);
          } else if (utils.isURLSearchParams(params)) {
            serializedParams = params.toString();
          } else {
            var parts = [];
            utils.forEach(params, function serialize(val, key) {
              if (val === null || typeof val === "undefined") {
                return;
              }
              if (utils.isArray(val)) {
                key = key + "[]";
              } else {
                val = [val];
              }
              utils.forEach(val, function parseValue(v) {
                if (utils.isDate(v)) {
                  v = v.toISOString();
                } else if (utils.isObject(v)) {
                  v = JSON.stringify(v);
                }
                parts.push(encode(key) + "=" + encode(v));
              });
            });
            serializedParams = parts.join("&");
          }
          if (serializedParams) {
            var hashmarkIndex = url.indexOf("#");
            if (hashmarkIndex !== -1) {
              url = url.slice(0, hashmarkIndex);
            }
            url += (url.indexOf("?") === -1 ? "?" : "&") + serializedParams;
          }
          return url;
        };
      },
      "../node_modules/axios/lib/helpers/combineURLs.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function combineURLs(baseURL, relativeURL) {
          return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
        };
      },
      "../node_modules/axios/lib/helpers/cookies.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        module3.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
          return {
            write: function write(name, value, expires, path, domain, secure) {
              var cookie = [];
              cookie.push(name + "=" + encodeURIComponent(value));
              if (utils.isNumber(expires)) {
                cookie.push("expires=" + new Date(expires).toGMTString());
              }
              if (utils.isString(path)) {
                cookie.push("path=" + path);
              }
              if (utils.isString(domain)) {
                cookie.push("domain=" + domain);
              }
              if (secure === true) {
                cookie.push("secure");
              }
              document.cookie = cookie.join("; ");
            },
            read: function read(name) {
              var match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
              return match ? decodeURIComponent(match[3]) : null;
            },
            remove: function remove(name) {
              this.write(name, "", Date.now() - 864e5);
            }
          };
        }() : function nonStandardBrowserEnv() {
          return {
            write: function write() {
            },
            read: function read() {
              return null;
            },
            remove: function remove() {
            }
          };
        }();
      },
      "../node_modules/axios/lib/helpers/isAbsoluteURL.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function isAbsoluteURL(url) {
          return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
        };
      },
      "../node_modules/axios/lib/helpers/isAxiosError.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        module3.exports = function isAxiosError(payload) {
          return utils.isObject(payload) && payload.isAxiosError === true;
        };
      },
      "../node_modules/axios/lib/helpers/isURLSameOrigin.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        module3.exports = utils.isStandardBrowserEnv() ? function standardBrowserEnv() {
          var msie = /(msie|trident)/i.test(navigator.userAgent);
          var urlParsingNode = document.createElement("a");
          var originURL;
          function resolveURL(url) {
            var href = url;
            if (msie) {
              urlParsingNode.setAttribute("href", href);
              href = urlParsingNode.href;
            }
            urlParsingNode.setAttribute("href", href);
            return {
              href: urlParsingNode.href,
              protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
              host: urlParsingNode.host,
              search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
              hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
              hostname: urlParsingNode.hostname,
              port: urlParsingNode.port,
              pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
            };
          }
          originURL = resolveURL(window.location.href);
          return function isURLSameOrigin(requestURL) {
            var parsed = utils.isString(requestURL) ? resolveURL(requestURL) : requestURL;
            return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
          };
        }() : function nonStandardBrowserEnv() {
          return function isURLSameOrigin() {
            return true;
          };
        }();
      },
      "../node_modules/axios/lib/helpers/normalizeHeaderName.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        module3.exports = function normalizeHeaderName(headers, normalizedName) {
          utils.forEach(headers, function processHeader(value, name) {
            if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
              headers[normalizedName] = value;
              delete headers[name];
            }
          });
        };
      },
      "../node_modules/axios/lib/helpers/parseHeaders.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        var ignoreDuplicateOf = [
          "age",
          "authorization",
          "content-length",
          "content-type",
          "etag",
          "expires",
          "from",
          "host",
          "if-modified-since",
          "if-unmodified-since",
          "last-modified",
          "location",
          "max-forwards",
          "proxy-authorization",
          "referer",
          "retry-after",
          "user-agent"
        ];
        module3.exports = function parseHeaders(headers) {
          var parsed = {};
          var key;
          var val;
          var i;
          if (!headers) {
            return parsed;
          }
          utils.forEach(headers.split("\n"), function parser(line) {
            i = line.indexOf(":");
            key = utils.trim(line.substr(0, i)).toLowerCase();
            val = utils.trim(line.substr(i + 1));
            if (key) {
              if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
                return;
              }
              if (key === "set-cookie") {
                parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
              } else {
                parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
              }
            }
          });
          return parsed;
        };
      },
      "../node_modules/axios/lib/helpers/parseProtocol.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function parseProtocol(url) {
          var match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url);
          return match && match[1] || "";
        };
      },
      "../node_modules/axios/lib/helpers/spread.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function spread(callback) {
          return function wrap(arr) {
            return callback.apply(null, arr);
          };
        };
      },
      "../node_modules/axios/lib/helpers/toFormData.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/axios/lib/utils.js");
        function toFormData(obj, formData) {
          formData = formData || new FormData();
          var stack = [];
          function convertValue(value) {
            if (value === null)
              return "";
            if (utils.isDate(value)) {
              return value.toISOString();
            }
            if (utils.isArrayBuffer(value) || utils.isTypedArray(value)) {
              return typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
            }
            return value;
          }
          function build(data, parentKey) {
            if (utils.isPlainObject(data) || utils.isArray(data)) {
              if (stack.indexOf(data) !== -1) {
                throw Error("Circular reference detected in " + parentKey);
              }
              stack.push(data);
              utils.forEach(data, function each(value, key) {
                if (utils.isUndefined(value))
                  return;
                var fullKey = parentKey ? parentKey + "." + key : key;
                var arr;
                if (value && !parentKey && typeof value === "object") {
                  if (utils.endsWith(key, "{}")) {
                    value = JSON.stringify(value);
                  } else if (utils.endsWith(key, "[]") && (arr = utils.toArray(value))) {
                    arr.forEach(function(el) {
                      !utils.isUndefined(el) && formData.append(fullKey, convertValue(el));
                    });
                    return;
                  }
                }
                build(value, fullKey);
              });
              stack.pop();
            } else {
              formData.append(parentKey, convertValue(data));
            }
          }
          build(obj);
          return formData;
        }
        module3.exports = toFormData;
      },
      "../node_modules/axios/lib/helpers/validator.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var VERSION = __webpack_require__("../node_modules/axios/lib/env/data.js").version;
        var AxiosError = __webpack_require__("../node_modules/axios/lib/core/AxiosError.js");
        var validators = {};
        ["object", "boolean", "number", "function", "string", "symbol"].forEach(function(type, i) {
          validators[type] = function validator(thing) {
            return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
          };
        });
        var deprecatedWarnings = {};
        validators.transitional = function transitional(validator, version, message) {
          function formatMessage(opt, desc) {
            return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
          }
          return function(value, opt, opts) {
            if (validator === false) {
              throw new AxiosError(formatMessage(opt, " has been removed" + (version ? " in " + version : "")), AxiosError.ERR_DEPRECATED);
            }
            if (version && !deprecatedWarnings[opt]) {
              deprecatedWarnings[opt] = true;
              console.warn(formatMessage(opt, " has been deprecated since v" + version + " and will be removed in the near future"));
            }
            return validator ? validator(value, opt, opts) : true;
          };
        };
        function assertOptions(options, schema, allowUnknown) {
          if (typeof options !== "object") {
            throw new AxiosError("options must be an object", AxiosError.ERR_BAD_OPTION_VALUE);
          }
          var keys = Object.keys(options);
          var i = keys.length;
          while (i-- > 0) {
            var opt = keys[i];
            var validator = schema[opt];
            if (validator) {
              var value = options[opt];
              var result = value === void 0 || validator(value, opt, options);
              if (result !== true) {
                throw new AxiosError("option " + opt + " must be " + result, AxiosError.ERR_BAD_OPTION_VALUE);
              }
              continue;
            }
            if (allowUnknown !== true) {
              throw new AxiosError("Unknown option " + opt, AxiosError.ERR_BAD_OPTION);
            }
          }
        }
        module3.exports = {
          assertOptions,
          validators
        };
      },
      "../node_modules/axios/lib/utils.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__("../node_modules/axios/lib/helpers/bind.js");
        var toString = Object.prototype.toString;
        var kindOf = function(cache) {
          return function(thing) {
            var str = toString.call(thing);
            return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
          };
        }(/* @__PURE__ */ Object.create(null));
        function kindOfTest(type) {
          type = type.toLowerCase();
          return function isKindOf(thing) {
            return kindOf(thing) === type;
          };
        }
        function isArray(val) {
          return Array.isArray(val);
        }
        function isUndefined(val) {
          return typeof val === "undefined";
        }
        function isBuffer(val) {
          return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && typeof val.constructor.isBuffer === "function" && val.constructor.isBuffer(val);
        }
        var isArrayBuffer = kindOfTest("ArrayBuffer");
        function isArrayBufferView(val) {
          var result;
          if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
            result = ArrayBuffer.isView(val);
          } else {
            result = val && val.buffer && isArrayBuffer(val.buffer);
          }
          return result;
        }
        function isString(val) {
          return typeof val === "string";
        }
        function isNumber(val) {
          return typeof val === "number";
        }
        function isObject(val) {
          return val !== null && typeof val === "object";
        }
        function isPlainObject(val) {
          if (kindOf(val) !== "object") {
            return false;
          }
          var prototype = Object.getPrototypeOf(val);
          return prototype === null || prototype === Object.prototype;
        }
        var isDate = kindOfTest("Date");
        var isFile = kindOfTest("File");
        var isBlob = kindOfTest("Blob");
        var isFileList = kindOfTest("FileList");
        function isFunction(val) {
          return toString.call(val) === "[object Function]";
        }
        function isStream(val) {
          return isObject(val) && isFunction(val.pipe);
        }
        function isFormData(thing) {
          var pattern = "[object FormData]";
          return thing && (typeof FormData === "function" && thing instanceof FormData || toString.call(thing) === pattern || isFunction(thing.toString) && thing.toString() === pattern);
        }
        var isURLSearchParams = kindOfTest("URLSearchParams");
        function trim(str) {
          return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, "");
        }
        function isStandardBrowserEnv() {
          if (typeof navigator !== "undefined" && (navigator.product === "ReactNative" || navigator.product === "NativeScript" || navigator.product === "NS")) {
            return false;
          }
          return typeof window !== "undefined" && typeof document !== "undefined";
        }
        function forEach(obj, fn) {
          if (obj === null || typeof obj === "undefined") {
            return;
          }
          if (typeof obj !== "object") {
            obj = [obj];
          }
          if (isArray(obj)) {
            for (var i = 0, l = obj.length; i < l; i++) {
              fn.call(null, obj[i], i, obj);
            }
          } else {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj);
              }
            }
          }
        }
        function merge() {
          var result = {};
          function assignValue(val, key) {
            if (isPlainObject(result[key]) && isPlainObject(val)) {
              result[key] = merge(result[key], val);
            } else if (isPlainObject(val)) {
              result[key] = merge({}, val);
            } else if (isArray(val)) {
              result[key] = val.slice();
            } else {
              result[key] = val;
            }
          }
          for (var i = 0, l = arguments.length; i < l; i++) {
            forEach(arguments[i], assignValue);
          }
          return result;
        }
        function extend(a, b, thisArg) {
          forEach(b, function assignValue(val, key) {
            if (thisArg && typeof val === "function") {
              a[key] = bind(val, thisArg);
            } else {
              a[key] = val;
            }
          });
          return a;
        }
        function stripBOM(content) {
          if (content.charCodeAt(0) === 65279) {
            content = content.slice(1);
          }
          return content;
        }
        function inherits(constructor, superConstructor, props, descriptors) {
          constructor.prototype = Object.create(superConstructor.prototype, descriptors);
          constructor.prototype.constructor = constructor;
          props && Object.assign(constructor.prototype, props);
        }
        function toFlatObject(sourceObj, destObj, filter) {
          var props;
          var i;
          var prop;
          var merged = {};
          destObj = destObj || {};
          do {
            props = Object.getOwnPropertyNames(sourceObj);
            i = props.length;
            while (i-- > 0) {
              prop = props[i];
              if (!merged[prop]) {
                destObj[prop] = sourceObj[prop];
                merged[prop] = true;
              }
            }
            sourceObj = Object.getPrototypeOf(sourceObj);
          } while (sourceObj && (!filter || filter(sourceObj, destObj)) && sourceObj !== Object.prototype);
          return destObj;
        }
        function endsWith(str, searchString, position) {
          str = String(str);
          if (position === void 0 || position > str.length) {
            position = str.length;
          }
          position -= searchString.length;
          var lastIndex = str.indexOf(searchString, position);
          return lastIndex !== -1 && lastIndex === position;
        }
        function toArray(thing) {
          if (!thing)
            return null;
          var i = thing.length;
          if (isUndefined(i))
            return null;
          var arr = new Array(i);
          while (i-- > 0) {
            arr[i] = thing[i];
          }
          return arr;
        }
        var isTypedArray = function(TypedArray) {
          return function(thing) {
            return TypedArray && thing instanceof TypedArray;
          };
        }(typeof Uint8Array !== "undefined" && Object.getPrototypeOf(Uint8Array));
        module3.exports = {
          isArray,
          isArrayBuffer,
          isBuffer,
          isFormData,
          isArrayBufferView,
          isString,
          isNumber,
          isObject,
          isPlainObject,
          isUndefined,
          isDate,
          isFile,
          isBlob,
          isFunction,
          isStream,
          isURLSearchParams,
          isStandardBrowserEnv,
          forEach,
          merge,
          extend,
          trim,
          stripBOM,
          inherits,
          toFlatObject,
          kindOf,
          kindOfTest,
          endsWith,
          toArray,
          isTypedArray,
          isFileList
        };
      },
      "../node_modules/axios/node_modules/form-data/lib/form_data.js": function(module3, exports3, __webpack_require__) {
        var CombinedStream = __webpack_require__("../node_modules/combined-stream/lib/combined_stream.js");
        var util = __webpack_require__("util");
        var path = __webpack_require__("path");
        var http = __webpack_require__("http");
        var https = __webpack_require__("https");
        var parseUrl = __webpack_require__("url").parse;
        var fs = __webpack_require__("fs");
        var Stream = __webpack_require__("stream").Stream;
        var mime = __webpack_require__("../node_modules/mime-types/index.js");
        var asynckit = __webpack_require__("../node_modules/asynckit/index.js");
        var populate = __webpack_require__("../node_modules/axios/node_modules/form-data/lib/populate.js");
        module3.exports = FormData2;
        util.inherits(FormData2, CombinedStream);
        function FormData2(options) {
          if (!(this instanceof FormData2)) {
            return new FormData2(options);
          }
          this._overheadLength = 0;
          this._valueLength = 0;
          this._valuesToMeasure = [];
          CombinedStream.call(this);
          options = options || {};
          for (var option in options) {
            this[option] = options[option];
          }
        }
        FormData2.LINE_BREAK = "\r\n";
        FormData2.DEFAULT_CONTENT_TYPE = "application/octet-stream";
        FormData2.prototype.append = function(field, value, options) {
          options = options || {};
          if (typeof options == "string") {
            options = { filename: options };
          }
          var append = CombinedStream.prototype.append.bind(this);
          if (typeof value == "number") {
            value = "" + value;
          }
          if (util.isArray(value)) {
            this._error(new Error("Arrays are not supported."));
            return;
          }
          var header = this._multiPartHeader(field, value, options);
          var footer = this._multiPartFooter();
          append(header);
          append(value);
          append(footer);
          this._trackLength(header, value, options);
        };
        FormData2.prototype._trackLength = function(header, value, options) {
          var valueLength = 0;
          if (options.knownLength != null) {
            valueLength += +options.knownLength;
          } else if (Buffer.isBuffer(value)) {
            valueLength = value.length;
          } else if (typeof value === "string") {
            valueLength = Buffer.byteLength(value);
          }
          this._valueLength += valueLength;
          this._overheadLength += Buffer.byteLength(header) + FormData2.LINE_BREAK.length;
          if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
            return;
          }
          if (!options.knownLength) {
            this._valuesToMeasure.push(value);
          }
        };
        FormData2.prototype._lengthRetriever = function(value, callback) {
          if (value.hasOwnProperty("fd")) {
            if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
              callback(null, value.end + 1 - (value.start ? value.start : 0));
            } else {
              fs.stat(value.path, function(err, stat) {
                var fileSize;
                if (err) {
                  callback(err);
                  return;
                }
                fileSize = stat.size - (value.start ? value.start : 0);
                callback(null, fileSize);
              });
            }
          } else if (value.hasOwnProperty("httpVersion")) {
            callback(null, +value.headers["content-length"]);
          } else if (value.hasOwnProperty("httpModule")) {
            value.on("response", function(response) {
              value.pause();
              callback(null, +response.headers["content-length"]);
            });
            value.resume();
          } else {
            callback("Unknown stream");
          }
        };
        FormData2.prototype._multiPartHeader = function(field, value, options) {
          if (typeof options.header == "string") {
            return options.header;
          }
          var contentDisposition = this._getContentDisposition(value, options);
          var contentType = this._getContentType(value, options);
          var contents = "";
          var headers = {
            "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
            "Content-Type": [].concat(contentType || [])
          };
          if (typeof options.header == "object") {
            populate(headers, options.header);
          }
          var header;
          for (var prop in headers) {
            if (!headers.hasOwnProperty(prop))
              continue;
            header = headers[prop];
            if (header == null) {
              continue;
            }
            if (!Array.isArray(header)) {
              header = [header];
            }
            if (header.length) {
              contents += prop + ": " + header.join("; ") + FormData2.LINE_BREAK;
            }
          }
          return "--" + this.getBoundary() + FormData2.LINE_BREAK + contents + FormData2.LINE_BREAK;
        };
        FormData2.prototype._getContentDisposition = function(value, options) {
          var filename, contentDisposition;
          if (typeof options.filepath === "string") {
            filename = path.normalize(options.filepath).replace(/\\/g, "/");
          } else if (options.filename || value.name || value.path) {
            filename = path.basename(options.filename || value.name || value.path);
          } else if (value.readable && value.hasOwnProperty("httpVersion")) {
            filename = path.basename(value.client._httpMessage.path || "");
          }
          if (filename) {
            contentDisposition = 'filename="' + filename + '"';
          }
          return contentDisposition;
        };
        FormData2.prototype._getContentType = function(value, options) {
          var contentType = options.contentType;
          if (!contentType && value.name) {
            contentType = mime.lookup(value.name);
          }
          if (!contentType && value.path) {
            contentType = mime.lookup(value.path);
          }
          if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
            contentType = value.headers["content-type"];
          }
          if (!contentType && (options.filepath || options.filename)) {
            contentType = mime.lookup(options.filepath || options.filename);
          }
          if (!contentType && typeof value == "object") {
            contentType = FormData2.DEFAULT_CONTENT_TYPE;
          }
          return contentType;
        };
        FormData2.prototype._multiPartFooter = function() {
          return function(next) {
            var footer = FormData2.LINE_BREAK;
            var lastPart = this._streams.length === 0;
            if (lastPart) {
              footer += this._lastBoundary();
            }
            next(footer);
          }.bind(this);
        };
        FormData2.prototype._lastBoundary = function() {
          return "--" + this.getBoundary() + "--" + FormData2.LINE_BREAK;
        };
        FormData2.prototype.getHeaders = function(userHeaders) {
          var header;
          var formHeaders = {
            "content-type": "multipart/form-data; boundary=" + this.getBoundary()
          };
          for (header in userHeaders) {
            if (userHeaders.hasOwnProperty(header)) {
              formHeaders[header.toLowerCase()] = userHeaders[header];
            }
          }
          return formHeaders;
        };
        FormData2.prototype.setBoundary = function(boundary) {
          this._boundary = boundary;
        };
        FormData2.prototype.getBoundary = function() {
          if (!this._boundary) {
            this._generateBoundary();
          }
          return this._boundary;
        };
        FormData2.prototype.getBuffer = function() {
          var dataBuffer = new Buffer.alloc(0);
          var boundary = this.getBoundary();
          for (var i = 0, len = this._streams.length; i < len; i++) {
            if (typeof this._streams[i] !== "function") {
              if (Buffer.isBuffer(this._streams[i])) {
                dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
              } else {
                dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
              }
              if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
                dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData2.LINE_BREAK)]);
              }
            }
          }
          return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
        };
        FormData2.prototype._generateBoundary = function() {
          var boundary = "--------------------------";
          for (var i = 0; i < 24; i++) {
            boundary += Math.floor(Math.random() * 10).toString(16);
          }
          this._boundary = boundary;
        };
        FormData2.prototype.getLengthSync = function() {
          var knownLength = this._overheadLength + this._valueLength;
          if (this._streams.length) {
            knownLength += this._lastBoundary().length;
          }
          if (!this.hasKnownLength()) {
            this._error(new Error("Cannot calculate proper length in synchronous way."));
          }
          return knownLength;
        };
        FormData2.prototype.hasKnownLength = function() {
          var hasKnownLength = true;
          if (this._valuesToMeasure.length) {
            hasKnownLength = false;
          }
          return hasKnownLength;
        };
        FormData2.prototype.getLength = function(cb) {
          var knownLength = this._overheadLength + this._valueLength;
          if (this._streams.length) {
            knownLength += this._lastBoundary().length;
          }
          if (!this._valuesToMeasure.length) {
            process.nextTick(cb.bind(this, null, knownLength));
            return;
          }
          asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
            if (err) {
              cb(err);
              return;
            }
            values.forEach(function(length) {
              knownLength += length;
            });
            cb(null, knownLength);
          });
        };
        FormData2.prototype.submit = function(params, cb) {
          var request, options, defaults = { method: "post" };
          if (typeof params == "string") {
            params = parseUrl(params);
            options = populate({
              port: params.port,
              path: params.pathname,
              host: params.hostname,
              protocol: params.protocol
            }, defaults);
          } else {
            options = populate(params, defaults);
            if (!options.port) {
              options.port = options.protocol == "https:" ? 443 : 80;
            }
          }
          options.headers = this.getHeaders(params.headers);
          if (options.protocol == "https:") {
            request = https.request(options);
          } else {
            request = http.request(options);
          }
          this.getLength(function(err, length) {
            if (err && err !== "Unknown stream") {
              this._error(err);
              return;
            }
            if (length) {
              request.setHeader("Content-Length", length);
            }
            this.pipe(request);
            if (cb) {
              var onResponse;
              var callback = function(error, responce) {
                request.removeListener("error", callback);
                request.removeListener("response", onResponse);
                return cb.call(this, error, responce);
              };
              onResponse = callback.bind(this, null);
              request.on("error", callback);
              request.on("response", onResponse);
            }
          }.bind(this));
          return request;
        };
        FormData2.prototype._error = function(err) {
          if (!this.error) {
            this.error = err;
            this.pause();
            this.emit("error", err);
          }
        };
        FormData2.prototype.toString = function() {
          return "[object FormData]";
        };
      },
      "../node_modules/axios/node_modules/form-data/lib/populate.js": function(module3, exports3) {
        module3.exports = function(dst, src) {
          Object.keys(src).forEach(function(prop) {
            dst[prop] = dst[prop] || src[prop];
          });
          return dst;
        };
      },
      "../node_modules/call-bind/callBound.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var GetIntrinsic = __webpack_require__("../node_modules/get-intrinsic/index.js");
        var callBind = __webpack_require__("../node_modules/call-bind/index.js");
        var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
        module3.exports = function callBoundIntrinsic(name, allowMissing) {
          var intrinsic = GetIntrinsic(name, !!allowMissing);
          if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
            return callBind(intrinsic);
          }
          return intrinsic;
        };
      },
      "../node_modules/call-bind/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__("../node_modules/function-bind/index.js");
        var GetIntrinsic = __webpack_require__("../node_modules/get-intrinsic/index.js");
        var $apply = GetIntrinsic("%Function.prototype.apply%");
        var $call = GetIntrinsic("%Function.prototype.call%");
        var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
        var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
        var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
        var $max = GetIntrinsic("%Math.max%");
        if ($defineProperty) {
          try {
            $defineProperty({}, "a", { value: 1 });
          } catch (e) {
            $defineProperty = null;
          }
        }
        module3.exports = function callBind(originalFunction) {
          var func = $reflectApply(bind, $call, arguments);
          if ($gOPD && $defineProperty) {
            var desc = $gOPD(func, "length");
            if (desc.configurable) {
              $defineProperty(func, "length", { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) });
            }
          }
          return func;
        };
        var applyBind = function applyBind2() {
          return $reflectApply(bind, $apply, arguments);
        };
        if ($defineProperty) {
          $defineProperty(module3.exports, "apply", { value: applyBind });
        } else {
          module3.exports.apply = applyBind;
        }
      },
      "../node_modules/combined-stream/lib/combined_stream.js": function(module3, exports3, __webpack_require__) {
        var util = __webpack_require__("util");
        var Stream = __webpack_require__("stream").Stream;
        var DelayedStream = __webpack_require__("../node_modules/delayed-stream/lib/delayed_stream.js");
        module3.exports = CombinedStream;
        function CombinedStream() {
          this.writable = false;
          this.readable = true;
          this.dataSize = 0;
          this.maxDataSize = 2 * 1024 * 1024;
          this.pauseStreams = true;
          this._released = false;
          this._streams = [];
          this._currentStream = null;
          this._insideLoop = false;
          this._pendingNext = false;
        }
        util.inherits(CombinedStream, Stream);
        CombinedStream.create = function(options) {
          var combinedStream = new this();
          options = options || {};
          for (var option in options) {
            combinedStream[option] = options[option];
          }
          return combinedStream;
        };
        CombinedStream.isStreamLike = function(stream) {
          return typeof stream !== "function" && typeof stream !== "string" && typeof stream !== "boolean" && typeof stream !== "number" && !Buffer.isBuffer(stream);
        };
        CombinedStream.prototype.append = function(stream) {
          var isStreamLike = CombinedStream.isStreamLike(stream);
          if (isStreamLike) {
            if (!(stream instanceof DelayedStream)) {
              var newStream = DelayedStream.create(stream, {
                maxDataSize: Infinity,
                pauseStream: this.pauseStreams
              });
              stream.on("data", this._checkDataSize.bind(this));
              stream = newStream;
            }
            this._handleErrors(stream);
            if (this.pauseStreams) {
              stream.pause();
            }
          }
          this._streams.push(stream);
          return this;
        };
        CombinedStream.prototype.pipe = function(dest, options) {
          Stream.prototype.pipe.call(this, dest, options);
          this.resume();
          return dest;
        };
        CombinedStream.prototype._getNext = function() {
          this._currentStream = null;
          if (this._insideLoop) {
            this._pendingNext = true;
            return;
          }
          this._insideLoop = true;
          try {
            do {
              this._pendingNext = false;
              this._realGetNext();
            } while (this._pendingNext);
          } finally {
            this._insideLoop = false;
          }
        };
        CombinedStream.prototype._realGetNext = function() {
          var stream = this._streams.shift();
          if (typeof stream == "undefined") {
            this.end();
            return;
          }
          if (typeof stream !== "function") {
            this._pipeNext(stream);
            return;
          }
          var getStream = stream;
          getStream(function(stream2) {
            var isStreamLike = CombinedStream.isStreamLike(stream2);
            if (isStreamLike) {
              stream2.on("data", this._checkDataSize.bind(this));
              this._handleErrors(stream2);
            }
            this._pipeNext(stream2);
          }.bind(this));
        };
        CombinedStream.prototype._pipeNext = function(stream) {
          this._currentStream = stream;
          var isStreamLike = CombinedStream.isStreamLike(stream);
          if (isStreamLike) {
            stream.on("end", this._getNext.bind(this));
            stream.pipe(this, { end: false });
            return;
          }
          var value = stream;
          this.write(value);
          this._getNext();
        };
        CombinedStream.prototype._handleErrors = function(stream) {
          var self2 = this;
          stream.on("error", function(err) {
            self2._emitError(err);
          });
        };
        CombinedStream.prototype.write = function(data) {
          this.emit("data", data);
        };
        CombinedStream.prototype.pause = function() {
          if (!this.pauseStreams) {
            return;
          }
          if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
            this._currentStream.pause();
          this.emit("pause");
        };
        CombinedStream.prototype.resume = function() {
          if (!this._released) {
            this._released = true;
            this.writable = true;
            this._getNext();
          }
          if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
            this._currentStream.resume();
          this.emit("resume");
        };
        CombinedStream.prototype.end = function() {
          this._reset();
          this.emit("end");
        };
        CombinedStream.prototype.destroy = function() {
          this._reset();
          this.emit("close");
        };
        CombinedStream.prototype._reset = function() {
          this.writable = false;
          this._streams = [];
          this._currentStream = null;
        };
        CombinedStream.prototype._checkDataSize = function() {
          this._updateDataSize();
          if (this.dataSize <= this.maxDataSize) {
            return;
          }
          var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this._emitError(new Error(message));
        };
        CombinedStream.prototype._updateDataSize = function() {
          this.dataSize = 0;
          var self2 = this;
          this._streams.forEach(function(stream) {
            if (!stream.dataSize) {
              return;
            }
            self2.dataSize += stream.dataSize;
          });
          if (this._currentStream && this._currentStream.dataSize) {
            this.dataSize += this._currentStream.dataSize;
          }
        };
        CombinedStream.prototype._emitError = function(err) {
          this._reset();
          this.emit("error", err);
        };
      },
      "../node_modules/contentful-resolve-response/dist/esm/index.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
          return typeof obj;
        } : function(obj) {
          return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };
        function _toConsumableArray(arr) {
          if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
              arr2[i] = arr[i];
            }
            return arr2;
          } else {
            return Array.from(arr);
          }
        }
        var UNRESOLVED_LINK = {};
        var isLink = function isLink2(object) {
          return object && object.sys && object.sys.type === "Link";
        };
        var makeLookupKey = function makeLookupKey2(sys) {
          return sys.type + "!" + sys.id;
        };
        var getLink = function getLink2(entityMap, link) {
          var _link$sys = link.sys, type = _link$sys.linkType, id = _link$sys.id;
          var lookupKey = makeLookupKey({ type, id });
          return entityMap.get(lookupKey) || UNRESOLVED_LINK;
        };
        var cleanUpLinks = function cleanUpLinks2(input) {
          if (Array.isArray(input)) {
            return input.filter(function(val) {
              return val !== UNRESOLVED_LINK;
            });
          }
          for (var key in input) {
            if (input[key] === UNRESOLVED_LINK) {
              delete input[key];
            }
          }
          return input;
        };
        var walkMutate = function walkMutate2(input, predicate, mutator, removeUnresolved) {
          if (predicate(input)) {
            return mutator(input);
          }
          if (input && (typeof input === "undefined" ? "undefined" : _typeof(input)) === "object") {
            for (var key in input) {
              if (input.hasOwnProperty(key)) {
                input[key] = walkMutate2(input[key], predicate, mutator, removeUnresolved);
              }
            }
            if (removeUnresolved) {
              input = cleanUpLinks(input);
            }
          }
          return input;
        };
        var normalizeLink = function normalizeLink2(entityMap, link, removeUnresolved) {
          var resolvedLink = getLink(entityMap, link);
          if (resolvedLink === UNRESOLVED_LINK) {
            return removeUnresolved ? resolvedLink : link;
          }
          return resolvedLink;
        };
        var makeEntryObject = function makeEntryObject2(item, itemEntryPoints) {
          if (!Array.isArray(itemEntryPoints)) {
            return item;
          }
          var entryPoints = Object.keys(item).filter(function(ownKey) {
            return itemEntryPoints.indexOf(ownKey) !== -1;
          });
          return entryPoints.reduce(function(entryObj, entryPoint) {
            entryObj[entryPoint] = item[entryPoint];
            return entryObj;
          }, {});
        };
        var resolveResponse = function resolveResponse2(response, options) {
          options = options || {};
          if (!response.items) {
            return [];
          }
          var responseClone = Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(response);
          var allIncludes = Object.keys(responseClone.includes || {}).reduce(function(all, type) {
            return [].concat(_toConsumableArray(all), _toConsumableArray(response.includes[type]));
          }, []);
          var allEntries = [].concat(_toConsumableArray(responseClone.items), _toConsumableArray(allIncludes));
          var entityMap = new Map(allEntries.map(function(entity) {
            return [makeLookupKey(entity.sys), entity];
          }));
          allEntries.forEach(function(item) {
            var entryObject = makeEntryObject(item, options.itemEntryPoints);
            Object.assign(item, walkMutate(entryObject, isLink, function(link) {
              return normalizeLink(entityMap, link, options.removeUnresolved);
            }, options.removeUnresolved));
          });
          return responseClone.items;
        };
        __webpack_exports__["default"] = resolveResponse;
      },
      "../node_modules/contentful-sdk-core/dist/index.es-modules.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "createHttpClient", function() {
          return createHttpClient;
        });
        __webpack_require__.d(__webpack_exports__, "createRequestConfig", function() {
          return createRequestConfig;
        });
        __webpack_require__.d(__webpack_exports__, "enforceObjPath", function() {
          return enforceObjPath;
        });
        __webpack_require__.d(__webpack_exports__, "errorHandler", function() {
          return errorHandler;
        });
        __webpack_require__.d(__webpack_exports__, "freezeSys", function() {
          return freezeSys;
        });
        __webpack_require__.d(__webpack_exports__, "getUserAgentHeader", function() {
          return getUserAgentHeader;
        });
        __webpack_require__.d(__webpack_exports__, "toPlainObject", function() {
          return toPlainObject;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var qs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/qs/lib/index.js");
        var qs__WEBPACK_IMPORTED_MODULE_1___default = /* @__PURE__ */ __webpack_require__.n(qs__WEBPACK_IMPORTED_MODULE_1__);
        var lodash_isstring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/lodash.isstring/index.js");
        var lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default = /* @__PURE__ */ __webpack_require__.n(lodash_isstring__WEBPACK_IMPORTED_MODULE_2__);
        var p_throttle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/p-throttle/index.js");
        var p_throttle__WEBPACK_IMPORTED_MODULE_3___default = /* @__PURE__ */ __webpack_require__.n(p_throttle__WEBPACK_IMPORTED_MODULE_3__);
        var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("../node_modules/lodash.isplainobject/index.js");
        var lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default = /* @__PURE__ */ __webpack_require__.n(lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4__);
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread2(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _typeof(obj) {
          "@babel/helpers - typeof";
          return _typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(obj2) {
            return typeof obj2;
          } : function(obj2) {
            return obj2 && typeof Symbol == "function" && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
          }, _typeof(obj);
        }
        function _wrapRegExp() {
          _wrapRegExp = function(re, groups) {
            return new BabelRegExp(re, void 0, groups);
          };
          var _super = RegExp.prototype, _groups = /* @__PURE__ */ new WeakMap();
          function BabelRegExp(re, flags, groups) {
            var _this = new RegExp(re, flags);
            return _groups.set(_this, groups || _groups.get(re)), _setPrototypeOf(_this, BabelRegExp.prototype);
          }
          function buildGroups(result, re) {
            var g = _groups.get(re);
            return Object.keys(g).reduce(function(groups, name) {
              return groups[name] = result[g[name]], groups;
            }, /* @__PURE__ */ Object.create(null));
          }
          return _inherits(BabelRegExp, RegExp), BabelRegExp.prototype.exec = function(str) {
            var result = _super.exec.call(this, str);
            return result && (result.groups = buildGroups(result, this)), result;
          }, BabelRegExp.prototype[Symbol.replace] = function(str, substitution) {
            if (typeof substitution == "string") {
              var groups = _groups.get(this);
              return _super[Symbol.replace].call(this, str, substitution.replace(/\$<([^>]+)>/g, function(_, name) {
                return "$" + groups[name];
              }));
            }
            if (typeof substitution == "function") {
              var _this = this;
              return _super[Symbol.replace].call(this, str, function() {
                var args = arguments;
                return typeof args[args.length - 1] != "object" && (args = [].slice.call(args)).push(buildGroups(args, _this)), substitution.apply(this, args);
              });
            }
            return _super[Symbol.replace].call(this, str, substitution);
          }, _wrapRegExp.apply(this, arguments);
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, {
              value,
              enumerable: true,
              configurable: true,
              writable: true
            });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function _inherits(subClass, superClass) {
          if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function");
          }
          subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
              value: subClass,
              writable: true,
              configurable: true
            }
          });
          Object.defineProperty(subClass, "prototype", {
            writable: false
          });
          if (superClass)
            _setPrototypeOf(subClass, superClass);
        }
        function _setPrototypeOf(o, p) {
          _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o2, p2) {
            o2.__proto__ = p2;
            return o2;
          };
          return _setPrototypeOf(o, p);
        }
        function _slicedToArray(arr, i) {
          return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
        }
        function _arrayWithHoles(arr) {
          if (Array.isArray(arr))
            return arr;
        }
        function _iterableToArrayLimit(arr, i) {
          var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
          if (_i == null)
            return;
          var _arr = [];
          var _n = true;
          var _d = false;
          var _s, _e;
          try {
            for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);
              if (i && _arr.length === i)
                break;
            }
          } catch (err) {
            _d = true;
            _e = err;
          } finally {
            try {
              if (!_n && _i["return"] != null)
                _i["return"]();
            } finally {
              if (_d)
                throw _e;
            }
          }
          return _arr;
        }
        function _unsupportedIterableToArray(o, minLen) {
          if (!o)
            return;
          if (typeof o === "string")
            return _arrayLikeToArray(o, minLen);
          var n = Object.prototype.toString.call(o).slice(8, -1);
          if (n === "Object" && o.constructor)
            n = o.constructor.name;
          if (n === "Map" || n === "Set")
            return Array.from(o);
          if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
            return _arrayLikeToArray(o, minLen);
        }
        function _arrayLikeToArray(arr, len) {
          if (len == null || len > arr.length)
            len = arr.length;
          for (var i = 0, arr2 = new Array(len); i < len; i++)
            arr2[i] = arr[i];
          return arr2;
        }
        function _nonIterableRest() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }
        function _createForOfIteratorHelper(o, allowArrayLike) {
          var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
          if (!it) {
            if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
              if (it)
                o = it;
              var i = 0;
              var F = function() {
              };
              return {
                s: F,
                n: function() {
                  if (i >= o.length)
                    return {
                      done: true
                    };
                  return {
                    done: false,
                    value: o[i++]
                  };
                },
                e: function(e) {
                  throw e;
                },
                f: F
              };
            }
            throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }
          var normalCompletion = true, didErr = false, err;
          return {
            s: function() {
              it = it.call(o);
            },
            n: function() {
              var step = it.next();
              normalCompletion = step.done;
              return step;
            },
            e: function(e) {
              didErr = true;
              err = e;
            },
            f: function() {
              try {
                if (!normalCompletion && it.return != null)
                  it.return();
              } finally {
                if (didErr)
                  throw err;
              }
            }
          };
        }
        function isNode() {
          return typeof process !== "undefined" && !process.browser;
        }
        function isReactNative() {
          return typeof window !== "undefined" && "navigator" in window && "product" in window.navigator && window.navigator.product === "ReactNative";
        }
        function getNodeVersion() {
          return process.versions && process.versions.node ? "v".concat(process.versions.node) : process.version;
        }
        function getWindow() {
          return window;
        }
        function noop() {
          return void 0;
        }
        var PERCENTAGE_REGEX = /* @__PURE__ */ _wrapRegExp(/(\d+)(%)/, {
          value: 1
        });
        function calculateLimit(type) {
          var max = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 7;
          var limit = max;
          if (PERCENTAGE_REGEX.test(type)) {
            var _type$match;
            var groups = (_type$match = type.match(PERCENTAGE_REGEX)) === null || _type$match === void 0 ? void 0 : _type$match.groups;
            if (groups && groups.value) {
              var percentage = parseInt(groups.value) / 100;
              limit = Math.round(max * percentage);
            }
          }
          return Math.min(30, Math.max(1, limit));
        }
        function createThrottle(limit, logger) {
          logger("info", "Throttle request to ".concat(limit, "/s"));
          return p_throttle__WEBPACK_IMPORTED_MODULE_3___default()({
            limit,
            interval: 1e3,
            strict: false
          });
        }
        var rateLimitThrottle = function(axiosInstance) {
          var type = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "auto";
          var _axiosInstance$defaul = axiosInstance.defaults.logHandler, logHandler = _axiosInstance$defaul === void 0 ? noop : _axiosInstance$defaul;
          var limit = lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default()(type) ? calculateLimit(type) : calculateLimit("auto", type);
          var throttle = createThrottle(limit, logHandler);
          var isCalculated = false;
          var requestInterceptorId = axiosInstance.interceptors.request.use(function(config) {
            return throttle(function() {
              return config;
            })();
          }, function(error) {
            return Promise.reject(error);
          });
          var responseInterceptorId = axiosInstance.interceptors.response.use(function(response) {
            if (!isCalculated && lodash_isstring__WEBPACK_IMPORTED_MODULE_2___default()(type) && (type === "auto" || PERCENTAGE_REGEX.test(type)) && response.headers && response.headers["x-contentful-ratelimit-second-limit"]) {
              var rawLimit = parseInt(response.headers["x-contentful-ratelimit-second-limit"]);
              var nextLimit = calculateLimit(type, rawLimit);
              if (nextLimit !== limit) {
                if (requestInterceptorId) {
                  axiosInstance.interceptors.request.eject(requestInterceptorId);
                }
                limit = nextLimit;
                throttle = createThrottle(nextLimit, logHandler);
                requestInterceptorId = axiosInstance.interceptors.request.use(function(config) {
                  return throttle(function() {
                    return config;
                  })();
                }, function(error) {
                  return Promise.reject(error);
                });
              }
              isCalculated = true;
            }
            return response;
          }, function(error) {
            return Promise.reject(error);
          });
          return function() {
            axiosInstance.interceptors.request.eject(requestInterceptorId);
            axiosInstance.interceptors.response.eject(responseInterceptorId);
          };
        };
        var delay = function delay2(ms) {
          return new Promise(function(resolve) {
            setTimeout(resolve, ms);
          });
        };
        var defaultWait = function defaultWait2(attempts) {
          return Math.pow(Math.SQRT2, attempts);
        };
        function rateLimit(instance) {
          var maxRetry = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 5;
          var _instance$defaults = instance.defaults, _instance$defaults$re = _instance$defaults.responseLogger, responseLogger = _instance$defaults$re === void 0 ? noop : _instance$defaults$re, _instance$defaults$re2 = _instance$defaults.requestLogger, requestLogger = _instance$defaults$re2 === void 0 ? noop : _instance$defaults$re2;
          instance.interceptors.request.use(function(config) {
            requestLogger(config);
            return config;
          }, function(error) {
            requestLogger(error);
            return Promise.reject(error);
          });
          instance.interceptors.response.use(function(response) {
            responseLogger(response);
            return response;
          }, function(error) {
            var response = error.response;
            var config = error.config;
            responseLogger(error);
            if (!config || !instance.defaults.retryOnError) {
              return Promise.reject(error);
            }
            var doneAttempts = config.attempts || 1;
            if (doneAttempts > maxRetry) {
              error.attempts = config.attempts;
              return Promise.reject(error);
            }
            var retryErrorType = null;
            var wait = defaultWait(doneAttempts);
            if (!response) {
              retryErrorType = "Connection";
            } else if (response.status >= 500 && response.status < 600) {
              retryErrorType = "Server ".concat(response.status);
            } else if (response.status === 429) {
              retryErrorType = "Rate limit";
              if (response.headers && error.response.headers["x-contentful-ratelimit-reset"]) {
                wait = response.headers["x-contentful-ratelimit-reset"];
              }
            }
            if (retryErrorType) {
              wait = Math.floor(wait * 1e3 + Math.random() * 200 + 500);
              instance.defaults.logHandler("warning", "".concat(retryErrorType, " error occurred. Waiting for ").concat(wait, " ms before retrying..."));
              config.attempts = doneAttempts + 1;
              delete config.httpAgent;
              delete config.httpsAgent;
              return delay(wait).then(function() {
                return instance(config);
              });
            }
            return Promise.reject(error);
          });
        }
        function asyncToken(instance, getToken) {
          instance.interceptors.request.use(function(config) {
            return getToken().then(function(accessToken) {
              config.headers = _objectSpread2(_objectSpread2({}, config.headers), {}, {
                Authorization: "Bearer ".concat(accessToken)
              });
              return config;
            });
          });
        }
        var HOST_REGEX = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/;
        function createHttpClient(axios, options) {
          var defaultConfig = {
            insecure: false,
            retryOnError: true,
            logHandler: function logHandler(level, data) {
              if (level === "error" && data) {
                var title = [data.name, data.message].filter(function(a) {
                  return a;
                }).join(" - ");
                console.error("[error] ".concat(title));
                console.error(data);
                return;
              }
              console.log("[".concat(level, "] ").concat(data));
            },
            headers: {},
            httpAgent: false,
            httpsAgent: false,
            timeout: 3e4,
            throttle: 0,
            proxy: false,
            basePath: "",
            adapter: void 0,
            maxContentLength: 1073741824,
            maxBodyLength: 1073741824
          };
          var config = _objectSpread2(_objectSpread2({}, defaultConfig), options);
          if (!config.accessToken) {
            var missingAccessTokenError = new TypeError("Expected parameter accessToken");
            config.logHandler("error", missingAccessTokenError);
            throw missingAccessTokenError;
          }
          var protocol = config.insecure ? "http" : "https";
          var space = config.space ? "".concat(config.space, "/") : "";
          var hostname = config.defaultHostname;
          var port = config.insecure ? 80 : 443;
          if (config.host && HOST_REGEX.test(config.host)) {
            var parsed = config.host.split(":");
            if (parsed.length === 2) {
              var _parsed = _slicedToArray(parsed, 2);
              hostname = _parsed[0];
              port = _parsed[1];
            } else {
              hostname = parsed[0];
            }
          }
          if (config.basePath) {
            config.basePath = "/".concat(config.basePath.split("/").filter(Boolean).join("/"));
          }
          var baseURL = options.baseURL || "".concat(protocol, "://").concat(hostname, ":").concat(port).concat(config.basePath, "/spaces/").concat(space);
          if (!config.headers.Authorization && typeof config.accessToken !== "function") {
            config.headers.Authorization = "Bearer " + config.accessToken;
          }
          if (isNode()) {
            config.headers["user-agent"] = "node.js/" + getNodeVersion();
            config.headers["Accept-Encoding"] = "gzip";
          }
          var axiosOptions = {
            baseURL,
            headers: config.headers,
            httpAgent: config.httpAgent,
            httpsAgent: config.httpsAgent,
            paramsSerializer: qs__WEBPACK_IMPORTED_MODULE_1___default.a.stringify,
            proxy: config.proxy,
            timeout: config.timeout,
            adapter: config.adapter,
            maxContentLength: config.maxContentLength,
            maxBodyLength: config.maxBodyLength,
            logHandler: config.logHandler,
            responseLogger: config.responseLogger,
            requestLogger: config.requestLogger,
            retryOnError: config.retryOnError
          };
          var instance = axios.create(axiosOptions);
          instance.httpClientParams = options;
          instance.cloneWithNewParams = function(newParams) {
            return createHttpClient(axios, _objectSpread2(_objectSpread2({}, Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(options)), newParams));
          };
          if (config.onBeforeRequest) {
            instance.interceptors.request.use(config.onBeforeRequest);
          }
          if (typeof config.accessToken === "function") {
            asyncToken(instance, config.accessToken);
          }
          if (config.throttle) {
            rateLimitThrottle(instance, config.throttle);
          }
          rateLimit(instance, config.retryLimit);
          if (config.onError) {
            instance.interceptors.response.use(function(response) {
              return response;
            }, config.onError);
          }
          return instance;
        }
        function createRequestConfig(_ref) {
          var query = _ref.query;
          var config = {};
          delete query.resolveLinks;
          config.params = Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(query);
          return config;
        }
        function enforceObjPath(obj, path) {
          if (!(path in obj)) {
            var err = new Error();
            err.name = "PropertyMissing";
            err.message = "Required property ".concat(path, " missing from:\n\n").concat(JSON.stringify(obj), "\n\n");
            throw err;
          }
          return true;
        }
        function deepFreeze(object) {
          var propNames = Object.getOwnPropertyNames(object);
          var _iterator = _createForOfIteratorHelper(propNames), _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done; ) {
              var name = _step.value;
              var value = object[name];
              if (value && _typeof(value) === "object") {
                deepFreeze(value);
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
          return Object.freeze(object);
        }
        function freezeSys(obj) {
          deepFreeze(obj.sys || {});
          return obj;
        }
        function getBrowserOS() {
          var win = getWindow();
          if (!win) {
            return null;
          }
          var userAgent = win.navigator.userAgent;
          var platform = win.navigator.platform;
          var macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"];
          var windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"];
          var iosPlatforms = ["iPhone", "iPad", "iPod"];
          if (macosPlatforms.indexOf(platform) !== -1) {
            return "macOS";
          } else if (iosPlatforms.indexOf(platform) !== -1) {
            return "iOS";
          } else if (windowsPlatforms.indexOf(platform) !== -1) {
            return "Windows";
          } else if (/Android/.test(userAgent)) {
            return "Android";
          } else if (/Linux/.test(platform)) {
            return "Linux";
          }
          return null;
        }
        function getNodeOS() {
          var platform = process.platform || "linux";
          var version = process.version || "0.0.0";
          var platformMap = {
            android: "Android",
            aix: "Linux",
            darwin: "macOS",
            freebsd: "Linux",
            linux: "Linux",
            openbsd: "Linux",
            sunos: "Linux",
            win32: "Windows"
          };
          if (platform in platformMap) {
            return "".concat(platformMap[platform] || "Linux", "/").concat(version);
          }
          return null;
        }
        function getUserAgentHeader(sdk, application, integration, feature) {
          var headerParts = [];
          if (application) {
            headerParts.push("app ".concat(application));
          }
          if (integration) {
            headerParts.push("integration ".concat(integration));
          }
          if (feature) {
            headerParts.push("feature " + feature);
          }
          headerParts.push("sdk ".concat(sdk));
          var platform = null;
          try {
            if (isReactNative()) {
              platform = getBrowserOS();
              headerParts.push("platform ReactNative");
            } else if (isNode()) {
              platform = getNodeOS();
              headerParts.push("platform node.js/".concat(getNodeVersion()));
            } else {
              platform = getBrowserOS();
              headerParts.push("platform browser");
            }
          } catch (e) {
            platform = null;
          }
          if (platform) {
            headerParts.push("os ".concat(platform));
          }
          return "".concat(headerParts.filter(function(item) {
            return item !== "";
          }).join("; "), ";");
        }
        function toPlainObject(data) {
          return Object.defineProperty(data, "toPlainObject", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function value() {
              return Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(this);
            }
          });
        }
        function errorHandler(errorResponse) {
          var config = errorResponse.config, response = errorResponse.response;
          var errorName;
          if (config && config.headers && config.headers["Authorization"]) {
            var token = "...".concat(config.headers["Authorization"].toString().substr(-5));
            config.headers["Authorization"] = "Bearer ".concat(token);
          }
          if (!lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(response) || !lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(config)) {
            throw errorResponse;
          }
          var data = response === null || response === void 0 ? void 0 : response.data;
          var errorData = {
            status: response === null || response === void 0 ? void 0 : response.status,
            statusText: response === null || response === void 0 ? void 0 : response.statusText,
            message: "",
            details: {}
          };
          if (lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(config)) {
            errorData.request = {
              url: config.url,
              headers: config.headers,
              method: config.method,
              payloadData: config.data
            };
          }
          if (data && lodash_isplainobject__WEBPACK_IMPORTED_MODULE_4___default()(data)) {
            if ("requestId" in data) {
              errorData.requestId = data.requestId || "UNKNOWN";
            }
            if ("message" in data) {
              errorData.message = data.message || "";
            }
            if ("details" in data) {
              errorData.details = data.details || {};
            }
            if ("sys" in data) {
              if ("id" in data.sys) {
                errorName = data.sys.id;
              }
            }
          }
          var error = new Error();
          error.name = errorName && errorName !== "Unknown" ? errorName : "".concat(response === null || response === void 0 ? void 0 : response.status, " ").concat(response === null || response === void 0 ? void 0 : response.statusText);
          try {
            error.message = JSON.stringify(errorData, null, "  ");
          } catch (_unused) {
            var _errorData$message;
            error.message = (_errorData$message = errorData === null || errorData === void 0 ? void 0 : errorData.message) !== null && _errorData$message !== void 0 ? _errorData$message : "";
          }
          throw error;
        }
      },
      "../node_modules/debug/src/browser.js": function(module3, exports3, __webpack_require__) {
        exports3 = module3.exports = __webpack_require__("../node_modules/debug/src/debug.js");
        exports3.log = log;
        exports3.formatArgs = formatArgs;
        exports3.save = save;
        exports3.load = load;
        exports3.useColors = useColors;
        exports3.storage = typeof chrome != "undefined" && typeof chrome.storage != "undefined" ? chrome.storage.local : localstorage();
        exports3.colors = [
          "lightseagreen",
          "forestgreen",
          "goldenrod",
          "dodgerblue",
          "darkorchid",
          "crimson"
        ];
        function useColors() {
          if (typeof window !== "undefined" && window.process && window.process.type === "renderer") {
            return true;
          }
          return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
        }
        exports3.formatters.j = function(v) {
          try {
            return JSON.stringify(v);
          } catch (err) {
            return "[UnexpectedJSONParseError]: " + err.message;
          }
        };
        function formatArgs(args) {
          var useColors2 = this.useColors;
          args[0] = (useColors2 ? "%c" : "") + this.namespace + (useColors2 ? " %c" : " ") + args[0] + (useColors2 ? "%c " : " ") + "+" + exports3.humanize(this.diff);
          if (!useColors2)
            return;
          var c = "color: " + this.color;
          args.splice(1, 0, c, "color: inherit");
          var index = 0;
          var lastC = 0;
          args[0].replace(/%[a-zA-Z%]/g, function(match) {
            if (match === "%%")
              return;
            index++;
            if (match === "%c") {
              lastC = index;
            }
          });
          args.splice(lastC, 0, c);
        }
        function log() {
          return typeof console === "object" && console.log && Function.prototype.apply.call(console.log, console, arguments);
        }
        function save(namespaces) {
          try {
            if (namespaces == null) {
              exports3.storage.removeItem("debug");
            } else {
              exports3.storage.debug = namespaces;
            }
          } catch (e) {
          }
        }
        function load() {
          var r;
          try {
            r = exports3.storage.debug;
          } catch (e) {
          }
          if (!r && typeof process !== "undefined" && "env" in process) {
            r = process.env.DEBUG;
          }
          return r;
        }
        exports3.enable(load());
        function localstorage() {
          try {
            return window.localStorage;
          } catch (e) {
          }
        }
      },
      "../node_modules/debug/src/debug.js": function(module3, exports3, __webpack_require__) {
        exports3 = module3.exports = createDebug.debug = createDebug["default"] = createDebug;
        exports3.coerce = coerce;
        exports3.disable = disable;
        exports3.enable = enable;
        exports3.enabled = enabled;
        exports3.humanize = __webpack_require__("../node_modules/ms/index.js");
        exports3.names = [];
        exports3.skips = [];
        exports3.formatters = {};
        var prevTime;
        function selectColor(namespace) {
          var hash = 0, i;
          for (i in namespace) {
            hash = (hash << 5) - hash + namespace.charCodeAt(i);
            hash |= 0;
          }
          return exports3.colors[Math.abs(hash) % exports3.colors.length];
        }
        function createDebug(namespace) {
          function debug() {
            if (!debug.enabled)
              return;
            var self2 = debug;
            var curr = +new Date();
            var ms = curr - (prevTime || curr);
            self2.diff = ms;
            self2.prev = prevTime;
            self2.curr = curr;
            prevTime = curr;
            var args = new Array(arguments.length);
            for (var i = 0; i < args.length; i++) {
              args[i] = arguments[i];
            }
            args[0] = exports3.coerce(args[0]);
            if (typeof args[0] !== "string") {
              args.unshift("%O");
            }
            var index = 0;
            args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
              if (match === "%%")
                return match;
              index++;
              var formatter = exports3.formatters[format];
              if (typeof formatter === "function") {
                var val = args[index];
                match = formatter.call(self2, val);
                args.splice(index, 1);
                index--;
              }
              return match;
            });
            exports3.formatArgs.call(self2, args);
            var logFn = debug.log || exports3.log || console.log.bind(console);
            logFn.apply(self2, args);
          }
          debug.namespace = namespace;
          debug.enabled = exports3.enabled(namespace);
          debug.useColors = exports3.useColors();
          debug.color = selectColor(namespace);
          if (typeof exports3.init === "function") {
            exports3.init(debug);
          }
          return debug;
        }
        function enable(namespaces) {
          exports3.save(namespaces);
          exports3.names = [];
          exports3.skips = [];
          var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
          var len = split.length;
          for (var i = 0; i < len; i++) {
            if (!split[i])
              continue;
            namespaces = split[i].replace(/\*/g, ".*?");
            if (namespaces[0] === "-") {
              exports3.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
            } else {
              exports3.names.push(new RegExp("^" + namespaces + "$"));
            }
          }
        }
        function disable() {
          exports3.enable("");
        }
        function enabled(name) {
          var i, len;
          for (i = 0, len = exports3.skips.length; i < len; i++) {
            if (exports3.skips[i].test(name)) {
              return false;
            }
          }
          for (i = 0, len = exports3.names.length; i < len; i++) {
            if (exports3.names[i].test(name)) {
              return true;
            }
          }
          return false;
        }
        function coerce(val) {
          if (val instanceof Error)
            return val.stack || val.message;
          return val;
        }
      },
      "../node_modules/debug/src/index.js": function(module3, exports3, __webpack_require__) {
        if (typeof process !== "undefined" && process.type === "renderer") {
          module3.exports = __webpack_require__("../node_modules/debug/src/browser.js");
        } else {
          module3.exports = __webpack_require__("../node_modules/debug/src/node.js");
        }
      },
      "../node_modules/debug/src/node.js": function(module3, exports3, __webpack_require__) {
        var tty = __webpack_require__("tty");
        var util = __webpack_require__("util");
        exports3 = module3.exports = __webpack_require__("../node_modules/debug/src/debug.js");
        exports3.init = init;
        exports3.log = log;
        exports3.formatArgs = formatArgs;
        exports3.save = save;
        exports3.load = load;
        exports3.useColors = useColors;
        exports3.colors = [6, 2, 3, 4, 5, 1];
        exports3.inspectOpts = Object.keys(process.env).filter(function(key) {
          return /^debug_/i.test(key);
        }).reduce(function(obj, key) {
          var prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, function(_, k) {
            return k.toUpperCase();
          });
          var val = process.env[key];
          if (/^(yes|on|true|enabled)$/i.test(val))
            val = true;
          else if (/^(no|off|false|disabled)$/i.test(val))
            val = false;
          else if (val === "null")
            val = null;
          else
            val = Number(val);
          obj[prop] = val;
          return obj;
        }, {});
        var fd = parseInt(process.env.DEBUG_FD, 10) || 2;
        if (fd !== 1 && fd !== 2) {
          util.deprecate(function() {
          }, "except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)")();
        }
        var stream = fd === 1 ? process.stdout : fd === 2 ? process.stderr : createWritableStdioStream(fd);
        function useColors() {
          return "colors" in exports3.inspectOpts ? Boolean(exports3.inspectOpts.colors) : tty.isatty(fd);
        }
        exports3.formatters.o = function(v) {
          this.inspectOpts.colors = this.useColors;
          return util.inspect(v, this.inspectOpts).split("\n").map(function(str) {
            return str.trim();
          }).join(" ");
        };
        exports3.formatters.O = function(v) {
          this.inspectOpts.colors = this.useColors;
          return util.inspect(v, this.inspectOpts);
        };
        function formatArgs(args) {
          var name = this.namespace;
          var useColors2 = this.useColors;
          if (useColors2) {
            var c = this.color;
            var prefix = "  \x1B[3" + c + ";1m" + name + " \x1B[0m";
            args[0] = prefix + args[0].split("\n").join("\n" + prefix);
            args.push("\x1B[3" + c + "m+" + exports3.humanize(this.diff) + "\x1B[0m");
          } else {
            args[0] = new Date().toUTCString() + " " + name + " " + args[0];
          }
        }
        function log() {
          return stream.write(util.format.apply(util, arguments) + "\n");
        }
        function save(namespaces) {
          if (namespaces == null) {
            delete process.env.DEBUG;
          } else {
            process.env.DEBUG = namespaces;
          }
        }
        function load() {
          return process.env.DEBUG;
        }
        function createWritableStdioStream(fd2) {
          var stream2;
          var tty_wrap = process.binding("tty_wrap");
          switch (tty_wrap.guessHandleType(fd2)) {
            case "TTY":
              stream2 = new tty.WriteStream(fd2);
              stream2._type = "tty";
              if (stream2._handle && stream2._handle.unref) {
                stream2._handle.unref();
              }
              break;
            case "FILE":
              var fs = __webpack_require__("fs");
              stream2 = new fs.SyncWriteStream(fd2, { autoClose: false });
              stream2._type = "fs";
              break;
            case "PIPE":
            case "TCP":
              var net = __webpack_require__("net");
              stream2 = new net.Socket({
                fd: fd2,
                readable: false,
                writable: true
              });
              stream2.readable = false;
              stream2.read = null;
              stream2._type = "pipe";
              if (stream2._handle && stream2._handle.unref) {
                stream2._handle.unref();
              }
              break;
            default:
              throw new Error("Implement me. Unknown stream file type!");
          }
          stream2.fd = fd2;
          stream2._isStdio = true;
          return stream2;
        }
        function init(debug) {
          debug.inspectOpts = {};
          var keys = Object.keys(exports3.inspectOpts);
          for (var i = 0; i < keys.length; i++) {
            debug.inspectOpts[keys[i]] = exports3.inspectOpts[keys[i]];
          }
        }
        exports3.enable(load());
      },
      "../node_modules/delayed-stream/lib/delayed_stream.js": function(module3, exports3, __webpack_require__) {
        var Stream = __webpack_require__("stream").Stream;
        var util = __webpack_require__("util");
        module3.exports = DelayedStream;
        function DelayedStream() {
          this.source = null;
          this.dataSize = 0;
          this.maxDataSize = 1024 * 1024;
          this.pauseStream = true;
          this._maxDataSizeExceeded = false;
          this._released = false;
          this._bufferedEvents = [];
        }
        util.inherits(DelayedStream, Stream);
        DelayedStream.create = function(source, options) {
          var delayedStream = new this();
          options = options || {};
          for (var option in options) {
            delayedStream[option] = options[option];
          }
          delayedStream.source = source;
          var realEmit = source.emit;
          source.emit = function() {
            delayedStream._handleEmit(arguments);
            return realEmit.apply(source, arguments);
          };
          source.on("error", function() {
          });
          if (delayedStream.pauseStream) {
            source.pause();
          }
          return delayedStream;
        };
        Object.defineProperty(DelayedStream.prototype, "readable", {
          configurable: true,
          enumerable: true,
          get: function() {
            return this.source.readable;
          }
        });
        DelayedStream.prototype.setEncoding = function() {
          return this.source.setEncoding.apply(this.source, arguments);
        };
        DelayedStream.prototype.resume = function() {
          if (!this._released) {
            this.release();
          }
          this.source.resume();
        };
        DelayedStream.prototype.pause = function() {
          this.source.pause();
        };
        DelayedStream.prototype.release = function() {
          this._released = true;
          this._bufferedEvents.forEach(function(args) {
            this.emit.apply(this, args);
          }.bind(this));
          this._bufferedEvents = [];
        };
        DelayedStream.prototype.pipe = function() {
          var r = Stream.prototype.pipe.apply(this, arguments);
          this.resume();
          return r;
        };
        DelayedStream.prototype._handleEmit = function(args) {
          if (this._released) {
            this.emit.apply(this, args);
            return;
          }
          if (args[0] === "data") {
            this.dataSize += args[1].length;
            this._checkIfMaxDataSizeExceeded();
          }
          this._bufferedEvents.push(args);
        };
        DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
          if (this._maxDataSizeExceeded) {
            return;
          }
          if (this.dataSize <= this.maxDataSize) {
            return;
          }
          this._maxDataSizeExceeded = true;
          var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
          this.emit("error", new Error(message));
        };
      },
      "../node_modules/fast-copy/dist/fast-copy.esm.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return copy;
        });
        var toStringFunction = Function.prototype.toString;
        var create = Object.create, defineProperty = Object.defineProperty, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor, getOwnPropertyNames = Object.getOwnPropertyNames, getOwnPropertySymbols = Object.getOwnPropertySymbols, getPrototypeOf$1 = Object.getPrototypeOf;
        var _a = Object.prototype, hasOwnProperty = _a.hasOwnProperty, propertyIsEnumerable = _a.propertyIsEnumerable;
        var SYMBOL_PROPERTIES = typeof getOwnPropertySymbols === "function";
        var WEAK_MAP = typeof WeakMap === "function";
        var createCache = function() {
          if (WEAK_MAP) {
            return function() {
              return /* @__PURE__ */ new WeakMap();
            };
          }
          var Cache = function() {
            function Cache2() {
              this._keys = [];
              this._values = [];
            }
            Cache2.prototype.has = function(key) {
              return !!~this._keys.indexOf(key);
            };
            Cache2.prototype.get = function(key) {
              return this._values[this._keys.indexOf(key)];
            };
            Cache2.prototype.set = function(key, value) {
              this._keys.push(key);
              this._values.push(value);
            };
            return Cache2;
          }();
          return function() {
            return new Cache();
          };
        }();
        var getCleanClone = function(object, realm) {
          var prototype = object.__proto__ || getPrototypeOf$1(object);
          if (!prototype) {
            return create(null);
          }
          var Constructor = prototype.constructor;
          if (Constructor === realm.Object) {
            return prototype === realm.Object.prototype ? {} : create(prototype);
          }
          if (~toStringFunction.call(Constructor).indexOf("[native code]")) {
            try {
              return new Constructor();
            } catch (_a2) {
            }
          }
          return create(prototype);
        };
        var getObjectCloneLoose = function(object, realm, handleCopy, cache) {
          var clone = getCleanClone(object, realm);
          cache.set(object, clone);
          for (var key in object) {
            if (hasOwnProperty.call(object, key)) {
              clone[key] = handleCopy(object[key], cache);
            }
          }
          if (SYMBOL_PROPERTIES) {
            var symbols = getOwnPropertySymbols(object);
            for (var index = 0, length_1 = symbols.length, symbol = void 0; index < length_1; ++index) {
              symbol = symbols[index];
              if (propertyIsEnumerable.call(object, symbol)) {
                clone[symbol] = handleCopy(object[symbol], cache);
              }
            }
          }
          return clone;
        };
        var getObjectCloneStrict = function(object, realm, handleCopy, cache) {
          var clone = getCleanClone(object, realm);
          cache.set(object, clone);
          var properties = SYMBOL_PROPERTIES ? getOwnPropertyNames(object).concat(getOwnPropertySymbols(object)) : getOwnPropertyNames(object);
          for (var index = 0, length_2 = properties.length, property = void 0, descriptor = void 0; index < length_2; ++index) {
            property = properties[index];
            if (property !== "callee" && property !== "caller") {
              descriptor = getOwnPropertyDescriptor(object, property);
              if (descriptor) {
                if (!descriptor.get && !descriptor.set) {
                  descriptor.value = handleCopy(object[property], cache);
                }
                try {
                  defineProperty(clone, property, descriptor);
                } catch (error) {
                  clone[property] = descriptor.value;
                }
              } else {
                clone[property] = handleCopy(object[property], cache);
              }
            }
          }
          return clone;
        };
        var getRegExpFlags = function(regExp) {
          var flags = "";
          if (regExp.global) {
            flags += "g";
          }
          if (regExp.ignoreCase) {
            flags += "i";
          }
          if (regExp.multiline) {
            flags += "m";
          }
          if (regExp.unicode) {
            flags += "u";
          }
          if (regExp.sticky) {
            flags += "y";
          }
          return flags;
        };
        var isArray = Array.isArray;
        var getPrototypeOf = Object.getPrototypeOf;
        var GLOBAL_THIS = function() {
          if (typeof globalThis !== "undefined") {
            return globalThis;
          }
          if (typeof self !== "undefined") {
            return self;
          }
          if (typeof window !== "undefined") {
            return window;
          }
          if (typeof global !== "undefined") {
            return global;
          }
          if (console && console.error) {
            console.error('Unable to locate global object, returning "this".');
          }
          return this;
        }();
        function copy(value, options) {
          var isStrict = !!(options && options.isStrict);
          var realm = options && options.realm || GLOBAL_THIS;
          var getObjectClone = isStrict ? getObjectCloneStrict : getObjectCloneLoose;
          var handleCopy = function(value2, cache) {
            if (!value2 || typeof value2 !== "object") {
              return value2;
            }
            if (cache.has(value2)) {
              return cache.get(value2);
            }
            var prototype = value2.__proto__ || getPrototypeOf(value2);
            var Constructor = prototype && prototype.constructor;
            if (!Constructor || Constructor === realm.Object) {
              return getObjectClone(value2, realm, handleCopy, cache);
            }
            var clone;
            if (isArray(value2)) {
              if (isStrict) {
                return getObjectCloneStrict(value2, realm, handleCopy, cache);
              }
              clone = new Constructor();
              cache.set(value2, clone);
              for (var index = 0, length_1 = value2.length; index < length_1; ++index) {
                clone[index] = handleCopy(value2[index], cache);
              }
              return clone;
            }
            if (value2 instanceof realm.Date) {
              return new Constructor(value2.getTime());
            }
            if (value2 instanceof realm.RegExp) {
              clone = new Constructor(value2.source, value2.flags || getRegExpFlags(value2));
              clone.lastIndex = value2.lastIndex;
              return clone;
            }
            if (realm.Map && value2 instanceof realm.Map) {
              clone = new Constructor();
              cache.set(value2, clone);
              value2.forEach(function(value3, key) {
                clone.set(key, handleCopy(value3, cache));
              });
              return clone;
            }
            if (realm.Set && value2 instanceof realm.Set) {
              clone = new Constructor();
              cache.set(value2, clone);
              value2.forEach(function(value3) {
                clone.add(handleCopy(value3, cache));
              });
              return clone;
            }
            if (realm.Blob && value2 instanceof realm.Blob) {
              return value2.slice(0, value2.size, value2.type);
            }
            if (realm.Buffer && realm.Buffer.isBuffer(value2)) {
              clone = realm.Buffer.allocUnsafe ? realm.Buffer.allocUnsafe(value2.length) : new Constructor(value2.length);
              cache.set(value2, clone);
              value2.copy(clone);
              return clone;
            }
            if (realm.ArrayBuffer) {
              if (realm.ArrayBuffer.isView(value2)) {
                clone = new Constructor(value2.buffer.slice(0));
                cache.set(value2, clone);
                return clone;
              }
              if (value2 instanceof realm.ArrayBuffer) {
                clone = value2.slice(0);
                cache.set(value2, clone);
                return clone;
              }
            }
            if (typeof value2.then === "function" || value2 instanceof Error || realm.WeakMap && value2 instanceof realm.WeakMap || realm.WeakSet && value2 instanceof realm.WeakSet) {
              return value2;
            }
            return getObjectClone(value2, realm, handleCopy, cache);
          };
          return handleCopy(value, createCache());
        }
        copy.default = copy;
        copy.strict = function strictCopy(value, options) {
          return copy(value, {
            isStrict: true,
            realm: options ? options.realm : void 0
          });
        };
      },
      "../node_modules/follow-redirects/debug.js": function(module3, exports3, __webpack_require__) {
        var debug;
        module3.exports = function() {
          if (!debug) {
            try {
              debug = __webpack_require__("../node_modules/debug/src/index.js")("follow-redirects");
            } catch (error) {
            }
            if (typeof debug !== "function") {
              debug = function() {
              };
            }
          }
          debug.apply(null, arguments);
        };
      },
      "../node_modules/follow-redirects/index.js": function(module3, exports3, __webpack_require__) {
        var url = __webpack_require__("url");
        var URL = url.URL;
        var http = __webpack_require__("http");
        var https = __webpack_require__("https");
        var Writable = __webpack_require__("stream").Writable;
        var assert = __webpack_require__("assert");
        var debug = __webpack_require__("../node_modules/follow-redirects/debug.js");
        var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
        var eventHandlers = /* @__PURE__ */ Object.create(null);
        events.forEach(function(event) {
          eventHandlers[event] = function(arg1, arg2, arg3) {
            this._redirectable.emit(event, arg1, arg2, arg3);
          };
        });
        var RedirectionError = createErrorType("ERR_FR_REDIRECTION_FAILURE", "Redirected request failed");
        var TooManyRedirectsError = createErrorType("ERR_FR_TOO_MANY_REDIRECTS", "Maximum number of redirects exceeded");
        var MaxBodyLengthExceededError = createErrorType("ERR_FR_MAX_BODY_LENGTH_EXCEEDED", "Request body larger than maxBodyLength limit");
        var WriteAfterEndError = createErrorType("ERR_STREAM_WRITE_AFTER_END", "write after end");
        function RedirectableRequest(options, responseCallback) {
          Writable.call(this);
          this._sanitizeOptions(options);
          this._options = options;
          this._ended = false;
          this._ending = false;
          this._redirectCount = 0;
          this._redirects = [];
          this._requestBodyLength = 0;
          this._requestBodyBuffers = [];
          if (responseCallback) {
            this.on("response", responseCallback);
          }
          var self2 = this;
          this._onNativeResponse = function(response) {
            self2._processResponse(response);
          };
          this._performRequest();
        }
        RedirectableRequest.prototype = Object.create(Writable.prototype);
        RedirectableRequest.prototype.abort = function() {
          abortRequest(this._currentRequest);
          this.emit("abort");
        };
        RedirectableRequest.prototype.write = function(data, encoding, callback) {
          if (this._ending) {
            throw new WriteAfterEndError();
          }
          if (!(typeof data === "string" || typeof data === "object" && "length" in data)) {
            throw new TypeError("data should be a string, Buffer or Uint8Array");
          }
          if (typeof encoding === "function") {
            callback = encoding;
            encoding = null;
          }
          if (data.length === 0) {
            if (callback) {
              callback();
            }
            return;
          }
          if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
            this._requestBodyLength += data.length;
            this._requestBodyBuffers.push({ data, encoding });
            this._currentRequest.write(data, encoding, callback);
          } else {
            this.emit("error", new MaxBodyLengthExceededError());
            this.abort();
          }
        };
        RedirectableRequest.prototype.end = function(data, encoding, callback) {
          if (typeof data === "function") {
            callback = data;
            data = encoding = null;
          } else if (typeof encoding === "function") {
            callback = encoding;
            encoding = null;
          }
          if (!data) {
            this._ended = this._ending = true;
            this._currentRequest.end(null, null, callback);
          } else {
            var self2 = this;
            var currentRequest = this._currentRequest;
            this.write(data, encoding, function() {
              self2._ended = true;
              currentRequest.end(null, null, callback);
            });
            this._ending = true;
          }
        };
        RedirectableRequest.prototype.setHeader = function(name, value) {
          this._options.headers[name] = value;
          this._currentRequest.setHeader(name, value);
        };
        RedirectableRequest.prototype.removeHeader = function(name) {
          delete this._options.headers[name];
          this._currentRequest.removeHeader(name);
        };
        RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
          var self2 = this;
          function destroyOnTimeout(socket) {
            socket.setTimeout(msecs);
            socket.removeListener("timeout", socket.destroy);
            socket.addListener("timeout", socket.destroy);
          }
          function startTimer(socket) {
            if (self2._timeout) {
              clearTimeout(self2._timeout);
            }
            self2._timeout = setTimeout(function() {
              self2.emit("timeout");
              clearTimer();
            }, msecs);
            destroyOnTimeout(socket);
          }
          function clearTimer() {
            if (self2._timeout) {
              clearTimeout(self2._timeout);
              self2._timeout = null;
            }
            self2.removeListener("abort", clearTimer);
            self2.removeListener("error", clearTimer);
            self2.removeListener("response", clearTimer);
            if (callback) {
              self2.removeListener("timeout", callback);
            }
            if (!self2.socket) {
              self2._currentRequest.removeListener("socket", startTimer);
            }
          }
          if (callback) {
            this.on("timeout", callback);
          }
          if (this.socket) {
            startTimer(this.socket);
          } else {
            this._currentRequest.once("socket", startTimer);
          }
          this.on("socket", destroyOnTimeout);
          this.on("abort", clearTimer);
          this.on("error", clearTimer);
          this.on("response", clearTimer);
          return this;
        };
        [
          "flushHeaders",
          "getHeader",
          "setNoDelay",
          "setSocketKeepAlive"
        ].forEach(function(method) {
          RedirectableRequest.prototype[method] = function(a, b) {
            return this._currentRequest[method](a, b);
          };
        });
        ["aborted", "connection", "socket"].forEach(function(property) {
          Object.defineProperty(RedirectableRequest.prototype, property, {
            get: function() {
              return this._currentRequest[property];
            }
          });
        });
        RedirectableRequest.prototype._sanitizeOptions = function(options) {
          if (!options.headers) {
            options.headers = {};
          }
          if (options.host) {
            if (!options.hostname) {
              options.hostname = options.host;
            }
            delete options.host;
          }
          if (!options.pathname && options.path) {
            var searchPos = options.path.indexOf("?");
            if (searchPos < 0) {
              options.pathname = options.path;
            } else {
              options.pathname = options.path.substring(0, searchPos);
              options.search = options.path.substring(searchPos);
            }
          }
        };
        RedirectableRequest.prototype._performRequest = function() {
          var protocol = this._options.protocol;
          var nativeProtocol = this._options.nativeProtocols[protocol];
          if (!nativeProtocol) {
            this.emit("error", new TypeError("Unsupported protocol " + protocol));
            return;
          }
          if (this._options.agents) {
            var scheme = protocol.substr(0, protocol.length - 1);
            this._options.agent = this._options.agents[scheme];
          }
          var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
          this._currentUrl = url.format(this._options);
          request._redirectable = this;
          for (var e = 0; e < events.length; e++) {
            request.on(events[e], eventHandlers[events[e]]);
          }
          if (this._isRedirect) {
            var i = 0;
            var self2 = this;
            var buffers = this._requestBodyBuffers;
            (function writeNext(error) {
              if (request === self2._currentRequest) {
                if (error) {
                  self2.emit("error", error);
                } else if (i < buffers.length) {
                  var buffer = buffers[i++];
                  if (!request.finished) {
                    request.write(buffer.data, buffer.encoding, writeNext);
                  }
                } else if (self2._ended) {
                  request.end();
                }
              }
            })();
          }
        };
        RedirectableRequest.prototype._processResponse = function(response) {
          var statusCode = response.statusCode;
          if (this._options.trackRedirects) {
            this._redirects.push({
              url: this._currentUrl,
              headers: response.headers,
              statusCode
            });
          }
          var location = response.headers.location;
          if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
            response.responseUrl = this._currentUrl;
            response.redirects = this._redirects;
            this.emit("response", response);
            this._requestBodyBuffers = [];
            return;
          }
          abortRequest(this._currentRequest);
          response.destroy();
          if (++this._redirectCount > this._options.maxRedirects) {
            this.emit("error", new TooManyRedirectsError());
            return;
          }
          if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
            this._options.method = "GET";
            this._requestBodyBuffers = [];
            removeMatchingHeaders(/^content-/i, this._options.headers);
          }
          var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
          var currentUrlParts = url.parse(this._currentUrl);
          var currentHost = currentHostHeader || currentUrlParts.host;
          var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url.format(Object.assign(currentUrlParts, { host: currentHost }));
          var redirectUrl;
          try {
            redirectUrl = url.resolve(currentUrl, location);
          } catch (cause) {
            this.emit("error", new RedirectionError(cause));
            return;
          }
          debug("redirecting to", redirectUrl);
          this._isRedirect = true;
          var redirectUrlParts = url.parse(redirectUrl);
          Object.assign(this._options, redirectUrlParts);
          if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
            removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
          }
          if (typeof this._options.beforeRedirect === "function") {
            var responseDetails = { headers: response.headers };
            try {
              this._options.beforeRedirect.call(null, this._options, responseDetails);
            } catch (err) {
              this.emit("error", err);
              return;
            }
            this._sanitizeOptions(this._options);
          }
          try {
            this._performRequest();
          } catch (cause) {
            this.emit("error", new RedirectionError(cause));
          }
        };
        function wrap(protocols) {
          var exports4 = {
            maxRedirects: 21,
            maxBodyLength: 10 * 1024 * 1024
          };
          var nativeProtocols = {};
          Object.keys(protocols).forEach(function(scheme) {
            var protocol = scheme + ":";
            var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
            var wrappedProtocol = exports4[scheme] = Object.create(nativeProtocol);
            function request(input, options, callback) {
              if (typeof input === "string") {
                var urlStr = input;
                try {
                  input = urlToOptions(new URL(urlStr));
                } catch (err) {
                  input = url.parse(urlStr);
                }
              } else if (URL && input instanceof URL) {
                input = urlToOptions(input);
              } else {
                callback = options;
                options = input;
                input = { protocol };
              }
              if (typeof options === "function") {
                callback = options;
                options = null;
              }
              options = Object.assign({
                maxRedirects: exports4.maxRedirects,
                maxBodyLength: exports4.maxBodyLength
              }, input, options);
              options.nativeProtocols = nativeProtocols;
              assert.equal(options.protocol, protocol, "protocol mismatch");
              debug("options", options);
              return new RedirectableRequest(options, callback);
            }
            function get(input, options, callback) {
              var wrappedRequest = wrappedProtocol.request(input, options, callback);
              wrappedRequest.end();
              return wrappedRequest;
            }
            Object.defineProperties(wrappedProtocol, {
              request: { value: request, configurable: true, enumerable: true, writable: true },
              get: { value: get, configurable: true, enumerable: true, writable: true }
            });
          });
          return exports4;
        }
        function noop() {
        }
        function urlToOptions(urlObject) {
          var options = {
            protocol: urlObject.protocol,
            hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
            hash: urlObject.hash,
            search: urlObject.search,
            pathname: urlObject.pathname,
            path: urlObject.pathname + urlObject.search,
            href: urlObject.href
          };
          if (urlObject.port !== "") {
            options.port = Number(urlObject.port);
          }
          return options;
        }
        function removeMatchingHeaders(regex, headers) {
          var lastValue;
          for (var header in headers) {
            if (regex.test(header)) {
              lastValue = headers[header];
              delete headers[header];
            }
          }
          return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
        }
        function createErrorType(code, defaultMessage) {
          function CustomError(cause) {
            Error.captureStackTrace(this, this.constructor);
            if (!cause) {
              this.message = defaultMessage;
            } else {
              this.message = defaultMessage + ": " + cause.message;
              this.cause = cause;
            }
          }
          CustomError.prototype = new Error();
          CustomError.prototype.constructor = CustomError;
          CustomError.prototype.name = "Error [" + code + "]";
          CustomError.prototype.code = code;
          return CustomError;
        }
        function abortRequest(request) {
          for (var e = 0; e < events.length; e++) {
            request.removeListener(events[e], eventHandlers[events[e]]);
          }
          request.on("error", noop);
          request.abort();
        }
        function isSubdomain(subdomain, domain) {
          const dot = subdomain.length - domain.length - 1;
          return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
        }
        module3.exports = wrap({ http, https });
        module3.exports.wrap = wrap;
      },
      "../node_modules/function-bind/implementation.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
        var slice = Array.prototype.slice;
        var toStr = Object.prototype.toString;
        var funcType = "[object Function]";
        module3.exports = function bind(that) {
          var target = this;
          if (typeof target !== "function" || toStr.call(target) !== funcType) {
            throw new TypeError(ERROR_MESSAGE + target);
          }
          var args = slice.call(arguments, 1);
          var bound;
          var binder = function() {
            if (this instanceof bound) {
              var result = target.apply(this, args.concat(slice.call(arguments)));
              if (Object(result) === result) {
                return result;
              }
              return this;
            } else {
              return target.apply(that, args.concat(slice.call(arguments)));
            }
          };
          var boundLength = Math.max(0, target.length - args.length);
          var boundArgs = [];
          for (var i = 0; i < boundLength; i++) {
            boundArgs.push("$" + i);
          }
          bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
          if (target.prototype) {
            var Empty = function Empty2() {
            };
            Empty.prototype = target.prototype;
            bound.prototype = new Empty();
            Empty.prototype = null;
          }
          return bound;
        };
      },
      "../node_modules/function-bind/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var implementation = __webpack_require__("../node_modules/function-bind/implementation.js");
        module3.exports = Function.prototype.bind || implementation;
      },
      "../node_modules/get-intrinsic/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var undefined2;
        var $SyntaxError = SyntaxError;
        var $Function = Function;
        var $TypeError = TypeError;
        var getEvalledConstructor = function(expressionSyntax) {
          try {
            return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
          } catch (e) {
          }
        };
        var $gOPD = Object.getOwnPropertyDescriptor;
        if ($gOPD) {
          try {
            $gOPD({}, "");
          } catch (e) {
            $gOPD = null;
          }
        }
        var throwTypeError = function() {
          throw new $TypeError();
        };
        var ThrowTypeError = $gOPD ? function() {
          try {
            arguments.callee;
            return throwTypeError;
          } catch (calleeThrows) {
            try {
              return $gOPD(arguments, "callee").get;
            } catch (gOPDthrows) {
              return throwTypeError;
            }
          }
        }() : throwTypeError;
        var hasSymbols = __webpack_require__("../node_modules/has-symbols/index.js")();
        var getProto = Object.getPrototypeOf || function(x) {
          return x.__proto__;
        };
        var needsEval = {};
        var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
        var INTRINSICS = {
          "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
          "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
          "%AsyncFromSyncIteratorPrototype%": undefined2,
          "%AsyncFunction%": needsEval,
          "%AsyncGenerator%": needsEval,
          "%AsyncGeneratorFunction%": needsEval,
          "%AsyncIteratorPrototype%": needsEval,
          "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
          "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
          "%Boolean%": Boolean,
          "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": Error,
          "%eval%": eval,
          "%EvalError%": EvalError,
          "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
          "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
          "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
          "%Function%": $Function,
          "%GeneratorFunction%": needsEval,
          "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
          "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
          "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
          "%JSON%": typeof JSON === "object" ? JSON : undefined2,
          "%Map%": typeof Map === "undefined" ? undefined2 : Map,
          "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": Object,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
          "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
          "%RangeError%": RangeError,
          "%ReferenceError%": ReferenceError,
          "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
          "%RegExp%": RegExp,
          "%Set%": typeof Set === "undefined" ? undefined2 : Set,
          "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
          "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
          "%Symbol%": hasSymbols ? Symbol : undefined2,
          "%SyntaxError%": $SyntaxError,
          "%ThrowTypeError%": ThrowTypeError,
          "%TypedArray%": TypedArray,
          "%TypeError%": $TypeError,
          "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
          "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
          "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
          "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
          "%URIError%": URIError,
          "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
          "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
          "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
        };
        var doEval = function doEval2(name) {
          var value;
          if (name === "%AsyncFunction%") {
            value = getEvalledConstructor("async function () {}");
          } else if (name === "%GeneratorFunction%") {
            value = getEvalledConstructor("function* () {}");
          } else if (name === "%AsyncGeneratorFunction%") {
            value = getEvalledConstructor("async function* () {}");
          } else if (name === "%AsyncGenerator%") {
            var fn = doEval2("%AsyncGeneratorFunction%");
            if (fn) {
              value = fn.prototype;
            }
          } else if (name === "%AsyncIteratorPrototype%") {
            var gen = doEval2("%AsyncGenerator%");
            if (gen) {
              value = getProto(gen.prototype);
            }
          }
          INTRINSICS[name] = value;
          return value;
        };
        var LEGACY_ALIASES = {
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"]
        };
        var bind = __webpack_require__("../node_modules/function-bind/index.js");
        var hasOwn = __webpack_require__("../node_modules/has/src/index.js");
        var $concat = bind.call(Function.call, Array.prototype.concat);
        var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
        var $replace = bind.call(Function.call, String.prototype.replace);
        var $strSlice = bind.call(Function.call, String.prototype.slice);
        var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
        var reEscapeChar = /\\(\\)?/g;
        var stringToPath = function stringToPath2(string) {
          var first = $strSlice(string, 0, 1);
          var last = $strSlice(string, -1);
          if (first === "%" && last !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
          } else if (last === "%" && first !== "%") {
            throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
          }
          var result = [];
          $replace(string, rePropName, function(match, number, quote, subString) {
            result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
          });
          return result;
        };
        var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
          var intrinsicName = name;
          var alias;
          if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
            alias = LEGACY_ALIASES[intrinsicName];
            intrinsicName = "%" + alias[0] + "%";
          }
          if (hasOwn(INTRINSICS, intrinsicName)) {
            var value = INTRINSICS[intrinsicName];
            if (value === needsEval) {
              value = doEval(intrinsicName);
            }
            if (typeof value === "undefined" && !allowMissing) {
              throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
            }
            return {
              alias,
              name: intrinsicName,
              value
            };
          }
          throw new $SyntaxError("intrinsic " + name + " does not exist!");
        };
        module3.exports = function GetIntrinsic(name, allowMissing) {
          if (typeof name !== "string" || name.length === 0) {
            throw new $TypeError("intrinsic name must be a non-empty string");
          }
          if (arguments.length > 1 && typeof allowMissing !== "boolean") {
            throw new $TypeError('"allowMissing" argument must be a boolean');
          }
          var parts = stringToPath(name);
          var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
          var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
          var intrinsicRealName = intrinsic.name;
          var value = intrinsic.value;
          var skipFurtherCaching = false;
          var alias = intrinsic.alias;
          if (alias) {
            intrinsicBaseName = alias[0];
            $spliceApply(parts, $concat([0, 1], alias));
          }
          for (var i = 1, isOwn = true; i < parts.length; i += 1) {
            var part = parts[i];
            var first = $strSlice(part, 0, 1);
            var last = $strSlice(part, -1);
            if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
              throw new $SyntaxError("property names with quotes must have matching quotes");
            }
            if (part === "constructor" || !isOwn) {
              skipFurtherCaching = true;
            }
            intrinsicBaseName += "." + part;
            intrinsicRealName = "%" + intrinsicBaseName + "%";
            if (hasOwn(INTRINSICS, intrinsicRealName)) {
              value = INTRINSICS[intrinsicRealName];
            } else if (value != null) {
              if (!(part in value)) {
                if (!allowMissing) {
                  throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                }
                return void 0;
              }
              if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                  value = desc.get;
                } else {
                  value = value[part];
                }
              } else {
                isOwn = hasOwn(value, part);
                value = value[part];
              }
              if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
              }
            }
          }
          return value;
        };
      },
      "../node_modules/has-symbols/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var origSymbol = typeof Symbol !== "undefined" && Symbol;
        var hasSymbolSham = __webpack_require__("../node_modules/has-symbols/shams.js");
        module3.exports = function hasNativeSymbols() {
          if (typeof origSymbol !== "function") {
            return false;
          }
          if (typeof Symbol !== "function") {
            return false;
          }
          if (typeof origSymbol("foo") !== "symbol") {
            return false;
          }
          if (typeof Symbol("bar") !== "symbol") {
            return false;
          }
          return hasSymbolSham();
        };
      },
      "../node_modules/has-symbols/shams.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        module3.exports = function hasSymbols() {
          if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
            return false;
          }
          if (typeof Symbol.iterator === "symbol") {
            return true;
          }
          var obj = {};
          var sym = Symbol("test");
          var symObj = Object(sym);
          if (typeof sym === "string") {
            return false;
          }
          if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
            return false;
          }
          if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
            return false;
          }
          var symVal = 42;
          obj[sym] = symVal;
          for (sym in obj) {
            return false;
          }
          if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
            return false;
          }
          if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
            return false;
          }
          var syms = Object.getOwnPropertySymbols(obj);
          if (syms.length !== 1 || syms[0] !== sym) {
            return false;
          }
          if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
            return false;
          }
          if (typeof Object.getOwnPropertyDescriptor === "function") {
            var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
            if (descriptor.value !== symVal || descriptor.enumerable !== true) {
              return false;
            }
          }
          return true;
        };
      },
      "../node_modules/has/src/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var bind = __webpack_require__("../node_modules/function-bind/index.js");
        module3.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);
      },
      "../node_modules/json-stringify-safe/stringify.js": function(module3, exports3) {
        exports3 = module3.exports = stringify;
        exports3.getSerialize = serializer;
        function stringify(obj, replacer, spaces, cycleReplacer) {
          return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);
        }
        function serializer(replacer, cycleReplacer) {
          var stack = [], keys = [];
          if (cycleReplacer == null)
            cycleReplacer = function(key, value) {
              if (stack[0] === value)
                return "[Circular ~]";
              return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
            };
          return function(key, value) {
            if (stack.length > 0) {
              var thisPos = stack.indexOf(this);
              ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
              ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
              if (~stack.indexOf(value))
                value = cycleReplacer.call(this, key, value);
            } else
              stack.push(value);
            return replacer == null ? value : replacer.call(this, key, value);
          };
        }
      },
      "../node_modules/lodash.isplainobject/index.js": function(module3, exports3) {
        var objectTag = "[object Object]";
        function isHostObject(value) {
          var result = false;
          if (value != null && typeof value.toString != "function") {
            try {
              result = !!(value + "");
            } catch (e) {
            }
          }
          return result;
        }
        function overArg(func, transform) {
          return function(arg) {
            return func(transform(arg));
          };
        }
        var funcProto = Function.prototype, objectProto = Object.prototype;
        var funcToString = funcProto.toString;
        var hasOwnProperty = objectProto.hasOwnProperty;
        var objectCtorString = funcToString.call(Object);
        var objectToString = objectProto.toString;
        var getPrototype = overArg(Object.getPrototypeOf, Object);
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }
        function isPlainObject(value) {
          if (!isObjectLike(value) || objectToString.call(value) != objectTag || isHostObject(value)) {
            return false;
          }
          var proto = getPrototype(value);
          if (proto === null) {
            return true;
          }
          var Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
          return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
        }
        module3.exports = isPlainObject;
      },
      "../node_modules/lodash.isstring/index.js": function(module3, exports3) {
        var stringTag = "[object String]";
        var objectProto = Object.prototype;
        var objectToString = objectProto.toString;
        var isArray = Array.isArray;
        function isObjectLike(value) {
          return !!value && typeof value == "object";
        }
        function isString(value) {
          return typeof value == "string" || !isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag;
        }
        module3.exports = isString;
      },
      "../node_modules/mime-db/db.json": function(module3) {
        module3.exports = JSON.parse('{"application/1d-interleaved-parityfec":{"source":"iana"},"application/3gpdash-qoe-report+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/3gpp-ims+xml":{"source":"iana","compressible":true},"application/3gpphal+json":{"source":"iana","compressible":true},"application/3gpphalforms+json":{"source":"iana","compressible":true},"application/a2l":{"source":"iana"},"application/ace+cbor":{"source":"iana"},"application/activemessage":{"source":"iana"},"application/activity+json":{"source":"iana","compressible":true},"application/alto-costmap+json":{"source":"iana","compressible":true},"application/alto-costmapfilter+json":{"source":"iana","compressible":true},"application/alto-directory+json":{"source":"iana","compressible":true},"application/alto-endpointcost+json":{"source":"iana","compressible":true},"application/alto-endpointcostparams+json":{"source":"iana","compressible":true},"application/alto-endpointprop+json":{"source":"iana","compressible":true},"application/alto-endpointpropparams+json":{"source":"iana","compressible":true},"application/alto-error+json":{"source":"iana","compressible":true},"application/alto-networkmap+json":{"source":"iana","compressible":true},"application/alto-networkmapfilter+json":{"source":"iana","compressible":true},"application/alto-updatestreamcontrol+json":{"source":"iana","compressible":true},"application/alto-updatestreamparams+json":{"source":"iana","compressible":true},"application/aml":{"source":"iana"},"application/andrew-inset":{"source":"iana","extensions":["ez"]},"application/applefile":{"source":"iana"},"application/applixware":{"source":"apache","extensions":["aw"]},"application/at+jwt":{"source":"iana"},"application/atf":{"source":"iana"},"application/atfx":{"source":"iana"},"application/atom+xml":{"source":"iana","compressible":true,"extensions":["atom"]},"application/atomcat+xml":{"source":"iana","compressible":true,"extensions":["atomcat"]},"application/atomdeleted+xml":{"source":"iana","compressible":true,"extensions":["atomdeleted"]},"application/atomicmail":{"source":"iana"},"application/atomsvc+xml":{"source":"iana","compressible":true,"extensions":["atomsvc"]},"application/atsc-dwd+xml":{"source":"iana","compressible":true,"extensions":["dwd"]},"application/atsc-dynamic-event-message":{"source":"iana"},"application/atsc-held+xml":{"source":"iana","compressible":true,"extensions":["held"]},"application/atsc-rdt+json":{"source":"iana","compressible":true},"application/atsc-rsat+xml":{"source":"iana","compressible":true,"extensions":["rsat"]},"application/atxml":{"source":"iana"},"application/auth-policy+xml":{"source":"iana","compressible":true},"application/bacnet-xdd+zip":{"source":"iana","compressible":false},"application/batch-smtp":{"source":"iana"},"application/bdoc":{"compressible":false,"extensions":["bdoc"]},"application/beep+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/calendar+json":{"source":"iana","compressible":true},"application/calendar+xml":{"source":"iana","compressible":true,"extensions":["xcs"]},"application/call-completion":{"source":"iana"},"application/cals-1840":{"source":"iana"},"application/captive+json":{"source":"iana","compressible":true},"application/cbor":{"source":"iana"},"application/cbor-seq":{"source":"iana"},"application/cccex":{"source":"iana"},"application/ccmp+xml":{"source":"iana","compressible":true},"application/ccxml+xml":{"source":"iana","compressible":true,"extensions":["ccxml"]},"application/cdfx+xml":{"source":"iana","compressible":true,"extensions":["cdfx"]},"application/cdmi-capability":{"source":"iana","extensions":["cdmia"]},"application/cdmi-container":{"source":"iana","extensions":["cdmic"]},"application/cdmi-domain":{"source":"iana","extensions":["cdmid"]},"application/cdmi-object":{"source":"iana","extensions":["cdmio"]},"application/cdmi-queue":{"source":"iana","extensions":["cdmiq"]},"application/cdni":{"source":"iana"},"application/cea":{"source":"iana"},"application/cea-2018+xml":{"source":"iana","compressible":true},"application/cellml+xml":{"source":"iana","compressible":true},"application/cfw":{"source":"iana"},"application/clr":{"source":"iana"},"application/clue+xml":{"source":"iana","compressible":true},"application/clue_info+xml":{"source":"iana","compressible":true},"application/cms":{"source":"iana"},"application/cnrp+xml":{"source":"iana","compressible":true},"application/coap-group+json":{"source":"iana","compressible":true},"application/coap-payload":{"source":"iana"},"application/commonground":{"source":"iana"},"application/conference-info+xml":{"source":"iana","compressible":true},"application/cose":{"source":"iana"},"application/cose-key":{"source":"iana"},"application/cose-key-set":{"source":"iana"},"application/cpl+xml":{"source":"iana","compressible":true},"application/csrattrs":{"source":"iana"},"application/csta+xml":{"source":"iana","compressible":true},"application/cstadata+xml":{"source":"iana","compressible":true},"application/csvm+json":{"source":"iana","compressible":true},"application/cu-seeme":{"source":"apache","extensions":["cu"]},"application/cwt":{"source":"iana"},"application/cybercash":{"source":"iana"},"application/dart":{"compressible":true},"application/dash+xml":{"source":"iana","compressible":true,"extensions":["mpd"]},"application/dashdelta":{"source":"iana"},"application/davmount+xml":{"source":"iana","compressible":true,"extensions":["davmount"]},"application/dca-rft":{"source":"iana"},"application/dcd":{"source":"iana"},"application/dec-dx":{"source":"iana"},"application/dialog-info+xml":{"source":"iana","compressible":true},"application/dicom":{"source":"iana"},"application/dicom+json":{"source":"iana","compressible":true},"application/dicom+xml":{"source":"iana","compressible":true},"application/dii":{"source":"iana"},"application/dit":{"source":"iana"},"application/dns":{"source":"iana"},"application/dns+json":{"source":"iana","compressible":true},"application/dns-message":{"source":"iana"},"application/docbook+xml":{"source":"apache","compressible":true,"extensions":["dbk"]},"application/dots+cbor":{"source":"iana"},"application/dskpp+xml":{"source":"iana","compressible":true},"application/dssc+der":{"source":"iana","extensions":["dssc"]},"application/dssc+xml":{"source":"iana","compressible":true,"extensions":["xdssc"]},"application/dvcs":{"source":"iana"},"application/ecmascript":{"source":"iana","compressible":true,"extensions":["es","ecma"]},"application/edi-consent":{"source":"iana"},"application/edi-x12":{"source":"iana","compressible":false},"application/edifact":{"source":"iana","compressible":false},"application/efi":{"source":"iana"},"application/elm+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/elm+xml":{"source":"iana","compressible":true},"application/emergencycalldata.cap+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/emergencycalldata.comment+xml":{"source":"iana","compressible":true},"application/emergencycalldata.control+xml":{"source":"iana","compressible":true},"application/emergencycalldata.deviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.ecall.msd":{"source":"iana"},"application/emergencycalldata.providerinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.serviceinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.subscriberinfo+xml":{"source":"iana","compressible":true},"application/emergencycalldata.veds+xml":{"source":"iana","compressible":true},"application/emma+xml":{"source":"iana","compressible":true,"extensions":["emma"]},"application/emotionml+xml":{"source":"iana","compressible":true,"extensions":["emotionml"]},"application/encaprtp":{"source":"iana"},"application/epp+xml":{"source":"iana","compressible":true},"application/epub+zip":{"source":"iana","compressible":false,"extensions":["epub"]},"application/eshop":{"source":"iana"},"application/exi":{"source":"iana","extensions":["exi"]},"application/expect-ct-report+json":{"source":"iana","compressible":true},"application/express":{"source":"iana","extensions":["exp"]},"application/fastinfoset":{"source":"iana"},"application/fastsoap":{"source":"iana"},"application/fdt+xml":{"source":"iana","compressible":true,"extensions":["fdt"]},"application/fhir+json":{"source":"iana","charset":"UTF-8","compressible":true},"application/fhir+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/fido.trusted-apps+json":{"compressible":true},"application/fits":{"source":"iana"},"application/flexfec":{"source":"iana"},"application/font-sfnt":{"source":"iana"},"application/font-tdpfr":{"source":"iana","extensions":["pfr"]},"application/font-woff":{"source":"iana","compressible":false},"application/framework-attributes+xml":{"source":"iana","compressible":true},"application/geo+json":{"source":"iana","compressible":true,"extensions":["geojson"]},"application/geo+json-seq":{"source":"iana"},"application/geopackage+sqlite3":{"source":"iana"},"application/geoxacml+xml":{"source":"iana","compressible":true},"application/gltf-buffer":{"source":"iana"},"application/gml+xml":{"source":"iana","compressible":true,"extensions":["gml"]},"application/gpx+xml":{"source":"apache","compressible":true,"extensions":["gpx"]},"application/gxf":{"source":"apache","extensions":["gxf"]},"application/gzip":{"source":"iana","compressible":false,"extensions":["gz"]},"application/h224":{"source":"iana"},"application/held+xml":{"source":"iana","compressible":true},"application/hjson":{"extensions":["hjson"]},"application/http":{"source":"iana"},"application/hyperstudio":{"source":"iana","extensions":["stk"]},"application/ibe-key-request+xml":{"source":"iana","compressible":true},"application/ibe-pkg-reply+xml":{"source":"iana","compressible":true},"application/ibe-pp-data":{"source":"iana"},"application/iges":{"source":"iana"},"application/im-iscomposing+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/index":{"source":"iana"},"application/index.cmd":{"source":"iana"},"application/index.obj":{"source":"iana"},"application/index.response":{"source":"iana"},"application/index.vnd":{"source":"iana"},"application/inkml+xml":{"source":"iana","compressible":true,"extensions":["ink","inkml"]},"application/iotp":{"source":"iana"},"application/ipfix":{"source":"iana","extensions":["ipfix"]},"application/ipp":{"source":"iana"},"application/isup":{"source":"iana"},"application/its+xml":{"source":"iana","compressible":true,"extensions":["its"]},"application/java-archive":{"source":"apache","compressible":false,"extensions":["jar","war","ear"]},"application/java-serialized-object":{"source":"apache","compressible":false,"extensions":["ser"]},"application/java-vm":{"source":"apache","compressible":false,"extensions":["class"]},"application/javascript":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["js","mjs"]},"application/jf2feed+json":{"source":"iana","compressible":true},"application/jose":{"source":"iana"},"application/jose+json":{"source":"iana","compressible":true},"application/jrd+json":{"source":"iana","compressible":true},"application/jscalendar+json":{"source":"iana","compressible":true},"application/json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["json","map"]},"application/json-patch+json":{"source":"iana","compressible":true},"application/json-seq":{"source":"iana"},"application/json5":{"extensions":["json5"]},"application/jsonml+json":{"source":"apache","compressible":true,"extensions":["jsonml"]},"application/jwk+json":{"source":"iana","compressible":true},"application/jwk-set+json":{"source":"iana","compressible":true},"application/jwt":{"source":"iana"},"application/kpml-request+xml":{"source":"iana","compressible":true},"application/kpml-response+xml":{"source":"iana","compressible":true},"application/ld+json":{"source":"iana","compressible":true,"extensions":["jsonld"]},"application/lgr+xml":{"source":"iana","compressible":true,"extensions":["lgr"]},"application/link-format":{"source":"iana"},"application/load-control+xml":{"source":"iana","compressible":true},"application/lost+xml":{"source":"iana","compressible":true,"extensions":["lostxml"]},"application/lostsync+xml":{"source":"iana","compressible":true},"application/lpf+zip":{"source":"iana","compressible":false},"application/lxf":{"source":"iana"},"application/mac-binhex40":{"source":"iana","extensions":["hqx"]},"application/mac-compactpro":{"source":"apache","extensions":["cpt"]},"application/macwriteii":{"source":"iana"},"application/mads+xml":{"source":"iana","compressible":true,"extensions":["mads"]},"application/manifest+json":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["webmanifest"]},"application/marc":{"source":"iana","extensions":["mrc"]},"application/marcxml+xml":{"source":"iana","compressible":true,"extensions":["mrcx"]},"application/mathematica":{"source":"iana","extensions":["ma","nb","mb"]},"application/mathml+xml":{"source":"iana","compressible":true,"extensions":["mathml"]},"application/mathml-content+xml":{"source":"iana","compressible":true},"application/mathml-presentation+xml":{"source":"iana","compressible":true},"application/mbms-associated-procedure-description+xml":{"source":"iana","compressible":true},"application/mbms-deregister+xml":{"source":"iana","compressible":true},"application/mbms-envelope+xml":{"source":"iana","compressible":true},"application/mbms-msk+xml":{"source":"iana","compressible":true},"application/mbms-msk-response+xml":{"source":"iana","compressible":true},"application/mbms-protection-description+xml":{"source":"iana","compressible":true},"application/mbms-reception-report+xml":{"source":"iana","compressible":true},"application/mbms-register+xml":{"source":"iana","compressible":true},"application/mbms-register-response+xml":{"source":"iana","compressible":true},"application/mbms-schedule+xml":{"source":"iana","compressible":true},"application/mbms-user-service-description+xml":{"source":"iana","compressible":true},"application/mbox":{"source":"iana","extensions":["mbox"]},"application/media-policy-dataset+xml":{"source":"iana","compressible":true},"application/media_control+xml":{"source":"iana","compressible":true},"application/mediaservercontrol+xml":{"source":"iana","compressible":true,"extensions":["mscml"]},"application/merge-patch+json":{"source":"iana","compressible":true},"application/metalink+xml":{"source":"apache","compressible":true,"extensions":["metalink"]},"application/metalink4+xml":{"source":"iana","compressible":true,"extensions":["meta4"]},"application/mets+xml":{"source":"iana","compressible":true,"extensions":["mets"]},"application/mf4":{"source":"iana"},"application/mikey":{"source":"iana"},"application/mipc":{"source":"iana"},"application/missing-blocks+cbor-seq":{"source":"iana"},"application/mmt-aei+xml":{"source":"iana","compressible":true,"extensions":["maei"]},"application/mmt-usd+xml":{"source":"iana","compressible":true,"extensions":["musd"]},"application/mods+xml":{"source":"iana","compressible":true,"extensions":["mods"]},"application/moss-keys":{"source":"iana"},"application/moss-signature":{"source":"iana"},"application/mosskey-data":{"source":"iana"},"application/mosskey-request":{"source":"iana"},"application/mp21":{"source":"iana","extensions":["m21","mp21"]},"application/mp4":{"source":"iana","extensions":["mp4s","m4p"]},"application/mpeg4-generic":{"source":"iana"},"application/mpeg4-iod":{"source":"iana"},"application/mpeg4-iod-xmt":{"source":"iana"},"application/mrb-consumer+xml":{"source":"iana","compressible":true},"application/mrb-publish+xml":{"source":"iana","compressible":true},"application/msc-ivr+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msc-mixer+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/msword":{"source":"iana","compressible":false,"extensions":["doc","dot"]},"application/mud+json":{"source":"iana","compressible":true},"application/multipart-core":{"source":"iana"},"application/mxf":{"source":"iana","extensions":["mxf"]},"application/n-quads":{"source":"iana","extensions":["nq"]},"application/n-triples":{"source":"iana","extensions":["nt"]},"application/nasdata":{"source":"iana"},"application/news-checkgroups":{"source":"iana","charset":"US-ASCII"},"application/news-groupinfo":{"source":"iana","charset":"US-ASCII"},"application/news-transmission":{"source":"iana"},"application/nlsml+xml":{"source":"iana","compressible":true},"application/node":{"source":"iana","extensions":["cjs"]},"application/nss":{"source":"iana"},"application/oauth-authz-req+jwt":{"source":"iana"},"application/ocsp-request":{"source":"iana"},"application/ocsp-response":{"source":"iana"},"application/octet-stream":{"source":"iana","compressible":false,"extensions":["bin","dms","lrf","mar","so","dist","distz","pkg","bpk","dump","elc","deploy","exe","dll","deb","dmg","iso","img","msi","msp","msm","buffer"]},"application/oda":{"source":"iana","extensions":["oda"]},"application/odm+xml":{"source":"iana","compressible":true},"application/odx":{"source":"iana"},"application/oebps-package+xml":{"source":"iana","compressible":true,"extensions":["opf"]},"application/ogg":{"source":"iana","compressible":false,"extensions":["ogx"]},"application/omdoc+xml":{"source":"apache","compressible":true,"extensions":["omdoc"]},"application/onenote":{"source":"apache","extensions":["onetoc","onetoc2","onetmp","onepkg"]},"application/opc-nodeset+xml":{"source":"iana","compressible":true},"application/oscore":{"source":"iana"},"application/oxps":{"source":"iana","extensions":["oxps"]},"application/p21":{"source":"iana"},"application/p21+zip":{"source":"iana","compressible":false},"application/p2p-overlay+xml":{"source":"iana","compressible":true,"extensions":["relo"]},"application/parityfec":{"source":"iana"},"application/passport":{"source":"iana"},"application/patch-ops-error+xml":{"source":"iana","compressible":true,"extensions":["xer"]},"application/pdf":{"source":"iana","compressible":false,"extensions":["pdf"]},"application/pdx":{"source":"iana"},"application/pem-certificate-chain":{"source":"iana"},"application/pgp-encrypted":{"source":"iana","compressible":false,"extensions":["pgp"]},"application/pgp-keys":{"source":"iana"},"application/pgp-signature":{"source":"iana","extensions":["asc","sig"]},"application/pics-rules":{"source":"apache","extensions":["prf"]},"application/pidf+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pidf-diff+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/pkcs10":{"source":"iana","extensions":["p10"]},"application/pkcs12":{"source":"iana"},"application/pkcs7-mime":{"source":"iana","extensions":["p7m","p7c"]},"application/pkcs7-signature":{"source":"iana","extensions":["p7s"]},"application/pkcs8":{"source":"iana","extensions":["p8"]},"application/pkcs8-encrypted":{"source":"iana"},"application/pkix-attr-cert":{"source":"iana","extensions":["ac"]},"application/pkix-cert":{"source":"iana","extensions":["cer"]},"application/pkix-crl":{"source":"iana","extensions":["crl"]},"application/pkix-pkipath":{"source":"iana","extensions":["pkipath"]},"application/pkixcmp":{"source":"iana","extensions":["pki"]},"application/pls+xml":{"source":"iana","compressible":true,"extensions":["pls"]},"application/poc-settings+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/postscript":{"source":"iana","compressible":true,"extensions":["ai","eps","ps"]},"application/ppsp-tracker+json":{"source":"iana","compressible":true},"application/problem+json":{"source":"iana","compressible":true},"application/problem+xml":{"source":"iana","compressible":true},"application/provenance+xml":{"source":"iana","compressible":true,"extensions":["provx"]},"application/prs.alvestrand.titrax-sheet":{"source":"iana"},"application/prs.cww":{"source":"iana","extensions":["cww"]},"application/prs.cyn":{"source":"iana","charset":"7-BIT"},"application/prs.hpub+zip":{"source":"iana","compressible":false},"application/prs.nprend":{"source":"iana"},"application/prs.plucker":{"source":"iana"},"application/prs.rdf-xml-crypt":{"source":"iana"},"application/prs.xsf+xml":{"source":"iana","compressible":true},"application/pskc+xml":{"source":"iana","compressible":true,"extensions":["pskcxml"]},"application/pvd+json":{"source":"iana","compressible":true},"application/qsig":{"source":"iana"},"application/raml+yaml":{"compressible":true,"extensions":["raml"]},"application/raptorfec":{"source":"iana"},"application/rdap+json":{"source":"iana","compressible":true},"application/rdf+xml":{"source":"iana","compressible":true,"extensions":["rdf","owl"]},"application/reginfo+xml":{"source":"iana","compressible":true,"extensions":["rif"]},"application/relax-ng-compact-syntax":{"source":"iana","extensions":["rnc"]},"application/remote-printing":{"source":"iana"},"application/reputon+json":{"source":"iana","compressible":true},"application/resource-lists+xml":{"source":"iana","compressible":true,"extensions":["rl"]},"application/resource-lists-diff+xml":{"source":"iana","compressible":true,"extensions":["rld"]},"application/rfc+xml":{"source":"iana","compressible":true},"application/riscos":{"source":"iana"},"application/rlmi+xml":{"source":"iana","compressible":true},"application/rls-services+xml":{"source":"iana","compressible":true,"extensions":["rs"]},"application/route-apd+xml":{"source":"iana","compressible":true,"extensions":["rapd"]},"application/route-s-tsid+xml":{"source":"iana","compressible":true,"extensions":["sls"]},"application/route-usd+xml":{"source":"iana","compressible":true,"extensions":["rusd"]},"application/rpki-ghostbusters":{"source":"iana","extensions":["gbr"]},"application/rpki-manifest":{"source":"iana","extensions":["mft"]},"application/rpki-publication":{"source":"iana"},"application/rpki-roa":{"source":"iana","extensions":["roa"]},"application/rpki-updown":{"source":"iana"},"application/rsd+xml":{"source":"apache","compressible":true,"extensions":["rsd"]},"application/rss+xml":{"source":"apache","compressible":true,"extensions":["rss"]},"application/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"application/rtploopback":{"source":"iana"},"application/rtx":{"source":"iana"},"application/samlassertion+xml":{"source":"iana","compressible":true},"application/samlmetadata+xml":{"source":"iana","compressible":true},"application/sarif+json":{"source":"iana","compressible":true},"application/sarif-external-properties+json":{"source":"iana","compressible":true},"application/sbe":{"source":"iana"},"application/sbml+xml":{"source":"iana","compressible":true,"extensions":["sbml"]},"application/scaip+xml":{"source":"iana","compressible":true},"application/scim+json":{"source":"iana","compressible":true},"application/scvp-cv-request":{"source":"iana","extensions":["scq"]},"application/scvp-cv-response":{"source":"iana","extensions":["scs"]},"application/scvp-vp-request":{"source":"iana","extensions":["spq"]},"application/scvp-vp-response":{"source":"iana","extensions":["spp"]},"application/sdp":{"source":"iana","extensions":["sdp"]},"application/secevent+jwt":{"source":"iana"},"application/senml+cbor":{"source":"iana"},"application/senml+json":{"source":"iana","compressible":true},"application/senml+xml":{"source":"iana","compressible":true,"extensions":["senmlx"]},"application/senml-etch+cbor":{"source":"iana"},"application/senml-etch+json":{"source":"iana","compressible":true},"application/senml-exi":{"source":"iana"},"application/sensml+cbor":{"source":"iana"},"application/sensml+json":{"source":"iana","compressible":true},"application/sensml+xml":{"source":"iana","compressible":true,"extensions":["sensmlx"]},"application/sensml-exi":{"source":"iana"},"application/sep+xml":{"source":"iana","compressible":true},"application/sep-exi":{"source":"iana"},"application/session-info":{"source":"iana"},"application/set-payment":{"source":"iana"},"application/set-payment-initiation":{"source":"iana","extensions":["setpay"]},"application/set-registration":{"source":"iana"},"application/set-registration-initiation":{"source":"iana","extensions":["setreg"]},"application/sgml":{"source":"iana"},"application/sgml-open-catalog":{"source":"iana"},"application/shf+xml":{"source":"iana","compressible":true,"extensions":["shf"]},"application/sieve":{"source":"iana","extensions":["siv","sieve"]},"application/simple-filter+xml":{"source":"iana","compressible":true},"application/simple-message-summary":{"source":"iana"},"application/simplesymbolcontainer":{"source":"iana"},"application/sipc":{"source":"iana"},"application/slate":{"source":"iana"},"application/smil":{"source":"iana"},"application/smil+xml":{"source":"iana","compressible":true,"extensions":["smi","smil"]},"application/smpte336m":{"source":"iana"},"application/soap+fastinfoset":{"source":"iana"},"application/soap+xml":{"source":"iana","compressible":true},"application/sparql-query":{"source":"iana","extensions":["rq"]},"application/sparql-results+xml":{"source":"iana","compressible":true,"extensions":["srx"]},"application/spdx+json":{"source":"iana","compressible":true},"application/spirits-event+xml":{"source":"iana","compressible":true},"application/sql":{"source":"iana"},"application/srgs":{"source":"iana","extensions":["gram"]},"application/srgs+xml":{"source":"iana","compressible":true,"extensions":["grxml"]},"application/sru+xml":{"source":"iana","compressible":true,"extensions":["sru"]},"application/ssdl+xml":{"source":"apache","compressible":true,"extensions":["ssdl"]},"application/ssml+xml":{"source":"iana","compressible":true,"extensions":["ssml"]},"application/stix+json":{"source":"iana","compressible":true},"application/swid+xml":{"source":"iana","compressible":true,"extensions":["swidtag"]},"application/tamp-apex-update":{"source":"iana"},"application/tamp-apex-update-confirm":{"source":"iana"},"application/tamp-community-update":{"source":"iana"},"application/tamp-community-update-confirm":{"source":"iana"},"application/tamp-error":{"source":"iana"},"application/tamp-sequence-adjust":{"source":"iana"},"application/tamp-sequence-adjust-confirm":{"source":"iana"},"application/tamp-status-query":{"source":"iana"},"application/tamp-status-response":{"source":"iana"},"application/tamp-update":{"source":"iana"},"application/tamp-update-confirm":{"source":"iana"},"application/tar":{"compressible":true},"application/taxii+json":{"source":"iana","compressible":true},"application/td+json":{"source":"iana","compressible":true},"application/tei+xml":{"source":"iana","compressible":true,"extensions":["tei","teicorpus"]},"application/tetra_isi":{"source":"iana"},"application/thraud+xml":{"source":"iana","compressible":true,"extensions":["tfi"]},"application/timestamp-query":{"source":"iana"},"application/timestamp-reply":{"source":"iana"},"application/timestamped-data":{"source":"iana","extensions":["tsd"]},"application/tlsrpt+gzip":{"source":"iana"},"application/tlsrpt+json":{"source":"iana","compressible":true},"application/tnauthlist":{"source":"iana"},"application/token-introspection+jwt":{"source":"iana"},"application/toml":{"compressible":true,"extensions":["toml"]},"application/trickle-ice-sdpfrag":{"source":"iana"},"application/trig":{"source":"iana","extensions":["trig"]},"application/ttml+xml":{"source":"iana","compressible":true,"extensions":["ttml"]},"application/tve-trigger":{"source":"iana"},"application/tzif":{"source":"iana"},"application/tzif-leap":{"source":"iana"},"application/ubjson":{"compressible":false,"extensions":["ubj"]},"application/ulpfec":{"source":"iana"},"application/urc-grpsheet+xml":{"source":"iana","compressible":true},"application/urc-ressheet+xml":{"source":"iana","compressible":true,"extensions":["rsheet"]},"application/urc-targetdesc+xml":{"source":"iana","compressible":true,"extensions":["td"]},"application/urc-uisocketdesc+xml":{"source":"iana","compressible":true},"application/vcard+json":{"source":"iana","compressible":true},"application/vcard+xml":{"source":"iana","compressible":true},"application/vemmi":{"source":"iana"},"application/vividence.scriptfile":{"source":"apache"},"application/vnd.1000minds.decision-model+xml":{"source":"iana","compressible":true,"extensions":["1km"]},"application/vnd.3gpp-prose+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-prose-pc3ch+xml":{"source":"iana","compressible":true},"application/vnd.3gpp-v2x-local-service-information":{"source":"iana"},"application/vnd.3gpp.5gnas":{"source":"iana"},"application/vnd.3gpp.access-transfer-events+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.bsf+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gmop+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.gtpc":{"source":"iana"},"application/vnd.3gpp.interworking-data":{"source":"iana"},"application/vnd.3gpp.lpp":{"source":"iana"},"application/vnd.3gpp.mc-signalling-ear":{"source":"iana"},"application/vnd.3gpp.mcdata-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-payload":{"source":"iana"},"application/vnd.3gpp.mcdata-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-signalling":{"source":"iana"},"application/vnd.3gpp.mcdata-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcdata-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-floor-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-signed+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-ue-init-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcptt-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-command+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-affiliation-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-location-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-mbms-usage-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-service-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-transmission-request+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-ue-config+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mcvideo-user-profile+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.mid-call+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ngap":{"source":"iana"},"application/vnd.3gpp.pfcp":{"source":"iana"},"application/vnd.3gpp.pic-bw-large":{"source":"iana","extensions":["plb"]},"application/vnd.3gpp.pic-bw-small":{"source":"iana","extensions":["psb"]},"application/vnd.3gpp.pic-bw-var":{"source":"iana","extensions":["pvb"]},"application/vnd.3gpp.s1ap":{"source":"iana"},"application/vnd.3gpp.sms":{"source":"iana"},"application/vnd.3gpp.sms+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-ext+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.srvcc-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.state-and-event-info+xml":{"source":"iana","compressible":true},"application/vnd.3gpp.ussd+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.bcmcsinfo+xml":{"source":"iana","compressible":true},"application/vnd.3gpp2.sms":{"source":"iana"},"application/vnd.3gpp2.tcap":{"source":"iana","extensions":["tcap"]},"application/vnd.3lightssoftware.imagescal":{"source":"iana"},"application/vnd.3m.post-it-notes":{"source":"iana","extensions":["pwn"]},"application/vnd.accpac.simply.aso":{"source":"iana","extensions":["aso"]},"application/vnd.accpac.simply.imp":{"source":"iana","extensions":["imp"]},"application/vnd.acucobol":{"source":"iana","extensions":["acu"]},"application/vnd.acucorp":{"source":"iana","extensions":["atc","acutc"]},"application/vnd.adobe.air-application-installer-package+zip":{"source":"apache","compressible":false,"extensions":["air"]},"application/vnd.adobe.flash.movie":{"source":"iana"},"application/vnd.adobe.formscentral.fcdt":{"source":"iana","extensions":["fcdt"]},"application/vnd.adobe.fxp":{"source":"iana","extensions":["fxp","fxpl"]},"application/vnd.adobe.partial-upload":{"source":"iana"},"application/vnd.adobe.xdp+xml":{"source":"iana","compressible":true,"extensions":["xdp"]},"application/vnd.adobe.xfdf":{"source":"iana","extensions":["xfdf"]},"application/vnd.aether.imp":{"source":"iana"},"application/vnd.afpc.afplinedata":{"source":"iana"},"application/vnd.afpc.afplinedata-pagedef":{"source":"iana"},"application/vnd.afpc.cmoca-cmresource":{"source":"iana"},"application/vnd.afpc.foca-charset":{"source":"iana"},"application/vnd.afpc.foca-codedfont":{"source":"iana"},"application/vnd.afpc.foca-codepage":{"source":"iana"},"application/vnd.afpc.modca":{"source":"iana"},"application/vnd.afpc.modca-cmtable":{"source":"iana"},"application/vnd.afpc.modca-formdef":{"source":"iana"},"application/vnd.afpc.modca-mediummap":{"source":"iana"},"application/vnd.afpc.modca-objectcontainer":{"source":"iana"},"application/vnd.afpc.modca-overlay":{"source":"iana"},"application/vnd.afpc.modca-pagesegment":{"source":"iana"},"application/vnd.age":{"source":"iana","extensions":["age"]},"application/vnd.ah-barcode":{"source":"iana"},"application/vnd.ahead.space":{"source":"iana","extensions":["ahead"]},"application/vnd.airzip.filesecure.azf":{"source":"iana","extensions":["azf"]},"application/vnd.airzip.filesecure.azs":{"source":"iana","extensions":["azs"]},"application/vnd.amadeus+json":{"source":"iana","compressible":true},"application/vnd.amazon.ebook":{"source":"apache","extensions":["azw"]},"application/vnd.amazon.mobi8-ebook":{"source":"iana"},"application/vnd.americandynamics.acc":{"source":"iana","extensions":["acc"]},"application/vnd.amiga.ami":{"source":"iana","extensions":["ami"]},"application/vnd.amundsen.maze+xml":{"source":"iana","compressible":true},"application/vnd.android.ota":{"source":"iana"},"application/vnd.android.package-archive":{"source":"apache","compressible":false,"extensions":["apk"]},"application/vnd.anki":{"source":"iana"},"application/vnd.anser-web-certificate-issue-initiation":{"source":"iana","extensions":["cii"]},"application/vnd.anser-web-funds-transfer-initiation":{"source":"apache","extensions":["fti"]},"application/vnd.antix.game-component":{"source":"iana","extensions":["atx"]},"application/vnd.apache.arrow.file":{"source":"iana"},"application/vnd.apache.arrow.stream":{"source":"iana"},"application/vnd.apache.thrift.binary":{"source":"iana"},"application/vnd.apache.thrift.compact":{"source":"iana"},"application/vnd.apache.thrift.json":{"source":"iana"},"application/vnd.api+json":{"source":"iana","compressible":true},"application/vnd.aplextor.warrp+json":{"source":"iana","compressible":true},"application/vnd.apothekende.reservation+json":{"source":"iana","compressible":true},"application/vnd.apple.installer+xml":{"source":"iana","compressible":true,"extensions":["mpkg"]},"application/vnd.apple.keynote":{"source":"iana","extensions":["key"]},"application/vnd.apple.mpegurl":{"source":"iana","extensions":["m3u8"]},"application/vnd.apple.numbers":{"source":"iana","extensions":["numbers"]},"application/vnd.apple.pages":{"source":"iana","extensions":["pages"]},"application/vnd.apple.pkpass":{"compressible":false,"extensions":["pkpass"]},"application/vnd.arastra.swi":{"source":"iana"},"application/vnd.aristanetworks.swi":{"source":"iana","extensions":["swi"]},"application/vnd.artisan+json":{"source":"iana","compressible":true},"application/vnd.artsquare":{"source":"iana"},"application/vnd.astraea-software.iota":{"source":"iana","extensions":["iota"]},"application/vnd.audiograph":{"source":"iana","extensions":["aep"]},"application/vnd.autopackage":{"source":"iana"},"application/vnd.avalon+json":{"source":"iana","compressible":true},"application/vnd.avistar+xml":{"source":"iana","compressible":true},"application/vnd.balsamiq.bmml+xml":{"source":"iana","compressible":true,"extensions":["bmml"]},"application/vnd.balsamiq.bmpr":{"source":"iana"},"application/vnd.banana-accounting":{"source":"iana"},"application/vnd.bbf.usp.error":{"source":"iana"},"application/vnd.bbf.usp.msg":{"source":"iana"},"application/vnd.bbf.usp.msg+json":{"source":"iana","compressible":true},"application/vnd.bekitzur-stech+json":{"source":"iana","compressible":true},"application/vnd.bint.med-content":{"source":"iana"},"application/vnd.biopax.rdf+xml":{"source":"iana","compressible":true},"application/vnd.blink-idb-value-wrapper":{"source":"iana"},"application/vnd.blueice.multipass":{"source":"iana","extensions":["mpm"]},"application/vnd.bluetooth.ep.oob":{"source":"iana"},"application/vnd.bluetooth.le.oob":{"source":"iana"},"application/vnd.bmi":{"source":"iana","extensions":["bmi"]},"application/vnd.bpf":{"source":"iana"},"application/vnd.bpf3":{"source":"iana"},"application/vnd.businessobjects":{"source":"iana","extensions":["rep"]},"application/vnd.byu.uapi+json":{"source":"iana","compressible":true},"application/vnd.cab-jscript":{"source":"iana"},"application/vnd.canon-cpdl":{"source":"iana"},"application/vnd.canon-lips":{"source":"iana"},"application/vnd.capasystems-pg+json":{"source":"iana","compressible":true},"application/vnd.cendio.thinlinc.clientconf":{"source":"iana"},"application/vnd.century-systems.tcp_stream":{"source":"iana"},"application/vnd.chemdraw+xml":{"source":"iana","compressible":true,"extensions":["cdxml"]},"application/vnd.chess-pgn":{"source":"iana"},"application/vnd.chipnuts.karaoke-mmd":{"source":"iana","extensions":["mmd"]},"application/vnd.ciedi":{"source":"iana"},"application/vnd.cinderella":{"source":"iana","extensions":["cdy"]},"application/vnd.cirpack.isdn-ext":{"source":"iana"},"application/vnd.citationstyles.style+xml":{"source":"iana","compressible":true,"extensions":["csl"]},"application/vnd.claymore":{"source":"iana","extensions":["cla"]},"application/vnd.cloanto.rp9":{"source":"iana","extensions":["rp9"]},"application/vnd.clonk.c4group":{"source":"iana","extensions":["c4g","c4d","c4f","c4p","c4u"]},"application/vnd.cluetrust.cartomobile-config":{"source":"iana","extensions":["c11amc"]},"application/vnd.cluetrust.cartomobile-config-pkg":{"source":"iana","extensions":["c11amz"]},"application/vnd.coffeescript":{"source":"iana"},"application/vnd.collabio.xodocuments.document":{"source":"iana"},"application/vnd.collabio.xodocuments.document-template":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation":{"source":"iana"},"application/vnd.collabio.xodocuments.presentation-template":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet":{"source":"iana"},"application/vnd.collabio.xodocuments.spreadsheet-template":{"source":"iana"},"application/vnd.collection+json":{"source":"iana","compressible":true},"application/vnd.collection.doc+json":{"source":"iana","compressible":true},"application/vnd.collection.next+json":{"source":"iana","compressible":true},"application/vnd.comicbook+zip":{"source":"iana","compressible":false},"application/vnd.comicbook-rar":{"source":"iana"},"application/vnd.commerce-battelle":{"source":"iana"},"application/vnd.commonspace":{"source":"iana","extensions":["csp"]},"application/vnd.contact.cmsg":{"source":"iana","extensions":["cdbcmsg"]},"application/vnd.coreos.ignition+json":{"source":"iana","compressible":true},"application/vnd.cosmocaller":{"source":"iana","extensions":["cmc"]},"application/vnd.crick.clicker":{"source":"iana","extensions":["clkx"]},"application/vnd.crick.clicker.keyboard":{"source":"iana","extensions":["clkk"]},"application/vnd.crick.clicker.palette":{"source":"iana","extensions":["clkp"]},"application/vnd.crick.clicker.template":{"source":"iana","extensions":["clkt"]},"application/vnd.crick.clicker.wordbank":{"source":"iana","extensions":["clkw"]},"application/vnd.criticaltools.wbs+xml":{"source":"iana","compressible":true,"extensions":["wbs"]},"application/vnd.cryptii.pipe+json":{"source":"iana","compressible":true},"application/vnd.crypto-shade-file":{"source":"iana"},"application/vnd.cryptomator.encrypted":{"source":"iana"},"application/vnd.cryptomator.vault":{"source":"iana"},"application/vnd.ctc-posml":{"source":"iana","extensions":["pml"]},"application/vnd.ctct.ws+xml":{"source":"iana","compressible":true},"application/vnd.cups-pdf":{"source":"iana"},"application/vnd.cups-postscript":{"source":"iana"},"application/vnd.cups-ppd":{"source":"iana","extensions":["ppd"]},"application/vnd.cups-raster":{"source":"iana"},"application/vnd.cups-raw":{"source":"iana"},"application/vnd.curl":{"source":"iana"},"application/vnd.curl.car":{"source":"apache","extensions":["car"]},"application/vnd.curl.pcurl":{"source":"apache","extensions":["pcurl"]},"application/vnd.cyan.dean.root+xml":{"source":"iana","compressible":true},"application/vnd.cybank":{"source":"iana"},"application/vnd.cyclonedx+json":{"source":"iana","compressible":true},"application/vnd.cyclonedx+xml":{"source":"iana","compressible":true},"application/vnd.d2l.coursepackage1p0+zip":{"source":"iana","compressible":false},"application/vnd.d3m-dataset":{"source":"iana"},"application/vnd.d3m-problem":{"source":"iana"},"application/vnd.dart":{"source":"iana","compressible":true,"extensions":["dart"]},"application/vnd.data-vision.rdz":{"source":"iana","extensions":["rdz"]},"application/vnd.datapackage+json":{"source":"iana","compressible":true},"application/vnd.dataresource+json":{"source":"iana","compressible":true},"application/vnd.dbf":{"source":"iana","extensions":["dbf"]},"application/vnd.debian.binary-package":{"source":"iana"},"application/vnd.dece.data":{"source":"iana","extensions":["uvf","uvvf","uvd","uvvd"]},"application/vnd.dece.ttml+xml":{"source":"iana","compressible":true,"extensions":["uvt","uvvt"]},"application/vnd.dece.unspecified":{"source":"iana","extensions":["uvx","uvvx"]},"application/vnd.dece.zip":{"source":"iana","extensions":["uvz","uvvz"]},"application/vnd.denovo.fcselayout-link":{"source":"iana","extensions":["fe_launch"]},"application/vnd.desmume.movie":{"source":"iana"},"application/vnd.dir-bi.plate-dl-nosuffix":{"source":"iana"},"application/vnd.dm.delegation+xml":{"source":"iana","compressible":true},"application/vnd.dna":{"source":"iana","extensions":["dna"]},"application/vnd.document+json":{"source":"iana","compressible":true},"application/vnd.dolby.mlp":{"source":"apache","extensions":["mlp"]},"application/vnd.dolby.mobile.1":{"source":"iana"},"application/vnd.dolby.mobile.2":{"source":"iana"},"application/vnd.doremir.scorecloud-binary-document":{"source":"iana"},"application/vnd.dpgraph":{"source":"iana","extensions":["dpg"]},"application/vnd.dreamfactory":{"source":"iana","extensions":["dfac"]},"application/vnd.drive+json":{"source":"iana","compressible":true},"application/vnd.ds-keypoint":{"source":"apache","extensions":["kpxx"]},"application/vnd.dtg.local":{"source":"iana"},"application/vnd.dtg.local.flash":{"source":"iana"},"application/vnd.dtg.local.html":{"source":"iana"},"application/vnd.dvb.ait":{"source":"iana","extensions":["ait"]},"application/vnd.dvb.dvbisl+xml":{"source":"iana","compressible":true},"application/vnd.dvb.dvbj":{"source":"iana"},"application/vnd.dvb.esgcontainer":{"source":"iana"},"application/vnd.dvb.ipdcdftnotifaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess":{"source":"iana"},"application/vnd.dvb.ipdcesgaccess2":{"source":"iana"},"application/vnd.dvb.ipdcesgpdd":{"source":"iana"},"application/vnd.dvb.ipdcroaming":{"source":"iana"},"application/vnd.dvb.iptv.alfec-base":{"source":"iana"},"application/vnd.dvb.iptv.alfec-enhancement":{"source":"iana"},"application/vnd.dvb.notif-aggregate-root+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-container+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-generic+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-msglist+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-request+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-ia-registration-response+xml":{"source":"iana","compressible":true},"application/vnd.dvb.notif-init+xml":{"source":"iana","compressible":true},"application/vnd.dvb.pfr":{"source":"iana"},"application/vnd.dvb.service":{"source":"iana","extensions":["svc"]},"application/vnd.dxr":{"source":"iana"},"application/vnd.dynageo":{"source":"iana","extensions":["geo"]},"application/vnd.dzr":{"source":"iana"},"application/vnd.easykaraoke.cdgdownload":{"source":"iana"},"application/vnd.ecdis-update":{"source":"iana"},"application/vnd.ecip.rlp":{"source":"iana"},"application/vnd.ecowin.chart":{"source":"iana","extensions":["mag"]},"application/vnd.ecowin.filerequest":{"source":"iana"},"application/vnd.ecowin.fileupdate":{"source":"iana"},"application/vnd.ecowin.series":{"source":"iana"},"application/vnd.ecowin.seriesrequest":{"source":"iana"},"application/vnd.ecowin.seriesupdate":{"source":"iana"},"application/vnd.efi.img":{"source":"iana"},"application/vnd.efi.iso":{"source":"iana"},"application/vnd.emclient.accessrequest+xml":{"source":"iana","compressible":true},"application/vnd.enliven":{"source":"iana","extensions":["nml"]},"application/vnd.enphase.envoy":{"source":"iana"},"application/vnd.eprints.data+xml":{"source":"iana","compressible":true},"application/vnd.epson.esf":{"source":"iana","extensions":["esf"]},"application/vnd.epson.msf":{"source":"iana","extensions":["msf"]},"application/vnd.epson.quickanime":{"source":"iana","extensions":["qam"]},"application/vnd.epson.salt":{"source":"iana","extensions":["slt"]},"application/vnd.epson.ssf":{"source":"iana","extensions":["ssf"]},"application/vnd.ericsson.quickcall":{"source":"iana"},"application/vnd.espass-espass+zip":{"source":"iana","compressible":false},"application/vnd.eszigno3+xml":{"source":"iana","compressible":true,"extensions":["es3","et3"]},"application/vnd.etsi.aoc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.asic-e+zip":{"source":"iana","compressible":false},"application/vnd.etsi.asic-s+zip":{"source":"iana","compressible":false},"application/vnd.etsi.cug+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvcommand+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-bc+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-cod+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsad-npvr+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvservice+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvsync+xml":{"source":"iana","compressible":true},"application/vnd.etsi.iptvueprofile+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mcid+xml":{"source":"iana","compressible":true},"application/vnd.etsi.mheg5":{"source":"iana"},"application/vnd.etsi.overload-control-policy-dataset+xml":{"source":"iana","compressible":true},"application/vnd.etsi.pstn+xml":{"source":"iana","compressible":true},"application/vnd.etsi.sci+xml":{"source":"iana","compressible":true},"application/vnd.etsi.simservs+xml":{"source":"iana","compressible":true},"application/vnd.etsi.timestamp-token":{"source":"iana"},"application/vnd.etsi.tsl+xml":{"source":"iana","compressible":true},"application/vnd.etsi.tsl.der":{"source":"iana"},"application/vnd.eudora.data":{"source":"iana"},"application/vnd.evolv.ecig.profile":{"source":"iana"},"application/vnd.evolv.ecig.settings":{"source":"iana"},"application/vnd.evolv.ecig.theme":{"source":"iana"},"application/vnd.exstream-empower+zip":{"source":"iana","compressible":false},"application/vnd.exstream-package":{"source":"iana"},"application/vnd.ezpix-album":{"source":"iana","extensions":["ez2"]},"application/vnd.ezpix-package":{"source":"iana","extensions":["ez3"]},"application/vnd.f-secure.mobile":{"source":"iana"},"application/vnd.fastcopy-disk-image":{"source":"iana"},"application/vnd.fdf":{"source":"iana","extensions":["fdf"]},"application/vnd.fdsn.mseed":{"source":"iana","extensions":["mseed"]},"application/vnd.fdsn.seed":{"source":"iana","extensions":["seed","dataless"]},"application/vnd.ffsns":{"source":"iana"},"application/vnd.ficlab.flb+zip":{"source":"iana","compressible":false},"application/vnd.filmit.zfc":{"source":"iana"},"application/vnd.fints":{"source":"iana"},"application/vnd.firemonkeys.cloudcell":{"source":"iana"},"application/vnd.flographit":{"source":"iana","extensions":["gph"]},"application/vnd.fluxtime.clip":{"source":"iana","extensions":["ftc"]},"application/vnd.font-fontforge-sfd":{"source":"iana"},"application/vnd.framemaker":{"source":"iana","extensions":["fm","frame","maker","book"]},"application/vnd.frogans.fnc":{"source":"iana","extensions":["fnc"]},"application/vnd.frogans.ltf":{"source":"iana","extensions":["ltf"]},"application/vnd.fsc.weblaunch":{"source":"iana","extensions":["fsc"]},"application/vnd.fujifilm.fb.docuworks":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.binder":{"source":"iana"},"application/vnd.fujifilm.fb.docuworks.container":{"source":"iana"},"application/vnd.fujifilm.fb.jfi+xml":{"source":"iana","compressible":true},"application/vnd.fujitsu.oasys":{"source":"iana","extensions":["oas"]},"application/vnd.fujitsu.oasys2":{"source":"iana","extensions":["oa2"]},"application/vnd.fujitsu.oasys3":{"source":"iana","extensions":["oa3"]},"application/vnd.fujitsu.oasysgp":{"source":"iana","extensions":["fg5"]},"application/vnd.fujitsu.oasysprs":{"source":"iana","extensions":["bh2"]},"application/vnd.fujixerox.art-ex":{"source":"iana"},"application/vnd.fujixerox.art4":{"source":"iana"},"application/vnd.fujixerox.ddd":{"source":"iana","extensions":["ddd"]},"application/vnd.fujixerox.docuworks":{"source":"iana","extensions":["xdw"]},"application/vnd.fujixerox.docuworks.binder":{"source":"iana","extensions":["xbd"]},"application/vnd.fujixerox.docuworks.container":{"source":"iana"},"application/vnd.fujixerox.hbpl":{"source":"iana"},"application/vnd.fut-misnet":{"source":"iana"},"application/vnd.futoin+cbor":{"source":"iana"},"application/vnd.futoin+json":{"source":"iana","compressible":true},"application/vnd.fuzzysheet":{"source":"iana","extensions":["fzs"]},"application/vnd.genomatix.tuxedo":{"source":"iana","extensions":["txd"]},"application/vnd.gentics.grd+json":{"source":"iana","compressible":true},"application/vnd.geo+json":{"source":"iana","compressible":true},"application/vnd.geocube+xml":{"source":"iana","compressible":true},"application/vnd.geogebra.file":{"source":"iana","extensions":["ggb"]},"application/vnd.geogebra.slides":{"source":"iana"},"application/vnd.geogebra.tool":{"source":"iana","extensions":["ggt"]},"application/vnd.geometry-explorer":{"source":"iana","extensions":["gex","gre"]},"application/vnd.geonext":{"source":"iana","extensions":["gxt"]},"application/vnd.geoplan":{"source":"iana","extensions":["g2w"]},"application/vnd.geospace":{"source":"iana","extensions":["g3w"]},"application/vnd.gerber":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt":{"source":"iana"},"application/vnd.globalplatform.card-content-mgt-response":{"source":"iana"},"application/vnd.gmx":{"source":"iana","extensions":["gmx"]},"application/vnd.google-apps.document":{"compressible":false,"extensions":["gdoc"]},"application/vnd.google-apps.presentation":{"compressible":false,"extensions":["gslides"]},"application/vnd.google-apps.spreadsheet":{"compressible":false,"extensions":["gsheet"]},"application/vnd.google-earth.kml+xml":{"source":"iana","compressible":true,"extensions":["kml"]},"application/vnd.google-earth.kmz":{"source":"iana","compressible":false,"extensions":["kmz"]},"application/vnd.gov.sk.e-form+xml":{"source":"iana","compressible":true},"application/vnd.gov.sk.e-form+zip":{"source":"iana","compressible":false},"application/vnd.gov.sk.xmldatacontainer+xml":{"source":"iana","compressible":true},"application/vnd.grafeq":{"source":"iana","extensions":["gqf","gqs"]},"application/vnd.gridmp":{"source":"iana"},"application/vnd.groove-account":{"source":"iana","extensions":["gac"]},"application/vnd.groove-help":{"source":"iana","extensions":["ghf"]},"application/vnd.groove-identity-message":{"source":"iana","extensions":["gim"]},"application/vnd.groove-injector":{"source":"iana","extensions":["grv"]},"application/vnd.groove-tool-message":{"source":"iana","extensions":["gtm"]},"application/vnd.groove-tool-template":{"source":"iana","extensions":["tpl"]},"application/vnd.groove-vcard":{"source":"iana","extensions":["vcg"]},"application/vnd.hal+json":{"source":"iana","compressible":true},"application/vnd.hal+xml":{"source":"iana","compressible":true,"extensions":["hal"]},"application/vnd.handheld-entertainment+xml":{"source":"iana","compressible":true,"extensions":["zmm"]},"application/vnd.hbci":{"source":"iana","extensions":["hbci"]},"application/vnd.hc+json":{"source":"iana","compressible":true},"application/vnd.hcl-bireports":{"source":"iana"},"application/vnd.hdt":{"source":"iana"},"application/vnd.heroku+json":{"source":"iana","compressible":true},"application/vnd.hhe.lesson-player":{"source":"iana","extensions":["les"]},"application/vnd.hp-hpgl":{"source":"iana","extensions":["hpgl"]},"application/vnd.hp-hpid":{"source":"iana","extensions":["hpid"]},"application/vnd.hp-hps":{"source":"iana","extensions":["hps"]},"application/vnd.hp-jlyt":{"source":"iana","extensions":["jlt"]},"application/vnd.hp-pcl":{"source":"iana","extensions":["pcl"]},"application/vnd.hp-pclxl":{"source":"iana","extensions":["pclxl"]},"application/vnd.httphone":{"source":"iana"},"application/vnd.hydrostatix.sof-data":{"source":"iana","extensions":["sfd-hdstx"]},"application/vnd.hyper+json":{"source":"iana","compressible":true},"application/vnd.hyper-item+json":{"source":"iana","compressible":true},"application/vnd.hyperdrive+json":{"source":"iana","compressible":true},"application/vnd.hzn-3d-crossword":{"source":"iana"},"application/vnd.ibm.afplinedata":{"source":"iana"},"application/vnd.ibm.electronic-media":{"source":"iana"},"application/vnd.ibm.minipay":{"source":"iana","extensions":["mpy"]},"application/vnd.ibm.modcap":{"source":"iana","extensions":["afp","listafp","list3820"]},"application/vnd.ibm.rights-management":{"source":"iana","extensions":["irm"]},"application/vnd.ibm.secure-container":{"source":"iana","extensions":["sc"]},"application/vnd.iccprofile":{"source":"iana","extensions":["icc","icm"]},"application/vnd.ieee.1905":{"source":"iana"},"application/vnd.igloader":{"source":"iana","extensions":["igl"]},"application/vnd.imagemeter.folder+zip":{"source":"iana","compressible":false},"application/vnd.imagemeter.image+zip":{"source":"iana","compressible":false},"application/vnd.immervision-ivp":{"source":"iana","extensions":["ivp"]},"application/vnd.immervision-ivu":{"source":"iana","extensions":["ivu"]},"application/vnd.ims.imsccv1p1":{"source":"iana"},"application/vnd.ims.imsccv1p2":{"source":"iana"},"application/vnd.ims.imsccv1p3":{"source":"iana"},"application/vnd.ims.lis.v2.result+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolconsumerprofile+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolproxy.id+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings+json":{"source":"iana","compressible":true},"application/vnd.ims.lti.v2.toolsettings.simple+json":{"source":"iana","compressible":true},"application/vnd.informedcontrol.rms+xml":{"source":"iana","compressible":true},"application/vnd.informix-visionary":{"source":"iana"},"application/vnd.infotech.project":{"source":"iana"},"application/vnd.infotech.project+xml":{"source":"iana","compressible":true},"application/vnd.innopath.wamp.notification":{"source":"iana"},"application/vnd.insors.igm":{"source":"iana","extensions":["igm"]},"application/vnd.intercon.formnet":{"source":"iana","extensions":["xpw","xpx"]},"application/vnd.intergeo":{"source":"iana","extensions":["i2g"]},"application/vnd.intertrust.digibox":{"source":"iana"},"application/vnd.intertrust.nncp":{"source":"iana"},"application/vnd.intu.qbo":{"source":"iana","extensions":["qbo"]},"application/vnd.intu.qfx":{"source":"iana","extensions":["qfx"]},"application/vnd.iptc.g2.catalogitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.conceptitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.knowledgeitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.newsmessage+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.packageitem+xml":{"source":"iana","compressible":true},"application/vnd.iptc.g2.planningitem+xml":{"source":"iana","compressible":true},"application/vnd.ipunplugged.rcprofile":{"source":"iana","extensions":["rcprofile"]},"application/vnd.irepository.package+xml":{"source":"iana","compressible":true,"extensions":["irp"]},"application/vnd.is-xpr":{"source":"iana","extensions":["xpr"]},"application/vnd.isac.fcs":{"source":"iana","extensions":["fcs"]},"application/vnd.iso11783-10+zip":{"source":"iana","compressible":false},"application/vnd.jam":{"source":"iana","extensions":["jam"]},"application/vnd.japannet-directory-service":{"source":"iana"},"application/vnd.japannet-jpnstore-wakeup":{"source":"iana"},"application/vnd.japannet-payment-wakeup":{"source":"iana"},"application/vnd.japannet-registration":{"source":"iana"},"application/vnd.japannet-registration-wakeup":{"source":"iana"},"application/vnd.japannet-setstore-wakeup":{"source":"iana"},"application/vnd.japannet-verification":{"source":"iana"},"application/vnd.japannet-verification-wakeup":{"source":"iana"},"application/vnd.jcp.javame.midlet-rms":{"source":"iana","extensions":["rms"]},"application/vnd.jisp":{"source":"iana","extensions":["jisp"]},"application/vnd.joost.joda-archive":{"source":"iana","extensions":["joda"]},"application/vnd.jsk.isdn-ngn":{"source":"iana"},"application/vnd.kahootz":{"source":"iana","extensions":["ktz","ktr"]},"application/vnd.kde.karbon":{"source":"iana","extensions":["karbon"]},"application/vnd.kde.kchart":{"source":"iana","extensions":["chrt"]},"application/vnd.kde.kformula":{"source":"iana","extensions":["kfo"]},"application/vnd.kde.kivio":{"source":"iana","extensions":["flw"]},"application/vnd.kde.kontour":{"source":"iana","extensions":["kon"]},"application/vnd.kde.kpresenter":{"source":"iana","extensions":["kpr","kpt"]},"application/vnd.kde.kspread":{"source":"iana","extensions":["ksp"]},"application/vnd.kde.kword":{"source":"iana","extensions":["kwd","kwt"]},"application/vnd.kenameaapp":{"source":"iana","extensions":["htke"]},"application/vnd.kidspiration":{"source":"iana","extensions":["kia"]},"application/vnd.kinar":{"source":"iana","extensions":["kne","knp"]},"application/vnd.koan":{"source":"iana","extensions":["skp","skd","skt","skm"]},"application/vnd.kodak-descriptor":{"source":"iana","extensions":["sse"]},"application/vnd.las":{"source":"iana"},"application/vnd.las.las+json":{"source":"iana","compressible":true},"application/vnd.las.las+xml":{"source":"iana","compressible":true,"extensions":["lasxml"]},"application/vnd.laszip":{"source":"iana"},"application/vnd.leap+json":{"source":"iana","compressible":true},"application/vnd.liberty-request+xml":{"source":"iana","compressible":true},"application/vnd.llamagraphics.life-balance.desktop":{"source":"iana","extensions":["lbd"]},"application/vnd.llamagraphics.life-balance.exchange+xml":{"source":"iana","compressible":true,"extensions":["lbe"]},"application/vnd.logipipe.circuit+zip":{"source":"iana","compressible":false},"application/vnd.loom":{"source":"iana"},"application/vnd.lotus-1-2-3":{"source":"iana","extensions":["123"]},"application/vnd.lotus-approach":{"source":"iana","extensions":["apr"]},"application/vnd.lotus-freelance":{"source":"iana","extensions":["pre"]},"application/vnd.lotus-notes":{"source":"iana","extensions":["nsf"]},"application/vnd.lotus-organizer":{"source":"iana","extensions":["org"]},"application/vnd.lotus-screencam":{"source":"iana","extensions":["scm"]},"application/vnd.lotus-wordpro":{"source":"iana","extensions":["lwp"]},"application/vnd.macports.portpkg":{"source":"iana","extensions":["portpkg"]},"application/vnd.mapbox-vector-tile":{"source":"iana","extensions":["mvt"]},"application/vnd.marlin.drm.actiontoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.conftoken+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.license+xml":{"source":"iana","compressible":true},"application/vnd.marlin.drm.mdcf":{"source":"iana"},"application/vnd.mason+json":{"source":"iana","compressible":true},"application/vnd.maxmind.maxmind-db":{"source":"iana"},"application/vnd.mcd":{"source":"iana","extensions":["mcd"]},"application/vnd.medcalcdata":{"source":"iana","extensions":["mc1"]},"application/vnd.mediastation.cdkey":{"source":"iana","extensions":["cdkey"]},"application/vnd.meridian-slingshot":{"source":"iana"},"application/vnd.mfer":{"source":"iana","extensions":["mwf"]},"application/vnd.mfmp":{"source":"iana","extensions":["mfm"]},"application/vnd.micro+json":{"source":"iana","compressible":true},"application/vnd.micrografx.flo":{"source":"iana","extensions":["flo"]},"application/vnd.micrografx.igx":{"source":"iana","extensions":["igx"]},"application/vnd.microsoft.portable-executable":{"source":"iana"},"application/vnd.microsoft.windows.thumbnail-cache":{"source":"iana"},"application/vnd.miele+json":{"source":"iana","compressible":true},"application/vnd.mif":{"source":"iana","extensions":["mif"]},"application/vnd.minisoft-hp3000-save":{"source":"iana"},"application/vnd.mitsubishi.misty-guard.trustweb":{"source":"iana"},"application/vnd.mobius.daf":{"source":"iana","extensions":["daf"]},"application/vnd.mobius.dis":{"source":"iana","extensions":["dis"]},"application/vnd.mobius.mbk":{"source":"iana","extensions":["mbk"]},"application/vnd.mobius.mqy":{"source":"iana","extensions":["mqy"]},"application/vnd.mobius.msl":{"source":"iana","extensions":["msl"]},"application/vnd.mobius.plc":{"source":"iana","extensions":["plc"]},"application/vnd.mobius.txf":{"source":"iana","extensions":["txf"]},"application/vnd.mophun.application":{"source":"iana","extensions":["mpn"]},"application/vnd.mophun.certificate":{"source":"iana","extensions":["mpc"]},"application/vnd.motorola.flexsuite":{"source":"iana"},"application/vnd.motorola.flexsuite.adsi":{"source":"iana"},"application/vnd.motorola.flexsuite.fis":{"source":"iana"},"application/vnd.motorola.flexsuite.gotap":{"source":"iana"},"application/vnd.motorola.flexsuite.kmr":{"source":"iana"},"application/vnd.motorola.flexsuite.ttc":{"source":"iana"},"application/vnd.motorola.flexsuite.wem":{"source":"iana"},"application/vnd.motorola.iprm":{"source":"iana"},"application/vnd.mozilla.xul+xml":{"source":"iana","compressible":true,"extensions":["xul"]},"application/vnd.ms-3mfdocument":{"source":"iana"},"application/vnd.ms-artgalry":{"source":"iana","extensions":["cil"]},"application/vnd.ms-asf":{"source":"iana"},"application/vnd.ms-cab-compressed":{"source":"iana","extensions":["cab"]},"application/vnd.ms-color.iccprofile":{"source":"apache"},"application/vnd.ms-excel":{"source":"iana","compressible":false,"extensions":["xls","xlm","xla","xlc","xlt","xlw"]},"application/vnd.ms-excel.addin.macroenabled.12":{"source":"iana","extensions":["xlam"]},"application/vnd.ms-excel.sheet.binary.macroenabled.12":{"source":"iana","extensions":["xlsb"]},"application/vnd.ms-excel.sheet.macroenabled.12":{"source":"iana","extensions":["xlsm"]},"application/vnd.ms-excel.template.macroenabled.12":{"source":"iana","extensions":["xltm"]},"application/vnd.ms-fontobject":{"source":"iana","compressible":true,"extensions":["eot"]},"application/vnd.ms-htmlhelp":{"source":"iana","extensions":["chm"]},"application/vnd.ms-ims":{"source":"iana","extensions":["ims"]},"application/vnd.ms-lrm":{"source":"iana","extensions":["lrm"]},"application/vnd.ms-office.activex+xml":{"source":"iana","compressible":true},"application/vnd.ms-officetheme":{"source":"iana","extensions":["thmx"]},"application/vnd.ms-opentype":{"source":"apache","compressible":true},"application/vnd.ms-outlook":{"compressible":false,"extensions":["msg"]},"application/vnd.ms-package.obfuscated-opentype":{"source":"apache"},"application/vnd.ms-pki.seccat":{"source":"apache","extensions":["cat"]},"application/vnd.ms-pki.stl":{"source":"apache","extensions":["stl"]},"application/vnd.ms-playready.initiator+xml":{"source":"iana","compressible":true},"application/vnd.ms-powerpoint":{"source":"iana","compressible":false,"extensions":["ppt","pps","pot"]},"application/vnd.ms-powerpoint.addin.macroenabled.12":{"source":"iana","extensions":["ppam"]},"application/vnd.ms-powerpoint.presentation.macroenabled.12":{"source":"iana","extensions":["pptm"]},"application/vnd.ms-powerpoint.slide.macroenabled.12":{"source":"iana","extensions":["sldm"]},"application/vnd.ms-powerpoint.slideshow.macroenabled.12":{"source":"iana","extensions":["ppsm"]},"application/vnd.ms-powerpoint.template.macroenabled.12":{"source":"iana","extensions":["potm"]},"application/vnd.ms-printdevicecapabilities+xml":{"source":"iana","compressible":true},"application/vnd.ms-printing.printticket+xml":{"source":"apache","compressible":true},"application/vnd.ms-printschematicket+xml":{"source":"iana","compressible":true},"application/vnd.ms-project":{"source":"iana","extensions":["mpp","mpt"]},"application/vnd.ms-tnef":{"source":"iana"},"application/vnd.ms-windows.devicepairing":{"source":"iana"},"application/vnd.ms-windows.nwprinting.oob":{"source":"iana"},"application/vnd.ms-windows.printerpairing":{"source":"iana"},"application/vnd.ms-windows.wsd.oob":{"source":"iana"},"application/vnd.ms-wmdrm.lic-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.lic-resp":{"source":"iana"},"application/vnd.ms-wmdrm.meter-chlg-req":{"source":"iana"},"application/vnd.ms-wmdrm.meter-resp":{"source":"iana"},"application/vnd.ms-word.document.macroenabled.12":{"source":"iana","extensions":["docm"]},"application/vnd.ms-word.template.macroenabled.12":{"source":"iana","extensions":["dotm"]},"application/vnd.ms-works":{"source":"iana","extensions":["wps","wks","wcm","wdb"]},"application/vnd.ms-wpl":{"source":"iana","extensions":["wpl"]},"application/vnd.ms-xpsdocument":{"source":"iana","compressible":false,"extensions":["xps"]},"application/vnd.msa-disk-image":{"source":"iana"},"application/vnd.mseq":{"source":"iana","extensions":["mseq"]},"application/vnd.msign":{"source":"iana"},"application/vnd.multiad.creator":{"source":"iana"},"application/vnd.multiad.creator.cif":{"source":"iana"},"application/vnd.music-niff":{"source":"iana"},"application/vnd.musician":{"source":"iana","extensions":["mus"]},"application/vnd.muvee.style":{"source":"iana","extensions":["msty"]},"application/vnd.mynfc":{"source":"iana","extensions":["taglet"]},"application/vnd.nacamar.ybrid+json":{"source":"iana","compressible":true},"application/vnd.ncd.control":{"source":"iana"},"application/vnd.ncd.reference":{"source":"iana"},"application/vnd.nearst.inv+json":{"source":"iana","compressible":true},"application/vnd.nebumind.line":{"source":"iana"},"application/vnd.nervana":{"source":"iana"},"application/vnd.netfpx":{"source":"iana"},"application/vnd.neurolanguage.nlu":{"source":"iana","extensions":["nlu"]},"application/vnd.nimn":{"source":"iana"},"application/vnd.nintendo.nitro.rom":{"source":"iana"},"application/vnd.nintendo.snes.rom":{"source":"iana"},"application/vnd.nitf":{"source":"iana","extensions":["ntf","nitf"]},"application/vnd.noblenet-directory":{"source":"iana","extensions":["nnd"]},"application/vnd.noblenet-sealer":{"source":"iana","extensions":["nns"]},"application/vnd.noblenet-web":{"source":"iana","extensions":["nnw"]},"application/vnd.nokia.catalogs":{"source":"iana"},"application/vnd.nokia.conml+wbxml":{"source":"iana"},"application/vnd.nokia.conml+xml":{"source":"iana","compressible":true},"application/vnd.nokia.iptv.config+xml":{"source":"iana","compressible":true},"application/vnd.nokia.isds-radio-presets":{"source":"iana"},"application/vnd.nokia.landmark+wbxml":{"source":"iana"},"application/vnd.nokia.landmark+xml":{"source":"iana","compressible":true},"application/vnd.nokia.landmarkcollection+xml":{"source":"iana","compressible":true},"application/vnd.nokia.n-gage.ac+xml":{"source":"iana","compressible":true,"extensions":["ac"]},"application/vnd.nokia.n-gage.data":{"source":"iana","extensions":["ngdat"]},"application/vnd.nokia.n-gage.symbian.install":{"source":"iana","extensions":["n-gage"]},"application/vnd.nokia.ncd":{"source":"iana"},"application/vnd.nokia.pcd+wbxml":{"source":"iana"},"application/vnd.nokia.pcd+xml":{"source":"iana","compressible":true},"application/vnd.nokia.radio-preset":{"source":"iana","extensions":["rpst"]},"application/vnd.nokia.radio-presets":{"source":"iana","extensions":["rpss"]},"application/vnd.novadigm.edm":{"source":"iana","extensions":["edm"]},"application/vnd.novadigm.edx":{"source":"iana","extensions":["edx"]},"application/vnd.novadigm.ext":{"source":"iana","extensions":["ext"]},"application/vnd.ntt-local.content-share":{"source":"iana"},"application/vnd.ntt-local.file-transfer":{"source":"iana"},"application/vnd.ntt-local.ogw_remote-access":{"source":"iana"},"application/vnd.ntt-local.sip-ta_remote":{"source":"iana"},"application/vnd.ntt-local.sip-ta_tcp_stream":{"source":"iana"},"application/vnd.oasis.opendocument.chart":{"source":"iana","extensions":["odc"]},"application/vnd.oasis.opendocument.chart-template":{"source":"iana","extensions":["otc"]},"application/vnd.oasis.opendocument.database":{"source":"iana","extensions":["odb"]},"application/vnd.oasis.opendocument.formula":{"source":"iana","extensions":["odf"]},"application/vnd.oasis.opendocument.formula-template":{"source":"iana","extensions":["odft"]},"application/vnd.oasis.opendocument.graphics":{"source":"iana","compressible":false,"extensions":["odg"]},"application/vnd.oasis.opendocument.graphics-template":{"source":"iana","extensions":["otg"]},"application/vnd.oasis.opendocument.image":{"source":"iana","extensions":["odi"]},"application/vnd.oasis.opendocument.image-template":{"source":"iana","extensions":["oti"]},"application/vnd.oasis.opendocument.presentation":{"source":"iana","compressible":false,"extensions":["odp"]},"application/vnd.oasis.opendocument.presentation-template":{"source":"iana","extensions":["otp"]},"application/vnd.oasis.opendocument.spreadsheet":{"source":"iana","compressible":false,"extensions":["ods"]},"application/vnd.oasis.opendocument.spreadsheet-template":{"source":"iana","extensions":["ots"]},"application/vnd.oasis.opendocument.text":{"source":"iana","compressible":false,"extensions":["odt"]},"application/vnd.oasis.opendocument.text-master":{"source":"iana","extensions":["odm"]},"application/vnd.oasis.opendocument.text-template":{"source":"iana","extensions":["ott"]},"application/vnd.oasis.opendocument.text-web":{"source":"iana","extensions":["oth"]},"application/vnd.obn":{"source":"iana"},"application/vnd.ocf+cbor":{"source":"iana"},"application/vnd.oci.image.manifest.v1+json":{"source":"iana","compressible":true},"application/vnd.oftn.l10n+json":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessdownload+xml":{"source":"iana","compressible":true},"application/vnd.oipf.contentaccessstreaming+xml":{"source":"iana","compressible":true},"application/vnd.oipf.cspg-hexbinary":{"source":"iana"},"application/vnd.oipf.dae.svg+xml":{"source":"iana","compressible":true},"application/vnd.oipf.dae.xhtml+xml":{"source":"iana","compressible":true},"application/vnd.oipf.mippvcontrolmessage+xml":{"source":"iana","compressible":true},"application/vnd.oipf.pae.gem":{"source":"iana"},"application/vnd.oipf.spdiscovery+xml":{"source":"iana","compressible":true},"application/vnd.oipf.spdlist+xml":{"source":"iana","compressible":true},"application/vnd.oipf.ueprofile+xml":{"source":"iana","compressible":true},"application/vnd.oipf.userprofile+xml":{"source":"iana","compressible":true},"application/vnd.olpc-sugar":{"source":"iana","extensions":["xo"]},"application/vnd.oma-scws-config":{"source":"iana"},"application/vnd.oma-scws-http-request":{"source":"iana"},"application/vnd.oma-scws-http-response":{"source":"iana"},"application/vnd.oma.bcast.associated-procedure-parameter+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.drm-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.imd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.ltkm":{"source":"iana"},"application/vnd.oma.bcast.notification+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.provisioningtrigger":{"source":"iana"},"application/vnd.oma.bcast.sgboot":{"source":"iana"},"application/vnd.oma.bcast.sgdd+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sgdu":{"source":"iana"},"application/vnd.oma.bcast.simple-symbol-container":{"source":"iana"},"application/vnd.oma.bcast.smartcard-trigger+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.sprov+xml":{"source":"iana","compressible":true},"application/vnd.oma.bcast.stkm":{"source":"iana"},"application/vnd.oma.cab-address-book+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-feature-handler+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-pcc+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-subs-invite+xml":{"source":"iana","compressible":true},"application/vnd.oma.cab-user-prefs+xml":{"source":"iana","compressible":true},"application/vnd.oma.dcd":{"source":"iana"},"application/vnd.oma.dcdc":{"source":"iana"},"application/vnd.oma.dd2+xml":{"source":"iana","compressible":true,"extensions":["dd2"]},"application/vnd.oma.drm.risd+xml":{"source":"iana","compressible":true},"application/vnd.oma.group-usage-list+xml":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+cbor":{"source":"iana"},"application/vnd.oma.lwm2m+json":{"source":"iana","compressible":true},"application/vnd.oma.lwm2m+tlv":{"source":"iana"},"application/vnd.oma.pal+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.detailed-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.final-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.groups+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.invocation-descriptor+xml":{"source":"iana","compressible":true},"application/vnd.oma.poc.optimized-progress-report+xml":{"source":"iana","compressible":true},"application/vnd.oma.push":{"source":"iana"},"application/vnd.oma.scidm.messages+xml":{"source":"iana","compressible":true},"application/vnd.oma.xcap-directory+xml":{"source":"iana","compressible":true},"application/vnd.omads-email+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-file+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omads-folder+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.omaloc-supl-init":{"source":"iana"},"application/vnd.onepager":{"source":"iana"},"application/vnd.onepagertamp":{"source":"iana"},"application/vnd.onepagertamx":{"source":"iana"},"application/vnd.onepagertat":{"source":"iana"},"application/vnd.onepagertatp":{"source":"iana"},"application/vnd.onepagertatx":{"source":"iana"},"application/vnd.openblox.game+xml":{"source":"iana","compressible":true,"extensions":["obgx"]},"application/vnd.openblox.game-binary":{"source":"iana"},"application/vnd.openeye.oeb":{"source":"iana"},"application/vnd.openofficeorg.extension":{"source":"apache","extensions":["oxt"]},"application/vnd.openstreetmap.data+xml":{"source":"iana","compressible":true,"extensions":["osm"]},"application/vnd.opentimestamps.ots":{"source":"iana"},"application/vnd.openxmlformats-officedocument.custom-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.customxmlproperties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawing+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chart+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.extended-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presentation":{"source":"iana","compressible":false,"extensions":["pptx"]},"application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.presprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slide":{"source":"iana","extensions":["sldx"]},"application/vnd.openxmlformats-officedocument.presentationml.slide+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideshow":{"source":"iana","extensions":["ppsx"]},"application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.tags+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.template":{"source":"iana","extensions":["potx"]},"application/vnd.openxmlformats-officedocument.presentationml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":{"source":"iana","compressible":false,"extensions":["xlsx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.template":{"source":"iana","extensions":["xltx"]},"application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.theme+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.themeoverride+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.vmldrawing":{"source":"iana"},"application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document":{"source":"iana","compressible":false,"extensions":["docx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.template":{"source":"iana","extensions":["dotx"]},"application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.core-properties+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml":{"source":"iana","compressible":true},"application/vnd.openxmlformats-package.relationships+xml":{"source":"iana","compressible":true},"application/vnd.oracle.resource+json":{"source":"iana","compressible":true},"application/vnd.orange.indata":{"source":"iana"},"application/vnd.osa.netdeploy":{"source":"iana"},"application/vnd.osgeo.mapguide.package":{"source":"iana","extensions":["mgp"]},"application/vnd.osgi.bundle":{"source":"iana"},"application/vnd.osgi.dp":{"source":"iana","extensions":["dp"]},"application/vnd.osgi.subsystem":{"source":"iana","extensions":["esa"]},"application/vnd.otps.ct-kip+xml":{"source":"iana","compressible":true},"application/vnd.oxli.countgraph":{"source":"iana"},"application/vnd.pagerduty+json":{"source":"iana","compressible":true},"application/vnd.palm":{"source":"iana","extensions":["pdb","pqa","oprc"]},"application/vnd.panoply":{"source":"iana"},"application/vnd.paos.xml":{"source":"iana"},"application/vnd.patentdive":{"source":"iana"},"application/vnd.patientecommsdoc":{"source":"iana"},"application/vnd.pawaafile":{"source":"iana","extensions":["paw"]},"application/vnd.pcos":{"source":"iana"},"application/vnd.pg.format":{"source":"iana","extensions":["str"]},"application/vnd.pg.osasli":{"source":"iana","extensions":["ei6"]},"application/vnd.piaccess.application-licence":{"source":"iana"},"application/vnd.picsel":{"source":"iana","extensions":["efif"]},"application/vnd.pmi.widget":{"source":"iana","extensions":["wg"]},"application/vnd.poc.group-advertisement+xml":{"source":"iana","compressible":true},"application/vnd.pocketlearn":{"source":"iana","extensions":["plf"]},"application/vnd.powerbuilder6":{"source":"iana","extensions":["pbd"]},"application/vnd.powerbuilder6-s":{"source":"iana"},"application/vnd.powerbuilder7":{"source":"iana"},"application/vnd.powerbuilder7-s":{"source":"iana"},"application/vnd.powerbuilder75":{"source":"iana"},"application/vnd.powerbuilder75-s":{"source":"iana"},"application/vnd.preminet":{"source":"iana"},"application/vnd.previewsystems.box":{"source":"iana","extensions":["box"]},"application/vnd.proteus.magazine":{"source":"iana","extensions":["mgz"]},"application/vnd.psfs":{"source":"iana"},"application/vnd.publishare-delta-tree":{"source":"iana","extensions":["qps"]},"application/vnd.pvi.ptid1":{"source":"iana","extensions":["ptid"]},"application/vnd.pwg-multiplexed":{"source":"iana"},"application/vnd.pwg-xhtml-print+xml":{"source":"iana","compressible":true},"application/vnd.qualcomm.brew-app-res":{"source":"iana"},"application/vnd.quarantainenet":{"source":"iana"},"application/vnd.quark.quarkxpress":{"source":"iana","extensions":["qxd","qxt","qwd","qwt","qxl","qxb"]},"application/vnd.quobject-quoxdocument":{"source":"iana"},"application/vnd.radisys.moml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-conn+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-audit-stream+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-conf+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-base+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-detect+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-fax-sendrecv+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-group+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-speech+xml":{"source":"iana","compressible":true},"application/vnd.radisys.msml-dialog-transform+xml":{"source":"iana","compressible":true},"application/vnd.rainstor.data":{"source":"iana"},"application/vnd.rapid":{"source":"iana"},"application/vnd.rar":{"source":"iana","extensions":["rar"]},"application/vnd.realvnc.bed":{"source":"iana","extensions":["bed"]},"application/vnd.recordare.musicxml":{"source":"iana","extensions":["mxl"]},"application/vnd.recordare.musicxml+xml":{"source":"iana","compressible":true,"extensions":["musicxml"]},"application/vnd.renlearn.rlprint":{"source":"iana"},"application/vnd.resilient.logic":{"source":"iana"},"application/vnd.restful+json":{"source":"iana","compressible":true},"application/vnd.rig.cryptonote":{"source":"iana","extensions":["cryptonote"]},"application/vnd.rim.cod":{"source":"apache","extensions":["cod"]},"application/vnd.rn-realmedia":{"source":"apache","extensions":["rm"]},"application/vnd.rn-realmedia-vbr":{"source":"apache","extensions":["rmvb"]},"application/vnd.route66.link66+xml":{"source":"iana","compressible":true,"extensions":["link66"]},"application/vnd.rs-274x":{"source":"iana"},"application/vnd.ruckus.download":{"source":"iana"},"application/vnd.s3sms":{"source":"iana"},"application/vnd.sailingtracker.track":{"source":"iana","extensions":["st"]},"application/vnd.sar":{"source":"iana"},"application/vnd.sbm.cid":{"source":"iana"},"application/vnd.sbm.mid2":{"source":"iana"},"application/vnd.scribus":{"source":"iana"},"application/vnd.sealed.3df":{"source":"iana"},"application/vnd.sealed.csf":{"source":"iana"},"application/vnd.sealed.doc":{"source":"iana"},"application/vnd.sealed.eml":{"source":"iana"},"application/vnd.sealed.mht":{"source":"iana"},"application/vnd.sealed.net":{"source":"iana"},"application/vnd.sealed.ppt":{"source":"iana"},"application/vnd.sealed.tiff":{"source":"iana"},"application/vnd.sealed.xls":{"source":"iana"},"application/vnd.sealedmedia.softseal.html":{"source":"iana"},"application/vnd.sealedmedia.softseal.pdf":{"source":"iana"},"application/vnd.seemail":{"source":"iana","extensions":["see"]},"application/vnd.seis+json":{"source":"iana","compressible":true},"application/vnd.sema":{"source":"iana","extensions":["sema"]},"application/vnd.semd":{"source":"iana","extensions":["semd"]},"application/vnd.semf":{"source":"iana","extensions":["semf"]},"application/vnd.shade-save-file":{"source":"iana"},"application/vnd.shana.informed.formdata":{"source":"iana","extensions":["ifm"]},"application/vnd.shana.informed.formtemplate":{"source":"iana","extensions":["itp"]},"application/vnd.shana.informed.interchange":{"source":"iana","extensions":["iif"]},"application/vnd.shana.informed.package":{"source":"iana","extensions":["ipk"]},"application/vnd.shootproof+json":{"source":"iana","compressible":true},"application/vnd.shopkick+json":{"source":"iana","compressible":true},"application/vnd.shp":{"source":"iana"},"application/vnd.shx":{"source":"iana"},"application/vnd.sigrok.session":{"source":"iana"},"application/vnd.simtech-mindmapper":{"source":"iana","extensions":["twd","twds"]},"application/vnd.siren+json":{"source":"iana","compressible":true},"application/vnd.smaf":{"source":"iana","extensions":["mmf"]},"application/vnd.smart.notebook":{"source":"iana"},"application/vnd.smart.teacher":{"source":"iana","extensions":["teacher"]},"application/vnd.snesdev-page-table":{"source":"iana"},"application/vnd.software602.filler.form+xml":{"source":"iana","compressible":true,"extensions":["fo"]},"application/vnd.software602.filler.form-xml-zip":{"source":"iana"},"application/vnd.solent.sdkm+xml":{"source":"iana","compressible":true,"extensions":["sdkm","sdkd"]},"application/vnd.spotfire.dxp":{"source":"iana","extensions":["dxp"]},"application/vnd.spotfire.sfs":{"source":"iana","extensions":["sfs"]},"application/vnd.sqlite3":{"source":"iana"},"application/vnd.sss-cod":{"source":"iana"},"application/vnd.sss-dtf":{"source":"iana"},"application/vnd.sss-ntf":{"source":"iana"},"application/vnd.stardivision.calc":{"source":"apache","extensions":["sdc"]},"application/vnd.stardivision.draw":{"source":"apache","extensions":["sda"]},"application/vnd.stardivision.impress":{"source":"apache","extensions":["sdd"]},"application/vnd.stardivision.math":{"source":"apache","extensions":["smf"]},"application/vnd.stardivision.writer":{"source":"apache","extensions":["sdw","vor"]},"application/vnd.stardivision.writer-global":{"source":"apache","extensions":["sgl"]},"application/vnd.stepmania.package":{"source":"iana","extensions":["smzip"]},"application/vnd.stepmania.stepchart":{"source":"iana","extensions":["sm"]},"application/vnd.street-stream":{"source":"iana"},"application/vnd.sun.wadl+xml":{"source":"iana","compressible":true,"extensions":["wadl"]},"application/vnd.sun.xml.calc":{"source":"apache","extensions":["sxc"]},"application/vnd.sun.xml.calc.template":{"source":"apache","extensions":["stc"]},"application/vnd.sun.xml.draw":{"source":"apache","extensions":["sxd"]},"application/vnd.sun.xml.draw.template":{"source":"apache","extensions":["std"]},"application/vnd.sun.xml.impress":{"source":"apache","extensions":["sxi"]},"application/vnd.sun.xml.impress.template":{"source":"apache","extensions":["sti"]},"application/vnd.sun.xml.math":{"source":"apache","extensions":["sxm"]},"application/vnd.sun.xml.writer":{"source":"apache","extensions":["sxw"]},"application/vnd.sun.xml.writer.global":{"source":"apache","extensions":["sxg"]},"application/vnd.sun.xml.writer.template":{"source":"apache","extensions":["stw"]},"application/vnd.sus-calendar":{"source":"iana","extensions":["sus","susp"]},"application/vnd.svd":{"source":"iana","extensions":["svd"]},"application/vnd.swiftview-ics":{"source":"iana"},"application/vnd.sycle+xml":{"source":"iana","compressible":true},"application/vnd.symbian.install":{"source":"apache","extensions":["sis","sisx"]},"application/vnd.syncml+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xsm"]},"application/vnd.syncml.dm+wbxml":{"source":"iana","charset":"UTF-8","extensions":["bdm"]},"application/vnd.syncml.dm+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["xdm"]},"application/vnd.syncml.dm.notification":{"source":"iana"},"application/vnd.syncml.dmddf+wbxml":{"source":"iana"},"application/vnd.syncml.dmddf+xml":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["ddf"]},"application/vnd.syncml.dmtnds+wbxml":{"source":"iana"},"application/vnd.syncml.dmtnds+xml":{"source":"iana","charset":"UTF-8","compressible":true},"application/vnd.syncml.ds.notification":{"source":"iana"},"application/vnd.tableschema+json":{"source":"iana","compressible":true},"application/vnd.tao.intent-module-archive":{"source":"iana","extensions":["tao"]},"application/vnd.tcpdump.pcap":{"source":"iana","extensions":["pcap","cap","dmp"]},"application/vnd.think-cell.ppttc+json":{"source":"iana","compressible":true},"application/vnd.tmd.mediaflex.api+xml":{"source":"iana","compressible":true},"application/vnd.tml":{"source":"iana"},"application/vnd.tmobile-livetv":{"source":"iana","extensions":["tmo"]},"application/vnd.tri.onesource":{"source":"iana"},"application/vnd.trid.tpt":{"source":"iana","extensions":["tpt"]},"application/vnd.triscape.mxs":{"source":"iana","extensions":["mxs"]},"application/vnd.trueapp":{"source":"iana","extensions":["tra"]},"application/vnd.truedoc":{"source":"iana"},"application/vnd.ubisoft.webplayer":{"source":"iana"},"application/vnd.ufdl":{"source":"iana","extensions":["ufd","ufdl"]},"application/vnd.uiq.theme":{"source":"iana","extensions":["utz"]},"application/vnd.umajin":{"source":"iana","extensions":["umj"]},"application/vnd.unity":{"source":"iana","extensions":["unityweb"]},"application/vnd.uoml+xml":{"source":"iana","compressible":true,"extensions":["uoml"]},"application/vnd.uplanet.alert":{"source":"iana"},"application/vnd.uplanet.alert-wbxml":{"source":"iana"},"application/vnd.uplanet.bearer-choice":{"source":"iana"},"application/vnd.uplanet.bearer-choice-wbxml":{"source":"iana"},"application/vnd.uplanet.cacheop":{"source":"iana"},"application/vnd.uplanet.cacheop-wbxml":{"source":"iana"},"application/vnd.uplanet.channel":{"source":"iana"},"application/vnd.uplanet.channel-wbxml":{"source":"iana"},"application/vnd.uplanet.list":{"source":"iana"},"application/vnd.uplanet.list-wbxml":{"source":"iana"},"application/vnd.uplanet.listcmd":{"source":"iana"},"application/vnd.uplanet.listcmd-wbxml":{"source":"iana"},"application/vnd.uplanet.signal":{"source":"iana"},"application/vnd.uri-map":{"source":"iana"},"application/vnd.valve.source.material":{"source":"iana"},"application/vnd.vcx":{"source":"iana","extensions":["vcx"]},"application/vnd.vd-study":{"source":"iana"},"application/vnd.vectorworks":{"source":"iana"},"application/vnd.vel+json":{"source":"iana","compressible":true},"application/vnd.verimatrix.vcas":{"source":"iana"},"application/vnd.veritone.aion+json":{"source":"iana","compressible":true},"application/vnd.veryant.thin":{"source":"iana"},"application/vnd.ves.encrypted":{"source":"iana"},"application/vnd.vidsoft.vidconference":{"source":"iana"},"application/vnd.visio":{"source":"iana","extensions":["vsd","vst","vss","vsw"]},"application/vnd.visionary":{"source":"iana","extensions":["vis"]},"application/vnd.vividence.scriptfile":{"source":"iana"},"application/vnd.vsf":{"source":"iana","extensions":["vsf"]},"application/vnd.wap.sic":{"source":"iana"},"application/vnd.wap.slc":{"source":"iana"},"application/vnd.wap.wbxml":{"source":"iana","charset":"UTF-8","extensions":["wbxml"]},"application/vnd.wap.wmlc":{"source":"iana","extensions":["wmlc"]},"application/vnd.wap.wmlscriptc":{"source":"iana","extensions":["wmlsc"]},"application/vnd.webturbo":{"source":"iana","extensions":["wtb"]},"application/vnd.wfa.dpp":{"source":"iana"},"application/vnd.wfa.p2p":{"source":"iana"},"application/vnd.wfa.wsc":{"source":"iana"},"application/vnd.windows.devicepairing":{"source":"iana"},"application/vnd.wmc":{"source":"iana"},"application/vnd.wmf.bootstrap":{"source":"iana"},"application/vnd.wolfram.mathematica":{"source":"iana"},"application/vnd.wolfram.mathematica.package":{"source":"iana"},"application/vnd.wolfram.player":{"source":"iana","extensions":["nbp"]},"application/vnd.wordperfect":{"source":"iana","extensions":["wpd"]},"application/vnd.wqd":{"source":"iana","extensions":["wqd"]},"application/vnd.wrq-hp3000-labelled":{"source":"iana"},"application/vnd.wt.stf":{"source":"iana","extensions":["stf"]},"application/vnd.wv.csp+wbxml":{"source":"iana"},"application/vnd.wv.csp+xml":{"source":"iana","compressible":true},"application/vnd.wv.ssp+xml":{"source":"iana","compressible":true},"application/vnd.xacml+json":{"source":"iana","compressible":true},"application/vnd.xara":{"source":"iana","extensions":["xar"]},"application/vnd.xfdl":{"source":"iana","extensions":["xfdl"]},"application/vnd.xfdl.webform":{"source":"iana"},"application/vnd.xmi+xml":{"source":"iana","compressible":true},"application/vnd.xmpie.cpkg":{"source":"iana"},"application/vnd.xmpie.dpkg":{"source":"iana"},"application/vnd.xmpie.plan":{"source":"iana"},"application/vnd.xmpie.ppkg":{"source":"iana"},"application/vnd.xmpie.xlim":{"source":"iana"},"application/vnd.yamaha.hv-dic":{"source":"iana","extensions":["hvd"]},"application/vnd.yamaha.hv-script":{"source":"iana","extensions":["hvs"]},"application/vnd.yamaha.hv-voice":{"source":"iana","extensions":["hvp"]},"application/vnd.yamaha.openscoreformat":{"source":"iana","extensions":["osf"]},"application/vnd.yamaha.openscoreformat.osfpvg+xml":{"source":"iana","compressible":true,"extensions":["osfpvg"]},"application/vnd.yamaha.remote-setup":{"source":"iana"},"application/vnd.yamaha.smaf-audio":{"source":"iana","extensions":["saf"]},"application/vnd.yamaha.smaf-phrase":{"source":"iana","extensions":["spf"]},"application/vnd.yamaha.through-ngn":{"source":"iana"},"application/vnd.yamaha.tunnel-udpencap":{"source":"iana"},"application/vnd.yaoweme":{"source":"iana"},"application/vnd.yellowriver-custom-menu":{"source":"iana","extensions":["cmp"]},"application/vnd.youtube.yt":{"source":"iana"},"application/vnd.zul":{"source":"iana","extensions":["zir","zirz"]},"application/vnd.zzazz.deck+xml":{"source":"iana","compressible":true,"extensions":["zaz"]},"application/voicexml+xml":{"source":"iana","compressible":true,"extensions":["vxml"]},"application/voucher-cms+json":{"source":"iana","compressible":true},"application/vq-rtcpxr":{"source":"iana"},"application/wasm":{"source":"iana","compressible":true,"extensions":["wasm"]},"application/watcherinfo+xml":{"source":"iana","compressible":true},"application/webpush-options+json":{"source":"iana","compressible":true},"application/whoispp-query":{"source":"iana"},"application/whoispp-response":{"source":"iana"},"application/widget":{"source":"iana","extensions":["wgt"]},"application/winhlp":{"source":"apache","extensions":["hlp"]},"application/wita":{"source":"iana"},"application/wordperfect5.1":{"source":"iana"},"application/wsdl+xml":{"source":"iana","compressible":true,"extensions":["wsdl"]},"application/wspolicy+xml":{"source":"iana","compressible":true,"extensions":["wspolicy"]},"application/x-7z-compressed":{"source":"apache","compressible":false,"extensions":["7z"]},"application/x-abiword":{"source":"apache","extensions":["abw"]},"application/x-ace-compressed":{"source":"apache","extensions":["ace"]},"application/x-amf":{"source":"apache"},"application/x-apple-diskimage":{"source":"apache","extensions":["dmg"]},"application/x-arj":{"compressible":false,"extensions":["arj"]},"application/x-authorware-bin":{"source":"apache","extensions":["aab","x32","u32","vox"]},"application/x-authorware-map":{"source":"apache","extensions":["aam"]},"application/x-authorware-seg":{"source":"apache","extensions":["aas"]},"application/x-bcpio":{"source":"apache","extensions":["bcpio"]},"application/x-bdoc":{"compressible":false,"extensions":["bdoc"]},"application/x-bittorrent":{"source":"apache","extensions":["torrent"]},"application/x-blorb":{"source":"apache","extensions":["blb","blorb"]},"application/x-bzip":{"source":"apache","compressible":false,"extensions":["bz"]},"application/x-bzip2":{"source":"apache","compressible":false,"extensions":["bz2","boz"]},"application/x-cbr":{"source":"apache","extensions":["cbr","cba","cbt","cbz","cb7"]},"application/x-cdlink":{"source":"apache","extensions":["vcd"]},"application/x-cfs-compressed":{"source":"apache","extensions":["cfs"]},"application/x-chat":{"source":"apache","extensions":["chat"]},"application/x-chess-pgn":{"source":"apache","extensions":["pgn"]},"application/x-chrome-extension":{"extensions":["crx"]},"application/x-cocoa":{"source":"nginx","extensions":["cco"]},"application/x-compress":{"source":"apache"},"application/x-conference":{"source":"apache","extensions":["nsc"]},"application/x-cpio":{"source":"apache","extensions":["cpio"]},"application/x-csh":{"source":"apache","extensions":["csh"]},"application/x-deb":{"compressible":false},"application/x-debian-package":{"source":"apache","extensions":["deb","udeb"]},"application/x-dgc-compressed":{"source":"apache","extensions":["dgc"]},"application/x-director":{"source":"apache","extensions":["dir","dcr","dxr","cst","cct","cxt","w3d","fgd","swa"]},"application/x-doom":{"source":"apache","extensions":["wad"]},"application/x-dtbncx+xml":{"source":"apache","compressible":true,"extensions":["ncx"]},"application/x-dtbook+xml":{"source":"apache","compressible":true,"extensions":["dtb"]},"application/x-dtbresource+xml":{"source":"apache","compressible":true,"extensions":["res"]},"application/x-dvi":{"source":"apache","compressible":false,"extensions":["dvi"]},"application/x-envoy":{"source":"apache","extensions":["evy"]},"application/x-eva":{"source":"apache","extensions":["eva"]},"application/x-font-bdf":{"source":"apache","extensions":["bdf"]},"application/x-font-dos":{"source":"apache"},"application/x-font-framemaker":{"source":"apache"},"application/x-font-ghostscript":{"source":"apache","extensions":["gsf"]},"application/x-font-libgrx":{"source":"apache"},"application/x-font-linux-psf":{"source":"apache","extensions":["psf"]},"application/x-font-pcf":{"source":"apache","extensions":["pcf"]},"application/x-font-snf":{"source":"apache","extensions":["snf"]},"application/x-font-speedo":{"source":"apache"},"application/x-font-sunos-news":{"source":"apache"},"application/x-font-type1":{"source":"apache","extensions":["pfa","pfb","pfm","afm"]},"application/x-font-vfont":{"source":"apache"},"application/x-freearc":{"source":"apache","extensions":["arc"]},"application/x-futuresplash":{"source":"apache","extensions":["spl"]},"application/x-gca-compressed":{"source":"apache","extensions":["gca"]},"application/x-glulx":{"source":"apache","extensions":["ulx"]},"application/x-gnumeric":{"source":"apache","extensions":["gnumeric"]},"application/x-gramps-xml":{"source":"apache","extensions":["gramps"]},"application/x-gtar":{"source":"apache","extensions":["gtar"]},"application/x-gzip":{"source":"apache"},"application/x-hdf":{"source":"apache","extensions":["hdf"]},"application/x-httpd-php":{"compressible":true,"extensions":["php"]},"application/x-install-instructions":{"source":"apache","extensions":["install"]},"application/x-iso9660-image":{"source":"apache","extensions":["iso"]},"application/x-iwork-keynote-sffkey":{"extensions":["key"]},"application/x-iwork-numbers-sffnumbers":{"extensions":["numbers"]},"application/x-iwork-pages-sffpages":{"extensions":["pages"]},"application/x-java-archive-diff":{"source":"nginx","extensions":["jardiff"]},"application/x-java-jnlp-file":{"source":"apache","compressible":false,"extensions":["jnlp"]},"application/x-javascript":{"compressible":true},"application/x-keepass2":{"extensions":["kdbx"]},"application/x-latex":{"source":"apache","compressible":false,"extensions":["latex"]},"application/x-lua-bytecode":{"extensions":["luac"]},"application/x-lzh-compressed":{"source":"apache","extensions":["lzh","lha"]},"application/x-makeself":{"source":"nginx","extensions":["run"]},"application/x-mie":{"source":"apache","extensions":["mie"]},"application/x-mobipocket-ebook":{"source":"apache","extensions":["prc","mobi"]},"application/x-mpegurl":{"compressible":false},"application/x-ms-application":{"source":"apache","extensions":["application"]},"application/x-ms-shortcut":{"source":"apache","extensions":["lnk"]},"application/x-ms-wmd":{"source":"apache","extensions":["wmd"]},"application/x-ms-wmz":{"source":"apache","extensions":["wmz"]},"application/x-ms-xbap":{"source":"apache","extensions":["xbap"]},"application/x-msaccess":{"source":"apache","extensions":["mdb"]},"application/x-msbinder":{"source":"apache","extensions":["obd"]},"application/x-mscardfile":{"source":"apache","extensions":["crd"]},"application/x-msclip":{"source":"apache","extensions":["clp"]},"application/x-msdos-program":{"extensions":["exe"]},"application/x-msdownload":{"source":"apache","extensions":["exe","dll","com","bat","msi"]},"application/x-msmediaview":{"source":"apache","extensions":["mvb","m13","m14"]},"application/x-msmetafile":{"source":"apache","extensions":["wmf","wmz","emf","emz"]},"application/x-msmoney":{"source":"apache","extensions":["mny"]},"application/x-mspublisher":{"source":"apache","extensions":["pub"]},"application/x-msschedule":{"source":"apache","extensions":["scd"]},"application/x-msterminal":{"source":"apache","extensions":["trm"]},"application/x-mswrite":{"source":"apache","extensions":["wri"]},"application/x-netcdf":{"source":"apache","extensions":["nc","cdf"]},"application/x-ns-proxy-autoconfig":{"compressible":true,"extensions":["pac"]},"application/x-nzb":{"source":"apache","extensions":["nzb"]},"application/x-perl":{"source":"nginx","extensions":["pl","pm"]},"application/x-pilot":{"source":"nginx","extensions":["prc","pdb"]},"application/x-pkcs12":{"source":"apache","compressible":false,"extensions":["p12","pfx"]},"application/x-pkcs7-certificates":{"source":"apache","extensions":["p7b","spc"]},"application/x-pkcs7-certreqresp":{"source":"apache","extensions":["p7r"]},"application/x-pki-message":{"source":"iana"},"application/x-rar-compressed":{"source":"apache","compressible":false,"extensions":["rar"]},"application/x-redhat-package-manager":{"source":"nginx","extensions":["rpm"]},"application/x-research-info-systems":{"source":"apache","extensions":["ris"]},"application/x-sea":{"source":"nginx","extensions":["sea"]},"application/x-sh":{"source":"apache","compressible":true,"extensions":["sh"]},"application/x-shar":{"source":"apache","extensions":["shar"]},"application/x-shockwave-flash":{"source":"apache","compressible":false,"extensions":["swf"]},"application/x-silverlight-app":{"source":"apache","extensions":["xap"]},"application/x-sql":{"source":"apache","extensions":["sql"]},"application/x-stuffit":{"source":"apache","compressible":false,"extensions":["sit"]},"application/x-stuffitx":{"source":"apache","extensions":["sitx"]},"application/x-subrip":{"source":"apache","extensions":["srt"]},"application/x-sv4cpio":{"source":"apache","extensions":["sv4cpio"]},"application/x-sv4crc":{"source":"apache","extensions":["sv4crc"]},"application/x-t3vm-image":{"source":"apache","extensions":["t3"]},"application/x-tads":{"source":"apache","extensions":["gam"]},"application/x-tar":{"source":"apache","compressible":true,"extensions":["tar"]},"application/x-tcl":{"source":"apache","extensions":["tcl","tk"]},"application/x-tex":{"source":"apache","extensions":["tex"]},"application/x-tex-tfm":{"source":"apache","extensions":["tfm"]},"application/x-texinfo":{"source":"apache","extensions":["texinfo","texi"]},"application/x-tgif":{"source":"apache","extensions":["obj"]},"application/x-ustar":{"source":"apache","extensions":["ustar"]},"application/x-virtualbox-hdd":{"compressible":true,"extensions":["hdd"]},"application/x-virtualbox-ova":{"compressible":true,"extensions":["ova"]},"application/x-virtualbox-ovf":{"compressible":true,"extensions":["ovf"]},"application/x-virtualbox-vbox":{"compressible":true,"extensions":["vbox"]},"application/x-virtualbox-vbox-extpack":{"compressible":false,"extensions":["vbox-extpack"]},"application/x-virtualbox-vdi":{"compressible":true,"extensions":["vdi"]},"application/x-virtualbox-vhd":{"compressible":true,"extensions":["vhd"]},"application/x-virtualbox-vmdk":{"compressible":true,"extensions":["vmdk"]},"application/x-wais-source":{"source":"apache","extensions":["src"]},"application/x-web-app-manifest+json":{"compressible":true,"extensions":["webapp"]},"application/x-www-form-urlencoded":{"source":"iana","compressible":true},"application/x-x509-ca-cert":{"source":"iana","extensions":["der","crt","pem"]},"application/x-x509-ca-ra-cert":{"source":"iana"},"application/x-x509-next-ca-cert":{"source":"iana"},"application/x-xfig":{"source":"apache","extensions":["fig"]},"application/x-xliff+xml":{"source":"apache","compressible":true,"extensions":["xlf"]},"application/x-xpinstall":{"source":"apache","compressible":false,"extensions":["xpi"]},"application/x-xz":{"source":"apache","extensions":["xz"]},"application/x-zmachine":{"source":"apache","extensions":["z1","z2","z3","z4","z5","z6","z7","z8"]},"application/x400-bp":{"source":"iana"},"application/xacml+xml":{"source":"iana","compressible":true},"application/xaml+xml":{"source":"apache","compressible":true,"extensions":["xaml"]},"application/xcap-att+xml":{"source":"iana","compressible":true,"extensions":["xav"]},"application/xcap-caps+xml":{"source":"iana","compressible":true,"extensions":["xca"]},"application/xcap-diff+xml":{"source":"iana","compressible":true,"extensions":["xdf"]},"application/xcap-el+xml":{"source":"iana","compressible":true,"extensions":["xel"]},"application/xcap-error+xml":{"source":"iana","compressible":true},"application/xcap-ns+xml":{"source":"iana","compressible":true,"extensions":["xns"]},"application/xcon-conference-info+xml":{"source":"iana","compressible":true},"application/xcon-conference-info-diff+xml":{"source":"iana","compressible":true},"application/xenc+xml":{"source":"iana","compressible":true,"extensions":["xenc"]},"application/xhtml+xml":{"source":"iana","compressible":true,"extensions":["xhtml","xht"]},"application/xhtml-voice+xml":{"source":"apache","compressible":true},"application/xliff+xml":{"source":"iana","compressible":true,"extensions":["xlf"]},"application/xml":{"source":"iana","compressible":true,"extensions":["xml","xsl","xsd","rng"]},"application/xml-dtd":{"source":"iana","compressible":true,"extensions":["dtd"]},"application/xml-external-parsed-entity":{"source":"iana"},"application/xml-patch+xml":{"source":"iana","compressible":true},"application/xmpp+xml":{"source":"iana","compressible":true},"application/xop+xml":{"source":"iana","compressible":true,"extensions":["xop"]},"application/xproc+xml":{"source":"apache","compressible":true,"extensions":["xpl"]},"application/xslt+xml":{"source":"iana","compressible":true,"extensions":["xsl","xslt"]},"application/xspf+xml":{"source":"apache","compressible":true,"extensions":["xspf"]},"application/xv+xml":{"source":"iana","compressible":true,"extensions":["mxml","xhvml","xvml","xvm"]},"application/yang":{"source":"iana","extensions":["yang"]},"application/yang-data+json":{"source":"iana","compressible":true},"application/yang-data+xml":{"source":"iana","compressible":true},"application/yang-patch+json":{"source":"iana","compressible":true},"application/yang-patch+xml":{"source":"iana","compressible":true},"application/yin+xml":{"source":"iana","compressible":true,"extensions":["yin"]},"application/zip":{"source":"iana","compressible":false,"extensions":["zip"]},"application/zlib":{"source":"iana"},"application/zstd":{"source":"iana"},"audio/1d-interleaved-parityfec":{"source":"iana"},"audio/32kadpcm":{"source":"iana"},"audio/3gpp":{"source":"iana","compressible":false,"extensions":["3gpp"]},"audio/3gpp2":{"source":"iana"},"audio/aac":{"source":"iana"},"audio/ac3":{"source":"iana"},"audio/adpcm":{"source":"apache","extensions":["adp"]},"audio/amr":{"source":"iana","extensions":["amr"]},"audio/amr-wb":{"source":"iana"},"audio/amr-wb+":{"source":"iana"},"audio/aptx":{"source":"iana"},"audio/asc":{"source":"iana"},"audio/atrac-advanced-lossless":{"source":"iana"},"audio/atrac-x":{"source":"iana"},"audio/atrac3":{"source":"iana"},"audio/basic":{"source":"iana","compressible":false,"extensions":["au","snd"]},"audio/bv16":{"source":"iana"},"audio/bv32":{"source":"iana"},"audio/clearmode":{"source":"iana"},"audio/cn":{"source":"iana"},"audio/dat12":{"source":"iana"},"audio/dls":{"source":"iana"},"audio/dsr-es201108":{"source":"iana"},"audio/dsr-es202050":{"source":"iana"},"audio/dsr-es202211":{"source":"iana"},"audio/dsr-es202212":{"source":"iana"},"audio/dv":{"source":"iana"},"audio/dvi4":{"source":"iana"},"audio/eac3":{"source":"iana"},"audio/encaprtp":{"source":"iana"},"audio/evrc":{"source":"iana"},"audio/evrc-qcp":{"source":"iana"},"audio/evrc0":{"source":"iana"},"audio/evrc1":{"source":"iana"},"audio/evrcb":{"source":"iana"},"audio/evrcb0":{"source":"iana"},"audio/evrcb1":{"source":"iana"},"audio/evrcnw":{"source":"iana"},"audio/evrcnw0":{"source":"iana"},"audio/evrcnw1":{"source":"iana"},"audio/evrcwb":{"source":"iana"},"audio/evrcwb0":{"source":"iana"},"audio/evrcwb1":{"source":"iana"},"audio/evs":{"source":"iana"},"audio/flexfec":{"source":"iana"},"audio/fwdred":{"source":"iana"},"audio/g711-0":{"source":"iana"},"audio/g719":{"source":"iana"},"audio/g722":{"source":"iana"},"audio/g7221":{"source":"iana"},"audio/g723":{"source":"iana"},"audio/g726-16":{"source":"iana"},"audio/g726-24":{"source":"iana"},"audio/g726-32":{"source":"iana"},"audio/g726-40":{"source":"iana"},"audio/g728":{"source":"iana"},"audio/g729":{"source":"iana"},"audio/g7291":{"source":"iana"},"audio/g729d":{"source":"iana"},"audio/g729e":{"source":"iana"},"audio/gsm":{"source":"iana"},"audio/gsm-efr":{"source":"iana"},"audio/gsm-hr-08":{"source":"iana"},"audio/ilbc":{"source":"iana"},"audio/ip-mr_v2.5":{"source":"iana"},"audio/isac":{"source":"apache"},"audio/l16":{"source":"iana"},"audio/l20":{"source":"iana"},"audio/l24":{"source":"iana","compressible":false},"audio/l8":{"source":"iana"},"audio/lpc":{"source":"iana"},"audio/melp":{"source":"iana"},"audio/melp1200":{"source":"iana"},"audio/melp2400":{"source":"iana"},"audio/melp600":{"source":"iana"},"audio/mhas":{"source":"iana"},"audio/midi":{"source":"apache","extensions":["mid","midi","kar","rmi"]},"audio/mobile-xmf":{"source":"iana","extensions":["mxmf"]},"audio/mp3":{"compressible":false,"extensions":["mp3"]},"audio/mp4":{"source":"iana","compressible":false,"extensions":["m4a","mp4a"]},"audio/mp4a-latm":{"source":"iana"},"audio/mpa":{"source":"iana"},"audio/mpa-robust":{"source":"iana"},"audio/mpeg":{"source":"iana","compressible":false,"extensions":["mpga","mp2","mp2a","mp3","m2a","m3a"]},"audio/mpeg4-generic":{"source":"iana"},"audio/musepack":{"source":"apache"},"audio/ogg":{"source":"iana","compressible":false,"extensions":["oga","ogg","spx","opus"]},"audio/opus":{"source":"iana"},"audio/parityfec":{"source":"iana"},"audio/pcma":{"source":"iana"},"audio/pcma-wb":{"source":"iana"},"audio/pcmu":{"source":"iana"},"audio/pcmu-wb":{"source":"iana"},"audio/prs.sid":{"source":"iana"},"audio/qcelp":{"source":"iana"},"audio/raptorfec":{"source":"iana"},"audio/red":{"source":"iana"},"audio/rtp-enc-aescm128":{"source":"iana"},"audio/rtp-midi":{"source":"iana"},"audio/rtploopback":{"source":"iana"},"audio/rtx":{"source":"iana"},"audio/s3m":{"source":"apache","extensions":["s3m"]},"audio/scip":{"source":"iana"},"audio/silk":{"source":"apache","extensions":["sil"]},"audio/smv":{"source":"iana"},"audio/smv-qcp":{"source":"iana"},"audio/smv0":{"source":"iana"},"audio/sofa":{"source":"iana"},"audio/sp-midi":{"source":"iana"},"audio/speex":{"source":"iana"},"audio/t140c":{"source":"iana"},"audio/t38":{"source":"iana"},"audio/telephone-event":{"source":"iana"},"audio/tetra_acelp":{"source":"iana"},"audio/tetra_acelp_bb":{"source":"iana"},"audio/tone":{"source":"iana"},"audio/tsvcis":{"source":"iana"},"audio/uemclip":{"source":"iana"},"audio/ulpfec":{"source":"iana"},"audio/usac":{"source":"iana"},"audio/vdvi":{"source":"iana"},"audio/vmr-wb":{"source":"iana"},"audio/vnd.3gpp.iufp":{"source":"iana"},"audio/vnd.4sb":{"source":"iana"},"audio/vnd.audiokoz":{"source":"iana"},"audio/vnd.celp":{"source":"iana"},"audio/vnd.cisco.nse":{"source":"iana"},"audio/vnd.cmles.radio-events":{"source":"iana"},"audio/vnd.cns.anp1":{"source":"iana"},"audio/vnd.cns.inf1":{"source":"iana"},"audio/vnd.dece.audio":{"source":"iana","extensions":["uva","uvva"]},"audio/vnd.digital-winds":{"source":"iana","extensions":["eol"]},"audio/vnd.dlna.adts":{"source":"iana"},"audio/vnd.dolby.heaac.1":{"source":"iana"},"audio/vnd.dolby.heaac.2":{"source":"iana"},"audio/vnd.dolby.mlp":{"source":"iana"},"audio/vnd.dolby.mps":{"source":"iana"},"audio/vnd.dolby.pl2":{"source":"iana"},"audio/vnd.dolby.pl2x":{"source":"iana"},"audio/vnd.dolby.pl2z":{"source":"iana"},"audio/vnd.dolby.pulse.1":{"source":"iana"},"audio/vnd.dra":{"source":"iana","extensions":["dra"]},"audio/vnd.dts":{"source":"iana","extensions":["dts"]},"audio/vnd.dts.hd":{"source":"iana","extensions":["dtshd"]},"audio/vnd.dts.uhd":{"source":"iana"},"audio/vnd.dvb.file":{"source":"iana"},"audio/vnd.everad.plj":{"source":"iana"},"audio/vnd.hns.audio":{"source":"iana"},"audio/vnd.lucent.voice":{"source":"iana","extensions":["lvp"]},"audio/vnd.ms-playready.media.pya":{"source":"iana","extensions":["pya"]},"audio/vnd.nokia.mobile-xmf":{"source":"iana"},"audio/vnd.nortel.vbk":{"source":"iana"},"audio/vnd.nuera.ecelp4800":{"source":"iana","extensions":["ecelp4800"]},"audio/vnd.nuera.ecelp7470":{"source":"iana","extensions":["ecelp7470"]},"audio/vnd.nuera.ecelp9600":{"source":"iana","extensions":["ecelp9600"]},"audio/vnd.octel.sbc":{"source":"iana"},"audio/vnd.presonus.multitrack":{"source":"iana"},"audio/vnd.qcelp":{"source":"iana"},"audio/vnd.rhetorex.32kadpcm":{"source":"iana"},"audio/vnd.rip":{"source":"iana","extensions":["rip"]},"audio/vnd.rn-realaudio":{"compressible":false},"audio/vnd.sealedmedia.softseal.mpeg":{"source":"iana"},"audio/vnd.vmx.cvsd":{"source":"iana"},"audio/vnd.wave":{"compressible":false},"audio/vorbis":{"source":"iana","compressible":false},"audio/vorbis-config":{"source":"iana"},"audio/wav":{"compressible":false,"extensions":["wav"]},"audio/wave":{"compressible":false,"extensions":["wav"]},"audio/webm":{"source":"apache","compressible":false,"extensions":["weba"]},"audio/x-aac":{"source":"apache","compressible":false,"extensions":["aac"]},"audio/x-aiff":{"source":"apache","extensions":["aif","aiff","aifc"]},"audio/x-caf":{"source":"apache","compressible":false,"extensions":["caf"]},"audio/x-flac":{"source":"apache","extensions":["flac"]},"audio/x-m4a":{"source":"nginx","extensions":["m4a"]},"audio/x-matroska":{"source":"apache","extensions":["mka"]},"audio/x-mpegurl":{"source":"apache","extensions":["m3u"]},"audio/x-ms-wax":{"source":"apache","extensions":["wax"]},"audio/x-ms-wma":{"source":"apache","extensions":["wma"]},"audio/x-pn-realaudio":{"source":"apache","extensions":["ram","ra"]},"audio/x-pn-realaudio-plugin":{"source":"apache","extensions":["rmp"]},"audio/x-realaudio":{"source":"nginx","extensions":["ra"]},"audio/x-tta":{"source":"apache"},"audio/x-wav":{"source":"apache","extensions":["wav"]},"audio/xm":{"source":"apache","extensions":["xm"]},"chemical/x-cdx":{"source":"apache","extensions":["cdx"]},"chemical/x-cif":{"source":"apache","extensions":["cif"]},"chemical/x-cmdf":{"source":"apache","extensions":["cmdf"]},"chemical/x-cml":{"source":"apache","extensions":["cml"]},"chemical/x-csml":{"source":"apache","extensions":["csml"]},"chemical/x-pdb":{"source":"apache"},"chemical/x-xyz":{"source":"apache","extensions":["xyz"]},"font/collection":{"source":"iana","extensions":["ttc"]},"font/otf":{"source":"iana","compressible":true,"extensions":["otf"]},"font/sfnt":{"source":"iana"},"font/ttf":{"source":"iana","compressible":true,"extensions":["ttf"]},"font/woff":{"source":"iana","extensions":["woff"]},"font/woff2":{"source":"iana","extensions":["woff2"]},"image/aces":{"source":"iana","extensions":["exr"]},"image/apng":{"compressible":false,"extensions":["apng"]},"image/avci":{"source":"iana"},"image/avcs":{"source":"iana"},"image/avif":{"source":"iana","compressible":false,"extensions":["avif"]},"image/bmp":{"source":"iana","compressible":true,"extensions":["bmp"]},"image/cgm":{"source":"iana","extensions":["cgm"]},"image/dicom-rle":{"source":"iana","extensions":["drle"]},"image/emf":{"source":"iana","extensions":["emf"]},"image/fits":{"source":"iana","extensions":["fits"]},"image/g3fax":{"source":"iana","extensions":["g3"]},"image/gif":{"source":"iana","compressible":false,"extensions":["gif"]},"image/heic":{"source":"iana","extensions":["heic"]},"image/heic-sequence":{"source":"iana","extensions":["heics"]},"image/heif":{"source":"iana","extensions":["heif"]},"image/heif-sequence":{"source":"iana","extensions":["heifs"]},"image/hej2k":{"source":"iana","extensions":["hej2"]},"image/hsj2":{"source":"iana","extensions":["hsj2"]},"image/ief":{"source":"iana","extensions":["ief"]},"image/jls":{"source":"iana","extensions":["jls"]},"image/jp2":{"source":"iana","compressible":false,"extensions":["jp2","jpg2"]},"image/jpeg":{"source":"iana","compressible":false,"extensions":["jpeg","jpg","jpe"]},"image/jph":{"source":"iana","extensions":["jph"]},"image/jphc":{"source":"iana","extensions":["jhc"]},"image/jpm":{"source":"iana","compressible":false,"extensions":["jpm"]},"image/jpx":{"source":"iana","compressible":false,"extensions":["jpx","jpf"]},"image/jxr":{"source":"iana","extensions":["jxr"]},"image/jxra":{"source":"iana","extensions":["jxra"]},"image/jxrs":{"source":"iana","extensions":["jxrs"]},"image/jxs":{"source":"iana","extensions":["jxs"]},"image/jxsc":{"source":"iana","extensions":["jxsc"]},"image/jxsi":{"source":"iana","extensions":["jxsi"]},"image/jxss":{"source":"iana","extensions":["jxss"]},"image/ktx":{"source":"iana","extensions":["ktx"]},"image/ktx2":{"source":"iana","extensions":["ktx2"]},"image/naplps":{"source":"iana"},"image/pjpeg":{"compressible":false},"image/png":{"source":"iana","compressible":false,"extensions":["png"]},"image/prs.btif":{"source":"iana","extensions":["btif"]},"image/prs.pti":{"source":"iana","extensions":["pti"]},"image/pwg-raster":{"source":"iana"},"image/sgi":{"source":"apache","extensions":["sgi"]},"image/svg+xml":{"source":"iana","compressible":true,"extensions":["svg","svgz"]},"image/t38":{"source":"iana","extensions":["t38"]},"image/tiff":{"source":"iana","compressible":false,"extensions":["tif","tiff"]},"image/tiff-fx":{"source":"iana","extensions":["tfx"]},"image/vnd.adobe.photoshop":{"source":"iana","compressible":true,"extensions":["psd"]},"image/vnd.airzip.accelerator.azv":{"source":"iana","extensions":["azv"]},"image/vnd.cns.inf2":{"source":"iana"},"image/vnd.dece.graphic":{"source":"iana","extensions":["uvi","uvvi","uvg","uvvg"]},"image/vnd.djvu":{"source":"iana","extensions":["djvu","djv"]},"image/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"image/vnd.dwg":{"source":"iana","extensions":["dwg"]},"image/vnd.dxf":{"source":"iana","extensions":["dxf"]},"image/vnd.fastbidsheet":{"source":"iana","extensions":["fbs"]},"image/vnd.fpx":{"source":"iana","extensions":["fpx"]},"image/vnd.fst":{"source":"iana","extensions":["fst"]},"image/vnd.fujixerox.edmics-mmr":{"source":"iana","extensions":["mmr"]},"image/vnd.fujixerox.edmics-rlc":{"source":"iana","extensions":["rlc"]},"image/vnd.globalgraphics.pgb":{"source":"iana"},"image/vnd.microsoft.icon":{"source":"iana","compressible":true,"extensions":["ico"]},"image/vnd.mix":{"source":"iana"},"image/vnd.mozilla.apng":{"source":"iana"},"image/vnd.ms-dds":{"compressible":true,"extensions":["dds"]},"image/vnd.ms-modi":{"source":"iana","extensions":["mdi"]},"image/vnd.ms-photo":{"source":"apache","extensions":["wdp"]},"image/vnd.net-fpx":{"source":"iana","extensions":["npx"]},"image/vnd.pco.b16":{"source":"iana","extensions":["b16"]},"image/vnd.radiance":{"source":"iana"},"image/vnd.sealed.png":{"source":"iana"},"image/vnd.sealedmedia.softseal.gif":{"source":"iana"},"image/vnd.sealedmedia.softseal.jpg":{"source":"iana"},"image/vnd.svf":{"source":"iana"},"image/vnd.tencent.tap":{"source":"iana","extensions":["tap"]},"image/vnd.valve.source.texture":{"source":"iana","extensions":["vtf"]},"image/vnd.wap.wbmp":{"source":"iana","extensions":["wbmp"]},"image/vnd.xiff":{"source":"iana","extensions":["xif"]},"image/vnd.zbrush.pcx":{"source":"iana","extensions":["pcx"]},"image/webp":{"source":"apache","extensions":["webp"]},"image/wmf":{"source":"iana","extensions":["wmf"]},"image/x-3ds":{"source":"apache","extensions":["3ds"]},"image/x-cmu-raster":{"source":"apache","extensions":["ras"]},"image/x-cmx":{"source":"apache","extensions":["cmx"]},"image/x-freehand":{"source":"apache","extensions":["fh","fhc","fh4","fh5","fh7"]},"image/x-icon":{"source":"apache","compressible":true,"extensions":["ico"]},"image/x-jng":{"source":"nginx","extensions":["jng"]},"image/x-mrsid-image":{"source":"apache","extensions":["sid"]},"image/x-ms-bmp":{"source":"nginx","compressible":true,"extensions":["bmp"]},"image/x-pcx":{"source":"apache","extensions":["pcx"]},"image/x-pict":{"source":"apache","extensions":["pic","pct"]},"image/x-portable-anymap":{"source":"apache","extensions":["pnm"]},"image/x-portable-bitmap":{"source":"apache","extensions":["pbm"]},"image/x-portable-graymap":{"source":"apache","extensions":["pgm"]},"image/x-portable-pixmap":{"source":"apache","extensions":["ppm"]},"image/x-rgb":{"source":"apache","extensions":["rgb"]},"image/x-tga":{"source":"apache","extensions":["tga"]},"image/x-xbitmap":{"source":"apache","extensions":["xbm"]},"image/x-xcf":{"compressible":false},"image/x-xpixmap":{"source":"apache","extensions":["xpm"]},"image/x-xwindowdump":{"source":"apache","extensions":["xwd"]},"message/cpim":{"source":"iana"},"message/delivery-status":{"source":"iana"},"message/disposition-notification":{"source":"iana","extensions":["disposition-notification"]},"message/external-body":{"source":"iana"},"message/feedback-report":{"source":"iana"},"message/global":{"source":"iana","extensions":["u8msg"]},"message/global-delivery-status":{"source":"iana","extensions":["u8dsn"]},"message/global-disposition-notification":{"source":"iana","extensions":["u8mdn"]},"message/global-headers":{"source":"iana","extensions":["u8hdr"]},"message/http":{"source":"iana","compressible":false},"message/imdn+xml":{"source":"iana","compressible":true},"message/news":{"source":"iana"},"message/partial":{"source":"iana","compressible":false},"message/rfc822":{"source":"iana","compressible":true,"extensions":["eml","mime"]},"message/s-http":{"source":"iana"},"message/sip":{"source":"iana"},"message/sipfrag":{"source":"iana"},"message/tracking-status":{"source":"iana"},"message/vnd.si.simp":{"source":"iana"},"message/vnd.wfa.wsc":{"source":"iana","extensions":["wsc"]},"model/3mf":{"source":"iana","extensions":["3mf"]},"model/e57":{"source":"iana"},"model/gltf+json":{"source":"iana","compressible":true,"extensions":["gltf"]},"model/gltf-binary":{"source":"iana","compressible":true,"extensions":["glb"]},"model/iges":{"source":"iana","compressible":false,"extensions":["igs","iges"]},"model/mesh":{"source":"iana","compressible":false,"extensions":["msh","mesh","silo"]},"model/mtl":{"source":"iana","extensions":["mtl"]},"model/obj":{"source":"iana","extensions":["obj"]},"model/step":{"source":"iana"},"model/step+xml":{"source":"iana","compressible":true,"extensions":["stpx"]},"model/step+zip":{"source":"iana","compressible":false,"extensions":["stpz"]},"model/step-xml+zip":{"source":"iana","compressible":false,"extensions":["stpxz"]},"model/stl":{"source":"iana","extensions":["stl"]},"model/vnd.collada+xml":{"source":"iana","compressible":true,"extensions":["dae"]},"model/vnd.dwf":{"source":"iana","extensions":["dwf"]},"model/vnd.flatland.3dml":{"source":"iana"},"model/vnd.gdl":{"source":"iana","extensions":["gdl"]},"model/vnd.gs-gdl":{"source":"apache"},"model/vnd.gs.gdl":{"source":"iana"},"model/vnd.gtw":{"source":"iana","extensions":["gtw"]},"model/vnd.moml+xml":{"source":"iana","compressible":true},"model/vnd.mts":{"source":"iana","extensions":["mts"]},"model/vnd.opengex":{"source":"iana","extensions":["ogex"]},"model/vnd.parasolid.transmit.binary":{"source":"iana","extensions":["x_b"]},"model/vnd.parasolid.transmit.text":{"source":"iana","extensions":["x_t"]},"model/vnd.pytha.pyox":{"source":"iana"},"model/vnd.rosette.annotated-data-model":{"source":"iana"},"model/vnd.sap.vds":{"source":"iana","extensions":["vds"]},"model/vnd.usdz+zip":{"source":"iana","compressible":false,"extensions":["usdz"]},"model/vnd.valve.source.compiled-map":{"source":"iana","extensions":["bsp"]},"model/vnd.vtu":{"source":"iana","extensions":["vtu"]},"model/vrml":{"source":"iana","compressible":false,"extensions":["wrl","vrml"]},"model/x3d+binary":{"source":"apache","compressible":false,"extensions":["x3db","x3dbz"]},"model/x3d+fastinfoset":{"source":"iana","extensions":["x3db"]},"model/x3d+vrml":{"source":"apache","compressible":false,"extensions":["x3dv","x3dvz"]},"model/x3d+xml":{"source":"iana","compressible":true,"extensions":["x3d","x3dz"]},"model/x3d-vrml":{"source":"iana","extensions":["x3dv"]},"multipart/alternative":{"source":"iana","compressible":false},"multipart/appledouble":{"source":"iana"},"multipart/byteranges":{"source":"iana"},"multipart/digest":{"source":"iana"},"multipart/encrypted":{"source":"iana","compressible":false},"multipart/form-data":{"source":"iana","compressible":false},"multipart/header-set":{"source":"iana"},"multipart/mixed":{"source":"iana"},"multipart/multilingual":{"source":"iana"},"multipart/parallel":{"source":"iana"},"multipart/related":{"source":"iana","compressible":false},"multipart/report":{"source":"iana"},"multipart/signed":{"source":"iana","compressible":false},"multipart/vnd.bint.med-plus":{"source":"iana"},"multipart/voice-message":{"source":"iana"},"multipart/x-mixed-replace":{"source":"iana"},"text/1d-interleaved-parityfec":{"source":"iana"},"text/cache-manifest":{"source":"iana","compressible":true,"extensions":["appcache","manifest"]},"text/calendar":{"source":"iana","extensions":["ics","ifb"]},"text/calender":{"compressible":true},"text/cmd":{"compressible":true},"text/coffeescript":{"extensions":["coffee","litcoffee"]},"text/cql":{"source":"iana"},"text/cql-expression":{"source":"iana"},"text/cql-identifier":{"source":"iana"},"text/css":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["css"]},"text/csv":{"source":"iana","compressible":true,"extensions":["csv"]},"text/csv-schema":{"source":"iana"},"text/directory":{"source":"iana"},"text/dns":{"source":"iana"},"text/ecmascript":{"source":"iana"},"text/encaprtp":{"source":"iana"},"text/enriched":{"source":"iana"},"text/fhirpath":{"source":"iana"},"text/flexfec":{"source":"iana"},"text/fwdred":{"source":"iana"},"text/gff3":{"source":"iana"},"text/grammar-ref-list":{"source":"iana"},"text/html":{"source":"iana","compressible":true,"extensions":["html","htm","shtml"]},"text/jade":{"extensions":["jade"]},"text/javascript":{"source":"iana","compressible":true},"text/jcr-cnd":{"source":"iana"},"text/jsx":{"compressible":true,"extensions":["jsx"]},"text/less":{"compressible":true,"extensions":["less"]},"text/markdown":{"source":"iana","compressible":true,"extensions":["markdown","md"]},"text/mathml":{"source":"nginx","extensions":["mml"]},"text/mdx":{"compressible":true,"extensions":["mdx"]},"text/mizar":{"source":"iana"},"text/n3":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["n3"]},"text/parameters":{"source":"iana","charset":"UTF-8"},"text/parityfec":{"source":"iana"},"text/plain":{"source":"iana","compressible":true,"extensions":["txt","text","conf","def","list","log","in","ini"]},"text/provenance-notation":{"source":"iana","charset":"UTF-8"},"text/prs.fallenstein.rst":{"source":"iana"},"text/prs.lines.tag":{"source":"iana","extensions":["dsc"]},"text/prs.prop.logic":{"source":"iana"},"text/raptorfec":{"source":"iana"},"text/red":{"source":"iana"},"text/rfc822-headers":{"source":"iana"},"text/richtext":{"source":"iana","compressible":true,"extensions":["rtx"]},"text/rtf":{"source":"iana","compressible":true,"extensions":["rtf"]},"text/rtp-enc-aescm128":{"source":"iana"},"text/rtploopback":{"source":"iana"},"text/rtx":{"source":"iana"},"text/sgml":{"source":"iana","extensions":["sgml","sgm"]},"text/shaclc":{"source":"iana"},"text/shex":{"source":"iana","extensions":["shex"]},"text/slim":{"extensions":["slim","slm"]},"text/spdx":{"source":"iana","extensions":["spdx"]},"text/strings":{"source":"iana"},"text/stylus":{"extensions":["stylus","styl"]},"text/t140":{"source":"iana"},"text/tab-separated-values":{"source":"iana","compressible":true,"extensions":["tsv"]},"text/troff":{"source":"iana","extensions":["t","tr","roff","man","me","ms"]},"text/turtle":{"source":"iana","charset":"UTF-8","extensions":["ttl"]},"text/ulpfec":{"source":"iana"},"text/uri-list":{"source":"iana","compressible":true,"extensions":["uri","uris","urls"]},"text/vcard":{"source":"iana","compressible":true,"extensions":["vcard"]},"text/vnd.a":{"source":"iana"},"text/vnd.abc":{"source":"iana"},"text/vnd.ascii-art":{"source":"iana"},"text/vnd.curl":{"source":"iana","extensions":["curl"]},"text/vnd.curl.dcurl":{"source":"apache","extensions":["dcurl"]},"text/vnd.curl.mcurl":{"source":"apache","extensions":["mcurl"]},"text/vnd.curl.scurl":{"source":"apache","extensions":["scurl"]},"text/vnd.debian.copyright":{"source":"iana","charset":"UTF-8"},"text/vnd.dmclientscript":{"source":"iana"},"text/vnd.dvb.subtitle":{"source":"iana","extensions":["sub"]},"text/vnd.esmertec.theme-descriptor":{"source":"iana","charset":"UTF-8"},"text/vnd.familysearch.gedcom":{"source":"iana","extensions":["ged"]},"text/vnd.ficlab.flt":{"source":"iana"},"text/vnd.fly":{"source":"iana","extensions":["fly"]},"text/vnd.fmi.flexstor":{"source":"iana","extensions":["flx"]},"text/vnd.gml":{"source":"iana"},"text/vnd.graphviz":{"source":"iana","extensions":["gv"]},"text/vnd.hans":{"source":"iana"},"text/vnd.hgl":{"source":"iana"},"text/vnd.in3d.3dml":{"source":"iana","extensions":["3dml"]},"text/vnd.in3d.spot":{"source":"iana","extensions":["spot"]},"text/vnd.iptc.newsml":{"source":"iana"},"text/vnd.iptc.nitf":{"source":"iana"},"text/vnd.latex-z":{"source":"iana"},"text/vnd.motorola.reflex":{"source":"iana"},"text/vnd.ms-mediapackage":{"source":"iana"},"text/vnd.net2phone.commcenter.command":{"source":"iana"},"text/vnd.radisys.msml-basic-layout":{"source":"iana"},"text/vnd.senx.warpscript":{"source":"iana"},"text/vnd.si.uricatalogue":{"source":"iana"},"text/vnd.sosi":{"source":"iana"},"text/vnd.sun.j2me.app-descriptor":{"source":"iana","charset":"UTF-8","extensions":["jad"]},"text/vnd.trolltech.linguist":{"source":"iana","charset":"UTF-8"},"text/vnd.wap.si":{"source":"iana"},"text/vnd.wap.sl":{"source":"iana"},"text/vnd.wap.wml":{"source":"iana","extensions":["wml"]},"text/vnd.wap.wmlscript":{"source":"iana","extensions":["wmls"]},"text/vtt":{"source":"iana","charset":"UTF-8","compressible":true,"extensions":["vtt"]},"text/x-asm":{"source":"apache","extensions":["s","asm"]},"text/x-c":{"source":"apache","extensions":["c","cc","cxx","cpp","h","hh","dic"]},"text/x-component":{"source":"nginx","extensions":["htc"]},"text/x-fortran":{"source":"apache","extensions":["f","for","f77","f90"]},"text/x-gwt-rpc":{"compressible":true},"text/x-handlebars-template":{"extensions":["hbs"]},"text/x-java-source":{"source":"apache","extensions":["java"]},"text/x-jquery-tmpl":{"compressible":true},"text/x-lua":{"extensions":["lua"]},"text/x-markdown":{"compressible":true,"extensions":["mkd"]},"text/x-nfo":{"source":"apache","extensions":["nfo"]},"text/x-opml":{"source":"apache","extensions":["opml"]},"text/x-org":{"compressible":true,"extensions":["org"]},"text/x-pascal":{"source":"apache","extensions":["p","pas"]},"text/x-processing":{"compressible":true,"extensions":["pde"]},"text/x-sass":{"extensions":["sass"]},"text/x-scss":{"extensions":["scss"]},"text/x-setext":{"source":"apache","extensions":["etx"]},"text/x-sfv":{"source":"apache","extensions":["sfv"]},"text/x-suse-ymp":{"compressible":true,"extensions":["ymp"]},"text/x-uuencode":{"source":"apache","extensions":["uu"]},"text/x-vcalendar":{"source":"apache","extensions":["vcs"]},"text/x-vcard":{"source":"apache","extensions":["vcf"]},"text/xml":{"source":"iana","compressible":true,"extensions":["xml"]},"text/xml-external-parsed-entity":{"source":"iana"},"text/yaml":{"compressible":true,"extensions":["yaml","yml"]},"video/1d-interleaved-parityfec":{"source":"iana"},"video/3gpp":{"source":"iana","extensions":["3gp","3gpp"]},"video/3gpp-tt":{"source":"iana"},"video/3gpp2":{"source":"iana","extensions":["3g2"]},"video/av1":{"source":"iana"},"video/bmpeg":{"source":"iana"},"video/bt656":{"source":"iana"},"video/celb":{"source":"iana"},"video/dv":{"source":"iana"},"video/encaprtp":{"source":"iana"},"video/ffv1":{"source":"iana"},"video/flexfec":{"source":"iana"},"video/h261":{"source":"iana","extensions":["h261"]},"video/h263":{"source":"iana","extensions":["h263"]},"video/h263-1998":{"source":"iana"},"video/h263-2000":{"source":"iana"},"video/h264":{"source":"iana","extensions":["h264"]},"video/h264-rcdo":{"source":"iana"},"video/h264-svc":{"source":"iana"},"video/h265":{"source":"iana"},"video/iso.segment":{"source":"iana","extensions":["m4s"]},"video/jpeg":{"source":"iana","extensions":["jpgv"]},"video/jpeg2000":{"source":"iana"},"video/jpm":{"source":"apache","extensions":["jpm","jpgm"]},"video/jxsv":{"source":"iana"},"video/mj2":{"source":"iana","extensions":["mj2","mjp2"]},"video/mp1s":{"source":"iana"},"video/mp2p":{"source":"iana"},"video/mp2t":{"source":"iana","extensions":["ts"]},"video/mp4":{"source":"iana","compressible":false,"extensions":["mp4","mp4v","mpg4"]},"video/mp4v-es":{"source":"iana"},"video/mpeg":{"source":"iana","compressible":false,"extensions":["mpeg","mpg","mpe","m1v","m2v"]},"video/mpeg4-generic":{"source":"iana"},"video/mpv":{"source":"iana"},"video/nv":{"source":"iana"},"video/ogg":{"source":"iana","compressible":false,"extensions":["ogv"]},"video/parityfec":{"source":"iana"},"video/pointer":{"source":"iana"},"video/quicktime":{"source":"iana","compressible":false,"extensions":["qt","mov"]},"video/raptorfec":{"source":"iana"},"video/raw":{"source":"iana"},"video/rtp-enc-aescm128":{"source":"iana"},"video/rtploopback":{"source":"iana"},"video/rtx":{"source":"iana"},"video/scip":{"source":"iana"},"video/smpte291":{"source":"iana"},"video/smpte292m":{"source":"iana"},"video/ulpfec":{"source":"iana"},"video/vc1":{"source":"iana"},"video/vc2":{"source":"iana"},"video/vnd.cctv":{"source":"iana"},"video/vnd.dece.hd":{"source":"iana","extensions":["uvh","uvvh"]},"video/vnd.dece.mobile":{"source":"iana","extensions":["uvm","uvvm"]},"video/vnd.dece.mp4":{"source":"iana"},"video/vnd.dece.pd":{"source":"iana","extensions":["uvp","uvvp"]},"video/vnd.dece.sd":{"source":"iana","extensions":["uvs","uvvs"]},"video/vnd.dece.video":{"source":"iana","extensions":["uvv","uvvv"]},"video/vnd.directv.mpeg":{"source":"iana"},"video/vnd.directv.mpeg-tts":{"source":"iana"},"video/vnd.dlna.mpeg-tts":{"source":"iana"},"video/vnd.dvb.file":{"source":"iana","extensions":["dvb"]},"video/vnd.fvt":{"source":"iana","extensions":["fvt"]},"video/vnd.hns.video":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.1dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-1010":{"source":"iana"},"video/vnd.iptvforum.2dparityfec-2005":{"source":"iana"},"video/vnd.iptvforum.ttsavc":{"source":"iana"},"video/vnd.iptvforum.ttsmpeg2":{"source":"iana"},"video/vnd.motorola.video":{"source":"iana"},"video/vnd.motorola.videop":{"source":"iana"},"video/vnd.mpegurl":{"source":"iana","extensions":["mxu","m4u"]},"video/vnd.ms-playready.media.pyv":{"source":"iana","extensions":["pyv"]},"video/vnd.nokia.interleaved-multimedia":{"source":"iana"},"video/vnd.nokia.mp4vr":{"source":"iana"},"video/vnd.nokia.videovoip":{"source":"iana"},"video/vnd.objectvideo":{"source":"iana"},"video/vnd.radgamettools.bink":{"source":"iana"},"video/vnd.radgamettools.smacker":{"source":"iana"},"video/vnd.sealed.mpeg1":{"source":"iana"},"video/vnd.sealed.mpeg4":{"source":"iana"},"video/vnd.sealed.swf":{"source":"iana"},"video/vnd.sealedmedia.softseal.mov":{"source":"iana"},"video/vnd.uvvu.mp4":{"source":"iana","extensions":["uvu","uvvu"]},"video/vnd.vivo":{"source":"iana","extensions":["viv"]},"video/vnd.youtube.yt":{"source":"iana"},"video/vp8":{"source":"iana"},"video/vp9":{"source":"iana"},"video/webm":{"source":"apache","compressible":false,"extensions":["webm"]},"video/x-f4v":{"source":"apache","extensions":["f4v"]},"video/x-fli":{"source":"apache","extensions":["fli"]},"video/x-flv":{"source":"apache","compressible":false,"extensions":["flv"]},"video/x-m4v":{"source":"apache","extensions":["m4v"]},"video/x-matroska":{"source":"apache","compressible":false,"extensions":["mkv","mk3d","mks"]},"video/x-mng":{"source":"apache","extensions":["mng"]},"video/x-ms-asf":{"source":"apache","extensions":["asf","asx"]},"video/x-ms-vob":{"source":"apache","extensions":["vob"]},"video/x-ms-wm":{"source":"apache","extensions":["wm"]},"video/x-ms-wmv":{"source":"apache","compressible":false,"extensions":["wmv"]},"video/x-ms-wmx":{"source":"apache","extensions":["wmx"]},"video/x-ms-wvx":{"source":"apache","extensions":["wvx"]},"video/x-msvideo":{"source":"apache","extensions":["avi"]},"video/x-sgi-movie":{"source":"apache","extensions":["movie"]},"video/x-smv":{"source":"apache","extensions":["smv"]},"x-conference/x-cooltalk":{"source":"apache","extensions":["ice"]},"x-shader/x-fragment":{"compressible":true},"x-shader/x-vertex":{"compressible":true}}');
      },
      "../node_modules/mime-db/index.js": function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__("../node_modules/mime-db/db.json");
      },
      "../node_modules/mime-types/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var db = __webpack_require__("../node_modules/mime-db/index.js");
        var extname = __webpack_require__("path").extname;
        var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
        var TEXT_TYPE_REGEXP = /^text\//i;
        exports3.charset = charset;
        exports3.charsets = { lookup: charset };
        exports3.contentType = contentType;
        exports3.extension = extension;
        exports3.extensions = /* @__PURE__ */ Object.create(null);
        exports3.lookup = lookup;
        exports3.types = /* @__PURE__ */ Object.create(null);
        populateMaps(exports3.extensions, exports3.types);
        function charset(type) {
          if (!type || typeof type !== "string") {
            return false;
          }
          var match = EXTRACT_TYPE_REGEXP.exec(type);
          var mime = match && db[match[1].toLowerCase()];
          if (mime && mime.charset) {
            return mime.charset;
          }
          if (match && TEXT_TYPE_REGEXP.test(match[1])) {
            return "UTF-8";
          }
          return false;
        }
        function contentType(str) {
          if (!str || typeof str !== "string") {
            return false;
          }
          var mime = str.indexOf("/") === -1 ? exports3.lookup(str) : str;
          if (!mime) {
            return false;
          }
          if (mime.indexOf("charset") === -1) {
            var charset2 = exports3.charset(mime);
            if (charset2)
              mime += "; charset=" + charset2.toLowerCase();
          }
          return mime;
        }
        function extension(type) {
          if (!type || typeof type !== "string") {
            return false;
          }
          var match = EXTRACT_TYPE_REGEXP.exec(type);
          var exts = match && exports3.extensions[match[1].toLowerCase()];
          if (!exts || !exts.length) {
            return false;
          }
          return exts[0];
        }
        function lookup(path) {
          if (!path || typeof path !== "string") {
            return false;
          }
          var extension2 = extname("x." + path).toLowerCase().substr(1);
          if (!extension2) {
            return false;
          }
          return exports3.types[extension2] || false;
        }
        function populateMaps(extensions, types) {
          var preference = ["nginx", "apache", void 0, "iana"];
          Object.keys(db).forEach(function forEachMimeType(type) {
            var mime = db[type];
            var exts = mime.extensions;
            if (!exts || !exts.length) {
              return;
            }
            extensions[type] = exts;
            for (var i = 0; i < exts.length; i++) {
              var extension2 = exts[i];
              if (types[extension2]) {
                var from = preference.indexOf(db[types[extension2]].source);
                var to = preference.indexOf(mime.source);
                if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
                  continue;
                }
              }
              types[extension2] = type;
            }
          });
        }
      },
      "../node_modules/ms/index.js": function(module3, exports3) {
        var s = 1e3;
        var m = s * 60;
        var h = m * 60;
        var d = h * 24;
        var y = d * 365.25;
        module3.exports = function(val, options) {
          options = options || {};
          var type = typeof val;
          if (type === "string" && val.length > 0) {
            return parse(val);
          } else if (type === "number" && isNaN(val) === false) {
            return options.long ? fmtLong(val) : fmtShort(val);
          }
          throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
        };
        function parse(str) {
          str = String(str);
          if (str.length > 100) {
            return;
          }
          var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
          if (!match) {
            return;
          }
          var n = parseFloat(match[1]);
          var type = (match[2] || "ms").toLowerCase();
          switch (type) {
            case "years":
            case "year":
            case "yrs":
            case "yr":
            case "y":
              return n * y;
            case "days":
            case "day":
            case "d":
              return n * d;
            case "hours":
            case "hour":
            case "hrs":
            case "hr":
            case "h":
              return n * h;
            case "minutes":
            case "minute":
            case "mins":
            case "min":
            case "m":
              return n * m;
            case "seconds":
            case "second":
            case "secs":
            case "sec":
            case "s":
              return n * s;
            case "milliseconds":
            case "millisecond":
            case "msecs":
            case "msec":
            case "ms":
              return n;
            default:
              return void 0;
          }
        }
        function fmtShort(ms) {
          if (ms >= d) {
            return Math.round(ms / d) + "d";
          }
          if (ms >= h) {
            return Math.round(ms / h) + "h";
          }
          if (ms >= m) {
            return Math.round(ms / m) + "m";
          }
          if (ms >= s) {
            return Math.round(ms / s) + "s";
          }
          return ms + "ms";
        }
        function fmtLong(ms) {
          return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
        }
        function plural(ms, n, name) {
          if (ms < n) {
            return;
          }
          if (ms < n * 1.5) {
            return Math.floor(ms / n) + " " + name;
          }
          return Math.ceil(ms / n) + " " + name + "s";
        }
      },
      "../node_modules/object-inspect/index.js": function(module3, exports3, __webpack_require__) {
        var hasMap = typeof Map === "function" && Map.prototype;
        var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
        var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
        var mapForEach = hasMap && Map.prototype.forEach;
        var hasSet = typeof Set === "function" && Set.prototype;
        var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
        var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
        var setForEach = hasSet && Set.prototype.forEach;
        var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
        var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
        var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
        var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
        var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
        var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
        var booleanValueOf = Boolean.prototype.valueOf;
        var objectToString = Object.prototype.toString;
        var functionToString = Function.prototype.toString;
        var match = String.prototype.match;
        var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
        var gOPS = Object.getOwnPropertySymbols;
        var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
        var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
        var isEnumerable = Object.prototype.propertyIsEnumerable;
        var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
          return O.__proto__;
        } : null);
        var inspectCustom = __webpack_require__("../node_modules/object-inspect/util.inspect.js").custom;
        var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
        var toStringTag = typeof Symbol === "function" && typeof Symbol.toStringTag !== "undefined" ? Symbol.toStringTag : null;
        module3.exports = function inspect_(obj, options, depth, seen) {
          var opts = options || {};
          if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
            throw new TypeError('option "quoteStyle" must be "single" or "double"');
          }
          if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
            throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
          }
          var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
          if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
            throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
          }
          if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
            throw new TypeError('options "indent" must be "\\t", an integer > 0, or `null`');
          }
          if (typeof obj === "undefined") {
            return "undefined";
          }
          if (obj === null) {
            return "null";
          }
          if (typeof obj === "boolean") {
            return obj ? "true" : "false";
          }
          if (typeof obj === "string") {
            return inspectString(obj, opts);
          }
          if (typeof obj === "number") {
            if (obj === 0) {
              return Infinity / obj > 0 ? "0" : "-0";
            }
            return String(obj);
          }
          if (typeof obj === "bigint") {
            return String(obj) + "n";
          }
          var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
          if (typeof depth === "undefined") {
            depth = 0;
          }
          if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
            return isArray(obj) ? "[Array]" : "[Object]";
          }
          var indent = getIndent(opts, depth);
          if (typeof seen === "undefined") {
            seen = [];
          } else if (indexOf(seen, obj) >= 0) {
            return "[Circular]";
          }
          function inspect(value, from, noIndent) {
            if (from) {
              seen = seen.slice();
              seen.push(from);
            }
            if (noIndent) {
              var newOpts = {
                depth: opts.depth
              };
              if (has(opts, "quoteStyle")) {
                newOpts.quoteStyle = opts.quoteStyle;
              }
              return inspect_(value, newOpts, depth + 1, seen);
            }
            return inspect_(value, opts, depth + 1, seen);
          }
          if (typeof obj === "function") {
            var name = nameOf(obj);
            var keys = arrObjKeys(obj, inspect);
            return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + keys.join(", ") + " }" : "");
          }
          if (isSymbol(obj)) {
            var symString = hasShammedSymbols ? String(obj).replace(/^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
            return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
          }
          if (isElement(obj)) {
            var s = "<" + String(obj.nodeName).toLowerCase();
            var attrs = obj.attributes || [];
            for (var i = 0; i < attrs.length; i++) {
              s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
            }
            s += ">";
            if (obj.childNodes && obj.childNodes.length) {
              s += "...";
            }
            s += "</" + String(obj.nodeName).toLowerCase() + ">";
            return s;
          }
          if (isArray(obj)) {
            if (obj.length === 0) {
              return "[]";
            }
            var xs = arrObjKeys(obj, inspect);
            if (indent && !singleLineValues(xs)) {
              return "[" + indentedJoin(xs, indent) + "]";
            }
            return "[ " + xs.join(", ") + " ]";
          }
          if (isError(obj)) {
            var parts = arrObjKeys(obj, inspect);
            if (parts.length === 0) {
              return "[" + String(obj) + "]";
            }
            return "{ [" + String(obj) + "] " + parts.join(", ") + " }";
          }
          if (typeof obj === "object" && customInspect) {
            if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
              return obj[inspectSymbol]();
            } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
              return obj.inspect();
            }
          }
          if (isMap(obj)) {
            var mapParts = [];
            mapForEach.call(obj, function(value, key) {
              mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
            return collectionOf("Map", mapSize.call(obj), mapParts, indent);
          }
          if (isSet(obj)) {
            var setParts = [];
            setForEach.call(obj, function(value) {
              setParts.push(inspect(value, obj));
            });
            return collectionOf("Set", setSize.call(obj), setParts, indent);
          }
          if (isWeakMap(obj)) {
            return weakCollectionOf("WeakMap");
          }
          if (isWeakSet(obj)) {
            return weakCollectionOf("WeakSet");
          }
          if (isWeakRef(obj)) {
            return weakCollectionOf("WeakRef");
          }
          if (isNumber(obj)) {
            return markBoxed(inspect(Number(obj)));
          }
          if (isBigInt(obj)) {
            return markBoxed(inspect(bigIntValueOf.call(obj)));
          }
          if (isBoolean(obj)) {
            return markBoxed(booleanValueOf.call(obj));
          }
          if (isString(obj)) {
            return markBoxed(inspect(String(obj)));
          }
          if (!isDate(obj) && !isRegExp(obj)) {
            var ys = arrObjKeys(obj, inspect);
            var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
            var protoTag = obj instanceof Object ? "" : "null prototype";
            var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? toStr(obj).slice(8, -1) : protoTag ? "Object" : "";
            var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
            var tag = constructorTag + (stringTag || protoTag ? "[" + [].concat(stringTag || [], protoTag || []).join(": ") + "] " : "");
            if (ys.length === 0) {
              return tag + "{}";
            }
            if (indent) {
              return tag + "{" + indentedJoin(ys, indent) + "}";
            }
            return tag + "{ " + ys.join(", ") + " }";
          }
          return String(obj);
        };
        function wrapQuotes(s, defaultStyle, opts) {
          var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
          return quoteChar + s + quoteChar;
        }
        function quote(s) {
          return String(s).replace(/"/g, "&quot;");
        }
        function isArray(obj) {
          return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isDate(obj) {
          return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isRegExp(obj) {
          return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isError(obj) {
          return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isString(obj) {
          return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isNumber(obj) {
          return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isBoolean(obj) {
          return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
        }
        function isSymbol(obj) {
          if (hasShammedSymbols) {
            return obj && typeof obj === "object" && obj instanceof Symbol;
          }
          if (typeof obj === "symbol") {
            return true;
          }
          if (!obj || typeof obj !== "object" || !symToString) {
            return false;
          }
          try {
            symToString.call(obj);
            return true;
          } catch (e) {
          }
          return false;
        }
        function isBigInt(obj) {
          if (!obj || typeof obj !== "object" || !bigIntValueOf) {
            return false;
          }
          try {
            bigIntValueOf.call(obj);
            return true;
          } catch (e) {
          }
          return false;
        }
        var hasOwn = Object.prototype.hasOwnProperty || function(key) {
          return key in this;
        };
        function has(obj, key) {
          return hasOwn.call(obj, key);
        }
        function toStr(obj) {
          return objectToString.call(obj);
        }
        function nameOf(f) {
          if (f.name) {
            return f.name;
          }
          var m = match.call(functionToString.call(f), /^function\s*([\w$]+)/);
          if (m) {
            return m[1];
          }
          return null;
        }
        function indexOf(xs, x) {
          if (xs.indexOf) {
            return xs.indexOf(x);
          }
          for (var i = 0, l = xs.length; i < l; i++) {
            if (xs[i] === x) {
              return i;
            }
          }
          return -1;
        }
        function isMap(x) {
          if (!mapSize || !x || typeof x !== "object") {
            return false;
          }
          try {
            mapSize.call(x);
            try {
              setSize.call(x);
            } catch (s) {
              return true;
            }
            return x instanceof Map;
          } catch (e) {
          }
          return false;
        }
        function isWeakMap(x) {
          if (!weakMapHas || !x || typeof x !== "object") {
            return false;
          }
          try {
            weakMapHas.call(x, weakMapHas);
            try {
              weakSetHas.call(x, weakSetHas);
            } catch (s) {
              return true;
            }
            return x instanceof WeakMap;
          } catch (e) {
          }
          return false;
        }
        function isWeakRef(x) {
          if (!weakRefDeref || !x || typeof x !== "object") {
            return false;
          }
          try {
            weakRefDeref.call(x);
            return true;
          } catch (e) {
          }
          return false;
        }
        function isSet(x) {
          if (!setSize || !x || typeof x !== "object") {
            return false;
          }
          try {
            setSize.call(x);
            try {
              mapSize.call(x);
            } catch (m) {
              return true;
            }
            return x instanceof Set;
          } catch (e) {
          }
          return false;
        }
        function isWeakSet(x) {
          if (!weakSetHas || !x || typeof x !== "object") {
            return false;
          }
          try {
            weakSetHas.call(x, weakSetHas);
            try {
              weakMapHas.call(x, weakMapHas);
            } catch (s) {
              return true;
            }
            return x instanceof WeakSet;
          } catch (e) {
          }
          return false;
        }
        function isElement(x) {
          if (!x || typeof x !== "object") {
            return false;
          }
          if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
            return true;
          }
          return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
        }
        function inspectString(str, opts) {
          if (str.length > opts.maxStringLength) {
            var remaining = str.length - opts.maxStringLength;
            var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
            return inspectString(str.slice(0, opts.maxStringLength), opts) + trailer;
          }
          var s = str.replace(/(['\\])/g, "\\$1").replace(/[\x00-\x1f]/g, lowbyte);
          return wrapQuotes(s, "single", opts);
        }
        function lowbyte(c) {
          var n = c.charCodeAt(0);
          var x = {
            8: "b",
            9: "t",
            10: "n",
            12: "f",
            13: "r"
          }[n];
          if (x) {
            return "\\" + x;
          }
          return "\\x" + (n < 16 ? "0" : "") + n.toString(16).toUpperCase();
        }
        function markBoxed(str) {
          return "Object(" + str + ")";
        }
        function weakCollectionOf(type) {
          return type + " { ? }";
        }
        function collectionOf(type, size, entries, indent) {
          var joinedEntries = indent ? indentedJoin(entries, indent) : entries.join(", ");
          return type + " (" + size + ") {" + joinedEntries + "}";
        }
        function singleLineValues(xs) {
          for (var i = 0; i < xs.length; i++) {
            if (indexOf(xs[i], "\n") >= 0) {
              return false;
            }
          }
          return true;
        }
        function getIndent(opts, depth) {
          var baseIndent;
          if (opts.indent === "	") {
            baseIndent = "	";
          } else if (typeof opts.indent === "number" && opts.indent > 0) {
            baseIndent = Array(opts.indent + 1).join(" ");
          } else {
            return null;
          }
          return {
            base: baseIndent,
            prev: Array(depth + 1).join(baseIndent)
          };
        }
        function indentedJoin(xs, indent) {
          if (xs.length === 0) {
            return "";
          }
          var lineJoiner = "\n" + indent.prev + indent.base;
          return lineJoiner + xs.join("," + lineJoiner) + "\n" + indent.prev;
        }
        function arrObjKeys(obj, inspect) {
          var isArr = isArray(obj);
          var xs = [];
          if (isArr) {
            xs.length = obj.length;
            for (var i = 0; i < obj.length; i++) {
              xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
            }
          }
          var syms = typeof gOPS === "function" ? gOPS(obj) : [];
          var symMap;
          if (hasShammedSymbols) {
            symMap = {};
            for (var k = 0; k < syms.length; k++) {
              symMap["$" + syms[k]] = syms[k];
            }
          }
          for (var key in obj) {
            if (!has(obj, key)) {
              continue;
            }
            if (isArr && String(Number(key)) === key && key < obj.length) {
              continue;
            }
            if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
              continue;
            } else if (/[^\w$]/.test(key)) {
              xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
            } else {
              xs.push(key + ": " + inspect(obj[key], obj));
            }
          }
          if (typeof gOPS === "function") {
            for (var j = 0; j < syms.length; j++) {
              if (isEnumerable.call(obj, syms[j])) {
                xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
              }
            }
          }
          return xs;
        }
      },
      "../node_modules/object-inspect/util.inspect.js": function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__("util").inspect;
      },
      "../node_modules/p-throttle/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        class AbortError extends Error {
          constructor() {
            super("Throttled function aborted");
            this.name = "AbortError";
          }
        }
        const pThrottle = ({ limit, interval, strict }) => {
          if (!Number.isFinite(limit)) {
            throw new TypeError("Expected `limit` to be a finite number");
          }
          if (!Number.isFinite(interval)) {
            throw new TypeError("Expected `interval` to be a finite number");
          }
          const queue = /* @__PURE__ */ new Map();
          let currentTick = 0;
          let activeCount = 0;
          function windowedDelay() {
            const now = Date.now();
            if (now - currentTick > interval) {
              activeCount = 1;
              currentTick = now;
              return 0;
            }
            if (activeCount < limit) {
              activeCount++;
            } else {
              currentTick += interval;
              activeCount = 1;
            }
            return currentTick - now;
          }
          const strictTicks = [];
          function strictDelay() {
            const now = Date.now();
            if (strictTicks.length < limit) {
              strictTicks.push(now);
              return 0;
            }
            const earliestTime = strictTicks.shift() + interval;
            if (now >= earliestTime) {
              strictTicks.push(now);
              return 0;
            }
            strictTicks.push(earliestTime);
            return earliestTime - now;
          }
          const getDelay = strict ? strictDelay : windowedDelay;
          return (function_) => {
            const throttled = function(...args) {
              if (!throttled.isEnabled) {
                return (async () => function_.apply(this, args))();
              }
              let timeout;
              return new Promise((resolve, reject) => {
                const execute = () => {
                  resolve(function_.apply(this, args));
                  queue.delete(timeout);
                };
                timeout = setTimeout(execute, getDelay());
                queue.set(timeout, reject);
              });
            };
            throttled.abort = () => {
              for (const timeout of queue.keys()) {
                clearTimeout(timeout);
                queue.get(timeout)(new AbortError());
              }
              queue.clear();
              strictTicks.splice(0, strictTicks.length);
            };
            throttled.isEnabled = true;
            return throttled;
          };
        };
        module3.exports = pThrottle;
        module3.exports.AbortError = AbortError;
      },
      "../node_modules/qs/lib/formats.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var replace = String.prototype.replace;
        var percentTwenties = /%20/g;
        var Format = {
          RFC1738: "RFC1738",
          RFC3986: "RFC3986"
        };
        module3.exports = {
          "default": Format.RFC3986,
          formatters: {
            RFC1738: function(value) {
              return replace.call(value, percentTwenties, "+");
            },
            RFC3986: function(value) {
              return String(value);
            }
          },
          RFC1738: Format.RFC1738,
          RFC3986: Format.RFC3986
        };
      },
      "../node_modules/qs/lib/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var stringify = __webpack_require__("../node_modules/qs/lib/stringify.js");
        var parse = __webpack_require__("../node_modules/qs/lib/parse.js");
        var formats = __webpack_require__("../node_modules/qs/lib/formats.js");
        module3.exports = {
          formats,
          parse,
          stringify
        };
      },
      "../node_modules/qs/lib/parse.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var utils = __webpack_require__("../node_modules/qs/lib/utils.js");
        var has = Object.prototype.hasOwnProperty;
        var isArray = Array.isArray;
        var defaults = {
          allowDots: false,
          allowPrototypes: false,
          allowSparse: false,
          arrayLimit: 20,
          charset: "utf-8",
          charsetSentinel: false,
          comma: false,
          decoder: utils.decode,
          delimiter: "&",
          depth: 5,
          ignoreQueryPrefix: false,
          interpretNumericEntities: false,
          parameterLimit: 1e3,
          parseArrays: true,
          plainObjects: false,
          strictNullHandling: false
        };
        var interpretNumericEntities = function(str) {
          return str.replace(/&#(\d+);/g, function($0, numberStr) {
            return String.fromCharCode(parseInt(numberStr, 10));
          });
        };
        var parseArrayValue = function(val, options) {
          if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
            return val.split(",");
          }
          return val;
        };
        var isoSentinel = "utf8=%26%2310003%3B";
        var charsetSentinel = "utf8=%E2%9C%93";
        var parseValues = function parseQueryStringValues(str, options) {
          var obj = {};
          var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
          var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
          var parts = cleanStr.split(options.delimiter, limit);
          var skipIndex = -1;
          var i;
          var charset = options.charset;
          if (options.charsetSentinel) {
            for (i = 0; i < parts.length; ++i) {
              if (parts[i].indexOf("utf8=") === 0) {
                if (parts[i] === charsetSentinel) {
                  charset = "utf-8";
                } else if (parts[i] === isoSentinel) {
                  charset = "iso-8859-1";
                }
                skipIndex = i;
                i = parts.length;
              }
            }
          }
          for (i = 0; i < parts.length; ++i) {
            if (i === skipIndex) {
              continue;
            }
            var part = parts[i];
            var bracketEqualsPos = part.indexOf("]=");
            var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
            var key, val;
            if (pos === -1) {
              key = options.decoder(part, defaults.decoder, charset, "key");
              val = options.strictNullHandling ? null : "";
            } else {
              key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
              val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
              });
            }
            if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
              val = interpretNumericEntities(val);
            }
            if (part.indexOf("[]=") > -1) {
              val = isArray(val) ? [val] : val;
            }
            if (has.call(obj, key)) {
              obj[key] = utils.combine(obj[key], val);
            } else {
              obj[key] = val;
            }
          }
          return obj;
        };
        var parseObject = function(chain, val, options, valuesParsed) {
          var leaf = valuesParsed ? val : parseArrayValue(val, options);
          for (var i = chain.length - 1; i >= 0; --i) {
            var obj;
            var root = chain[i];
            if (root === "[]" && options.parseArrays) {
              obj = [].concat(leaf);
            } else {
              obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
              var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
              var index = parseInt(cleanRoot, 10);
              if (!options.parseArrays && cleanRoot === "") {
                obj = { 0: leaf };
              } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
                obj = [];
                obj[index] = leaf;
              } else if (cleanRoot !== "__proto__") {
                obj[cleanRoot] = leaf;
              }
            }
            leaf = obj;
          }
          return leaf;
        };
        var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
          if (!givenKey) {
            return;
          }
          var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
          var brackets = /(\[[^[\]]*])/;
          var child = /(\[[^[\]]*])/g;
          var segment = options.depth > 0 && brackets.exec(key);
          var parent = segment ? key.slice(0, segment.index) : key;
          var keys = [];
          if (parent) {
            if (!options.plainObjects && has.call(Object.prototype, parent)) {
              if (!options.allowPrototypes) {
                return;
              }
            }
            keys.push(parent);
          }
          var i = 0;
          while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
            i += 1;
            if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
              if (!options.allowPrototypes) {
                return;
              }
            }
            keys.push(segment[1]);
          }
          if (segment) {
            keys.push("[" + key.slice(segment.index) + "]");
          }
          return parseObject(keys, val, options, valuesParsed);
        };
        var normalizeParseOptions = function normalizeParseOptions2(opts) {
          if (!opts) {
            return defaults;
          }
          if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
            throw new TypeError("Decoder has to be a function.");
          }
          if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          }
          var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
          return {
            allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
            allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
            allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
            arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
            charset,
            charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
            comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
            decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
            delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
            depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
            ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
            interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
            parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
            parseArrays: opts.parseArrays !== false,
            plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
            strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
          };
        };
        module3.exports = function(str, opts) {
          var options = normalizeParseOptions(opts);
          if (str === "" || str === null || typeof str === "undefined") {
            return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          }
          var tempObj = typeof str === "string" ? parseValues(str, options) : str;
          var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var keys = Object.keys(tempObj);
          for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
            obj = utils.merge(obj, newObj, options);
          }
          if (options.allowSparse === true) {
            return obj;
          }
          return utils.compact(obj);
        };
      },
      "../node_modules/qs/lib/stringify.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var getSideChannel = __webpack_require__("../node_modules/side-channel/index.js");
        var utils = __webpack_require__("../node_modules/qs/lib/utils.js");
        var formats = __webpack_require__("../node_modules/qs/lib/formats.js");
        var has = Object.prototype.hasOwnProperty;
        var arrayPrefixGenerators = {
          brackets: function brackets(prefix) {
            return prefix + "[]";
          },
          comma: "comma",
          indices: function indices(prefix, key) {
            return prefix + "[" + key + "]";
          },
          repeat: function repeat(prefix) {
            return prefix;
          }
        };
        var isArray = Array.isArray;
        var split = String.prototype.split;
        var push = Array.prototype.push;
        var pushToArray = function(arr, valueOrArray) {
          push.apply(arr, isArray(valueOrArray) ? valueOrArray : [valueOrArray]);
        };
        var toISO = Date.prototype.toISOString;
        var defaultFormat = formats["default"];
        var defaults = {
          addQueryPrefix: false,
          allowDots: false,
          charset: "utf-8",
          charsetSentinel: false,
          delimiter: "&",
          encode: true,
          encoder: utils.encode,
          encodeValuesOnly: false,
          format: defaultFormat,
          formatter: formats.formatters[defaultFormat],
          indices: false,
          serializeDate: function serializeDate(date) {
            return toISO.call(date);
          },
          skipNulls: false,
          strictNullHandling: false
        };
        var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
          return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
        };
        var sentinel = {};
        var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
          var obj = object;
          var tmpSc = sideChannel;
          var step = 0;
          var findFlag = false;
          while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
            var pos = tmpSc.get(object);
            step += 1;
            if (typeof pos !== "undefined") {
              if (pos === step) {
                throw new RangeError("Cyclic object value");
              } else {
                findFlag = true;
              }
            }
            if (typeof tmpSc.get(sentinel) === "undefined") {
              step = 0;
            }
          }
          if (typeof filter === "function") {
            obj = filter(prefix, obj);
          } else if (obj instanceof Date) {
            obj = serializeDate(obj);
          } else if (generateArrayPrefix === "comma" && isArray(obj)) {
            obj = utils.maybeMap(obj, function(value2) {
              if (value2 instanceof Date) {
                return serializeDate(value2);
              }
              return value2;
            });
          }
          if (obj === null) {
            if (strictNullHandling) {
              return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
            }
            obj = "";
          }
          if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
            if (encoder) {
              var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
              if (generateArrayPrefix === "comma" && encodeValuesOnly) {
                var valuesArray = split.call(String(obj), ",");
                var valuesJoined = "";
                for (var i = 0; i < valuesArray.length; ++i) {
                  valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults.encoder, charset, "value", format));
                }
                return [formatter(keyValue) + "=" + valuesJoined];
              }
              return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))];
            }
            return [formatter(prefix) + "=" + formatter(String(obj))];
          }
          var values = [];
          if (typeof obj === "undefined") {
            return values;
          }
          var objKeys;
          if (generateArrayPrefix === "comma" && isArray(obj)) {
            objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
          } else if (isArray(filter)) {
            objKeys = filter;
          } else {
            var keys = Object.keys(obj);
            objKeys = sort ? keys.sort(sort) : keys;
          }
          for (var j = 0; j < objKeys.length; ++j) {
            var key = objKeys[j];
            var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
            if (skipNulls && value === null) {
              continue;
            }
            var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
            sideChannel.set(object, step);
            var valueSideChannel = getSideChannel();
            valueSideChannel.set(sentinel, sideChannel);
            pushToArray(values, stringify2(value, keyPrefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
          }
          return values;
        };
        var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
          if (!opts) {
            return defaults;
          }
          if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
            throw new TypeError("Encoder has to be a function.");
          }
          var charset = opts.charset || defaults.charset;
          if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
            throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
          }
          var format = formats["default"];
          if (typeof opts.format !== "undefined") {
            if (!has.call(formats.formatters, opts.format)) {
              throw new TypeError("Unknown format option provided.");
            }
            format = opts.format;
          }
          var formatter = formats.formatters[format];
          var filter = defaults.filter;
          if (typeof opts.filter === "function" || isArray(opts.filter)) {
            filter = opts.filter;
          }
          return {
            addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
            allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
            charset,
            charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
            delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
            encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
            encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
            encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
            filter,
            format,
            formatter,
            serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
            skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
            sort: typeof opts.sort === "function" ? opts.sort : null,
            strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
          };
        };
        module3.exports = function(object, opts) {
          var obj = object;
          var options = normalizeStringifyOptions(opts);
          var objKeys;
          var filter;
          if (typeof options.filter === "function") {
            filter = options.filter;
            obj = filter("", obj);
          } else if (isArray(options.filter)) {
            filter = options.filter;
            objKeys = filter;
          }
          var keys = [];
          if (typeof obj !== "object" || obj === null) {
            return "";
          }
          var arrayFormat;
          if (opts && opts.arrayFormat in arrayPrefixGenerators) {
            arrayFormat = opts.arrayFormat;
          } else if (opts && "indices" in opts) {
            arrayFormat = opts.indices ? "indices" : "repeat";
          } else {
            arrayFormat = "indices";
          }
          var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
          if (!objKeys) {
            objKeys = Object.keys(obj);
          }
          if (options.sort) {
            objKeys.sort(options.sort);
          }
          var sideChannel = getSideChannel();
          for (var i = 0; i < objKeys.length; ++i) {
            var key = objKeys[i];
            if (options.skipNulls && obj[key] === null) {
              continue;
            }
            pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
          }
          var joined = keys.join(options.delimiter);
          var prefix = options.addQueryPrefix === true ? "?" : "";
          if (options.charsetSentinel) {
            if (options.charset === "iso-8859-1") {
              prefix += "utf8=%26%2310003%3B&";
            } else {
              prefix += "utf8=%E2%9C%93&";
            }
          }
          return joined.length > 0 ? prefix + joined : "";
        };
      },
      "../node_modules/qs/lib/utils.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var formats = __webpack_require__("../node_modules/qs/lib/formats.js");
        var has = Object.prototype.hasOwnProperty;
        var isArray = Array.isArray;
        var hexTable = function() {
          var array = [];
          for (var i = 0; i < 256; ++i) {
            array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
          }
          return array;
        }();
        var compactQueue = function compactQueue2(queue) {
          while (queue.length > 1) {
            var item = queue.pop();
            var obj = item.obj[item.prop];
            if (isArray(obj)) {
              var compacted = [];
              for (var j = 0; j < obj.length; ++j) {
                if (typeof obj[j] !== "undefined") {
                  compacted.push(obj[j]);
                }
              }
              item.obj[item.prop] = compacted;
            }
          }
        };
        var arrayToObject = function arrayToObject2(source, options) {
          var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          for (var i = 0; i < source.length; ++i) {
            if (typeof source[i] !== "undefined") {
              obj[i] = source[i];
            }
          }
          return obj;
        };
        var merge = function merge2(target, source, options) {
          if (!source) {
            return target;
          }
          if (typeof source !== "object") {
            if (isArray(target)) {
              target.push(source);
            } else if (target && typeof target === "object") {
              if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
              }
            } else {
              return [target, source];
            }
            return target;
          }
          if (!target || typeof target !== "object") {
            return [target].concat(source);
          }
          var mergeTarget = target;
          if (isArray(target) && !isArray(source)) {
            mergeTarget = arrayToObject(target, options);
          }
          if (isArray(target) && isArray(source)) {
            source.forEach(function(item, i) {
              if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                  target[i] = merge2(targetItem, item, options);
                } else {
                  target.push(item);
                }
              } else {
                target[i] = item;
              }
            });
            return target;
          }
          return Object.keys(source).reduce(function(acc, key) {
            var value = source[key];
            if (has.call(acc, key)) {
              acc[key] = merge2(acc[key], value, options);
            } else {
              acc[key] = value;
            }
            return acc;
          }, mergeTarget);
        };
        var assign = function assignSingleSource(target, source) {
          return Object.keys(source).reduce(function(acc, key) {
            acc[key] = source[key];
            return acc;
          }, target);
        };
        var decode = function(str, decoder, charset) {
          var strWithoutPlus = str.replace(/\+/g, " ");
          if (charset === "iso-8859-1") {
            return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
          }
          try {
            return decodeURIComponent(strWithoutPlus);
          } catch (e) {
            return strWithoutPlus;
          }
        };
        var encode = function encode2(str, defaultEncoder, charset, kind, format) {
          if (str.length === 0) {
            return str;
          }
          var string = str;
          if (typeof str === "symbol") {
            string = Symbol.prototype.toString.call(str);
          } else if (typeof str !== "string") {
            string = String(str);
          }
          if (charset === "iso-8859-1") {
            return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
              return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
            });
          }
          var out = "";
          for (var i = 0; i < string.length; ++i) {
            var c = string.charCodeAt(i);
            if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
              out += string.charAt(i);
              continue;
            }
            if (c < 128) {
              out = out + hexTable[c];
              continue;
            }
            if (c < 2048) {
              out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
              continue;
            }
            if (c < 55296 || c >= 57344) {
              out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
              continue;
            }
            i += 1;
            c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
            out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
          }
          return out;
        };
        var compact = function compact2(value) {
          var queue = [{ obj: { o: value }, prop: "o" }];
          var refs = [];
          for (var i = 0; i < queue.length; ++i) {
            var item = queue[i];
            var obj = item.obj[item.prop];
            var keys = Object.keys(obj);
            for (var j = 0; j < keys.length; ++j) {
              var key = keys[j];
              var val = obj[key];
              if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({ obj, prop: key });
                refs.push(val);
              }
            }
          }
          compactQueue(queue);
          return value;
        };
        var isRegExp = function isRegExp2(obj) {
          return Object.prototype.toString.call(obj) === "[object RegExp]";
        };
        var isBuffer = function isBuffer2(obj) {
          if (!obj || typeof obj !== "object") {
            return false;
          }
          return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
        };
        var combine = function combine2(a, b) {
          return [].concat(a, b);
        };
        var maybeMap = function maybeMap2(val, fn) {
          if (isArray(val)) {
            var mapped = [];
            for (var i = 0; i < val.length; i += 1) {
              mapped.push(fn(val[i]));
            }
            return mapped;
          }
          return fn(val);
        };
        module3.exports = {
          arrayToObject,
          assign,
          combine,
          compact,
          decode,
          encode,
          isBuffer,
          isRegExp,
          maybeMap,
          merge
        };
      },
      "../node_modules/side-channel/index.js": function(module3, exports3, __webpack_require__) {
        "use strict";
        var GetIntrinsic = __webpack_require__("../node_modules/get-intrinsic/index.js");
        var callBound = __webpack_require__("../node_modules/call-bind/callBound.js");
        var inspect = __webpack_require__("../node_modules/object-inspect/index.js");
        var $TypeError = GetIntrinsic("%TypeError%");
        var $WeakMap = GetIntrinsic("%WeakMap%", true);
        var $Map = GetIntrinsic("%Map%", true);
        var $weakMapGet = callBound("WeakMap.prototype.get", true);
        var $weakMapSet = callBound("WeakMap.prototype.set", true);
        var $weakMapHas = callBound("WeakMap.prototype.has", true);
        var $mapGet = callBound("Map.prototype.get", true);
        var $mapSet = callBound("Map.prototype.set", true);
        var $mapHas = callBound("Map.prototype.has", true);
        var listGetNode = function(list, key) {
          for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
            if (curr.key === key) {
              prev.next = curr.next;
              curr.next = list.next;
              list.next = curr;
              return curr;
            }
          }
        };
        var listGet = function(objects, key) {
          var node = listGetNode(objects, key);
          return node && node.value;
        };
        var listSet = function(objects, key, value) {
          var node = listGetNode(objects, key);
          if (node) {
            node.value = value;
          } else {
            objects.next = {
              key,
              next: objects.next,
              value
            };
          }
        };
        var listHas = function(objects, key) {
          return !!listGetNode(objects, key);
        };
        module3.exports = function getSideChannel() {
          var $wm;
          var $m;
          var $o;
          var channel = {
            assert: function(key) {
              if (!channel.has(key)) {
                throw new $TypeError("Side channel does not contain " + inspect(key));
              }
            },
            get: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapGet($wm, key);
                }
              } else if ($Map) {
                if ($m) {
                  return $mapGet($m, key);
                }
              } else {
                if ($o) {
                  return listGet($o, key);
                }
              }
            },
            has: function(key) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                  return $weakMapHas($wm, key);
                }
              } else if ($Map) {
                if ($m) {
                  return $mapHas($m, key);
                }
              } else {
                if ($o) {
                  return listHas($o, key);
                }
              }
              return false;
            },
            set: function(key, value) {
              if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) {
                  $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
              } else if ($Map) {
                if (!$m) {
                  $m = new $Map();
                }
                $mapSet($m, key, value);
              } else {
                if (!$o) {
                  $o = { key: {}, next: null };
                }
                listSet($o, key, value);
              }
            }
          };
          return channel;
        };
      },
      "./contentful.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "createClient", function() {
          return createClient2;
        });
        var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/axios/index.js");
        var axios__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        var _create_contentful_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./create-contentful-api.js");
        var _create_global_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./create-global-options.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function createClient2(params) {
          if (!params.accessToken) {
            throw new TypeError("Expected parameter accessToken");
          }
          if (!params.space) {
            throw new TypeError("Expected parameter space");
          }
          const defaultConfig = {
            resolveLinks: true,
            removeUnresolved: false,
            defaultHostname: "cdn.contentful.com",
            environment: "master"
          };
          const config = _objectSpread(_objectSpread({}, defaultConfig), params);
          const userAgentHeader = Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["getUserAgentHeader"])(`contentful.js/${"9.1.32"}`, config.application, config.integration);
          config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
            "Content-Type": "application/vnd.contentful.delivery.v1+json",
            "X-Contentful-User-Agent": userAgentHeader
          });
          const http = Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["createHttpClient"])(axios__WEBPACK_IMPORTED_MODULE_0___default.a, config);
          const getGlobalOptions = Object(_create_global_options__WEBPACK_IMPORTED_MODULE_3__["default"])({
            resolveLinks: config.resolveLinks,
            environment: config.environment,
            removeUnresolved: config.removeUnresolved,
            spaceBaseUrl: http.defaults.baseURL,
            environmentBaseUrl: `${http.defaults.baseURL}environments/${config.environment}`
          });
          http.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
          return Object(_create_contentful_api__WEBPACK_IMPORTED_MODULE_2__["default"])({
            http,
            getGlobalOptions
          });
        }
      },
      "./create-contentful-api.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return createContentfulApi;
        });
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        var _entities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./entities/index.js");
        var _paged_sync__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./paged-sync.js");
        var _utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./utils/normalize-select.js");
        var _utils_validate_timestamp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./utils/validate-timestamp.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        const ASSET_KEY_MAX_LIFETIME = 48 * 60 * 60;
        function createContentfulApi({
          http,
          getGlobalOptions
        }) {
          const {
            wrapSpace
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].space;
          const {
            wrapContentType,
            wrapContentTypeCollection
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].contentType;
          const {
            wrapEntry,
            wrapEntryCollection
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].entry;
          const {
            wrapAsset,
            wrapAssetCollection
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].asset;
          const {
            wrapTag,
            wrapTagCollection
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].tag;
          const {
            wrapAssetKey
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].assetKey;
          const {
            wrapLocaleCollection
          } = _entities__WEBPACK_IMPORTED_MODULE_1__["default"].locale;
          const notFoundError = (id) => {
            const error = new Error("The resource could not be found.");
            error.sys = {
              type: "Error",
              id: "NotFound"
            };
            error.details = {
              type: "Entry",
              id,
              environment: getGlobalOptions().environment,
              space: getGlobalOptions().space
            };
            return error;
          };
          async function getSpace() {
            switchToSpace(http);
            try {
              const response = await http.get("/");
              return wrapSpace(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getContentType(id) {
            switchToEnvironment(http);
            try {
              const response = await http.get(`content_types/${id}`);
              return wrapContentType(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getContentTypes(query = {}) {
            switchToEnvironment(http);
            try {
              const response = await http.get("content_types", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapContentTypeCollection(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getEntry(id, query = {}) {
            if (!id) {
              throw notFoundError(id);
            }
            try {
              const response = await this.getEntries(_objectSpread({
                "sys.id": id
              }, query));
              if (response.items.length > 0) {
                return wrapEntry(response.items[0]);
              } else {
                throw notFoundError(id);
              }
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getEntries(query = {}) {
            switchToEnvironment(http);
            const {
              resolveLinks,
              removeUnresolved
            } = getGlobalOptions(query);
            query = Object(_utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
            try {
              const response = await http.get("entries", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapEntryCollection(response.data, {
                resolveLinks,
                removeUnresolved
              });
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getAsset(id, query = {}) {
            switchToEnvironment(http);
            query = Object(_utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
            try {
              const response = await http.get(`assets/${id}`, Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapAsset(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getAssets(query = {}) {
            switchToEnvironment(http);
            query = Object(_utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
            try {
              const response = await http.get("assets", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapAssetCollection(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getTag(id) {
            switchToEnvironment(http);
            try {
              const response = await http.get(`tags/${id}`);
              return wrapTag(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getTags(query = {}) {
            switchToEnvironment(http);
            query = Object(_utils_normalize_select__WEBPACK_IMPORTED_MODULE_3__["default"])(query);
            try {
              const response = await http.get("tags", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapTagCollection(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function createAssetKey(expiresAt) {
            switchToEnvironment(http);
            try {
              const now = Math.floor(Date.now() / 1e3);
              const currentMaxLifetime = now + ASSET_KEY_MAX_LIFETIME;
              Object(_utils_validate_timestamp__WEBPACK_IMPORTED_MODULE_4__["default"])("expiresAt", expiresAt, {
                maximum: currentMaxLifetime,
                now
              });
              const params = {
                expiresAt
              };
              const response = await http.post("asset_keys", params);
              return wrapAssetKey(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function getLocales(query = {}) {
            switchToEnvironment(http);
            try {
              const response = await http.get("locales", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
                query
              }));
              return wrapLocaleCollection(response.data);
            } catch (error) {
              Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["errorHandler"])(error);
            }
          }
          async function sync(query = {}, options = {
            paginate: true
          }) {
            const {
              resolveLinks,
              removeUnresolved
            } = getGlobalOptions(query);
            switchToEnvironment(http);
            return Object(_paged_sync__WEBPACK_IMPORTED_MODULE_2__["default"])(http, query, _objectSpread({
              resolveLinks,
              removeUnresolved
            }, options));
          }
          function parseEntries(data) {
            const {
              resolveLinks,
              removeUnresolved
            } = getGlobalOptions({});
            return wrapEntryCollection(data, {
              resolveLinks,
              removeUnresolved
            });
          }
          function switchToEnvironment(http2) {
            http2.defaults.baseURL = getGlobalOptions().environmentBaseUrl;
          }
          function switchToSpace(http2) {
            http2.defaults.baseURL = getGlobalOptions().spaceBaseUrl;
          }
          return {
            getSpace,
            getContentType,
            getContentTypes,
            getEntry,
            getEntries,
            getAsset,
            getAssets,
            getTag,
            getTags,
            createAssetKey,
            getLocales,
            parseEntries,
            sync
          };
        }
      },
      "./create-global-options.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return createGlobalOptions;
        });
        function createGlobalOptions(globalSettings) {
          return function getGlobalOptions(query) {
            return Object.assign({}, globalSettings, query);
          };
        }
      },
      "./entities/asset-key.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapAssetKey", function() {
          return wrapAssetKey;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapAssetKey(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
      },
      "./entities/asset.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapAsset", function() {
          return wrapAsset;
        });
        __webpack_require__.d(__webpack_exports__, "wrapAssetCollection", function() {
          return wrapAssetCollection;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapAsset(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
        function wrapAssetCollection(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
      },
      "./entities/content-type.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapContentType", function() {
          return wrapContentType;
        });
        __webpack_require__.d(__webpack_exports__, "wrapContentTypeCollection", function() {
          return wrapContentTypeCollection;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapContentType(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
        function wrapContentTypeCollection(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
      },
      "./entities/entry.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapEntry", function() {
          return wrapEntry;
        });
        __webpack_require__.d(__webpack_exports__, "wrapEntryCollection", function() {
          return wrapEntryCollection;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        var _mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./mixins/stringify-safe.js");
        var contentful_resolve_response__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("../node_modules/contentful-resolve-response/dist/esm/index.js");
        function wrapEntry(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
        function wrapEntryCollection(data, {
          resolveLinks,
          removeUnresolved
        }) {
          const wrappedData = Object(_mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
          if (resolveLinks) {
            wrappedData.items = Object(contentful_resolve_response__WEBPACK_IMPORTED_MODULE_3__["default"])(wrappedData, {
              removeUnresolved,
              itemEntryPoints: ["fields"]
            });
          }
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(wrappedData);
        }
      },
      "./entities/index.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        var _space__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./entities/space.js");
        var _entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./entities/entry.js");
        var _asset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./entities/asset.js");
        var _asset_key__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./entities/asset-key.js");
        var _content_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./entities/content-type.js");
        var _locale__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./entities/locale.js");
        var _tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./entities/tag.js");
        __webpack_exports__["default"] = {
          space: _space__WEBPACK_IMPORTED_MODULE_0__,
          entry: _entry__WEBPACK_IMPORTED_MODULE_1__,
          asset: _asset__WEBPACK_IMPORTED_MODULE_2__,
          assetKey: _asset_key__WEBPACK_IMPORTED_MODULE_3__,
          contentType: _content_type__WEBPACK_IMPORTED_MODULE_4__,
          locale: _locale__WEBPACK_IMPORTED_MODULE_5__,
          tag: _tag__WEBPACK_IMPORTED_MODULE_6__
        };
      },
      "./entities/locale.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapLocale", function() {
          return wrapLocale;
        });
        __webpack_require__.d(__webpack_exports__, "wrapLocaleCollection", function() {
          return wrapLocaleCollection;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapLocale(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
        function wrapLocaleCollection(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
      },
      "./entities/space.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapSpace", function() {
          return wrapSpace;
        });
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapSpace(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["toPlainObject"])(data));
        }
      },
      "./entities/tag.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "wrapTag", function() {
          return wrapTag;
        });
        __webpack_require__.d(__webpack_exports__, "wrapTagCollection", function() {
          return wrapTagCollection;
        });
        var fast_copy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/fast-copy/dist/fast-copy.esm.js");
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        function wrapTag(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
        function wrapTagCollection(data) {
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["freezeSys"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_1__["toPlainObject"])(Object(fast_copy__WEBPACK_IMPORTED_MODULE_0__["default"])(data)));
        }
      },
      "./mixins/stringify-safe.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return mixinStringifySafe;
        });
        var json_stringify_safe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/json-stringify-safe/stringify.js");
        var json_stringify_safe__WEBPACK_IMPORTED_MODULE_0___default = /* @__PURE__ */ __webpack_require__.n(json_stringify_safe__WEBPACK_IMPORTED_MODULE_0__);
        function mixinStringifySafe(data) {
          return Object.defineProperty(data, "stringifySafe", {
            enumerable: false,
            configurable: false,
            writable: false,
            value: function(serializer = null, indent = "") {
              return json_stringify_safe__WEBPACK_IMPORTED_MODULE_0___default()(this, serializer, indent, (key, value) => {
                return {
                  sys: {
                    type: "Link",
                    linkType: "Entry",
                    id: value.sys.id,
                    circular: true
                  }
                };
              });
            }
          });
        }
      },
      "./paged-sync.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return pagedSync;
        });
        var contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/contentful-sdk-core/dist/index.es-modules.js");
        var contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/contentful-resolve-response/dist/esm/index.js");
        var _mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./mixins/stringify-safe.js");
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        async function pagedSync(http, query, options = {}) {
          if (!query || !query.initial && !query.nextSyncToken && !query.nextPageToken) {
            throw new Error("Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing");
          }
          if (query && query.content_type && !query.type) {
            query.type = "Entry";
          } else if (query && query.content_type && query.type && query.type !== "Entry") {
            throw new Error("When using the `content_type` filter your `type` parameter cannot be different from `Entry`.");
          }
          const defaultOptions = {
            resolveLinks: true,
            removeUnresolved: false,
            paginate: true
          };
          const {
            resolveLinks,
            removeUnresolved,
            paginate
          } = _objectSpread(_objectSpread({}, defaultOptions), options);
          const syncOptions = {
            paginate
          };
          const response = await getSyncPage(http, [], query, syncOptions);
          if (resolveLinks) {
            response.items = Object(contentful_resolve_response__WEBPACK_IMPORTED_MODULE_1__["default"])(response, {
              removeUnresolved,
              itemEntryPoints: ["fields"]
            });
          }
          const mappedResponseItems = mapResponseItems(response.items);
          if (response.nextSyncToken) {
            mappedResponseItems.nextSyncToken = response.nextSyncToken;
          }
          if (response.nextPageToken) {
            mappedResponseItems.nextPageToken = response.nextPageToken;
          }
          return Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["freezeSys"])(Object(_mixins_stringify_safe__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["toPlainObject"])(mappedResponseItems)));
        }
        function mapResponseItems(items) {
          const reducer = (type) => {
            return (accumulated, item) => {
              if (item.sys.type === type) {
                accumulated.push(Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["toPlainObject"])(item));
              }
              return accumulated;
            };
          };
          return {
            entries: items.reduce(reducer("Entry"), []),
            assets: items.reduce(reducer("Asset"), []),
            deletedEntries: items.reduce(reducer("DeletedEntry"), []),
            deletedAssets: items.reduce(reducer("DeletedAsset"), [])
          };
        }
        async function getSyncPage(http, items, query, {
          paginate
        }) {
          if (query.nextSyncToken) {
            query.sync_token = query.nextSyncToken;
            delete query.nextSyncToken;
          }
          if (query.nextPageToken) {
            query.sync_token = query.nextPageToken;
            delete query.nextPageToken;
          }
          if (query.sync_token) {
            delete query.initial;
            delete query.type;
            delete query.content_type;
            delete query.limit;
          }
          const response = await http.get("sync", Object(contentful_sdk_core__WEBPACK_IMPORTED_MODULE_0__["createRequestConfig"])({
            query
          }));
          const data = response.data || {};
          items = items.concat(data.items || []);
          if (data.nextPageUrl) {
            if (paginate) {
              delete query.initial;
              query.sync_token = getToken(data.nextPageUrl);
              return getSyncPage(http, items, query, {
                paginate
              });
            }
            return {
              items,
              nextPageToken: getToken(data.nextPageUrl)
            };
          } else if (data.nextSyncUrl) {
            return {
              items,
              nextSyncToken: getToken(data.nextSyncUrl)
            };
          } else {
            return {
              items: []
            };
          }
        }
        function getToken(url) {
          const urlParts = url.split("?");
          return urlParts.length > 0 ? urlParts[1].replace("sync_token=", "") : "";
        }
      },
      "./utils/normalize-select.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return normalizeSelect;
        });
        function ownKeys(object, enumerableOnly) {
          var keys = Object.keys(object);
          if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            enumerableOnly && (symbols = symbols.filter(function(sym) {
              return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            })), keys.push.apply(keys, symbols);
          }
          return keys;
        }
        function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i] != null ? arguments[i] : {};
            i % 2 ? ownKeys(Object(source), true).forEach(function(key) {
              _defineProperty(target, key, source[key]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
              Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
          }
          return target;
        }
        function _defineProperty(obj, key, value) {
          if (key in obj) {
            Object.defineProperty(obj, key, { value, enumerable: true, configurable: true, writable: true });
          } else {
            obj[key] = value;
          }
          return obj;
        }
        function normalizeSelect(query) {
          if (!query.select) {
            return query;
          }
          const allSelects = Array.isArray(query.select) ? query.select : query.select.split(",");
          const selectedSet = new Set(allSelects);
          if (selectedSet.has("sys")) {
            return query;
          }
          selectedSet.add("sys.id");
          selectedSet.add("sys.type");
          return _objectSpread(_objectSpread({}, query), {}, {
            select: [...selectedSet].join(",")
          });
        }
      },
      "./utils/validate-timestamp.js": function(module3, __webpack_exports__, __webpack_require__) {
        "use strict";
        __webpack_require__.r(__webpack_exports__);
        __webpack_require__.d(__webpack_exports__, "ValidationError", function() {
          return ValidationError;
        });
        __webpack_require__.d(__webpack_exports__, "default", function() {
          return validateTimestamp;
        });
        class ValidationError extends Error {
          constructor(name, message) {
            super(`Invalid "${name}" provided, ` + message);
            this.name = "ValidationError";
          }
        }
        function validateTimestamp(name, timestamp, options) {
          options = options || {};
          if (typeof timestamp !== "number") {
            throw new ValidationError(name, `only numeric values are allowed for timestamps, provided type was "${typeof timestamp}"`);
          }
          if (options.maximum && timestamp > options.maximum) {
            throw new ValidationError(name, `value (${timestamp}) cannot be further in the future than expected maximum (${options.maximum})`);
          }
          if (options.now && timestamp < options.now) {
            throw new ValidationError(name, `value (${timestamp}) cannot be in the past, current time was ${options.now}`);
          }
        }
      },
      0: function(module3, exports3, __webpack_require__) {
        module3.exports = __webpack_require__("./contentful.js");
      },
      "assert": function(module3, exports3) {
        module3.exports = require("assert");
      },
      "fs": function(module3, exports3) {
        module3.exports = require("fs");
      },
      "http": function(module3, exports3) {
        module3.exports = require("http");
      },
      "https": function(module3, exports3) {
        module3.exports = require("https");
      },
      "net": function(module3, exports3) {
        module3.exports = require("net");
      },
      "path": function(module3, exports3) {
        module3.exports = require("path");
      },
      "stream": function(module3, exports3) {
        module3.exports = require("stream");
      },
      "tty": function(module3, exports3) {
        module3.exports = require("tty");
      },
      "url": function(module3, exports3) {
        module3.exports = require("url");
      },
      "util": function(module3, exports3) {
        module3.exports = require("util");
      },
      "zlib": function(module3, exports3) {
        module3.exports = require("zlib");
      }
    });
  }
});

// functions/fetchBlog.js
var import_contentful = __toESM(require_contentful_node());

// src/helpers/convertDate.js
function convertDate(date) {
  const arrayOfWeekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  const newDate = new Date(date);
  const weekday = newDate.getDay();
  const day = arrayOfWeekdays[weekday];
  const month = newDate.toString().slice(4, 7);
  const dayNum = newDate.getDate();
  const year = newDate.getFullYear();
  const hours = newDate.getHours();
  const minutes = newDate.getMinutes();
  return `${day}, ${month} ${dayNum}, ${year} - ${hours > 12 ? hours - 12 : hours}:${minutes} ${hours >= 12 ? "pm" : "am"}`;
}

// functions/fetchBlog.js
exports.handler = async (event, context) => {
  const SPACE_ID = process.env.CONTENTFUL_SPACE_ID;
  const ACCESS_TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
  const client = (0, import_contentful.createClient)({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
    host: "cdn.contentful.com"
  });
  const entries = await client.getEntries();
  const sanitizedEntries = entries.items.map((item, index) => {
    const blogPostImage = item.fields.blogPostImage.fields.file.url;
    const createdAt = item.sys.createdAt;
    const datePosted = convertDate(createdAt);
    const slug = item.fields.blogPostTitle.toLowerCase().replace(":", "").split(" ").join("-");
    return __spreadProps(__spreadValues({}, item.fields), {
      blogPostImage,
      datePosted,
      id: slug
    });
  });
  return {
    statusCode: 200,
    body: JSON.stringify({
      data: sanitizedEntries
    })
  };
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
//# sourceMappingURL=fetchBlog.js.map
