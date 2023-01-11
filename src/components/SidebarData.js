import React from 'react';
import {
    CaretDownFilled,
    CaretRightOutlined,
    CaretUpFilled,
    FileDoneOutlined,
    FileFilled,
    FileTextFilled,
    HomeFilled,
    MoneyCollectFilled,
    PoweroffOutlined,
    UsergroupAddOutlined,
} from "@ant-design/icons";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <HomeFilled />,
        hrsize: '100px',
    },
    {
        title: 'Verifikasi Pembayaran',
        path: '/pembayaran',
        icon: <MoneyCollectFilled />,
        cName: 'sub-nav'
    },
    {
        title: 'Verifikasi Pendaftaran',
        path: '/pendaftaran',
        icon: <FileTextFilled />,
        cName: 'sub-nav'
    },
    {
        title: 'Verifikasi Dokumen',
        path: '/dokumen',
        icon: <FileDoneOutlined />,
        cName: 'sub-nav'
    },

    {
        title: 'Data Pendaftar',
        icon: <FileFilled />,

        iconClosed: <CaretDownFilled />,
        iconOpened: <CaretUpFilled />,

        subNav: [
            {
                title: 'Identitas Peserta',
                path: '/peserta',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            },
            {
                title: 'Identitas Orangtua',
                path: '/ortu',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            },
            {
                title: 'Identitas Wali',
                path: '/wali',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            },
            {
                title: 'Riwayat Pendidikan',
                path: '/pendidikan',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            },
            {
                title: 'Data Rincian',
                path: '/rincian',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            },
            {
                title: 'Data Dokumen',
                path: '/dataDokumen',
                icon: <CaretRightOutlined />,
                cName: 'sub-nav'
            }
        ]
    },
    {
        title: 'Data Pengguna',
        path: '/pengguna',
        icon: <UsergroupAddOutlined />
    },
    {
        title: 'Logout',
        path: '/logout',
        icon: <PoweroffOutlined />,
        danger: true
    },

];