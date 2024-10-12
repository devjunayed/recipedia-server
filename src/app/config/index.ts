/* eslint-disable no-undef */
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join((process.cwd(), '.env')) })

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  api_url: process.env.API_URL,
  node_env: process.env.NODE_ENV,
  salt_rounds: process.env.SALT_ROUNDS,
  jwt_access_secret: process.env.ACCESS_SECRET,
  jwt_access_expiresin: process.env.ACCESS_EXPIRES_IN,
  reset_pass_ui_link: process.env.RESET_PASS_UI_LINK

}
