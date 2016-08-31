# Local proxy routing to IIS reverse proxy

## Solution

Setup reverse proxy to the iis sites and then add rules to serve them using proxy rules.

## To start

```
npm install
npm install nodemon -g
nodemon index.js
```


## To Use
* you have to have access to the proxy
  * you can do that by setting up wifi hotspot and connecting to the wifi
* setup proxy connection on port 8000 to the wifi hotspot (use Proxy Droid on android for this)


### Notes:
#### Create a hospot manually

http://www.windowscentral.com/how-turn-your-windows-10-pc-wireless-hotspot

NETSH WLAN show drivers

NETSH WLAN set hostednetwork mode=allow ssid=myssid key=mykey

NETSH WLAN start hostednetwork



#### IIS express proxy
[IISExpress Node Proxy](https://github.com/icflorescu/iisexpress-proxy)

iisexpress-proxy ahostname:80 to 5051
iisexpress-proxy hulltrains.co.uk.local:80 to 5052

#### Change default dhcp ip

http://www.tomshardware.co.uk/faq/id-1925829/change-default-internet-connection-sharing-address-range.html
