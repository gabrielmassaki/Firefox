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
    initialize: function(conn) {
	protocol.Actor.prototype.initialize.call(this, conn);
    },
    onOpen: function() {
	msg = { "from": this.actorID, 
		"type": "send", 
		"dataAttribute": "data", 
		"content": "open"
	      };
	this.conn.send(msg);
    },
    onClose: function() {
	msg = { "from": this.actorID,
		"type": "close",
		"wasClean": "false",
		"code": "0",
		"reason":""
	      };
	this.conn.send(msg);
    },
    onError: function() {
	msg = { "from": this.actorID,
		"type": "error"
	      };
	this.conn.send(msg);
    },
    onMessage: function(data, messageType) {
	msg = { "from": this.actorID,
		"type": messageType,
		"content": data
	};
    }
});
