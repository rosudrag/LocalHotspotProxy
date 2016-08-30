# Local proxy

## Create a hospot manually

http://www.windowscentral.com/how-turn-your-windows-10-pc-wireless-hotspot

NETSH WLAN show drivers

NETSH WLAN set hostednetwork mode=allow ssid=myssid key=mykey

NETSH WLAN start hostednetwork



## IIS express proxy
[IISExpress Node Proxy](https://github.com/icflorescu/iisexpress-proxy)

iisexpress-proxy ahostname:80 to 5051
