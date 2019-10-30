# redux

This repository is a collection of React apps built using redux.

1. Run `npm install`

## What are we using
- npm
- babel: compile our JSX code to HTML



Some useful findings:

Running your react app: https://medium.com/@vikasharry03/react-setup-on-local-computer-912f9a551af3
package-lock vs package.json
npx

## How to run the App
- Run `npm install`
- Run `npm run start`: This will start the App in the browser at port 8080

React Bootstrap with Webpack https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970


,
            {
                test: /\.png$/,
                loader: "url-loader?limit=100000"
            },
            {
                test: /\.jpg$/,
                loader: "file-loader"
            },
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url?limit=10000&mimetype=application/font-woff'
            },
             {
                 test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'url?limit=10000&mimetype=application/octet-stream'
             },
             {
                 test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'file'
             },
             {
                 test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                 loader: 'url?limit=10000&mimetype=image/svg+xml'
             }