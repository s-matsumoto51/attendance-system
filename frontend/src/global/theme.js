import { createTheme } from "@mui/material"

const theme = createTheme({
    palette: {
        primary: {
        main: '#0d47a1', // 濃いネイビーブルー
        },
        secondary: {
        main: '#42a5f5', // 明るめブルー
        },
        background: {
        default: '#e3f2fd', // 薄い青みがかった背景
        },
        text: {
        primary: '#102027', // ダークブルーグレー
        secondary: '#455a64', // ブルーグレー
        },
    },
    components: {
        MuiButton: {
        styleOverrides: {
            contained: {
            backgroundColor: '#64b5f6',
            color: '#333',
            '&:hover': {
                backgroundColor: '#bbdefb',
            },
            },
        },
        },
    },
})

export default theme;
    
