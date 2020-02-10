const gerador = {
    _id: 1,
    get id() { return this._id++ }
}
module.exports = gerador