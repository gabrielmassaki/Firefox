Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");

const protocol = require("devtools/server/protocol");
const {method, Arg, RetVal} = protocol;

let WebSocketInspector = exports.WebSocketInspector = protocol.ActorClass({
    typeName: "websocketinspector",


});
							       
WebSocketInspector.prototype = {
    classDescription: "Inspects the WebSockets",
    classID: Components.ID("{CD00FB51-8399-4A59-A823-219568811EB3}"),
    contractID: "@mozilla.org/web-socket-inspector;1",
    onOpen: function() {
	/*
	msg = { "from": wsactor, 
		"type": send, 
		"dataAttribute": "data", 
		"content": "open"
	      };
	*/
    },
    onClose: function() {
	/*
	msg = { "from": wsactor2, 
		"type": "close",
		"wasClean": "false",
		"code": "0",
		"reason":””
	      };
	*/
    },
    onError: function() {
	/*
	msg = { "from": wsactor3, 
		"type": “error”
	      };
	msg = "error";
	*/
    },
    onMessage: function(data, messageType) {
	
    }
}
