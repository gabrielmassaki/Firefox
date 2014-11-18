/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

const protocol = require("devtools/server/protocol");

let WebSocketInspector = exports.WebSocketInspector = protocol.ActorClass({

  typeName: "websocketinspector",

  initialize: function (conn) {
    protocol.Actor.prototype.initialize.call(this, conn);
    this.actorID = this.typeName + "1";
  },

  _send: function(aPacket) {
    console.log(aPacket);
  
    this.conn.send({
      from: this.actorID,
      type: "websocketmessages",
      message: aPacket,
    });
  
  },

  onOpen: function() {
    let packet = { 
      from: this.actorID, 
      type: "open"
    };
    this._send(packet);
  },
  
  onClose: function() {
    let packet = { 
      from: this.actorID,
      type: "close",
      wasClean: "false",
      code: "0",
      reason: ""
    };
    this._send(packet);
  },

  onError: function() {
    let packet = { 
      from: this.actorID,
      type: "error"
    };
    this._send(packet);
  },

  onMessage: function(data, messageType) {
    let packet = { 
      from: this.actorID,
      type: messageType,
      dataAttribute: "data",
      content: data
    };
    this._send(packet);
  }
});
