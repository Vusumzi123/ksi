
export enum servicesEnum {
    ADMINISTRACION,
    VENTARENTA,
    DESARROLLOS
}

export const constants = {
    services: [
        {
          title: 'Administración de Inmuebles',
          body: 'Control estratégico de inmuebles',
          type: 'admin',
          logo: 'assets/icons/KSI_Administracion.svg',
          icon: 'assets/icons/Icono_Administracion.svg',
          url: '/administracion'
        },
        {
          title: 'Venta & Renta',
          body: 'Te ofrecemos el lugar justo para ti',
          type: 'ventarenta',
          logo: 'assets/icons/KSI_Venta&Renta.svg',
          icon: 'assets/icons/Icono_Venta&Renta.svg',
          url: '/venta&renta'
        },
        {
          title: 'Desarrollos Inmobiliarios',
          body: 'Ideas construidas a la vanguardia',
          type: 'desarrollos',
          logo: 'assets/icons/KSI_Desarrollo.svg',
          icon: 'assets/icons/Icono_Desarrollo.svg',
          url: '/desarrollos'
        }
      ]
};
