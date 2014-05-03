/* parser generated by jison 0.4.13 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var pl0 = (function(){
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"program":3,"block":4,".":5,"EOF":6,"constant":7,"variable":8,"procedure":9,"statement":10,"VAR":11,"idlist":12,";":13,"ident":14,",":15,"ID":16,"CONST":17,"constantlist":18,"idnumber":19,"=":20,"NUMBER":21,"argumentlist":22,"base":23,"PROCEDURE":24,"(":25,")":26,"expresion":27,"CALL":28,"BEGIN":29,"statementlist":30,"END":31,"ifstatement":32,"WHILE":33,"condition":34,"DO":35,"IF":36,"THEN":37,"ELSE":38,"ODD":39,"COMPARISON":40,"+":41,"-":42,"*":43,"/":44,"$accept":0,"$end":1},
terminals_: {2:"error",5:".",6:"EOF",11:"VAR",13:";",15:",",16:"ID",17:"CONST",20:"=",21:"NUMBER",24:"PROCEDURE",25:"(",26:")",28:"CALL",29:"BEGIN",31:"END",33:"WHILE",35:"DO",36:"IF",37:"THEN",38:"ELSE",39:"ODD",40:"COMPARISON",41:"+",42:"-",43:"*",44:"/"},
productions_: [0,[3,3],[4,4],[8,0],[8,4],[12,1],[12,3],[14,1],[7,0],[7,4],[18,1],[18,3],[19,3],[22,1],[22,3],[22,0],[9,0],[9,9],[10,3],[10,5],[10,3],[10,1],[10,6],[32,6],[32,8],[30,1],[30,3],[34,2],[34,3],[27,3],[27,3],[27,3],[27,3],[27,2],[27,1],[23,1],[23,1],[23,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:return $$[$0-2]
break;
case 2: this.$ = { type: "BLOCK",
							 constantes: $$[$0-3],
							 variables: $$[$0-2],
							 procedimientos: $$[$0-1],
							 statatements: $$[$0] }; 
break;
case 4:	
                                        this.$ = {type:$$[$0-3], value:$$[$0-2]};
                                        if ($$[$0] && $$[$0].value.length > 0)
                                                this.$.value = this.$.value.concat($$[$0].value);
                                    
break;
case 5:this.$ = [$$[$0]];
break;
case 6:
                                        this.$ = [$$[$0]];
                                        if ($$[$0-2] && $$[$0-2].length > 0)
                                                this.$ = this.$.concat($$[$0-2]);
                                    
break;
case 7:this.$ = {name: $$[$0]};
break;
case 9:
                                        this.$ = {type:$$[$0-3], value:$$[$0-2]};
                                        if ($$[$0] && $$[$0].value.length > 0)
                                                this.$.value = this.$.value.concat($$[$0].value);
                                    
break;
case 10:this.$ =  [$$[$0]];
break;
case 11:
                                        this.$ = $$[$0-2];
					this.$ = this.$.concat($$[$0]);
                                    
break;
case 12: this.$ = { name: $$[$0-2], value: $$[$0] }; 
break;
case 13:this.$ = [$$[$0]];
break;
case 14:
                                        this.$ = $$[$0-2];
					this.$ = this.$.concat($$[$0]);
                                    
break;
case 17: this.$ = [{   type: $$[$0-8],
                                                                                value: $$[$0-7],
                                                                                arguments: $$[$0-5],
                                                                                block: $$[$0-2]
                                                                        }];
                                                                        if ($$[$0] && $$[$0].length > 0)
                                                                                this.$ = this.$.concat($$[$0]);
                                                                        
break;
case 18: this.$ = { type: "Assigment", left: $$[$0-2], right: $$[$0] }; 
break;
case 19: this.$ = { type: $$[$0-4], name: $$[$0-3], arguments: $$[$0-1] }; 
break;
case 20: this.$ = { type: $$[$0-2], statements: $$[$0-1] }; 
break;
case 21:this.$ = $$[$0];
break;
case 22: this.$ = { type: $$[$0-5], condition: $$[$0-3], statements: $$[$0] }; 
break;
case 23: this.$ = { type: "IF", condition: $$[$0-3], statements: $$[$0-1] }; 
break;
case 24: this.$ = { type: "IFELSE", condition: $$[$0-5], statements: $$[$0-2], elsestatements: $$[$0] }; 
break;
case 25:this.$ = [$$[$0]];
break;
case 26:
                                        this.$ = $$[$0-2];
					this.$ = this.$.concat($$[$0]);
                                    
break;
case 27: this.$ = { type: $$[$0-1], expresion: $$[$0]}; 
break;
case 28: this.$ = { type: $$[$0-1], left: $$[$0-2], right: $$[$0] }; 
break;
case 29: this.$ = { type: $$[$0-1], left: $$[$0-2], right: $$[$0] }; 
break;
case 30: this.$ = { type: $$[$0-1], left: $$[$0-2], right: $$[$0] }; 
break;
case 31: this.$ = { type: $$[$0-1], left: $$[$0-2], right: $$[$0] }; 
break;
case 32: this.$ = { type: $$[$0-1], left: $$[$0-2], right: $$[$0] }; 
break;
case 33:this.$ = { type: $$[$0-1], value: $$[$0] }; 
break;
case 34: this.$ = $$[$0];
break;
case 35:this.$ = {type: 'ID', value: yytext};
break;
case 36: this.$ = {type: 'NUMBER', value: yytext};
break;
case 37:this.$ = $$[$0-1];
break;
}
},
table: [{3:1,4:2,7:3,11:[2,8],16:[2,8],17:[1,4],24:[2,8],28:[2,8],29:[2,8],33:[2,8],36:[2,8]},{1:[3]},{5:[1,5]},{8:6,11:[1,7],16:[2,3],24:[2,3],28:[2,3],29:[2,3],33:[2,3],36:[2,3]},{16:[1,10],18:8,19:9},{6:[1,11]},{9:12,16:[2,16],24:[1,13],28:[2,16],29:[2,16],33:[2,16],36:[2,16]},{12:14,14:15,16:[1,16]},{13:[1,17],15:[1,18]},{13:[2,10],15:[2,10]},{20:[1,19]},{1:[2,1]},{10:20,16:[1,21],28:[1,22],29:[1,23],32:24,33:[1,25],36:[1,26]},{16:[1,27]},{13:[1,28],15:[1,29]},{13:[2,5],15:[2,5]},{13:[2,7],15:[2,7]},{7:30,11:[2,8],16:[2,8],17:[1,4],24:[2,8],28:[2,8],29:[2,8],33:[2,8],36:[2,8]},{16:[1,10],19:31},{21:[1,32]},{5:[2,2],13:[2,2]},{20:[1,33]},{16:[1,34]},{10:36,16:[1,21],28:[1,22],29:[1,23],30:35,32:24,33:[1,25],36:[1,26]},{5:[2,21],13:[2,21],31:[2,21],38:[2,21]},{25:[1,37]},{25:[1,38]},{25:[1,39]},{8:40,11:[1,7],16:[2,3],24:[2,3],28:[2,3],29:[2,3],33:[2,3],36:[2,3]},{14:41,16:[1,16]},{11:[2,9],16:[2,9],24:[2,9],28:[2,9],29:[2,9],33:[2,9],36:[2,9]},{13:[2,11],15:[2,11]},{13:[2,12],15:[2,12]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:42,42:[1,43]},{25:[1,48]},{13:[1,50],31:[1,49]},{13:[2,25],31:[2,25]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:53,34:51,39:[1,52],42:[1,43]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:53,34:54,39:[1,52],42:[1,43]},{15:[2,15],16:[1,45],21:[1,46],22:55,23:56,25:[1,47],26:[2,15]},{16:[2,4],24:[2,4],28:[2,4],29:[2,4],33:[2,4],36:[2,4]},{13:[2,6],15:[2,6]},{5:[2,18],13:[2,18],31:[2,18],38:[2,18],41:[1,57],42:[1,58],43:[1,59],44:[1,60]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:61,42:[1,43]},{5:[2,34],13:[2,34],26:[2,34],31:[2,34],38:[2,34],40:[2,34],41:[2,34],42:[2,34],43:[2,34],44:[2,34]},{5:[2,35],13:[2,35],15:[2,35],26:[2,35],31:[2,35],38:[2,35],40:[2,35],41:[2,35],42:[2,35],43:[2,35],44:[2,35]},{5:[2,36],13:[2,36],15:[2,36],26:[2,36],31:[2,36],38:[2,36],40:[2,36],41:[2,36],42:[2,36],43:[2,36],44:[2,36]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:62,42:[1,43]},{15:[2,15],16:[1,45],21:[1,46],22:63,23:56,25:[1,47],26:[2,15]},{5:[2,20],13:[2,20],31:[2,20],38:[2,20]},{10:64,16:[1,21],28:[1,22],29:[1,23],32:24,33:[1,25],36:[1,26]},{26:[1,65]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:66,42:[1,43]},{40:[1,67],41:[1,57],42:[1,58],43:[1,59],44:[1,60]},{26:[1,68]},{15:[1,70],26:[1,69]},{15:[2,13],26:[2,13]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:71,42:[1,43]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:72,42:[1,43]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:73,42:[1,43]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:74,42:[1,43]},{5:[2,33],13:[2,33],26:[2,33],31:[2,33],38:[2,33],40:[2,33],41:[2,33],42:[2,33],43:[2,33],44:[2,33]},{26:[1,75],41:[1,57],42:[1,58],43:[1,59],44:[1,60]},{15:[1,70],26:[1,76]},{13:[2,26],31:[2,26]},{35:[1,77]},{26:[2,27],41:[1,57],42:[1,58],43:[1,59],44:[1,60]},{16:[1,45],21:[1,46],23:44,25:[1,47],27:78,42:[1,43]},{37:[1,79]},{13:[1,80]},{16:[1,45],21:[1,46],23:81,25:[1,47]},{5:[2,29],13:[2,29],26:[2,29],31:[2,29],38:[2,29],40:[2,29],41:[2,29],42:[2,29],43:[1,59],44:[1,60]},{5:[2,30],13:[2,30],26:[2,30],31:[2,30],38:[2,30],40:[2,30],41:[2,30],42:[2,30],43:[1,59],44:[1,60]},{5:[2,31],13:[2,31],26:[2,31],31:[2,31],38:[2,31],40:[2,31],41:[2,31],42:[2,31],43:[2,31],44:[2,31]},{5:[2,32],13:[2,32],26:[2,32],31:[2,32],38:[2,32],40:[2,32],41:[2,32],42:[2,32],43:[2,32],44:[2,32]},{5:[2,37],13:[2,37],15:[2,37],26:[2,37],31:[2,37],38:[2,37],40:[2,37],41:[2,37],42:[2,37],43:[2,37],44:[2,37]},{5:[2,19],13:[2,19],31:[2,19],38:[2,19]},{10:82,16:[1,21],28:[1,22],29:[1,23],32:24,33:[1,25],36:[1,26]},{26:[2,28],41:[1,57],42:[1,58],43:[1,59],44:[1,60]},{10:83,16:[1,21],28:[1,22],29:[1,23],32:24,33:[1,25],36:[1,26]},{4:84,7:3,11:[2,8],16:[2,8],17:[1,4],24:[2,8],28:[2,8],29:[2,8],33:[2,8],36:[2,8]},{15:[2,14],26:[2,14]},{5:[2,22],13:[2,22],31:[2,22],38:[2,22]},{5:[2,23],13:[2,23],31:[2,23],38:[1,85]},{13:[1,86]},{10:87,16:[1,21],28:[1,22],29:[1,23],32:24,33:[1,25],36:[1,26]},{9:88,16:[2,16],24:[1,13],28:[2,16],29:[2,16],33:[2,16],36:[2,16]},{5:[2,24],13:[2,24],31:[2,24],38:[2,24]},{16:[2,17],28:[2,17],29:[2,17],33:[2,17],36:[2,17]}],
defaultActions: {11:[2,1]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    this.lexer.setInput(input);
    this.lexer.yy = this.yy;
    this.yy.lexer = this.lexer;
    this.yy.parser = this;
    if (typeof this.lexer.yylloc == 'undefined') {
        this.lexer.yylloc = {};
    }
    var yyloc = this.lexer.yylloc;
    lstack.push(yyloc);
    var ranges = this.lexer.options && this.lexer.options.ranges;
    if (typeof this.yy.parseError === 'function') {
        this.parseError = this.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    function lex() {
        var token;
        token = self.lexer.lex() || EOF;
        if (typeof token !== 'number') {
            token = self.symbols_[token] || token;
        }
        return token;
    }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (this.lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: this.lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: this.lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(this.lexer.yytext);
            lstack.push(this.lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = this.lexer.yyleng;
                yytext = this.lexer.yytext;
                yylineno = this.lexer.yylineno;
                yyloc = this.lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                this.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.2.1 */
var lexer = (function(){
var lexer = {

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input) {
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {

var reserved_words ={ CALL: 'CALL', WHILE: 'WHILE', DO: 'DO', BEGIN: 'BEGIN', END: 'END', IF: 'IF', THEN: 'THEN', ELSE: 'ELSE', PROCEDURE: 'PROCEDURE', ODD: 'ODD', VAR: 'VAR', CONST: 'CONST'}

function idORrw(x) {
  return (x.toUpperCase() in reserved_words)? x.toUpperCase() : 'ID';
}






var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return '^';
break;
case 2:return 25;
break;
case 3:return 26;
break;
case 4:return 13;
break;
case 5:return 15;
break;
case 6:return 5;
break;
case 7:return 41;
break;
case 8:return 42;
break;
case 9:return 43;
break;
case 10:return 44;
break;
case 11:return 40
break;
case 12:return 20;
break;
case 13:return 28;
break;
case 14:return 33;
break;
case 15:return 35;
break;
case 16:return 29;
break;
case 17:return 31;
break;
case 18:return 36;
break;
case 19:return 37;
break;
case 20:return 38;
break;
case 21:return 24;
break;
case 22:return 39;
break;
case 23:return 11;
break;
case 24:return 17;
break;
case 25:return 21;
break;
case 26:return idORrw(yy_.yytext);
break;
case 27:return 6;
break;
}
},
rules: [/^(?:\s+)/,/^(?:\^)/,/^(?:\()/,/^(?:\))/,/^(?:;)/,/^(?:,)/,/^(?:\.)/,/^(?:\+)/,/^(?:-)/,/^(?:\*)/,/^(?:\/)/,/^(?:[<>=!][=]|[<>])/,/^(?:=)/,/^(?:CALL\b)/,/^(?:WHILE\b)/,/^(?:DO\b)/,/^(?:BEGIN\b)/,/^(?:END\b)/,/^(?:IF\b)/,/^(?:THEN\b)/,/^(?:ELSE\b)/,/^(?:PROCEDURE\b)/,/^(?:ODD\b)/,/^(?:VAR\b)/,/^(?:CONST\b)/,/^(?:\b\d+(\.\d*)?([eE][-+]?\d+)?\b)/,/^(?:\b[A-Za-z_]\w*\b)/,/^(?:$)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27],"inclusive":true}}
};
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = pl0;
exports.Parser = pl0.Parser;
exports.parse = function () { return pl0.parse.apply(pl0, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}