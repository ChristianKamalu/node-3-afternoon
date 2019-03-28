module.exports = {
    create: (req, res) => {
        const {name, description, price, image_url} = req.body
        req.app
            .get('db')
            .create_product([name, description, price, image_url])
            .then(() => {
                res.status(200).send("Product Created!")
            })
            .catch(err => {
                res.status(500).send("Mayday, Mayday, we have a problem creating")
                console.log(err)}
            )
    },
    getOne: (req, res) => {
        const {id} = req.params
        req.app
            .get('db')
            .read_product(id)
            .then((product) => {
                res.status(200).send(product)
            })
            .catch(err => {
                res.status(500).send("Mayday, Mayday, we have a problem getting that product")
                console.log(err)}
            )
    },
    getAll: (req, res) => {
        req.app
            .get('db')
            .read_products()
            .then((products) => {
                res.status(200).send(products)
            })
            .catch(err => {
                res.status(500).send("Mayday, Mayday, we have a problem getting the products")
                console.log(err)}
            )
    },
    update: (req, res) => {
        const {id} = req.params
        const {desc} = req.query
        req.app
            .get('db')
            .update_product([id, desc])
            .then(() => {
                res.status(200).send("Product updated!")
            })
            .catch(err => {
                res.status(500).send("Mayday, Mayday, we have a problem updating")
                console.log(err)}
            )
    },
    delete: (req, res) => {
        const {id} = req.params
        req.app
            .get('db')
            .delete_product(id)
            .then(() => {
                res.status(200).send("Product Deleted!")
            })
            .catch(err => {
                res.status(500).send("Mayday, Mayday, we have a problem deleting")
                console.log(err)}
            )
    }
}