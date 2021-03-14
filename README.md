# Virtual Private Network


## Distribucion de ip's en host 📄

| Virtualizada Si/No | HOST | CONECTADO A | DIRECCION IP G16|
| ------------- | ------------- | -------------| ------------- |
| Si | Informática 1 | SW1 | 192.168.116.15 |
| No | Informática 2 | SW3 | 192.168.116.30 |
| Si | Ventas 1 | SW3 | 192.168.216.15 |
| No | Ventas 2 | SW4 | 192.168.216.30 |
| No | Contabilidad 1 | SW1 | 192.168.16.15 |
| Si | Contabilidad 2 | SW4 | 192.168.16.30 |
| Si | Server_Contabilidad | SW6 | 192.168.16.150 |
| Si | Server_Informatica | SW6 | 192.168.116.150 |
| Si | Server_Ventas | SW7 | 192.168.216.150 |


## Vlans 📄

* Vlan-Informatica:16
* Vlan-Ventas: 36
* Vlan-Contabilidad: 46

## Configuracion de switch generico 📄

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/ConfigSwitch.png" width="50%" height="50%"/>
</div>

GNS3 nos ofrece la posibilidad de simular VLANS con los switch que trae por defecto, no se necesita escribir ningun comando, por defecto todos los puertos estan en la VLAN 1 pero pero para cambiarlo y simular VLNAS nuevas, basta con abribir las propiedades de switch, seleccionar el puerto y colocar el numero de VLAN, es este caso el 16, 36 o 46.

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/ConfigSwitchVlans.png" width="50%" height="50%"/>
</div>
    
Tal y como se muestra en la tabla los primeros 3 switch se utilizaron para configurar las 3 VLANS existes, para mayor facilidad se etiqueron con sus nombres por defecto SW1, SW2 y SW3 respectivamente.

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/ConfigSwitchVpn.png" width="50%" height="50%"/>
</div>

Cabe resaltar que la conexion de los puertos con los host debe permanecer en modo access pero para interconectar los switch los puertos de dichos dispositivos deben de estar en modo truncal, como se puede apreciar en la imagenes, por ejemplo en el SW2 los primeros 3 puertos que estan conectados a otros switches estan activados y en type dot1q.

## VPN

Para conectar los 2 equipos con los que se realizo la practica, se utilizo el programa Open VPN, las direcciones y las llaves son generadas gracias a servicios de google cloud con una instacia ec2 y una regla de firewall. Basta con tener conexion y arrastrar el archivo (llave) al programa para configurar la VPN.

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/OpenVpnMiguel.jpeg" width="35%" height="35%"/>
</div>

## Apache

Los servicos de HTTP se montaron gracias a la ayuda de apache, regularmente todos los servicios son repartidos en sistemas operativos especiales para servidores pero en esta ocacion lo mas simple para levantar paginas es levantar servios con los host, la instalacion y utilizacion de apache en maquinas linux se resume en los siguientes comandos.
    
    sudo apt-get update
    sudo apt-get install apache2

## Topologias

Para los host se utilizaron maquinas virtuales linux, para virtualizar estos host en la red basta con generar algunos adaptadores con GNS3 despues con VMware debemos escoger el  adaptador correspondiente para cada maquina, es importante deshabilatar el firewall tanto en el equipo local como en las maquina virtuales para evitar que los sistemas asuman amenezas con protocolos como el HTTP que nos proporciona el servidor de apache o la VPN que nos proporciona google cloud. 

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/Topo1.png" width="65%" height="65%"/>
</div>

Finalmente se muestra dos mapas del resultado final, es importante resaltar que los colores identifican a que VLAN pertenece cada host, tambien es importante mencionar que la ip correspondiente a cada host se puede ver en el mapa.

<div align='center'>
<img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/Topo2.jpeg" width="65%" height="65%"/>
</div>

