/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
const protocol = require("devtools/server/protocol");

let WebSocketInspector = exports.WebSocketInspector = protocol.ActorClass({
    typeName: "websocketinspector",
    classDescription: "Inspects the WebSockets",
    classID: Components.ID("{CD00FB51-8399-4A59-A823-219568811EB3}"),
    contractID: "@mozilla.org/web-socket-inspector;1",
    initialize: function(conn, tabActor) {
	protocol.Actor.prototype.initialize.call(this, conn);
	this.docshell = tabActor.docShell;
    },
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
});
