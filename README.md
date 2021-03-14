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

## Configuracion de switch generico

    <div align='center'>
    <img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/ConfigSwitch.png" width="50%" height="50%"/>
    </div>

GNS3 nos ofrece la posibilidad de simular VLANS con los switch que trae por defecto, no se necesita escribir ningun comando, por defecto todos los puertos estan en la VLAN 1 pero pero para cambiarlo y simular VLNAS nuevas, basta con abribir las propiedades de switch, seleccionar el puerto y colocar el numero de VLAN, es este caso el 16, 36 o 46.

    <div align='center'>
    <img src="https://github.com/Stevensishernandez/RPV_PR1_1S2021/blob/main/image/ConfigSwitchVlans.png" width="50%" height="50%"/>
    </div>
    
Tal y como se muestra en la tabla los primeros 3 switch se utilizaron para configurar las 3 VLANS existes, para mayor facilidad se etiqueron con sus nombres por defecto SW1, SW2 y SW3 respectivamente.
