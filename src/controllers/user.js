import { User } from '..//models'
import HTTPStatus, { UNPROCESSABLE_ENTITY, INTERNAL_SERVER_ERROR } from 'http-status-codes'
import bcrypt from 'bcrypt'

export const add = async (req, res) => {
    let { username, password, firstName, lastName, address} = req.body

    // console.log(firstName, lastName, address)
    try {
      const existedUser = await User.findOne({username})
      if (existedUser) {
        res.status(HTTPStatus.UNPROCESSABLE_ENTITY).json({
          succes: false,
          msg: "Username already exist"
        })
        return
      } else {
        const salt = await bcrypt.genSalt(10)   
        const hasted = await bcrypt.hash(username + password, salt)
        await User.create({ username, password: hasted, firstName, lastName, address})
        res.json({
          success: true
        })
      }
    } catch (err) {
      console.log(err)
      res.sendStatus(HTTPStatus, INTERNAL_SERVER_ERROR)
    }
}

export const get = (req, res) => {
    const userID = req.params.id

    User.findById(userID).populate('address').lean().exec().then(user => {
        res.json(user)
    }).catch(err => {
        res.sendStatus(500)
    })

    
    // User.findById(userID).populate('address','district -_id').lean().exec().then(user => { //select district and no _id
    //     res.json(user)
    // }).catch(err => {
    //     res.sendStatus(500)
    // })
}