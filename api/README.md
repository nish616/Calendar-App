# JWT-Auth boilerplate

## Available Scripts  
### `npm start`
### `npm run dev` to run the project in develeopment mode  

## Environment Variables  
`DB_NAME` -> Database name    
`DB_USER` -> User name for database access  
`DB_PASSWORD` -> Password for database access  
`USER_ID`, `ADMIN_ID` -> Default roleId to diffrentiate user and admin (For example, "000" for admin and "111" for user)   

## Database  
- Add a field called "roleId" in the Table/Document.
- Create an Admin, with a roleId in the database initially.


## Routes
 **`/register`** to register a new user  
**`/login`** to login and get access token

### **Important!!**  
Add `key`: auth-token, `value`: Bearer < access token here >  
To headers while making requests.

