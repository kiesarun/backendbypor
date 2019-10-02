import { Address } from '..//models'

export const add = (req, res) => {
    const { address, district, province, country, postcode} = req.body

    Address.create({ address, district, province, country, postcode }).then(() => {
        res.json({
            address,
            district,
            province,
            country,
            postcode
        })
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
}