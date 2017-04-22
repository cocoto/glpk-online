/* Example definition of a simple mode that understands a subset of
 * JavaScript:
 */

CodeMirror.defineSimpleMode("gmpl", {
  // The start state contains the rules that are intially used
  start: [
    // The regex matches the token, the token property contains the type
    {regex: /\"[^\"]*\"|\'[^\']*\'/, token: "string"},

    {regex: /\b(?:var|s\.t\.|and|diff|if|less|or|union|by|div|in|mod|symdiff|within|cross|solve|else|inter|not|then|param|set|sum|prod|min|max|minimize|maximize|display|data|end)\b/, token: "keyword"},
	{regex: /\bs\.t\./, token: "keyword"},
    //{regex: /true|false|null|undefined/, token: "atom"},
    {regex: /(?:\.\d+|\d+\.?\d*)(?:e[-+]\d+)?/i,token: "number"},

    {regex: /\#.*/, token: "comment"},
    // A next property will cause the mode to move to a different state
    {regex: /\/\*/, token: "comment", next: "comment"},
    {regex: /[-+\/*=<>!\^&\|]+/, token: "operator"},
    // indent and dedent properties guide autoindentation
    {regex: /[\{\[\(]/, indent: true},
    {regex: /[\}\]\)]/, dedent: true},
  ],
  // The multi-line comment state.
  comment: [
    {regex: /.*?\*\//, token: "comment", next: "start"},
    {regex: /.*/, token: "comment"}
  ],
  // The meta property contains global information about the mode. It
  // can contain properties like lineComment, which are supported by
  // all modes, and also directives like dontIndentStates, which are
  // specific to simple modes.
  meta: {
    dontIndentStates: ["comment"],
    lineComment: "//"
  }
});
