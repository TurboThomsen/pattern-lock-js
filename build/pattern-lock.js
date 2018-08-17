(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (factory((global['patten-lock'] = {})));
}(this, (function (exports) { 'use strict';

    var NanoEvents = (function NanoEvents() {
        this.events = {};
    });

    NanoEvents.prototype = {
        on: function on(event, cb) {
            var _this = this;

            event = this.events[event] = this.events[event] || [];
            event.push(cb);
            return function () {
                return _this.off(event, cb);
            };
        },
        off: function off(event, cb) {
            event = this.events[event] = this.events[event] || [];
            event.splice(event.indexOf(cb) >>> 0, 1);
        },
        emit: function emit(event) {
            var _this2 = this;

            var list = this.events[event];
            if (!list || !list[0]) return;
            var args = list.slice.call(arguments, 1);
            list.slice().map(function (i) {
                return i.apply(_this2, args);
            });
        }
    };

    var wordMap = [['lorem', 'ipsum', 'dolor', 'sit', 'amet'], ['fo^$*@!#x', 'jum[.,]ps', 'ov#$^er', 'bri;24dge', 'dea=-=th'], ['fancy', 'planes', 'foolish', 'man', 'juice'], ['nunc', 'vehicula', 'lectus', 'fermentum', 'suscipit'], ['adipiscing', 'erat', 'porta', 'lobortis', 'ullamcorper'], ['lorem', 'ipsum', 'dolor', 'sit', 'amet'], ['fo^$*@!#x', 'jum[.,]ps', 'ov#$^er', 'bri;24dge', 'dea=-=th'], ['fancy', 'planes', 'foolish', 'man', 'juice'], ['nunc', 'vehicula', 'lectus', 'fermentum', 'suscipit'], ['adipiscing', 'erat', 'porta', 'lobortis', 'ullamcorper']];

    /**
     * Convert pattern to a string of random words
     * 
     * @param {Array<{ row: Number, col: Number }>} nodes
     * 
     * @returns {String}
     */
    var patternToWords = function patternToWords(nodes) {
      return nodes.reduce(function () {
        var string = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var node = arguments[1];
        return wordMap[node.row - 1][node.col - 1] + string;
      });
    };

    /**
     * Hashcode algorithm implementation
     * 
     * @param {String} str
     * 
     * @returns {String}
     */
    var hashCode = function hashCode(str) {
      if (!str.length) return '';

      var hash = str.split('').reduce(function () {
        var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var b = arguments[1];

        a = (a << 5) - a + b.charCodeAt(0);
        return a & a;
      });

      return btoa(hash + '');
    };

    var THEMES = {
    	default: {
    		colors: {
    			accent: '#ae64cd',
    			primary: '#ffffff',
    			bg: '#2c3e50'
    		},
    		dimens: {
    			line_width: 6,
    			node_radius: 20,
    			node_core: 8,
    			node_ring: 1
    		}
    	},
    	success: {
    		colors: {
    			accent: '#51e980'
    		}
    	},
    	failure: {
    		colors: {
    			accent: '#e74c3c'
    		}
    	}
    };

    var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

    var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

    function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

    var bind = function bind(target, eventList, fn) {
    	return eventList.forEach(function (ev) {
    		return target.addEventListener(ev, fn);
    	});
    };

    var raf = requestAnimationFrame;

    var gcd = function gcd(x, y) {
    	while (y != 0) {
    		var tmp = x;
    		x = y;
    		y = tmp % y;
    	}
    	return x;
    };

    var createInvalidOptionError = function createInvalidOptionError(option) {
    	return new Error('Invalid or empty ' + option + ' passed');
    };

    var events = {
    	PATTERN_COMPLETE: 'complete',
    	PATTERN_START: 'start'
    };

    var defaultConfig = {
    	theme: 'default',
    	grid: [3, 3],
    	width: 300,
    	height: 430
    };

    var Matcher = function Matcher(values) {
    	var _onSuccess = function _onSuccess() {};
    	var _onFailure = function _onFailure() {};
    	var matcher = {
    		check: function check(val) {
    			return values.indexOf(val) !== -1 ? _onSuccess() : _onFailure();
    		},
    		onSuccess: function onSuccess(fn) {
    			_onSuccess = fn;return matcher;
    		},
    		onFailure: function onFailure(fn) {
    			_onFailure = fn;return matcher;
    		}
    	};
    	return matcher;
    };

    var PatternLock = function () {
    	function PatternLock(config) {
    		_classCallCheck(this, PatternLock);

    		if (!config.$canvas) throw createInvalidOptionError('$canvas');

    		config = _extends({}, defaultConfig, config);

    		this.$canvas = config.$canvas;
    		this.dimens = { width: config.width, height: config.height };

    		this.$canvas.width = this.dimens.width;
    		this.$canvas.height = this.dimens.height;

    		// Canvas context
    		this.ctx = this.$canvas.getContext('2d');

    		this.initialize(config);
    	}

    	_createClass(PatternLock, [{
    		key: 'initialize',
    		value: function initialize(config) {
    			this._onTouchStart = this._onTouchStart.bind(this);
    			this._onTouchStop = this._onTouchStop.bind(this);
    			this._onTouchMove = this._onTouchMove.bind(this);
    			this._onResize = this._onResize.bind(this);
    			this.renderLoop = this.renderLoop.bind(this);
    			this.calculationLoop = this.calculationLoop.bind(this);

    			this.initializeEventBus();

    			this.setTheme(config.theme);

    			this._onResize();

    			this.setInitialState();
    			this.generateGrid.apply(this, _toConsumableArray(config.grid));

    			this.attachEventHandlers();
    		}

    		/**
       * Set the pattern lock screen theme
       * @param {Object|string}   theme
       */

    	}, {
    		key: 'setTheme',
    		value: function setTheme(theme) {
    			var forceUpdate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;


    			var defaultTheme = THEMES.default;

    			if (typeof theme === 'string') {
    				theme = THEMES[theme];
    			}

    			if (!theme) throw createInvalidOptionError('theme');

    			this.THEME = this.THEME || {};
    			this.THEME.colors = _extends({}, defaultTheme.colors, theme.colors);
    			this.THEME.dimens = _extends({}, defaultTheme.dimens, theme.dimens);

    			forceUpdate && this.forceUpdate();

    			return this.THEME;
    		}

    		/**
       * Attach event listeners and start frame loops
       */

    	}, {
    		key: 'attachEventHandlers',
    		value: function attachEventHandlers() {
    			bind(this.$canvas, ['mousedown', 'touchstart'], this._onTouchStart);
    			bind(this.$canvas, ['mouseup', 'touchend'], this._onTouchStop);
    			bind(window, ['mousemove', 'touchmove'], this._onTouchMove);
    			bind(window, ['resize'], this._onResize);

    			// Start frame loops
    			raf(this.renderLoop);
    			raf(this.calculationLoop);
    		}
    	}, {
    		key: 'initializeEventBus',
    		value: function initializeEventBus() {
    			this.eventBus = new NanoEvents();
    		}
    	}, {
    		key: 'on',
    		value: function on(event, fn) {
    			return this.eventBus.on(event, fn);
    		}
    	}, {
    		key: 'off',
    		value: function off(event, fn) {
    			return this.eventBus.off(event, fn);
    		}
    	}, {
    		key: 'emit',
    		value: function emit(event) {
    			var _eventBus;

    			for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    				args[_key - 1] = arguments[_key];
    			}

    			return (_eventBus = this.eventBus).emit.apply(_eventBus, [event].concat(args));
    		}
    	}, {
    		key: 'onStart',
    		value: function onStart(fn) {
    			this.on(events.PATTERN_START, fn);return this;
    		}
    	}, {
    		key: 'onComplete',
    		value: function onComplete(fn) {
    			this.on(events.PATTERN_COMPLETE, fn);return this;
    		}

    		/**
       * Set the initial state
       */

    	}, {
    		key: 'setInitialState',
    		value: function setInitialState() {
    			this.coordinates = null;
    			this.selectedNodes = [];
    			this.lastSelectedNode = null;
    		}
    	}, {
    		key: 'onPatternStart',
    		value: function onPatternStart() {
    			this.emit(events.PATTERN_START, {});
    		}
    	}, {
    		key: 'onPatternComplete',
    		value: function onPatternComplete() {
    			var nodes = this.selectedNodes.slice(0);
    			var password = patternToWords(nodes);
    			var hash = hashCode(password);
    			this.emit(events.PATTERN_COMPLETE, { nodes: nodes, hash: hash, password: password });
    		}
    	}, {
    		key: '_onResize',
    		value: function _onResize() {
    			this.bounds = this.$canvas.getBoundingClientRect();
    		}
    	}, {
    		key: '_onTouchStart',
    		value: function _onTouchStart(e) {
    			if (e) e.preventDefault();

    			this.setInitialState();
    			this.calculationLoop(false);
    			this.renderLoop(false);

    			this.onPatternStart();
    			this._isDragging = true;
    		}
    	}, {
    		key: '_onTouchStop',
    		value: function _onTouchStop(e) {
    			if (e) e.preventDefault();

    			this.coordinates = null;
    			this.renderLoop(false);

    			this.onPatternComplete();
    			this._isDragging = false;
    		}
    	}, {
    		key: '_onTouchMove',
    		value: function _onTouchMove(e) {
    			if (e) e.preventDefault();

    			if (this._isDragging) {

    				var mousePoint = {
    					x: e.pageX || e.touches[0].pageX,
    					y: e.pageY || e.touches[0].pageY
    				};

    				mousePoint.x -= this.bounds.left;
    				mousePoint.y -= this.bounds.top;

    				if (mousePoint.x <= this.dimens.width && mousePoint.x > 0 && mousePoint.y <= this.dimens.height && mousePoint.y > 0) {
    					this.coordinates = mousePoint;
    				} else {
    					this._onTouchStop();
    				}
    			}
    		}

    		/**
       * Check if the given node is already selected
       * @param  {Object}  targetNode  Node to check
       * @return {Boolean}             True if the node is selected
       */

    	}, {
    		key: 'isSelected',
    		value: function isSelected(targetNode) {
    			return !!this.selectedNodes.find(function (node) {
    				return node.row == targetNode.row && node.col == targetNode.col;
    			});
    		}

    		/**
       * Adds intermediary nodes between lastSelectedNode to a targetNode
       *
       * @param  {Object}  targetNode  Node to select
       */

    	}, {
    		key: 'addIntermediaryNodes',
    		value: function addIntermediaryNodes(targetNode) {
    			var stepNode = this.intermediaryNodesStep(targetNode);
    			if (stepNode.row !== 0 || stepNode.col !== 0) {
    				var currentNode = { row: this.lastSelectedNode.row + stepNode.row, col: this.lastSelectedNode.col + stepNode.col };
    				var maxIterations = Math.max(this.rows, this.cols);
    				var i = 0;
    				while (i++ < maxIterations && (currentNode.row !== targetNode.row || currentNode.col !== targetNode.col)) {
    					this.selectedNodes.push(currentNode);
    					currentNode = { row: currentNode.row + stepNode.row, col: currentNode.col + stepNode.col };
    				}
    			}
    			this.lastSelectedNode = targetNode;
    		}

    		/**
       * Returns the steps to perform to select intermediary nodes between lastSelectedNode and a targetNode
       *
       * @param  {Object}  targetNode  Node to select
       *
       * @return {Object}             { row: stepForRows, col: StepForCols }
       */

    	}, {
    		key: 'intermediaryNodesStep',
    		value: function intermediaryNodesStep(targetNode) {
    			var finalStep = { row: 0, col: 0 };
    			if (!this.lastSelectedNode) {
    				return finalStep;
    			}

    			var dRow = Math.abs(this.lastSelectedNode.row - targetNode.row);
    			var dCol = Math.abs(this.lastSelectedNode.col - targetNode.col);

    			if (dRow === 1 || dCol === 1) {
    				return finalStep;
    			}

    			var dRsign = this.lastSelectedNode.row - targetNode.row < 0 ? 1 : -1;
    			var dCsign = this.lastSelectedNode.col - targetNode.col < 0 ? 1 : -1;

    			if (dRow === 0) {
    				if (dCol !== 0) finalStep.col = dCsign;
    			} else if (dCol === 0) {
    				finalStep.row = dRsign;
    			} else {
    				var max = Math.max(dRow, dCol);
    				var min = Math.min(dRow, dCol);
    				var gcdValue = gcd(max, min);
    				if (max % min === 0) {
    					finalStep.col = dCol / gcdValue * dCsign;
    					finalStep.row = dRow / gcdValue * dRsign;
    				}
    			}
    			return finalStep;
    		}

    		/**
       * Calculate the state of the lock for the next frame
       *
       * @param  {Boolean} runLoop  Start it as a loop if true
       */

    	}, {
    		key: 'calculationLoop',
    		value: function calculationLoop() {
    			var _this = this;

    			var runLoop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


    			if (this._isDragging && this.coordinates) {

    				this.forEachNode(function (x, y) {

    					var dist = Math.sqrt(Math.pow(_this.coordinates.x - x, 2) + Math.pow(_this.coordinates.y - y, 2));

    					if (dist < _this.THEME.dimens.node_radius + 1) {

    						var row = x / _this.interval.x;
    						var col = y / _this.interval.y;

    						var currentNode = { row: row, col: col };

    						if (!_this.isSelected(currentNode)) {
    							_this.addIntermediaryNodes(currentNode);
    							_this.selectedNodes.push(currentNode);
    							return false;
    						}
    					}
    				});
    			}

    			if (runLoop) {
    				raf(this.calculationLoop);
    			}
    		}
    	}, {
    		key: 'forceUpdate',
    		value: function forceUpdate() {
    			var _this2 = this;

    			raf(function () {
    				var previousDragState = _this2._isDragging;
    				_this2._isDragging = true;
    				_this2.calculationLoop(false);

    				raf(function () {
    					_this2.renderLoop(false);
    					_this2._isDragging = previousDragState;
    				});
    			});
    		}

    		/**
       * Render the state of the lock
       *
       * @param  {Boolean} runLoop  Start it as a loop if true
       */

    	}, {
    		key: 'renderLoop',
    		value: function renderLoop() {
    			var _this3 = this;

    			var runLoop = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;


    			if (this._isDragging) {
    				var _THEME$colors = this.THEME.colors,
    				    accent = _THEME$colors.accent,
    				    primary = _THEME$colors.primary;

    				// Clear the canvas(Redundant)

    				this.ctx.clearRect(0, 0, this.dimens.width, this.dimens.height);

    				this.renderGrid();

    				// Plot all the selected nodes
    				var lastNode = this.selectedNodes.reduce(function (prevNode, node) {
    					if (prevNode) {

    						var point1 = { x: node.row * _this3.interval.x, y: node.col * _this3.interval.y };
    						var point2 = { x: prevNode.row * _this3.interval.x, y: prevNode.col * _this3.interval.y };

    						// Make the two selected nodes bigger
    						_this3.drawNode(point1.x, point1.y, accent, primary, _this3.THEME.dimens.node_ring + 3);
    						_this3.drawNode(point2.x, point2.y, accent, primary, _this3.THEME.dimens.node_ring + 3);

    						// Join the nodes
    						_this3.joinNodes(prevNode.row, prevNode.col, node.row, node.col);
    					}

    					return node;
    				}, null);

    				if (lastNode && this.coordinates) {

    					// Draw the last node
    					this.drawNode(lastNode.row * this.interval.x, lastNode.col * this.interval.y, accent, primary, this.THEME.dimens.node_ring + 6);

    					// Draw a line between last node to the current drag position
    					this.joinNodes(lastNode.row * this.interval.x, lastNode.col * this.interval.y, this.coordinates.x, this.coordinates.y, true);
    				}
    			}

    			if (runLoop) {
    				raf(this.renderLoop);
    			}
    		}

    		/**
       * Generate the grid of nodes
       *
       * @param  {Number} rows  The number of horizontal nodes
       * @param  {Number} cols  The number of vertical nodes
       */

    	}, {
    		key: 'generateGrid',
    		value: function generateGrid(rows, cols) {

    			this.rows = rows;
    			this.cols = cols;

    			this.renderGrid();
    		}

    		/**
       * Render the grid to the canvas
       */

    	}, {
    		key: 'renderGrid',
    		value: function renderGrid() {

    			this.ctx.fillStyle = this.THEME.colors.bg;
    			this.ctx.fillRect(0, 0, this.dimens.width, this.dimens.height);

    			this.interval = {
    				x: this.dimens.width / (this.rows + 1),
    				y: this.dimens.height / (this.cols + 1)
    			};

    			// Draw all the nodes
    			this.forEachNode(this.drawNode.bind(this));
    		}

    		/**
       * ForEach iterator for all nodes on the grid
       *
       * @param  {Function} callback
       */

    	}, {
    		key: 'forEachNode',
    		value: function forEachNode(callback) {
    			var _this4 = this;

    			var xGrid = Array(this.rows).fill(this.interval.x);
    			var yGrid = Array(this.cols).fill(this.interval.y);

    			var breakException = new Error('Break Exception');

    			try {

    				yGrid.reduce(function (y, dy) {

    					xGrid.reduce(function (x, dx) {

    						// If the callback returns false, break out of the loop
    						if (callback(x, y) === false) throw breakException;

    						return x + dx;
    					}, _this4.interval.x);

    					return y + dy;
    				}, this.interval.y);
    			} catch (e) {
    				if (e !== breakException) throw e;
    			}
    		}
    	}, {
    		key: 'drawNode',
    		value: function drawNode(x, y, centerColor, borderColor, size) {

    			// Config
    			this.ctx.lineWidth = size || this.THEME.dimens.node_ring;
    			this.ctx.fillStyle = centerColor || this.THEME.colors.primary;
    			this.ctx.strokeStyle = borderColor || this.THEME.colors.primary;

    			// Draw inner circle
    			this.ctx.beginPath();
    			this.ctx.arc(x, y, this.THEME.dimens.node_core, 0, Math.PI * 2);
    			this.ctx.fill();

    			// Draw outer ring
    			this.ctx.beginPath();
    			this.ctx.arc(x, y, this.THEME.dimens.node_radius, 0, Math.PI * 2);
    			this.ctx.stroke();
    		}
    	}, {
    		key: 'joinNodes',
    		value: function joinNodes(row1, col1, row2, col2) {
    			var isCoordinates = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;


    			var factor = this.interval;

    			if (isCoordinates) {
    				factor = { x: 1, y: 1 };
    			}

    			var point1 = { x: factor.x * row1, y: factor.y * col1 };
    			var point2 = { x: factor.x * row2, y: factor.y * col2 };

    			// Config
    			this.ctx.lineWidth = this.THEME.dimens.line_width;
    			this.ctx.strokeStyle = this.THEME.colors.accent;
    			this.ctx.lineCap = 'round';

    			// Draw line
    			this.ctx.beginPath();
    			this.ctx.moveTo(point1.x, point1.y);
    			this.ctx.lineTo(point2.x, point2.y);
    			this.ctx.stroke();
    		}
    	}, {
    		key: 'match',
    		value: function match(type, values) {
    			var matcher = Matcher(values);
    			this.on(events.PATTERN_COMPLETE, function (data) {
    				return matcher.check(data[type]);
    			});
    			return matcher;
    		}
    	}, {
    		key: 'matchHash',
    		value: function matchHash() {
    			for (var _len2 = arguments.length, hashes = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    				hashes[_key2] = arguments[_key2];
    			}

    			return this.match('hash', hashes);
    		}
    	}, {
    		key: 'matchPassword',
    		value: function matchPassword() {
    			for (var _len3 = arguments.length, passwords = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    				passwords[_key3] = arguments[_key3];
    			}

    			return this.match('password', passwords);
    		}
    	}]);

    	return PatternLock;
    }();

    var PatternLock$1 = (function () {
    	for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    		args[_key4] = arguments[_key4];
    	}

    	return new (Function.prototype.bind.apply(PatternLock, [null].concat(args)))();
    });

    exports.PatternLock = PatternLock;
    exports.default = PatternLock$1;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
