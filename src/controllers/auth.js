import { User } from '../models'
import bcrypt from 'bcrypt'
import HTTPStatus from 'http-status-codes'

export const login = async (req, res) => {
  let { username, password } = req.body
  try {
    const matchUser = await User.findOne({ username })
    if (!matchUser) {
      res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({
        success: false,
        msg: "username or password not match"
      })
    }
    else {
      const match = await bcrypt.compare(username + password, matchUser.password)
      if (!match) {
        res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({
          success: false,
          msg: "username or password not match"
        })
      } else {
        req.session.user ={
          _id: matchUser._id,
          username: matchUser.username
        }
        await req.session.save()
        res.json({
          success: true
        })
      }
    }
  } catch (err) {
    console.log(err)
    res.sendStatus(HTTPStatus, INTERNAL_SERVER_ERROR)
  }
}

export const logout = async (req, res) => {
  await req.session.destroy()

  res.json({
    success: true
  })
}
