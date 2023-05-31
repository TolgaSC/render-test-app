# render-express-react-test

## Server
- express serves application
- wir benutzen `app.use(express.static())` um unsere react app zu 'serven'
- react app __muss__ vorher gebaut werden (`npm run build`)
## Local
- wir können beide server parallel starten 
- und mit der `proxy` propertiy in der package.json
dem Browser vorspielen das unsere server auf der gleichen domain liegt wie unser front-end (localhost:3000)