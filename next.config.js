const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    env:{
        mapbox_key:'pk.eyJ1Ijoid2lsOTUiLCJhIjoiY2t2MGN4NHp2Mjl2MTJ1bXB2dG42emdvaCJ9.S-D_pKo_xRFTFqI6cnSLfw'
    }
}

module.exports = nextConfig
