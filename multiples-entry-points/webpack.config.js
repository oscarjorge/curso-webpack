const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
miniCssExtractPlugin.extract=function(param){}
const config = {
    mode: 'development',
    entry: {
        home: path.resolve(__dirname,'src/js/index.js'),
        precios: path.resolve(__dirname,'src/js/precios.js'),
        contacto: path.resolve(__dirname,'src/js/contacto.js')
    },
    output :{
        path: path.resolve(__dirname,'dist'),
        filename: 'js/[name].js'
    },
    module:{
        rules:[
            //Aquí van los loaders
            {
                // test: que tipo de archivo quiero reconocer,
                // use: que loader se va a encargar del archivo
                test: /\.css$/,
                use: [
                    miniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins:[
        new miniCssExtractPlugin({
            //filename: 'css/styles.css'
            filename: 'css/[name].css'
        })
    ]
}

module.exports = config