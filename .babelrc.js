const plugins = [
    [
        'babel-plugin-transform-imports',
        {
            '@mui/material': {
                transform: '@mui/material/${member}',
                preventFullImport: true,
            },
            '@mui/icons-material': {
                transform: '@mui/icons-material/${member}',
                preventFullImport: true,
            },
        },
    ],
];

module.exports = { plugins };