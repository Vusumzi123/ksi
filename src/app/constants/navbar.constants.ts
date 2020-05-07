
export enum pages {
    HOME,
    ADMINISTRACION,
    VENTARENTA,
    DESARROLLOS,
    NOTICIAS,
    CONTACTO,
    ADMIN_LOGIN
}

export const constants = {
    pages: [
        {
            name: 'Quienes Somos',
            url: '/home',
            fullpath: '/home',
            isParentPath: true
        },
        {
            name: 'Administración',
            url: '/administracion',
            fullpath: '/administracion',
            isParentPath: true
        },
        {
            name: 'Venta & renta',
            url: '/venta-renta',
            fullpath: '/venta-renta',
            isParentPath: true
        },
        {
            name: 'Desarrollos',
            url: '/desarrollos',
            fullpath: '/desarrollos',
            isParentPath: true
        },
        {
            name: 'Noticias',
            url: '/noticias',
            fullpath: '/noticias',
            isParentPath: true
        },
        {
            name: 'Contacto',
            url: '/contacto',
            fullpath: '/contacto',
            isParentPath: true
        },
        {
            name: 'admin login',
            url: '/admin-login',
            fullpath: '/administracion/admin-login',
            isParentPath: false,
            parent: pages.ADMINISTRACION
        }
    ]
};
