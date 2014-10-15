/* -*- Mode: IDL; tab-width: 2; indent-tabs-mode: nil; c-basic-offset: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * The origin of this IDL file is
 * http://www.whatwg.org/html/#network
 *
 * © Copyright 2004-2011 Apple Computer, Inc., Mozilla Foundation, and Opera Software ASA.
 * You are granted a license to use, reproduce and create derivative works of this document.
 */

enum WebSocketMessageType { "send", "receive" }

[JSImplementation="@mozilla.org/web-socket-inspector;1"]
interface WebSocketInspector {

  readonly attribute unsigned short webSocket;

  [Throws]
  void onOpen();

  [Throws]
  void onClose();

  [Throws]
  void onError();

  [Throws]
  void close();

  [Throws]
  void onMessage(DOMString data, WebSocketMessageType messageType);

  [Throws]
  void onMessage(ArrayBuffer data, WebSocketMessageType messageType);

  [Throws]
  void onMessage(Blob data, WebSocketMessageType messageType);


};
