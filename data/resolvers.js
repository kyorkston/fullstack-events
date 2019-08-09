const bcrypt = require('bcryptjs')

const resolverMap = {
    Query: {
        user(root, {id}, {models}) {
            return models.User.findById(id)
        },
        allUsers(root, args, {models}) {
            return models.User.findAll()
        }
    },

    Mutation: {
        async createUser (root, { name, email, password }, { models }) {
            return models.User.create({
                name,
                email,
                password: await bcrypt.hash(password, 10)
              })
        },
    },
}

module.exports = resolverMap
