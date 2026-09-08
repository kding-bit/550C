/*
     * 550C IFRAME MANAGER DRIVER
     * Driver: iframemgr.drv
     * Connects Internal iframe code <-> KAMARIF.EXE
     */

    window.IFrameMgrDriver = {
        name: "iframemgr.drv",
        version: "1.0.0",
        status: "initialising",

        iframe: null,
        connected: false,

        diagnostics: {
            messagesSent: 0,
            messagesReceived: 0,
            lastMessage: null,
            lastMessageTime: null,
            iframeLoaded: false,
            iframeURL: null,
            iframeOrigin: null
        },

        connect(iframe) {
            if (!iframe) {
                this.status = "error";
                return false;
            }

            this.iframe = iframe;

            iframe.addEventListener("load", () => {
                this.diagnostics.iframeLoaded = true;
                this.diagnostics.iframeURL = iframe.src || "(internal)";
                this.diagnostics.iframeOrigin = location.origin;

                this.connected = true;
                this.status = "connected";

                this.send("IFRAME_READY", {
                    driver: this.name,
                    version: this.version
                });
            });

            this.status = "waiting";
            return true;
        },

        send(command, data = {}) {
            if (!this.iframe || !this.iframe.contentWindow) {
                return false;
            }

            const packet = {
                driver: this.name,
                command,
                data,
                timestamp: new Date().toISOString()
            };

            this.iframe.contentWindow.postMessage(packet, "*");

            this.diagnostics.messagesSent++;
            this.diagnostics.lastMessage = command;
            this.diagnostics.lastMessageTime = packet.timestamp;

            return true;
        },

        receive(event) {
            const packet = event.data;

            if (!packet || packet.driver !== this.name) {
                return;
            }

            this.diagnostics.messagesReceived++;
            this.diagnostics.lastMessage = packet.command || "UNKNOWN";
            this.diagnostics.lastMessageTime =
                new Date().toISOString();

            window.dispatchEvent(
                new CustomEvent("iframemgr-message", {
                    detail: packet
                })
            );
        },

        getDiagnostics() {
            return {
                driver: this.name,
                version: this.version,
                status: this.status,
                connected: this.connected,
                iframeLoaded: this.diagnostics.iframeLoaded,
                iframeURL: this.diagnostics.iframeURL,
                iframeOrigin: this.diagnostics.iframeOrigin,
                messagesSent: this.diagnostics.messagesSent,
                messagesReceived: this.diagnostics.messagesReceived,
                lastMessage: this.diagnostics.lastMessage,
                lastMessageTime: this.diagnostics.lastMessageTime
            };
        }
    };

    window.addEventListener("message", event => {
        window.IFrameMgrDriver.receive(event);
    });

    window.IFrameMgrDriver.status = "loaded";

    console.log(
        "[iframemgr.drv] Driver loaded successfully."
    );