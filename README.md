# MoarTube-Node
A repository containing the node software for the [MoarTube platform](http://www.moartube.com).

## Setup Guide
Install [Node.js](https://nodejs.org/)

Clone the MoarTube-Node repository

Open a terminal within the MoarTube-Node directory

Run the command **npm install**

Run the command **node node.js**

## Autostart Guide
Run the command **sudo nano /etc/systemd/system/moartube-node.service**

Below is an example of a moartube-node daemon.
Make any necessary changes and paste into the nano text editor.

```
[Unit]
Description=MoarTube Node
After=network.target

[Service]
Type=simple
User=root
ExecStart=/snap/bin/node /home/moartube/node.js
Restart=on-failure

[Install]
WantedBy=multi-user.target
```

Run the command **sudo systemctl daemon-reload** to reload all daemons
Run the command **sudo systemctl enable moartube-node** to make the moartube-node daemon autostart on system boot
Run the command **sudo systemctl start moartube-node** to start the moartube-node daemon
Run the command **sudo systemctl status moartube-node** to view the status of the moartube-node daemon
